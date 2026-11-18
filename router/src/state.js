// Live health + usage tracking. Persisted to ~/.free-llm/state.json so cooldowns,
// learned limits and stats survive restarts.
import fs from 'node:fs';
import { PATHS } from './config.js';
import { now, dayKey, msUntilUtcMidnight } from './util.js';

const EWMA = 0.3;
const MAX_DAYS = 31;

const S = {
  targets: {}, // "prov|model|key" → health
  models: {}, // "prov|model" → learned facts (dead, no_tools, max_tokens, ctx)
  keys: {}, // "prov|key" → { invalid_until, rl: {remaining_requests, reset_at, ...} }
  days: {}, // "YYYY-MM-DD" → { requests, ok, fail, tokens_in, tokens_out, by_model: {"prov/model": {...}} }
  sticky: {}, // conversation hash → { target, until }
};
let dirty = false;

export function loadState() {
  try {
    const d = JSON.parse(fs.readFileSync(PATHS.state, 'utf8'));
    Object.assign(S, d);
  } catch { /* fresh start */ }
  const keep = Object.keys(S.days).sort().slice(-MAX_DAYS);
  for (const k of Object.keys(S.days)) if (!keep.includes(k)) delete S.days[k];
}

export function saveState() {
  if (!dirty) return;
  dirty = false;
  const t = now();
  for (const [k, v] of Object.entries(S.sticky)) if (v.until < t) delete S.sticky[k];
  try {
    fs.writeFileSync(PATHS.state + '.tmp', JSON.stringify(S));
    fs.renameSync(PATHS.state + '.tmp', PATHS.state);
  } catch { /* disk full etc. — not fatal */ }
}

export function startStateAutosave() {
  const t = setInterval(saveState, 15000);
  t.unref();
  return t;
}

const tk = (p, m, k) => `${p}|${m}|${k}`;
const mk = (p, m) => `${p}|${m}`;
const kk = (p, k) => `${p}|${k}`;

function target(p, m, k) {
  return (S.targets[tk(p, m, k)] ||= { ok: 0, fail: 0, streak: 0, latency: null, ttft: null, tps: null, cooldown_until: 0, last_error: null, last_ok: 0, last_used: 0 });
}
export function modelFacts(p, m) {
  return (S.models[mk(p, m)] ||= {});
}
function keyFacts(p, k) {
  return (S.keys[kk(p, k)] ||= {});
}
function today() {
  return (S.days[dayKey()] ||= { requests: 0, ok: 0, fail: 0, tokens_in: 0, tokens_out: 0, by_model: {}, by_provider: {} });
}

// ---------- queries used by the router ----------

/** Why a target can't be used right now (null = available). */
export function unavailableReason(p, m, k, needs = {}) {
  const t = now();
  const kf = S.keys[kk(p, k)];
  if (kf?.invalid_until > t) return `key rejected (${kf.invalid_reason || 'unauthorized'})`;
  if (kf?.rl?.reset_at > t && kf.rl.remaining_requests === 0) return 'rate limit reached';
  const mf = S.models[mk(p, m)];
  if (mf?.dead_until > t) return mf.dead_reason || 'model unavailable';
  if (needs.tools && mf?.no_tools_until > t) return 'no tool calling';
  if (needs.vision && mf?.no_vision_until > t) return 'no image input';
  const tg = S.targets[tk(p, m, k)];
  if (tg?.cooldown_until > t) return `cooling down (${tg.last_error || 'error'})`;
  return null;
}

export function health(p, m, k) {
  const tg = S.targets[tk(p, m, k)];
  if (!tg) return { reliability: 0.75, latency: null, ttft: null, tps: null, uses: 0 };
  const n = tg.ok + tg.fail;
  // Bayesian-ish success rate with a prior of 3 successes / 1 failure.
  return { reliability: (tg.ok + 3) / (n + 4), latency: tg.latency, ttft: tg.ttft, tps: tg.tps, uses: n, last_used: tg.last_used };
}

export function usageToday(p, m) {
  return today().by_model[`${p}/${m}`]?.requests || 0;
}

export function learnedMaxTokens(p, m) {
  return S.models[mk(p, m)]?.max_tokens || null;
}

export function learnedContext(p, m) {
  return S.models[mk(p, m)]?.ctx || null;
}

// ---------- recording outcomes ----------

export function recordSuccess(p, m, k, { latency, ttft, tokensIn = 0, tokensOut = 0 }) {
  dirty = true;
  const tg = target(p, m, k);
  tg.ok++;
  tg.streak = 0;
  tg.last_ok = tg.last_used = now();
  tg.cooldown_until = 0;
  tg.last_error = null;
  if (latency != null) tg.latency = tg.latency == null ? latency : tg.latency * (1 - EWMA) + latency * EWMA;
  if (ttft != null) tg.ttft = tg.ttft == null ? ttft : tg.ttft * (1 - EWMA) + ttft * EWMA;
  if (tokensOut > 20 && latency > 0) {
    const gen = Math.max(1, latency - (ttft || 0));
    const tps = (tokensOut / gen) * 1000;
    tg.tps = tg.tps == null ? tps : tg.tps * (1 - EWMA) + tps * EWMA;
  }
  const mf = S.models[mk(p, m)];
  if (mf?.dead_until) delete mf.dead_until;
  bumpDay(p, m, true, tokensIn, tokensOut, latency);
}

/**
 * kind: 'rate_limit' | 'quota' | 'auth' | 'credits' | 'not_found' | 'server' | 'network' |
 *       'timeout' | 'bad_request' | 'no_tools' | 'no_vision' | 'context' | 'empty'
 */
export function recordFailure(p, m, k, kind, { message = '', retryAfterMs = null, maxTokens = null, ctx = null } = {}) {
  dirty = true;
  const t = now();
  const tg = target(p, m, k);
  tg.fail++;
  tg.streak++;
  tg.last_used = t;
  tg.last_error = `${kind}${message ? ': ' + String(message).slice(0, 160) : ''}`;
  const mf = modelFacts(p, m);
  const kf = keyFacts(p, k);
  const backoff = (base, max) => Math.min(max, base * 2 ** Math.min(tg.streak - 1, 8));

  switch (kind) {
    case 'rate_limit':
      tg.cooldown_until = t + (retryAfterMs ?? backoff(20e3, 15 * 60e3));
      break;
    case 'quota': // daily/monthly allowance used up
      // Trust the provider's own "retry after" when it gives one; otherwise assume a daily reset.
      tg.cooldown_until = t + (retryAfterMs != null ? Math.max(retryAfterMs, 30e3) : Math.max(Math.min(msUntilUtcMidnight(), 12 * 3600e3), 30 * 60e3));
      break;
    case 'auth':
      kf.invalid_until = t + 6 * 3600e3;
      kf.invalid_reason = message ? String(message).slice(0, 120) : 'unauthorized';
      break;
    case 'credits':
      kf.invalid_until = t + 24 * 3600e3;
      kf.invalid_reason = 'out of free credits';
      break;
    case 'not_found':
      mf.dead_until = t + 6 * 3600e3;
      mf.dead_reason = 'model not found at provider';
      break;
    case 'no_tools':
      mf.no_tools_until = t + 7 * 24 * 3600e3;
      break;
    case 'no_vision':
      mf.no_vision_until = t + 7 * 24 * 3600e3;
      break;
    case 'context':
      if (ctx) mf.ctx = ctx;
      if (maxTokens) mf.max_tokens = maxTokens;
      break;
    case 'bad_request':
      if (maxTokens) mf.max_tokens = maxTokens;
      tg.cooldown_until = t + (tg.streak >= 3 ? backoff(60e3, 30 * 60e3) : 0);
      break;
    case 'server':
    case 'empty':
      tg.cooldown_until = t + backoff(15e3, 10 * 60e3);
      break;
    case 'network':
    case 'timeout':
      tg.cooldown_until = t + backoff(30e3, 15 * 60e3);
      break;
    default:
      tg.cooldown_until = t + backoff(15e3, 5 * 60e3);
  }
  bumpDay(p, m, false, 0, 0, null, kind);
}

/** Remember x-ratelimit-* headers so we stop *before* hitting the wall. */
export function recordRateHeaders(p, k, headers) {
  const get = (n) => headers.get(n);
  const rem = get('x-ratelimit-remaining-requests') ?? get('x-ratelimit-remaining') ?? get('ratelimit-remaining');
  if (rem == null) return;
  const reset = get('x-ratelimit-reset-requests') ?? get('x-ratelimit-reset') ?? get('ratelimit-reset');
  const kf = keyFacts(p, k);
  let resetMs = null;
  if (reset != null) {
    const r = String(reset);
    if (/^\d{10,13}$/.test(r)) resetMs = Number(r.length === 10 ? r + '000' : r) - now();
    else if (/^\d+(\.\d+)?$/.test(r)) resetMs = parseFloat(r) * 1000;
    else {
      const m = r.match(/(\d+(?:\.\d+)?)(ms|h|m|s)/g);
      if (m) resetMs = m.reduce((a, x) => { const n = parseFloat(x); return a + (x.endsWith('ms') ? n : x.endsWith('h') ? n * 3600e3 : x.endsWith('m') ? n * 60e3 : n * 1e3); }, 0);
    }
  }
  kf.rl = {
    remaining_requests: Number(rem),
    limit_requests: Number(get('x-ratelimit-limit-requests') ?? get('x-ratelimit-limit') ?? NaN) || null,
    remaining_tokens: Number(get('x-ratelimit-remaining-tokens') ?? NaN) || null,
    reset_at: now() + (resetMs ?? 60e3),
    seen_at: now(),
  };
  dirty = true;
}

export function clearKeyState(p, k) {
  delete S.keys[kk(p, k)];
  for (const key of Object.keys(S.targets)) if (key.startsWith(`${p}|`) && key.endsWith(`|${k}`)) delete S.targets[key];
  dirty = true;
}

export function resetCooldowns() {
  for (const t of Object.values(S.targets)) { t.cooldown_until = 0; t.streak = 0; }
  for (const k of Object.values(S.keys)) { delete k.invalid_until; if (k.rl) k.rl.remaining_requests = null; }
  for (const m of Object.values(S.models)) { delete m.dead_until; delete m.no_tools_until; delete m.no_vision_until; }
  dirty = true;
}

function bumpDay(p, m, ok, tin, tout, latency, errKind) {
  const d = today();
  d.requests++;
  ok ? d.ok++ : d.fail++;
  d.tokens_in += tin;
  d.tokens_out += tout;
  const id = `${p}/${m}`;
  const bm = (d.by_model[id] ||= { requests: 0, ok: 0, fail: 0, tokens_in: 0, tokens_out: 0, lat: [] , errors: {} });
  bm.requests++;
  ok ? bm.ok++ : bm.fail++;
  bm.tokens_in += tin;
  bm.tokens_out += tout;
  if (latency != null) { bm.lat.push(Math.round(latency)); if (bm.lat.length > 200) bm.lat.shift(); }
  if (errKind) bm.errors[errKind] = (bm.errors[errKind] || 0) + 1;
  const bp = (d.by_provider[p] ||= { requests: 0, ok: 0, fail: 0, tokens: 0 });
  bp.requests++;
  ok ? bp.ok++ : bp.fail++;
  bp.tokens += tin + tout;
}

// ---------- sticky sessions ----------

export function getSticky(hash) {
  const s = S.sticky[hash];
  return s && s.until > now() ? s.target : null;
}
export function setSticky(hash, targetId, minutes) {
  if (!minutes) return;
  S.sticky[hash] = { target: targetId, until: now() + minutes * 60e3 };
  dirty = true;
}

// ---------- reporting ----------

function pct(arr, q) {
  if (!arr?.length) return null;
  const s = [...arr].sort((a, b) => a - b);
  return s[Math.min(s.length - 1, Math.floor(q * s.length))];
}

export function stats(days = 7) {
  const keys = Object.keys(S.days).sort().slice(-days);
  const series = keys.map((k) => ({ day: k, requests: S.days[k].requests, ok: S.days[k].ok, fail: S.days[k].fail, tokens_in: S.days[k].tokens_in, tokens_out: S.days[k].tokens_out }));
  const agg = {};
  const prov = {};
  for (const k of keys) {
    for (const [id, v] of Object.entries(S.days[k].by_model)) {
      const a = (agg[id] ||= { requests: 0, ok: 0, fail: 0, tokens_in: 0, tokens_out: 0, lat: [], errors: {} });
      a.requests += v.requests; a.ok += v.ok; a.fail += v.fail; a.tokens_in += v.tokens_in; a.tokens_out += v.tokens_out;
      a.lat.push(...(v.lat || []));
      for (const [e, n] of Object.entries(v.errors || {})) a.errors[e] = (a.errors[e] || 0) + n;
    }
    for (const [p, v] of Object.entries(S.days[k].by_provider || {})) {
      const a = (prov[p] ||= { requests: 0, ok: 0, fail: 0, tokens: 0 });
      a.requests += v.requests; a.ok += v.ok; a.fail += v.fail; a.tokens += v.tokens;
    }
  }
  const models = Object.entries(agg).map(([id, a]) => ({ id, requests: a.requests, ok: a.ok, fail: a.fail, tokens_in: a.tokens_in, tokens_out: a.tokens_out, p50: pct(a.lat, 0.5), p95: pct(a.lat, 0.95), errors: a.errors }))
    .sort((x, y) => y.requests - x.requests);
  const tot = series.reduce((a, d) => ({ requests: a.requests + d.requests, ok: a.ok + d.ok, fail: a.fail + d.fail, tokens: a.tokens + d.tokens_in + d.tokens_out }), { requests: 0, ok: 0, fail: 0, tokens: 0 });
  return { days: series, models, providers: prov, totals: tot };
}

export function healthSnapshot() {
  const t = now();
  const out = [];
  for (const [id, v] of Object.entries(S.targets)) {
    const [p, m, k] = id.split('|');
    out.push({ provider: p, model: m, key: k, ok: v.ok, fail: v.fail, latency: v.latency, ttft: v.ttft, tps: v.tps, cooldown_ms: Math.max(0, v.cooldown_until - t), last_error: v.last_error, last_used: v.last_used });
  }
  return out;
}

export function keyRate(p, k) {
  return S.keys[kk(p, k)] || null;
}
