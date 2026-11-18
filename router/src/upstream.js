// Talking to one provider: request shaping, provider quirks, stream parsing,
// and error classification (which decides whether we fail over).
import { USER_AGENT, parseDuration, contentText, sha1 } from './util.js';

export class UpstreamError extends Error {
  constructor(kind, status, message, extra = {}) {
    super(message || kind);
    this.kind = kind;
    this.status = status;
    Object.assign(this, extra);
  }
}

const PASS_PARAMS = ['temperature', 'top_p', 'stop', 'tools', 'tool_choice', 'response_format', 'seed', 'presence_penalty', 'frequency_penalty'];
const OPTIONAL_PARAMS = ['response_format', 'seed', 'presence_penalty', 'frequency_penalty', 'stream_options', 'parallel_tool_calls'];

// ---------- request shaping ----------

function normalizeContent(content, { dropImages, flatten }) {
  if (content == null || typeof content === 'string') return content ?? '';
  if (!Array.isArray(content)) return contentText(content);
  const parts = [];
  for (const p of content) {
    if (typeof p === 'string') { parts.push({ type: 'text', text: p }); continue; }
    if (p.type === 'text' || p.type === 'input_text' || p.type === 'output_text') parts.push({ type: 'text', text: p.text ?? '' });
    else if (p.type === 'image_url') {
      if (dropImages) parts.push({ type: 'text', text: '[image omitted: no image-capable free model available]' });
      else parts.push({ type: 'image_url', image_url: typeof p.image_url === 'string' ? { url: p.image_url } : p.image_url });
    }
  }
  if (flatten || parts.every((p) => p.type === 'text')) return parts.map((p) => p.text).join('\n');
  return parts;
}

function normalizeMessages(messages, opts) {
  const out = [];
  const systems = [];
  for (const m of messages || []) {
    const role = m.role === 'developer' ? 'system' : m.role;
    if (role === 'system') { systems.push(contentText(m.content)); continue; }
    const msg = { role, content: normalizeContent(m.content, opts) };
    if (m.tool_calls?.length) {
      msg.tool_calls = m.tool_calls.map((tc) => ({
        id: tc.id,
        type: 'function',
        function: { name: tc.function?.name, arguments: typeof tc.function?.arguments === 'string' ? tc.function.arguments : JSON.stringify(tc.function?.arguments ?? {}) },
      }));
      if (msg.content === '' || msg.content == null) msg.content = opts.strict ? '' : null;
    }
    if (role === 'tool') {
      msg.tool_call_id = m.tool_call_id;
      msg.content = typeof msg.content === 'string' ? msg.content : contentText(msg.content);
    }
    if (m.name && role !== 'tool' && !opts.strict) msg.name = m.name;
    out.push(msg);
  }
  // One system message, first — several providers reject anything else.
  if (systems.length) out.unshift({ role: 'system', content: systems.filter(Boolean).join('\n\n') });
  return out;
}

/** Mistral only accepts 9-char [a-zA-Z0-9] tool call ids. Map consistently. */
function remapToolIds(messages) {
  const map = new Map();
  const conv = (id) => {
    if (!id) return id;
    if (/^[a-zA-Z0-9]{9}$/.test(id)) return id;
    if (!map.has(id)) map.set(id, sha1(id).replace(/[^a-zA-Z0-9]/g, '').slice(0, 9));
    return map.get(id);
  };
  for (const m of messages) {
    if (m.tool_calls) for (const tc of m.tool_calls) tc.id = conv(tc.id);
    if (m.role === 'tool') m.tool_call_id = conv(m.tool_call_id);
  }
}

const GEMINI_DROP = new Set(['$schema', '$id', '$ref', '$defs', 'definitions', 'additionalProperties', 'patternProperties', 'propertyNames', 'examples', 'default', 'const', 'exclusiveMinimum', 'exclusiveMaximum', 'unevaluatedProperties', 'if', 'then', 'else', 'not', 'dependentRequired', 'dependentSchemas']);
function sanitizeSchema(s) {
  if (Array.isArray(s)) return s.map(sanitizeSchema);
  if (!s || typeof s !== 'object') return s;
  const out = {};
  for (const [k, v] of Object.entries(s)) {
    if (GEMINI_DROP.has(k)) continue;
    if (k === 'format' && typeof v === 'string' && !['enum', 'date-time'].includes(v)) continue;
    if (k === 'type' && Array.isArray(v)) { out.type = v.find((t) => t !== 'null') || 'string'; continue; }
    out[k] = k === 'properties' ? Object.fromEntries(Object.entries(v || {}).map(([pk, pv]) => [pk, sanitizeSchema(pv)])) : sanitizeSchema(v);
  }
  if (s.const !== undefined && !out.enum) out.enum = [s.const];
  return out;
}

/**
 * Build the provider request body from a normalised chat request.
 * opts: { strict (retry with minimal params), stream, dropImages, maxTokens }
 */
export function buildBody(req, target, opts = {}) {
  const body = {
    model: target.model.id,
    messages: normalizeMessages(req.messages, { dropImages: opts.dropImages, flatten: opts.strict && !req._hasImages, strict: opts.strict }),
  };
  for (const k of PASS_PARAMS) if (req[k] !== undefined && req[k] !== null) body[k] = structuredClone(req[k]);
  if (body.stop && Array.isArray(body.stop)) body.stop = body.stop.slice(0, 4);
  if (body.tools) {
    body.tools = body.tools
      .filter((t) => t && (t.type === 'function' || t.function))
      .map((t) => ({ type: 'function', function: { name: t.function.name, description: t.function.description || '', parameters: t.function.parameters || { type: 'object', properties: {} } } }));
    if (!body.tools.length) { delete body.tools; delete body.tool_choice; }
  }
  if (opts.maxTokens) body.max_tokens = opts.maxTokens;
  if (opts.stream) {
    body.stream = true;
    if (!opts.strict) body.stream_options = { include_usage: true };
  }
  if (opts.strict) for (const k of OPTIONAL_PARAMS) delete body[k];

  // ---- provider quirks ----
  const slug = target.provider.slug;
  if (slug === 'mistral-ai') remapToolIds(body.messages);
  if (slug === 'google-ai-studio' && body.tools) {
    for (const t of body.tools) t.function.parameters = sanitizeSchema(t.function.parameters);
  }
  if (slug === 'groq-cloud' && /qwen3/i.test(target.model.id) && req.reasoning_effort === undefined) body.reasoning_effort = 'none';
  return body;
}

export function upstreamHeaders(target) {
  const h = { 'content-type': 'application/json', accept: 'text/event-stream, application/json', 'user-agent': USER_AGENT };
  if (target.key.value) h.authorization = `Bearer ${target.key.value}`;
  if (target.provider.slug === 'openrouter') {
    h['http-referer'] = 'https://free-llm.com/router';
    h['x-title'] = 'Free-LLM Router';
  }
  return h;
}

export function baseUrl(target) {
  let b = target.provider.base;
  if (b.includes('{account_id}')) b = b.replace('{account_id}', encodeURIComponent(target.accountId || ''));
  return b;
}

// ---------- error classification ----------

const QUOTA_RE = /per[ -]day|daily|quota|exceeded your|monthly|\bRPD\b|\bTPD\b|for today|insufficient_quota|free tier|credits? (?:exhausted|used up)|limit reached/i;

function retryAfterFrom(headers, text) {
  const h = headers?.get?.('retry-after') ?? headers?.get?.('x-ratelimit-reset-requests') ?? headers?.get?.('x-ratelimit-reset');
  let ms = h != null ? parseDuration(h) : null;
  if (ms != null && ms > 10 * 365 * 86400e3) ms = null;
  if (ms == null && text) {
    const m = text.match(/(?:try again|retry|retry after|reset)s?\s+(?:in|after)?\s*([\d.]+\s*(?:ms|s|m|h|seconds?|minutes?|hours?)(?:[\d.]+\s*(?:ms|s|m|h))*)/i)
      || text.match(/"retry_after"\s*:\s*([\d.]+)/);
    if (m) ms = parseDuration(m[1].replace(/seconds?/, 's').replace(/minutes?/, 'm').replace(/hours?/, 'h').replace(/\s+/g, ''));
  }
  return ms;
}

export function classify(status, text, headers, { hasTools, hasImages, anonymous } = {}) {
  const msg = extractMessage(text) || `HTTP ${status}`;
  const extra = {};
  const mt = msg.match(/(?:max_tokens|max_completion_tokens|max_new_tokens|maximum (?:output|completion)[^\d]{0,20})[^\d]{0,60}?(\d{3,7})/i);
  if (mt) extra.maxTokens = Number(mt[1]);
  const cx = msg.match(/(?:context length|context window|maximum context)[^\d]{0,40}(\d{3,8})/i);
  if (cx) extra.ctx = Number(cx[1]);

  if (status === 401 || status === 403) {
    if (anonymous || /model|entitl|access to|not allowed|permission/i.test(msg)) return new UpstreamError(anonymous ? 'rate_limit' : 'not_found', status, msg, { retryAfterMs: anonymous ? 24 * 3600e3 : undefined });
    return new UpstreamError('auth', status, msg);
  }
  if (status === 402) return new UpstreamError('credits', status, msg);
  if (status === 404) return new UpstreamError('not_found', status, msg);
  if (status === 413) return new UpstreamError('context', status, msg, extra);
  if (status === 408 || status === 504 || status === 524) return new UpstreamError('timeout', status, msg);
  if (status === 429) {
    return new UpstreamError(QUOTA_RE.test(msg) ? 'quota' : 'rate_limit', status, msg, { retryAfterMs: retryAfterFrom(headers, text) });
  }
  if (status === 400 || status === 422 || status === 409) {
    if (/model.{0,60}(not (?:be )?found|does not exist|unavailable|not supported|decommission|deprecated|no longer|invalid model|unknown model)|no (?:such|eligible) (?:model|worker)/i.test(msg)) return new UpstreamError('not_found', status, msg);
    if (/rate limit|too many requests/i.test(msg)) return new UpstreamError(QUOTA_RE.test(msg) ? 'quota' : 'rate_limit', status, msg, { retryAfterMs: retryAfterFrom(headers, text) });
    if (hasTools && /tool|function call|function_call/i.test(msg)) return new UpstreamError('no_tools', status, msg);
    if (hasImages && /image|vision|multimodal|multi-modal|image_url/i.test(msg)) return new UpstreamError('no_vision', status, msg);
    if (/context|too long|too many tokens|reduce the length|max_tokens|max_completion|maximum.{0,20}tokens|token limit/i.test(msg)) return new UpstreamError('context', status, msg, extra);
    return new UpstreamError('bad_request', status, msg, extra);
  }
  if (status >= 500) return new UpstreamError('server', status, msg, { retryAfterMs: retryAfterFrom(headers, text) });
  return new UpstreamError('bad_request', status, msg, extra);
}

function extractMessage(text) {
  if (!text) return '';
  try {
    const j = JSON.parse(text);
    const e = j.error ?? j.detail?.error ?? j.detail ?? j;
    const m = typeof e === 'string' ? e : e.message ?? e.msg ?? e.error ?? j.message;
    if (m) return String(typeof m === 'string' ? m : JSON.stringify(m)).slice(0, 500);
  } catch { /* not JSON */ }
  return String(text).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 300);
}

// ---------- calling + parsing ----------

/**
 * POST {base}/chat/completions. Resolves once the provider has *accepted* the
 * request (headers OK) — returns { events (async iterator), headers }.
 */
export async function callChat(target, body, { signal, timeoutMs = 300000, connectTimeoutMs = 60000, hasTools, hasImages } = {}) {
  const ctrl = new AbortController();
  const onAbort = () => ctrl.abort(signal.reason);
  signal?.addEventListener('abort', onAbort, { once: true });
  const connectTimer = setTimeout(() => ctrl.abort(new Error('connect timeout')), connectTimeoutMs);
  const totalTimer = setTimeout(() => ctrl.abort(new Error('request timeout')), timeoutMs);
  const cleanup = () => { clearTimeout(connectTimer); clearTimeout(totalTimer); signal?.removeEventListener('abort', onAbort); };

  let res;
  try {
    res = await fetch(`${baseUrl(target)}/chat/completions`, { method: 'POST', headers: upstreamHeaders(target), body: JSON.stringify(body), signal: ctrl.signal });
  } catch (e) {
    cleanup();
    if (signal?.aborted) throw new UpstreamError('aborted', 499, 'client disconnected');
    const m = String(e?.cause?.code || e?.message || e);
    throw new UpstreamError(/timeout/i.test(m) ? 'timeout' : 'network', 0, m);
  }
  clearTimeout(connectTimer);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    cleanup();
    throw classify(res.status, text, res.headers, { hasTools, hasImages, anonymous: target.key.anonymous });
  }
  const ctype = res.headers.get('content-type') || '';
  const events = ctype.includes('text/event-stream') || (body.stream && !ctype.includes('application/json'))
    ? parseSse(res, ctrl, cleanup)
    : parseJsonResponse(res, cleanup);
  return { events, headers: res.headers, abort: () => ctrl.abort() };
}

async function* parseJsonResponse(res, cleanup) {
  let j;
  try {
    const text = await res.text();
    try { j = JSON.parse(text); } catch { throw new UpstreamError('server', 200, `Invalid JSON from provider: ${text.slice(0, 200)}`); }
  } finally {
    cleanup();
  }
  if (j.error) throw classify(Number(j.error.code) || Number(j.status) || 500, JSON.stringify(j), null, {});
  const ch = j.choices?.[0] || {};
  const msg = ch.message || {};
  const reasoning = msg.reasoning_content ?? msg.reasoning;
  if (reasoning) yield { t: 'reasoning', v: String(reasoning) };
  const text = contentText(msg.content);
  if (text) yield { t: 'text', v: text };
  (msg.tool_calls || []).forEach((tc, i) => { tc._i = i; });
  for (const tc of msg.tool_calls || []) {
    yield { t: 'tool_start', i: tc._i, id: tc.id, name: tc.function?.name };
    const a = tc.function?.arguments;
    yield { t: 'tool_args', i: tc._i, v: typeof a === 'string' ? a : JSON.stringify(a ?? {}) };
  }
  if (j.usage) yield { t: 'usage', in: j.usage.prompt_tokens || 0, out: j.usage.completion_tokens || 0 };
  yield { t: 'finish', reason: ch.finish_reason || (msg.tool_calls?.length ? 'tool_calls' : 'stop') };
}

async function* parseSse(res, ctrl, cleanup) {
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let buf = '';
  let data = [];
  const toolIdx = new Map(); // provider index/id → our sequential index
  let nextTool = 0;
  let finished = null;
  let lastToolKey = null;

  function* handle(payload) {
    if (payload === '[DONE]') { finished ||= 'stop'; return; }
    let j;
    try { j = JSON.parse(payload); } catch { return; }
    if (j.error) {
      const e = j.error;
      throw classify(Number(e.code) >= 400 ? Number(e.code) : (/rate|quota|limit/i.test(e.message || '') ? 429 : 500), JSON.stringify(j), null, {});
    }
    if (j.usage && (j.usage.prompt_tokens || j.usage.completion_tokens)) yield { t: 'usage', in: j.usage.prompt_tokens || 0, out: j.usage.completion_tokens || 0 };
    for (const ch of j.choices || []) {
      if ((ch.index ?? 0) !== 0) continue;
      const d = ch.delta || ch.message || {};
      const reasoning = d.reasoning_content ?? d.reasoning;
      if (reasoning) yield { t: 'reasoning', v: String(reasoning) };
      if (d.content) yield { t: 'text', v: typeof d.content === 'string' ? d.content : contentText(d.content) };
      for (const tc of d.tool_calls || []) {
        // Providers identify tool calls by index, by id, or (rarely) by neither.
        const pk = tc.index !== undefined ? `i:${tc.index}` : tc.id ? `id:${tc.id}` : lastToolKey;
        let i = toolIdx.get(pk);
        if (i === undefined) {
          i = nextTool++;
          toolIdx.set(pk ?? `n:${i}`, i);
          yield { t: 'tool_start', i, id: tc.id, name: tc.function?.name || '' };
        }
        lastToolKey = pk ?? `n:${i}`;
        const a = tc.function?.arguments;
        if (a) yield { t: 'tool_args', i, v: typeof a === 'string' ? a : JSON.stringify(a) };
      }
      if (ch.finish_reason) finished = ch.finish_reason;
    }
  }

  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      let nl;
      while ((nl = buf.indexOf('\n')) >= 0) {
        let line = buf.slice(0, nl);
        buf = buf.slice(nl + 1);
        if (line.endsWith('\r')) line = line.slice(0, -1);
        if (line === '') {
          if (data.length) { yield* handle(data.join('\n')); data = []; }
          continue;
        }
        if (line.startsWith(':')) continue;
        if (line.startsWith('data:')) data.push(line.slice(5).replace(/^ /, ''));
        else if (line.startsWith('{')) yield* handle(line); // non-standard: bare JSON lines
      }
    }
    if (data.length) yield* handle(data.join('\n'));
    if (buf.trim().startsWith('data:')) yield* handle(buf.trim().slice(5).trim());
  } catch (e) {
    if (e instanceof UpstreamError) throw e;
    throw new UpstreamError(/timeout/i.test(String(e?.message)) ? 'timeout' : 'network', 0, `stream interrupted: ${e?.message || e}`);
  } finally {
    cleanup();
    try { reader.releaseLock(); } catch { /* ignore */ }
  }
  yield { t: 'finish', reason: finished || (nextTool ? 'tool_calls' : 'stop') };
}

/** Plain pass-through POST (embeddings, completions). */
export async function callJson(target, path, body, { signal, timeoutMs = 120000 } = {}) {
  let res;
  try {
    res = await fetch(`${baseUrl(target)}${path}`, { method: 'POST', headers: upstreamHeaders(target), body: JSON.stringify(body), signal: AbortSignal.any ? AbortSignal.any([signal, AbortSignal.timeout(timeoutMs)].filter(Boolean)) : signal });
  } catch (e) {
    throw new UpstreamError(/timeout/i.test(String(e?.message)) ? 'timeout' : 'network', 0, String(e?.cause?.code || e?.message || e));
  }
  const text = await res.text();
  if (!res.ok) throw classify(res.status, text, res.headers, { anonymous: target.key.anonymous });
  try { return { json: JSON.parse(text), headers: res.headers }; } catch { throw new UpstreamError('server', 200, 'Invalid JSON from provider'); }
}

/** Raw stream pass-through (legacy /completions with stream:true). */
export async function callRaw(target, path, body, { signal } = {}) {
  let res;
  try {
    res = await fetch(`${baseUrl(target)}${path}`, { method: 'POST', headers: upstreamHeaders(target), body: JSON.stringify(body), signal });
  } catch (e) {
    throw new UpstreamError('network', 0, String(e?.cause?.code || e?.message || e));
  }
  if (!res.ok) throw classify(res.status, await res.text().catch(() => ''), res.headers, { anonymous: target.key.anonymous });
  return res;
}

/** Cheap key check: GET /models, falling back to a 1-token chat call. */
export async function testKey(target) {
  const t0 = Date.now();
  try {
    const r = await fetch(`${baseUrl(target)}/models`, { headers: upstreamHeaders(target), signal: AbortSignal.timeout(15000) });
    if (r.ok) return { ok: true, ms: Date.now() - t0, via: 'models' };
    if (r.status === 401 || r.status === 403) return { ok: false, ms: Date.now() - t0, error: extractMessage(await r.text()) || `HTTP ${r.status}` };
  } catch { /* fall through */ }
  try {
    const { events } = await callChat(target, { model: target.model.id, messages: [{ role: 'user', content: 'Reply with OK' }], max_tokens: 5 }, { timeoutMs: 30000 });
    for await (const _ of events) { /* drain */ }
    return { ok: true, ms: Date.now() - t0, via: 'chat' };
  } catch (e) {
    return { ok: e.kind !== 'auth' && e.kind !== 'credits', ms: Date.now() - t0, error: `${e.kind}: ${e.message}` };
  }
}
