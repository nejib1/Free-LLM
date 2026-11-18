// Ollama-compatible surface (/api/*) for tools that only know how to talk to a
// local Ollama: Zed, JetBrains AI, Open WebUI, Page Assist, Obsidian plugins…
import { runChat, collect, listModels, runEmbeddings } from '../router.js';
import { sendJson, parseLooseJson, VERSION } from '../util.js';

const iso = () => new Date().toISOString();

function ollamaMessagesToChat(messages = []) {
  return messages.map((m) => {
    const msg = { role: m.role, content: m.content ?? '' };
    if (m.images?.length) {
      msg.content = [{ type: 'text', text: m.content || '' }, ...m.images.map((b64) => ({ type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } }))];
    }
    if (m.tool_calls?.length) {
      msg.tool_calls = m.tool_calls.map((tc, i) => ({ id: tc.id || `call_${i}`, type: 'function', function: { name: tc.function?.name, arguments: JSON.stringify(tc.function?.arguments ?? {}) } }));
    }
    if (m.role === 'tool') msg.tool_call_id = m.tool_call_id || m.tool_name || 'call_0';
    return msg;
  });
}

function optionsToChat(body, chat) {
  const o = body.options || {};
  if (o.temperature !== undefined) chat.temperature = o.temperature;
  if (o.top_p !== undefined) chat.top_p = o.top_p;
  if (o.num_predict > 0) chat.max_tokens = o.num_predict;
  if (o.stop) chat.stop = o.stop;
  if (o.seed !== undefined) chat.seed = o.seed;
  if (body.format === 'json') chat.response_format = { type: 'json_object' };
  else if (body.format && typeof body.format === 'object') chat.response_format = { type: 'json_schema', json_schema: { name: 'output', schema: body.format } };
  if (body.tools?.length) chat.tools = body.tools;
  return chat;
}

async function streamNdjson(res, gen, makeChunk, makeFinal) {
  let started = false;
  let usage = { in: 0, out: 0 };
  const t0 = process.hrtime.bigint();
  const tools = new Map();
  for await (const ev of gen) {
    if (ev.t === 'meta') {
      res.writeHead(200, { 'content-type': 'application/x-ndjson', 'x-free-llm-provider': ev.provider, 'x-free-llm-model': ev.model });
      started = true;
      continue;
    }
    if (ev.t === 'text') res.write(JSON.stringify(makeChunk(ev.v)) + '\n');
    else if (ev.t === 'tool_start') tools.set(ev.i, { name: ev.name, args: '' });
    else if (ev.t === 'tool_args') { const t = tools.get(ev.i); if (t) t.args += ev.v; }
    else if (ev.t === 'usage') usage = ev;
  }
  if (!started) return;
  const dur = Number(process.hrtime.bigint() - t0);
  const toolCalls = [...tools.values()].map((t) => ({ function: { name: t.name, arguments: parseLooseJson(t.args) ?? {} } }));
  res.write(JSON.stringify(makeFinal(usage, dur, toolCalls)) + '\n');
  res.end();
}

export async function handleOllama(cfg, path, method, body, res, ctx) {
  if (path === '/api/version') return sendJson(res, 200, { version: `0.12.0-free-llm-${VERSION}` });
  if (path === '/api/tags' || path === '/api/ps') {
    const models = listModels(cfg).data.map((m) => ({
      name: m.id, model: m.id, modified_at: iso(), size: 0, digest: m.id,
      details: { format: 'api', family: 'free-llm', families: ['free-llm'], parameter_size: '', quantization_level: '' },
    }));
    return sendJson(res, 200, { models });
  }
  if (path === '/api/show') {
    const name = body.model || body.name || 'auto';
    return sendJson(res, 200, {
      modelfile: `# served by Free-LLM Router\nFROM ${name}`, parameters: '', template: '{{ .Prompt }}',
      details: { format: 'api', family: 'free-llm', parameter_size: '', quantization_level: '' },
      model_info: { 'general.architecture': 'free-llm', 'free-llm.context_length': 131072 },
      capabilities: ['completion', 'tools', 'vision'],
    });
  }
  if (path === '/api/embed' || path === '/api/embeddings') {
    const input = body.input ?? body.prompt;
    const r = await runEmbeddings(cfg, { model: body.model || 'auto', input }, ctx);
    const vecs = r.data.map((d) => d.embedding);
    return sendJson(res, 200, path === '/api/embed' ? { model: body.model, embeddings: vecs } : { embedding: vecs[0] });
  }
  if (path === '/api/chat' || path === '/api/generate') {
    const stream = body.stream !== false; // Ollama streams by default
    const model = body.model || 'auto';
    let chat;
    if (path === '/api/chat') chat = optionsToChat(body, { model, messages: ollamaMessagesToChat(body.messages) });
    else {
      const messages = [];
      if (body.system) messages.push({ role: 'system', content: body.system });
      messages.push({ role: 'user', content: body.images?.length ? [{ type: 'text', text: body.prompt || '' }, ...body.images.map((b) => ({ type: 'image_url', image_url: { url: `data:image/png;base64,${b}` } }))] : body.prompt || '' });
      chat = optionsToChat(body, { model, messages });
    }
    const gen = runChat(cfg, chat, { ...ctx, stream, endpoint: `ollama${path.slice(4)}` });
    const isChat = path === '/api/chat';
    const final = (usage, dur, toolCalls) => ({
      model, created_at: iso(), ...(isChat ? { message: { role: 'assistant', content: '', ...(toolCalls.length ? { tool_calls: toolCalls } : {}) } } : { response: '' }),
      done: true, done_reason: 'stop', total_duration: dur, load_duration: 0, prompt_eval_count: usage.in, prompt_eval_duration: 0, eval_count: usage.out, eval_duration: dur,
    });
    if (stream) {
      return streamNdjson(res, gen, (text) => (isChat ? { model, created_at: iso(), message: { role: 'assistant', content: text }, done: false } : { model, created_at: iso(), response: text, done: false }), final);
    }
    const r = await collect(gen);
    if (!r.meta) return;
    const out = final(r.usage, 0, r.tools.map((t) => ({ function: { name: t.name, arguments: parseLooseJson(t.arguments) ?? {} } })));
    if (isChat) out.message.content = r.text; else out.response = r.text;
    return sendJson(res, 200, out);
  }
  if (path === '/api/pull' || path === '/api/create' || path === '/api/copy' || path === '/api/delete' || path === '/api/push') {
    return sendJson(res, 200, { status: 'success' });
  }
  return sendJson(res, 404, { error: `unknown Ollama endpoint ${method} ${path}` });
}
