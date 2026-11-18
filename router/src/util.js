// Small shared helpers. No dependencies.
import crypto from 'node:crypto';

export const VERSION = '1.0.1';
export const USER_AGENT = `free-llm-router/${VERSION} (+https://free-llm.com/router)`;

export const now = () => Date.now();
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function uid(prefix = '', len = 24) {
  return prefix + crypto.randomBytes(Math.ceil(len / 2)).toString('hex').slice(0, len);
}

export function sha1(s) {
  return crypto.createHash('sha1').update(String(s)).digest('hex');
}

/** Rough token estimate (≈4 chars per token, images count ~800 tokens). */
export function estimateTokens(value) {
  if (value == null) return 0;
  if (typeof value === 'string') return Math.ceil(value.length / 4);
  if (Array.isArray(value)) return value.reduce((n, v) => n + estimateTokens(v), 0);
  if (typeof value === 'object') {
    if (value.type === 'image_url' || value.type === 'image' || value.type === 'input_image') return 800;
    let n = 0;
    for (const [k, v] of Object.entries(value)) {
      if (k === 'image_url' || k === 'source') { n += 800; continue; }
      n += estimateTokens(v);
    }
    return n + 2;
  }
  return Math.ceil(String(value).length / 4);
}

/** Parse "2m59.56s", "1h", "30s", "250ms", "17" (seconds) → milliseconds. */
export function parseDuration(v) {
  if (v == null || v === '') return null;
  const s = String(v).trim();
  if (/^\d+(\.\d+)?$/.test(s)) return Math.round(parseFloat(s) * 1000);
  let ms = 0;
  let matched = false;
  for (const m of s.matchAll(/(\d+(?:\.\d+)?)\s*(ms|h|m|s)/g)) {
    matched = true;
    const n = parseFloat(m[1]);
    ms += m[2] === 'h' ? n * 3600e3 : m[2] === 'm' ? n * 60e3 : m[2] === 's' ? n * 1e3 : n;
  }
  if (matched) return Math.round(ms);
  const t = Date.parse(s); // HTTP date
  return Number.isNaN(t) ? null : Math.max(0, t - Date.now());
}

/** Milliseconds until next UTC midnight (daily quotas mostly reset then). */
export function msUntilUtcMidnight() {
  const d = new Date();
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1) - d.getTime();
}

export function dayKey(t = Date.now()) {
  return new Date(t).toISOString().slice(0, 10);
}

export function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

/** Same normalisation as free-llm.com's model index, so keys match the catalog. */
export function modelKey(name) {
  let k = String(name || '').toLowerCase();
  k = k.replace(/\([^)]*\)/g, ' ');
  k = k.replace(/\b(free|instruct|preview)\b/g, ' ');
  k = k.replace(/[^a-z0-9.]+/g, '-');
  k = k.replace(/-(a\d+b|it)(?=-|$)/g, '');
  return k.replace(/^[-.]+|[-.]+$/g, '');
}

export function readBody(req, limit = 64 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (c) => {
      size += c.length;
      if (size > limit) {
        reject(Object.assign(new Error('Request body too large'), { status: 413 }));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export async function readJson(req) {
  const buf = await readBody(req);
  if (!buf.length) return {};
  try {
    return JSON.parse(buf.toString('utf8'));
  } catch {
    throw Object.assign(new Error('Request body is not valid JSON'), { status: 400 });
  }
}

export function sendJson(res, status, obj, headers = {}) {
  if (res.headersSent) return;
  const body = JSON.stringify(obj);
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'content-length': Buffer.byteLength(body), ...headers });
  res.end(body);
}

export function sseHeaders(res, headers = {}) {
  res.writeHead(200, {
    'content-type': 'text/event-stream; charset=utf-8',
    'cache-control': 'no-cache, no-transform',
    connection: 'keep-alive',
    'x-accel-buffering': 'no',
    ...headers,
  });
  if (res.socket) res.socket.setNoDelay(true);
}

/** Best-effort JSON repair for tool arguments produced by weaker models. */
export function parseLooseJson(s) {
  if (s == null) return {};
  if (typeof s === 'object') return s;
  let t = String(s).trim();
  if (!t) return {};
  try { return JSON.parse(t); } catch { /* try harder */ }
  t = t.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim();
  try { return JSON.parse(t); } catch { /* try harder */ }
  const fixed = t.replace(/,\s*([}\]])/g, '$1');
  try { return JSON.parse(fixed); } catch { /* give up */ }
  const first = t.indexOf('{');
  const last = t.lastIndexOf('}');
  if (first >= 0 && last > first) {
    try { return JSON.parse(t.slice(first, last + 1)); } catch { /* give up */ }
  }
  return null;
}

/** Text out of an OpenAI-style content value (string or parts array). */
export function contentText(content) {
  if (content == null) return '';
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) {
    return content.map((p) => (typeof p === 'string' ? p : p?.text ?? p?.content ?? '')).filter(Boolean).join('\n');
  }
  return String(content.text ?? '');
}

export class HttpError extends Error {
  constructor(status, message, type = 'invalid_request_error') {
    super(message);
    this.status = status;
    this.type = type;
  }
}

export function fmtMs(ms) {
  if (ms == null) return '—';
  if (ms < 1000) return `${Math.round(ms)} ms`;
  if (ms < 60e3) return `${(ms / 1000).toFixed(1)} s`;
  if (ms < 3600e3) return `${Math.round(ms / 60e3)} min`;
  return `${(ms / 3600e3).toFixed(1)} h`;
}
