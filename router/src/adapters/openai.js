// OpenAI Chat Completions surface (/v1/chat/completions) — the router's native shape.
import { runChat, collect } from '../router.js';
import { uid, sendJson, sseHeaders } from '../util.js';

export function routerHeaders(meta) {
  if (!meta) return {};
  return {
    'x-free-llm-provider': meta.provider,
    'x-free-llm-model': meta.model,
    'x-free-llm-attempts': String(meta.attempts?.length || 1),
    ...(meta.cached ? { 'x-free-llm-cache': 'hit' } : {}),
  };
}

export function toChatCompletion(r, requested) {
  const message = { role: 'assistant', content: r.text || (r.tools.length ? null : '') };
  if (r.reasoning) message.reasoning_content = r.reasoning;
  if (r.tools.length) message.tool_calls = r.tools.map((t) => ({ id: t.id, type: 'function', function: { name: t.name, arguments: t.arguments || '{}' } }));
  return {
    id: 'chatcmpl-' + uid('', 24),
    object: 'chat.completion',
    created: Math.floor(Date.now() / 1000),
    model: r.meta ? `${r.meta.provider}/${r.meta.model}` : requested,
    choices: [{ index: 0, message, finish_reason: r.finish, logprobs: null }],
    usage: { prompt_tokens: r.usage.in, completion_tokens: r.usage.out, total_tokens: r.usage.in + r.usage.out },
    system_fingerprint: 'free-llm-router',
  };
}

export async function handleChat(cfg, body, res, ctx) {
  const stream = Boolean(body.stream);
  const includeUsage = Boolean(body.stream_options?.include_usage);
  const gen = runChat(cfg, { ...body }, { ...ctx, stream, endpoint: 'chat' });

  if (!stream) {
    const r = await collect(gen);
    if (!r.meta) return; // client went away
    sendJson(res, 200, toChatCompletion(r, body.model), routerHeaders(r.meta));
    return;
  }

  const id = 'chatcmpl-' + uid('', 24);
  const created = Math.floor(Date.now() / 1000);
  let model = body.model;
  let started = false;
  const chunk = (delta, finish = null, extra = {}) =>
    `data: ${JSON.stringify({ id, object: 'chat.completion.chunk', created, model, system_fingerprint: 'free-llm-router', choices: [{ index: 0, delta, finish_reason: finish, logprobs: null }], ...extra })}\n\n`;

  let usage = null;
  for await (const ev of gen) {
    if (ev.t === 'meta') {
      model = `${ev.provider}/${ev.model}`;
      sseHeaders(res, routerHeaders(ev));
      res.write(chunk({ role: 'assistant', content: '' }));
      started = true;
      continue;
    }
    if (ev.t === 'text') res.write(chunk({ content: ev.v }));
    else if (ev.t === 'reasoning') res.write(chunk({ reasoning_content: ev.v }));
    else if (ev.t === 'tool_start') res.write(chunk({ tool_calls: [{ index: ev.i, id: ev.id || 'call_' + uid('', 20), type: 'function', function: { name: ev.name, arguments: '' } }] }));
    else if (ev.t === 'tool_args') res.write(chunk({ tool_calls: [{ index: ev.i, function: { arguments: ev.v } }] }));
    else if (ev.t === 'usage') usage = ev;
    else if (ev.t === 'finish') res.write(chunk({}, ev.reason));
  }
  if (!started) return;
  if (includeUsage && usage) {
    res.write(`data: ${JSON.stringify({ id, object: 'chat.completion.chunk', created, model, choices: [], usage: { prompt_tokens: usage.in, completion_tokens: usage.out, total_tokens: usage.in + usage.out } })}\n\n`);
  }
  res.write('data: [DONE]\n\n');
  res.end();
}

/** Legacy /v1/completions: answered through chat (prompt → user message). */
export async function handleCompletions(cfg, body, res, ctx) {
  const prompt = Array.isArray(body.prompt) ? body.prompt.join('\n') : String(body.prompt ?? '');
  const messages = [
    { role: 'system', content: 'Continue the given text. Output only the continuation, with no explanation and no repetition of the input.' },
    { role: 'user', content: prompt + (body.suffix ? `\n\n[The continuation must fit before this text:]\n${body.suffix}` : '') },
  ];
  const chatBody = { model: body.model || 'auto:fast', messages, max_tokens: body.max_tokens ?? 256, temperature: body.temperature, top_p: body.top_p, stop: body.stop };
  const gen = runChat(cfg, chatBody, { ...ctx, stream: Boolean(body.stream), endpoint: 'completions' });
  const id = 'cmpl-' + uid('', 24);
  const created = Math.floor(Date.now() / 1000);
  if (!body.stream) {
    const r = await collect(gen);
    if (!r.meta) return;
    sendJson(res, 200, {
      id, object: 'text_completion', created, model: `${r.meta.provider}/${r.meta.model}`,
      choices: [{ index: 0, text: r.text, finish_reason: r.finish === 'length' ? 'length' : 'stop', logprobs: null }],
      usage: { prompt_tokens: r.usage.in, completion_tokens: r.usage.out, total_tokens: r.usage.in + r.usage.out },
    }, routerHeaders(r.meta));
    return;
  }
  let model = body.model;
  let started = false;
  for await (const ev of gen) {
    if (ev.t === 'meta') { model = `${ev.provider}/${ev.model}`; sseHeaders(res, routerHeaders(ev)); started = true; continue; }
    if (ev.t === 'text') res.write(`data: ${JSON.stringify({ id, object: 'text_completion', created, model, choices: [{ index: 0, text: ev.v, finish_reason: null, logprobs: null }] })}\n\n`);
    if (ev.t === 'finish') res.write(`data: ${JSON.stringify({ id, object: 'text_completion', created, model, choices: [{ index: 0, text: '', finish_reason: ev.reason === 'length' ? 'length' : 'stop', logprobs: null }] })}\n\n`);
  }
  if (!started) return;
  res.write('data: [DONE]\n\n');
  res.end();
}
