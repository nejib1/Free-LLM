// OpenAI Responses API surface (/v1/responses) — what Codex CLI speaks.
import { runChat, collect } from '../router.js';
import { uid, sendJson, sseHeaders, contentText, HttpError } from '../util.js';
import { routerHeaders } from './openai.js';

// previous_response_id support: remember full conversations for a while.
const STORE = new Map();
const STORE_MAX = 200;
function remember(id, messages) {
  STORE.set(id, messages);
  while (STORE.size > STORE_MAX) STORE.delete(STORE.keys().next().value);
}

function partsToContent(content) {
  if (typeof content === 'string') return content;
  const parts = [];
  for (const p of content || []) {
    if (p.type === 'input_text' || p.type === 'output_text' || p.type === 'text') parts.push({ type: 'text', text: p.text || '' });
    else if (p.type === 'input_image') {
      const url = typeof p.image_url === 'string' ? p.image_url : p.image_url?.url;
      if (url) parts.push({ type: 'image_url', image_url: { url } });
    } else if (p.type === 'input_file') parts.push({ type: 'text', text: `[file${p.filename ? ': ' + p.filename : ''}]` });
    else if (p.type === 'refusal') parts.push({ type: 'text', text: p.refusal || '' });
  }
  return parts.every((p) => p.type === 'text') ? parts.map((p) => p.text).join('\n') : parts;
}

/** Responses request → { chat request, customTools } */
export function responsesToChat(body) {
  let messages = [];
  if (body.previous_response_id) {
    const prev = STORE.get(body.previous_response_id);
    if (!prev) throw new HttpError(404, `Previous response '${body.previous_response_id}' not found (the router keeps the last ${STORE_MAX} in memory).`);
    messages = structuredClone(prev);
  }
  if (body.instructions) {
    messages = messages.filter((m) => m.role !== 'system');
    messages.unshift({ role: 'system', content: body.instructions });
  }
  const input = typeof body.input === 'string' ? [{ role: 'user', content: body.input }] : body.input || [];
  let pendingCalls = null; // merge consecutive function_call items into one assistant message
  const flushCalls = () => { if (pendingCalls) { messages.push(pendingCalls); pendingCalls = null; } };
  for (const it of input) {
    const type = it.type || (it.role ? 'message' : null);
    if (type === 'message') {
      flushCalls();
      const role = it.role === 'developer' ? 'system' : it.role;
      if (role === 'assistant' && Array.isArray(it.content)) {
        messages.push({ role: 'assistant', content: contentText(it.content.map((p) => ({ text: p.text ?? p.refusal ?? '' }))) });
      } else messages.push({ role, content: partsToContent(it.content) });
    } else if (type === 'function_call' || type === 'custom_tool_call' || type === 'local_shell_call') {
      const args = type === 'custom_tool_call' ? JSON.stringify({ input: it.input ?? '' })
        : type === 'local_shell_call' ? JSON.stringify(it.action ?? {})
        : (it.arguments ?? '{}');
      pendingCalls ||= { role: 'assistant', content: null, tool_calls: [] };
      pendingCalls.tool_calls.push({ id: it.call_id || it.id, type: 'function', function: { name: it.name || 'local_shell', arguments: args } });
    } else if (type === 'function_call_output' || type === 'custom_tool_call_output' || type === 'local_shell_call_output') {
      flushCalls();
      const out = typeof it.output === 'string' ? it.output : contentText(it.output) || JSON.stringify(it.output ?? '');
      messages.push({ role: 'tool', tool_call_id: it.call_id, content: out });
    }
    // reasoning / web_search_call / item_reference: nothing to forward
  }
  flushCalls();

  const customTools = new Set();
  const tools = [];
  for (const t of body.tools || []) {
    if (t.type === 'function') tools.push({ type: 'function', function: { name: t.name, description: t.description || '', parameters: t.parameters || { type: 'object', properties: {} } } });
    else if (t.type === 'custom') {
      customTools.add(t.name);
      tools.push({
        type: 'function',
        function: {
          name: t.name,
          description: `${t.description || ''}\nPass the complete raw tool input as the "input" string.`.trim(),
          parameters: { type: 'object', properties: { input: { type: 'string', description: 'Raw input for the tool' } }, required: ['input'] },
        },
      });
    } else if (t.type === 'local_shell') {
      tools.push({ type: 'function', function: { name: 'local_shell', description: 'Run a shell command', parameters: { type: 'object', properties: { command: { type: 'array', items: { type: 'string' } }, workdir: { type: 'string' }, timeout_ms: { type: 'number' } }, required: ['command'] } } });
    }
  }
  const chat = { model: body.model, messages, stream: Boolean(body.stream) };
  if (body.max_output_tokens) chat.max_tokens = body.max_output_tokens;
  if (body.temperature !== undefined) chat.temperature = body.temperature;
  if (body.top_p !== undefined) chat.top_p = body.top_p;
  if (tools.length) {
    chat.tools = tools;
    const tc = body.tool_choice;
    if (tc === 'required' || tc === 'none' || tc === 'auto') chat.tool_choice = tc;
    else if (tc?.type === 'function' || tc?.type === 'custom') chat.tool_choice = { type: 'function', function: { name: tc.name } };
  }
  const fmt = body.text?.format;
  if (fmt?.type === 'json_schema') chat.response_format = { type: 'json_schema', json_schema: { name: fmt.name || 'output', schema: fmt.schema, strict: fmt.strict } };
  else if (fmt?.type === 'json_object') chat.response_format = { type: 'json_object' };
  return { chat, customTools };
}

function outputItemForTool(t, customTools) {
  if (customTools.has(t.name)) {
    let input = t.arguments;
    try { const j = JSON.parse(t.arguments || '{}'); input = typeof j.input === 'string' ? j.input : t.arguments; } catch { /* keep raw */ }
    return { type: 'custom_tool_call', id: 'ctc_' + uid('', 24), call_id: t.id, name: t.name, input, status: 'completed' };
  }
  return { type: 'function_call', id: 'fc_' + uid('', 24), call_id: t.id, name: t.name, arguments: t.arguments || '{}', status: 'completed' };
}

function baseResponse(id, body, model, status) {
  return {
    id, object: 'response', created_at: Math.floor(Date.now() / 1000), status, model: model || body.model,
    error: null, incomplete_details: null, instructions: body.instructions ?? null, max_output_tokens: body.max_output_tokens ?? null,
    output: [], parallel_tool_calls: body.parallel_tool_calls ?? true, previous_response_id: body.previous_response_id ?? null,
    reasoning: { effort: null, summary: null }, store: body.store ?? false, temperature: body.temperature ?? 1, text: body.text ?? { format: { type: 'text' } },
    tool_choice: body.tool_choice ?? 'auto', tools: body.tools ?? [], top_p: body.top_p ?? 1, truncation: 'disabled', usage: null, metadata: body.metadata ?? {},
  };
}

function rememberConversation(id, chat, text, tools) {
  const msgs = structuredClone(chat.messages);
  const a = { role: 'assistant', content: text || null };
  if (tools.length) a.tool_calls = tools.map((t) => ({ id: t.id, type: 'function', function: { name: t.name, arguments: t.arguments || '{}' } }));
  msgs.push(a);
  remember(id, msgs);
}

export async function handleResponses(cfg, body, res, ctx) {
  const { chat, customTools } = responsesToChat(body);
  const gen = runChat(cfg, chat, { ...ctx, stream: chat.stream, endpoint: 'responses' });
  const respId = 'resp_' + uid('', 32);

  if (!chat.stream) {
    const r = await collect(gen);
    if (!r.meta) return;
    for (const t of r.tools) t.id ||= 'call_' + uid('', 20);
    const out = baseResponse(respId, body, `${r.meta.provider}/${r.meta.model}`, 'completed');
    if (r.text) out.output.push({ type: 'message', id: 'msg_' + uid('', 24), status: 'completed', role: 'assistant', content: [{ type: 'output_text', text: r.text, annotations: [], logprobs: [] }] });
    for (const t of r.tools) out.output.push(outputItemForTool(t, customTools));
    out.output_text = r.text;
    out.usage = { input_tokens: r.usage.in, input_tokens_details: { cached_tokens: 0 }, output_tokens: r.usage.out, output_tokens_details: { reasoning_tokens: 0 }, total_tokens: r.usage.in + r.usage.out };
    if (r.finish === 'length') { out.status = 'incomplete'; out.incomplete_details = { reason: 'max_output_tokens' }; }
    rememberConversation(respId, chat, r.text, r.tools);
    sendJson(res, 200, out, routerHeaders(r.meta));
    return;
  }

  let seq = 0;
  const send = (type, data) => res.write(`event: ${type}\ndata: ${JSON.stringify({ type, sequence_number: seq++, ...data })}\n\n`);
  let started = false;
  let model = body.model;
  let outIndex = -1;
  let msg = null; // open text message item
  const tools = new Map();
  let usage = null;
  let finish = 'stop';
  const output = [];

  const closeMsg = () => {
    if (!msg) return;
    send('response.output_text.done', { item_id: msg.id, output_index: msg.index, content_index: 0, text: msg.text, logprobs: [] });
    const part = { type: 'output_text', text: msg.text, annotations: [], logprobs: [] };
    send('response.content_part.done', { item_id: msg.id, output_index: msg.index, content_index: 0, part });
    const item = { type: 'message', id: msg.id, status: 'completed', role: 'assistant', content: [part] };
    send('response.output_item.done', { output_index: msg.index, item });
    output[msg.index] = item;
    msg = null;
  };

  try {
    for await (const ev of gen) {
      if (ev.t === 'meta') {
        model = `${ev.provider}/${ev.model}`;
        sseHeaders(res, routerHeaders(ev));
        started = true;
        const r = baseResponse(respId, body, model, 'in_progress');
        send('response.created', { response: r });
        send('response.in_progress', { response: r });
        continue;
      }
      if (ev.t === 'text') {
        if (!msg) {
          msg = { id: 'msg_' + uid('', 24), index: ++outIndex, text: '' };
          send('response.output_item.added', { output_index: msg.index, item: { type: 'message', id: msg.id, status: 'in_progress', role: 'assistant', content: [] } });
          send('response.content_part.added', { item_id: msg.id, output_index: msg.index, content_index: 0, part: { type: 'output_text', text: '', annotations: [], logprobs: [] } });
        }
        msg.text += ev.v;
        send('response.output_text.delta', { item_id: msg.id, output_index: msg.index, content_index: 0, delta: ev.v, logprobs: [] });
      } else if (ev.t === 'tool_start') {
        tools.set(ev.i, { id: ev.id || 'call_' + uid('', 20), name: ev.name, arguments: '' });
      } else if (ev.t === 'tool_args') {
        const t = tools.get(ev.i);
        if (t) t.arguments += ev.v;
      } else if (ev.t === 'usage') usage = ev;
      else if (ev.t === 'finish') finish = ev.reason;
    }
  } catch (e) {
    if (!started) throw e;
    send('error', { code: 'server_error', message: e.message, param: null });
    const r = baseResponse(respId, body, model, 'failed');
    r.error = { code: 'server_error', message: e.message };
    send('response.failed', { response: r });
    res.end();
    return;
  }
  if (!started) return;
  closeMsg();
  const toolList = [...tools.entries()].sort((a, b) => a[0] - b[0]).map((e) => e[1]);
  for (const t of toolList) {
    const item = outputItemForTool(t, customTools);
    const index = ++outIndex;
    send('response.output_item.added', { output_index: index, item: { ...item, status: 'in_progress', ...(item.type === 'function_call' ? { arguments: '' } : { input: '' }) } });
    if (item.type === 'function_call') {
      send('response.function_call_arguments.delta', { item_id: item.id, output_index: index, delta: item.arguments });
      send('response.function_call_arguments.done', { item_id: item.id, output_index: index, arguments: item.arguments });
    } else {
      send('response.custom_tool_call_input.delta', { item_id: item.id, output_index: index, delta: item.input });
      send('response.custom_tool_call_input.done', { item_id: item.id, output_index: index, input: item.input });
    }
    send('response.output_item.done', { output_index: index, item });
    output[index] = item;
  }
  const r = baseResponse(respId, body, model, finish === 'length' ? 'incomplete' : 'completed');
  if (finish === 'length') r.incomplete_details = { reason: 'max_output_tokens' };
  r.output = output.filter(Boolean);
  const text = r.output.filter((o) => o.type === 'message').map((o) => o.content[0].text).join('');
  r.usage = { input_tokens: usage?.in || 0, input_tokens_details: { cached_tokens: 0 }, output_tokens: usage?.out || 0, output_tokens_details: { reasoning_tokens: 0 }, total_tokens: (usage?.in || 0) + (usage?.out || 0) };
  rememberConversation(respId, chat, text, toolList);
  send(finish === 'length' ? 'response.incomplete' : 'response.completed', { response: r });
  res.end();
}

export function handleGetResponse(id, res) {
  if (!STORE.has(id)) return sendJson(res, 404, { error: { message: 'Response not found', type: 'invalid_request_error' } });
  sendJson(res, 200, { id, object: 'response', status: 'completed' });
}
