// Anthropic Messages API surface (/v1/messages) — lets Claude Code and the
// Anthropic SDKs run on free models.
import { runChat, collect } from '../router.js';
import { uid, sendJson, sseHeaders, estimateTokens, parseLooseJson, HttpError } from '../util.js';
import { routerHeaders } from './openai.js';

function blocks(content) {
  if (content == null) return [];
  if (typeof content === 'string') return [{ type: 'text', text: content }];
  return Array.isArray(content) ? content : [content];
}

function imagePart(b) {
  const s = b.source || {};
  if (s.type === 'base64') return { type: 'image_url', image_url: { url: `data:${s.media_type || 'image/png'};base64,${s.data}` } };
  if (s.type === 'url') return { type: 'image_url', image_url: { url: s.url } };
  return null;
}

function toolResultText(content) {
  if (typeof content === 'string') return content;
  return blocks(content)
    .map((b) => (b.type === 'text' ? b.text : b.type === 'image' ? '[image]' : typeof b === 'string' ? b : JSON.stringify(b)))
    .join('\n');
}

/** Anthropic request → OpenAI chat request */
export function anthropicToChat(body) {
  const messages = [];
  const system = Array.isArray(body.system) ? body.system.map((b) => b.text || '').filter(Boolean).join('\n\n') : body.system;
  if (system) messages.push({ role: 'system', content: system });

  for (const m of body.messages || []) {
    const bs = blocks(m.content);
    if (m.role === 'user') {
      // tool_result blocks become role:"tool" messages, placed first.
      for (const b of bs) {
        if (b.type === 'tool_result') {
          messages.push({ role: 'tool', tool_call_id: b.tool_use_id, content: (b.is_error ? '[error] ' : '') + toolResultText(b.content) });
        }
      }
      const parts = [];
      for (const b of bs) {
        if (b.type === 'text' && b.text) parts.push({ type: 'text', text: b.text });
        else if (b.type === 'image') { const p = imagePart(b); if (p) parts.push(p); }
        else if (b.type === 'document') parts.push({ type: 'text', text: b.source?.type === 'text' ? b.source.data : `[document${b.title ? ': ' + b.title : ''}]` });
      }
      if (parts.length) messages.push({ role: 'user', content: parts.every((p) => p.type === 'text') ? parts.map((p) => p.text).join('\n') : parts });
    } else if (m.role === 'assistant') {
      const text = bs.filter((b) => b.type === 'text').map((b) => b.text).join('');
      const toolUses = bs.filter((b) => b.type === 'tool_use' || b.type === 'server_tool_use');
      const msg = { role: 'assistant', content: text || (toolUses.length ? null : '') };
      if (toolUses.length) {
        msg.tool_calls = toolUses.map((b) => ({ id: b.id, type: 'function', function: { name: b.name, arguments: JSON.stringify(b.input ?? {}) } }));
      }
      messages.push(msg);
    }
  }

  const out = { model: body.model, messages, stream: Boolean(body.stream) };
  if (body.max_tokens) out.max_tokens = body.max_tokens;
  if (body.temperature !== undefined) out.temperature = body.temperature;
  if (body.top_p !== undefined) out.top_p = body.top_p;
  if (body.stop_sequences?.length) out.stop = body.stop_sequences.slice(0, 4);
  const tools = (body.tools || []).filter((t) => t.input_schema); // server tools (web_search…) have no schema
  if (tools.length) {
    out.tools = tools.map((t) => ({ type: 'function', function: { name: t.name, description: t.description || '', parameters: t.input_schema } }));
    const tc = body.tool_choice;
    if (tc?.type === 'any') out.tool_choice = 'required';
    else if (tc?.type === 'tool') out.tool_choice = { type: 'function', function: { name: tc.name } };
    else if (tc?.type === 'none') out.tool_choice = 'none';
    else out.tool_choice = 'auto';
  }
  return out;
}

const STOP = { stop: 'end_turn', length: 'max_tokens', tool_calls: 'tool_use', function_call: 'tool_use', content_filter: 'refusal' };

export function anthropicError(res, status, message, type) {
  const t = { 400: 'invalid_request_error', 401: 'authentication_error', 403: 'permission_error', 404: 'not_found_error', 429: 'rate_limit_error', 529: 'overloaded_error' }[status] || (status >= 500 ? 'api_error' : type || 'invalid_request_error');
  sendJson(res, status, { type: 'error', error: { type: t, message } });
}

export async function handleMessages(cfg, body, res, ctx) {
  if (!Array.isArray(body.messages)) throw new HttpError(400, 'messages: field required');
  const chat = anthropicToChat(body);
  const gen = runChat(cfg, chat, { ...ctx, stream: chat.stream, endpoint: 'messages' });
  const msgId = 'msg_' + uid('', 24);

  if (!chat.stream) {
    const r = await collect(gen);
    if (!r.meta) return;
    const content = [];
    if (r.text) content.push({ type: 'text', text: r.text });
    for (const t of r.tools) content.push({ type: 'tool_use', id: t.id, name: t.name, input: parseLooseJson(t.arguments) ?? {} });
    if (!content.length) content.push({ type: 'text', text: '' });
    sendJson(res, 200, {
      id: msgId, type: 'message', role: 'assistant', model: body.model, content,
      stop_reason: STOP[r.finish] || 'end_turn', stop_sequence: null,
      usage: { input_tokens: r.usage.in, output_tokens: r.usage.out, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 },
    }, routerHeaders(r.meta));
    return;
  }

  const send = (event, data) => res.write(`event: ${event}\ndata: ${JSON.stringify({ type: event, ...data })}\n\n`);
  let started = false;
  let blockIndex = -1;
  let open = null; // { kind: 'text' | 'tool', i }
  const tools = new Map(); // our tool index → { id, name, args } — emitted whole at the end
  let usage = { in: estimateTokens(chat.messages), out: 0 };
  let stop = 'end_turn';
  let ping = null;

  const closeOpen = () => {
    if (open) { send('content_block_stop', { index: open.index }); open = null; }
  };

  try {
    for await (const ev of gen) {
      if (ev.t === 'meta') {
        sseHeaders(res, routerHeaders(ev));
        started = true;
        send('message_start', { message: { id: msgId, type: 'message', role: 'assistant', model: body.model, content: [], stop_reason: null, stop_sequence: null, usage: { input_tokens: usage.in, output_tokens: 1, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 } } });
        ping = setInterval(() => send('ping', {}), 10000);
        continue;
      }
      if (ev.t === 'text') {
        if (!open || open.kind !== 'text') {
          closeOpen();
          open = { kind: 'text', index: ++blockIndex };
          send('content_block_start', { index: open.index, content_block: { type: 'text', text: '' } });
        }
        send('content_block_delta', { index: open.index, delta: { type: 'text_delta', text: ev.v } });
      } else if (ev.t === 'tool_start') {
        tools.set(ev.i, { id: ev.id || 'toolu_' + uid('', 24), name: ev.name, args: '' });
      } else if (ev.t === 'tool_args') {
        const t = tools.get(ev.i);
        if (t) t.args += ev.v;
      } else if (ev.t === 'usage') {
        usage = { in: ev.in, out: ev.out };
      } else if (ev.t === 'finish') {
        stop = STOP[ev.reason] || 'end_turn';
      }
    }
  } catch (e) {
    if (ping) clearInterval(ping);
    if (!started) throw e;
    closeOpen();
    send('error', { error: { type: 'api_error', message: e.message } });
    res.end();
    return;
  }
  if (ping) clearInterval(ping);
  if (!started) return;
  closeOpen();
  for (const t of [...tools.entries()].sort((x, y) => x[0] - y[0]).map((e) => e[1])) {
    const index = ++blockIndex;
    const input = parseLooseJson(t.args) ?? {};
    send('content_block_start', { index, content_block: { type: 'tool_use', id: t.id, name: t.name, input: {} } });
    send('content_block_delta', { index, delta: { type: 'input_json_delta', partial_json: JSON.stringify(input) } });
    send('content_block_stop', { index });
  }
  if (blockIndex < 0) {
    send('content_block_start', { index: 0, content_block: { type: 'text', text: '' } });
    send('content_block_stop', { index: 0 });
  }
  send('message_delta', { delta: { stop_reason: stop, stop_sequence: null }, usage: { input_tokens: usage.in, output_tokens: usage.out } });
  send('message_stop', {});
  res.end();
}

export function handleCountTokens(body, res) {
  const chat = anthropicToChat(body);
  sendJson(res, 200, { input_tokens: estimateTokens(chat.messages) + estimateTokens(chat.tools) });
}
