// The router: pick the best available free model for each request, fail over
// transparently, learn from every outcome.
import fs from 'node:fs';
import { catalog } from './catalog.js';
import { PATHS, providerKeys, providerAccountId } from './config.js';
import * as st from './state.js';
import { buildBody, callChat, callJson, UpstreamError } from './upstream.js';
import { thinkStripper, toolRescuer } from './filters.js';
import { estimateTokens, modelKey, sha1, uid, HttpError, contentText } from './util.js';

export const PROFILES = {
  auto: 'Best overall for this request (uses your default strategy)',
  'auto:coding': 'Strongest coding models first (Claude Code, Codex, Cursor…)',
  'auto:smart': 'Most capable models first, speed second',
  'auto:fast': 'Lowest latency first',
  'auto:long': 'Largest context windows first',
  'auto:vision': 'Only models that read images',
  'auto:reasoning': 'Reasoning / thinking models first',
  'auto:spread': 'Spread load across providers to stretch free quotas',
  'auto:fusion': 'Ask 3 different models, then merge the best answer (no tools)',
};

// ---------- request log ----------

const RING = [];
const RING_MAX = 300;
let logBytes = 0;
export function logRequest(cfg, entry) {
  RING.push(entry);
  if (RING.length > RING_MAX) RING.shift();
  if (!cfg.log_requests) return;
  try {
    const line = JSON.stringify(entry) + '\n';
    if (!logBytes) { try { logBytes = fs.statSync(PATHS.log).size; } catch { logBytes = 0; } }
    if (logBytes > 5 * 1024 * 1024) { fs.renameSync(PATHS.log, PATHS.log + '.1'); logBytes = 0; }
    fs.appendFileSync(PATHS.log, line);
    logBytes += line.length;
  } catch { /* logging must never break a request */ }
}
export function recentRequests(n = 100) {
  return RING.slice(-n).reverse();
}

// ---------- response cache (opt-in) ----------

const CACHE = new Map();
function cacheKey(req, requested) {
  const { messages, tools, tool_choice, temperature, top_p, max_tokens, response_format, stop } = req;
  return sha1(JSON.stringify({ requested, messages, tools, tool_choice, temperature, top_p, max_tokens, response_format, stop }));
}
function cacheGet(cfg, key) {
  if (!cfg.cache?.enabled) return null;
  const e = CACHE.get(key);
  if (!e) return null;
  if (e.exp < Date.now()) { CACHE.delete(key); return null; }
  return e;
}
function cachePut(cfg, key, value) {
  if (!cfg.cache?.enabled) return;
  CACHE.set(key, { ...value, exp: Date.now() + (cfg.cache.ttl_seconds || 3600) * 1000 });
  while (CACHE.size > (cfg.cache.max_entries || 500)) CACHE.delete(CACHE.keys().next().value);
}
export function cacheStats() {
  return { entries: CACHE.size };
}
export function cacheClear() {
  CACHE.clear();
}

// ---------- targets ----------

/** Every (provider, model, key) we could call right now for this kind of model. */
export function allTargets(cfg, kind = 'chat') {
  const cat = catalog();
  if (!cat) return [];
  const out = [];
  for (const prov of cat.providers.values()) {
    if (!prov.usable) continue;
    const pc = cfg.providers[prov.slug];
    if (pc?.enabled === false) continue;
    let keys = providerKeys(cfg, prov.slug).map((k) => ({ ...k, anonymous: false }));
    if (!keys.length && prov.anonymousKey !== null && pc?.guest !== false) keys = [{ id: 'guest', label: 'guest access', value: prov.anonymousKey, anonymous: true }];
    if (!keys.length) continue;
    const accountId = prov.needs.includes('account_id') ? providerAccountId(cfg, prov.slug) : null;
    if (prov.needs.includes('account_id') && !accountId) continue;
    const disabled = new Set(pc?.disabled_models || []);
    for (const model of prov.models) {
      if (model.kind !== kind || disabled.has(model.id)) continue;
      for (const key of keys) out.push({ id: `${prov.slug}/${model.id}#${key.id}`, provider: prov, model, key, accountId });
    }
  }
  return out;
}

function globMatch(pattern, s) {
  const re = new RegExp('^' + pattern.split('*').map((x) => x.replace(/[.+?^${}()|[\]\\]/g, '\\$&')).join('.*') + '$', 'i');
  return re.test(s);
}

/**
 * Turn the requested model name into a plan:
 *   { profile }                     auto / auto:coding / …
 *   { exact: [targets], profile }   a specific model (any provider serving it), then profile fallback
 */
export function resolve(cfg, requested, targets) {
  const r = String(requested || 'auto').trim();
  if (r === 'auto' || r.startsWith('auto:')) {
    const name = r === 'auto' ? 'auto' : r;
    if (PROFILES[name] || cfg.profiles?.[name.slice(5)]) return { profile: name, label: name };
    return { profile: 'auto', label: r };
  }
  // "provider/model-id" (the provider slug must exist)
  const slash = r.indexOf('/');
  if (slash > 0) {
    const slug = r.slice(0, slash);
    const id = r.slice(slash + 1);
    const ex = targets.filter((t) => t.provider.slug === slug && (t.model.id === id || t.model.key === modelKey(id)));
    if (ex.length) return { exact: ex, profile: cfg.fallback_to_auto ? 'auto' : null, label: r, pinned: true };
  }
  const byId = targets.filter((t) => t.model.id === r || t.model.id.toLowerCase() === r.toLowerCase());
  if (byId.length) return { exact: byId, profile: cfg.fallback_to_auto ? 'auto' : null, label: r };
  const k = modelKey(r.replace(/^[^/]+\//, ''));
  const byKey = targets.filter((t) => t.model.key === k || modelKey(t.model.id.replace(/^.*\//, '')) === k);
  if (byKey.length) return { exact: byKey, profile: cfg.fallback_to_auto ? 'auto' : null, label: r };
  for (const [pat, prof] of Object.entries(cfg.aliases || {})) {
    if (pat === 'default') continue;
    if (globMatch(pat, r)) return resolve(cfg, prof, targets);
  }
  const def = cfg.aliases?.default || 'auto';
  return { ...resolve(cfg, def === r ? 'auto' : def, targets), label: r, unknown: true };
}

// ---------- ranking ----------

function speedScore(h) {
  const ms = h.ttft ?? (h.latency != null ? h.latency * 0.5 : null);
  if (ms == null) return 0.55; // unknown: middle of the pack
  return 1 / (1 + ms / 1500);
}

function score(t, profile, strategy, req) {
  const h = st.health(t.provider.slug, t.model.id, t.key.id);
  const r = h.reliability;
  const sp = speedScore(h);
  const m = t.model;
  let s;
  const strat = profile === 'auto' ? strategy : profile.slice(5);
  switch (strat) {
    case 'coding': s = m.coding * r * r * (0.75 + 0.25 * sp); break;
    case 'smart': s = m.quality * r ** 1.5 * (0.85 + 0.15 * sp); break;
    case 'fast': s = 100 * sp * r * r * (m.quality >= 45 ? 1 : 0.6); break;
    case 'long': s = (Math.log2((st.learnedContext(t.provider.slug, m.id) || m.ctx || 8000) / 1000) * 12 + m.quality * 0.3) * r; break;
    case 'reasoning': s = (m.reasoning ? 40 : 0) + m.quality * r * r; break;
    case 'vision': s = (m.vision ? 50 : -100) + m.quality * r * r; break;
    case 'spread': s = (m.quality * r * r) / (1 + st.usageToday(t.provider.slug, m.id) / 40); break;
    default: s = m.quality * r * r * (0.6 + 0.4 * sp); // balanced
  }
  if (t.key.anonymous) s *= 0.45; // guest access: slower, stricter limits — keyed providers first
  if (req._promptTokens > 24000 && !m.ctx) s *= 0.4;
  if (req._hasTools && m.quality < 35) s *= 0.5; // tiny models rarely handle tools
  s *= 0.97 + Math.random() * 0.06; // light exploration so the router keeps learning
  return s;
}

function rank(targets, plan, cfg, req) {
  const profile = plan.profile || 'auto';
  const chainName = profile.startsWith('auto:') ? profile.slice(5) : null;
  const chain = (chainName && cfg.profiles?.[chainName]) || (profile === 'auto' && cfg.strategy === 'order' ? cfg.chain : null);
  if (chain?.length) {
    const pos = (t) => {
      const i = chain.findIndex((c) => c === `${t.provider.slug}/${t.model.id}` || c === t.model.id || c === t.model.key);
      return i < 0 ? 1e6 : i;
    };
    return targets
      .map((t) => ({ t, p: pos(t), s: score(t, 'auto', 'balanced', req) }))
      .sort((a, b) => a.p - b.p || b.s - a.s)
      .map((x) => x.t);
  }
  const pref = new Map((cfg.chain || []).map((c, i) => [c, i]));
  return targets
    .map((t) => {
      let s = score(t, profile, cfg.strategy || 'balanced', req);
      const pi = pref.get(`${t.provider.slug}/${t.model.id}`);
      if (pi !== undefined) s *= 1.5 - Math.min(0.4, pi * 0.02); // user favourites float up
      return { t, s };
    })
    .sort((a, b) => b.s - a.s)
    .map((x) => x.t);
}

/** Filter by what the request needs; returns { list, notes } */
function eligible(targets, req) {
  const needs = { tools: req._hasTools, vision: req._hasImages };
  const ok = [];
  const notes = {};
  for (const t of targets) {
    const why = st.unavailableReason(t.provider.slug, t.model.id, t.key.id, needs);
    if (why) { notes[why] = (notes[why] || 0) + 1; continue; }
    const ctx = st.learnedContext(t.provider.slug, t.model.id) || t.model.ctx;
    if (ctx && req._promptTokens + 256 > ctx) { notes['context too small'] = (notes['context too small'] || 0) + 1; continue; }
    ok.push(t);
  }
  let dropImages = false;
  let list = ok;
  if (needs.vision) {
    const vis = ok.filter((t) => t.model.vision);
    if (vis.length) list = vis; else dropImages = true;
  }
  return { list, notes, dropImages };
}

// ---------- the main loop ----------

export function prepare(req) {
  req._hasTools = Array.isArray(req.tools) && req.tools.length > 0 && req.tool_choice !== 'none';
  req._hasImages = (req.messages || []).some((m) => Array.isArray(m.content) && m.content.some((p) => p?.type === 'image_url'));
  req._promptTokens = estimateTokens(req.messages) + estimateTokens(req.tools);
  req._toolNames = req._hasTools ? req.tools.map((t) => t.function?.name).filter(Boolean) : [];
  const firstUser = (req.messages || []).find((m) => m.role === 'user');
  const sys = (req.messages || []).find((m) => m.role === 'system' || m.role === 'developer');
  req._sticky = sha1(`${req.model}|${contentText(sys?.content).slice(0, 2000)}|${contentText(firstUser?.content).slice(0, 2000)}`);
  if (req.max_completion_tokens && !req.max_tokens) req.max_tokens = req.max_completion_tokens;
  return req;
}

function maxTokensFor(req, t) {
  let mt = req.max_tokens || null;
  const learned = st.learnedMaxTokens(t.provider.slug, t.model.id);
  if (learned && (!mt || mt > learned)) mt = learned;
  const ctx = st.learnedContext(t.provider.slug, t.model.id) || t.model.ctx;
  if (ctx && mt && req._promptTokens + mt > ctx) mt = Math.max(256, ctx - req._promptTokens - 64);
  return mt;
}

/**
 * Run a chat request. Async generator of normalised events:
 *   {t:'meta', provider, model, attempts}  (first, once a provider answered)
 *   {t:'text'|'reasoning', v} {t:'tool_start', i, id, name} {t:'tool_args', i, v}
 *   {t:'usage', in, out} {t:'finish', reason}
 * Throws HttpError if nothing could serve the request.
 */
export async function* runChat(cfg, req, ctx = {}) {
  prepare(req);
  const started = Date.now();
  const all = allTargets(cfg, 'chat');
  if (!all.length) {
    throw new HttpError(503, 'No provider is configured yet. Open the dashboard (http://localhost:' + cfg.port + ') and add a free API key — it takes about a minute.', 'no_providers');
  }
  const plan = resolve(cfg, req.model, all);
  const log = { id: uid('req_', 16), ts: new Date().toISOString(), endpoint: ctx.endpoint || 'chat', client: ctx.client || '', requested: req.model || 'auto', plan: plan.profile || 'exact', stream: Boolean(ctx.stream), attempts: [], tokens_in: 0, tokens_out: 0 };

  if (plan.profile === 'auto:fusion' && !req._hasTools) {
    yield* runFusion(cfg, req, ctx, all, log, started);
    return;
  }

  const ck = cfg.cache?.enabled ? cacheKey(req, req.model) : null;
  const hit = ck && cacheGet(cfg, ck);
  if (hit) {
    log.served = hit.served; log.cached = true; log.status = 200; log.ms = Date.now() - started;
    logRequest(cfg, log);
    yield { t: 'meta', provider: hit.provider, model: hit.model, attempts: [], cached: true };
    for (const e of hit.events) yield e;
    return;
  }

  // Order: sticky target → exact model targets → profile ranking.
  const { list, notes, dropImages } = eligible(all, req);
  let ordered = [];
  if (plan.exact) {
    const exactIds = new Set(plan.exact.map((t) => t.id));
    ordered = rank(list.filter((t) => exactIds.has(t.id)), { profile: 'auto:fast' }, cfg, req);
  }
  if (plan.profile && !(plan.pinned && !cfg.fallback_to_auto)) {
    const seen = new Set(ordered.map((t) => t.id));
    ordered = ordered.concat(rank(list.filter((t) => !seen.has(t.id)), plan, cfg, req));
  }
  const stickyId = st.getSticky(req._sticky);
  if (stickyId) {
    const i = ordered.findIndex((t) => t.id === stickyId);
    if (i > 0 && !plan.exact) ordered.unshift(...ordered.splice(i, 1));
  }
  if (!ordered.length) {
    const why = Object.entries(notes).map(([k, n]) => `${n}× ${k}`).join(', ');
    log.status = 503; log.error = 'no available model'; log.ms = Date.now() - started;
    logRequest(cfg, log);
    throw new HttpError(503, `Every configured free model is busy or unsuitable right now (${why || 'none match'}). Add more free providers in the dashboard to widen the pool.`, 'all_busy');
  }

  const maxAttempts = cfg.max_attempts || 8;
  const deadProviders = new Set();
  const perProvider = {};
  let badRequests = 0;
  let lastErr = null;
  let tries = 0;

  for (const t of ordered) {
    if (tries >= maxAttempts) break;
    const slug = t.provider.slug;
    if (deadProviders.has(slug)) continue;
    if ((perProvider[slug] || 0) >= 3) continue;
    perProvider[slug] = (perProvider[slug] || 0) + 1;
    tries++;

    let strict = false;
    let streamUp = !st.modelFacts(slug, t.model.id).no_stream;
    let maxTok = maxTokensFor(req, t);
    for (let sub = 0; sub < 3; sub++) {
      const t0 = Date.now();
      try {
        const body = buildBody(req, t, { strict, stream: streamUp, dropImages, maxTokens: maxTok });
        const { events, headers } = await callChat(t, body, {
          signal: ctx.signal,
          timeoutMs: (cfg.request_timeout_s || 300) * 1000,
          connectTimeoutMs: (cfg.first_token_timeout_s || 60) * 1000,
          hasTools: req._hasTools,
          hasImages: req._hasImages && !dropImages,
        });
        st.recordRateHeaders(slug, t.key.id, headers);
        // Pull events until the first meaningful one: only then are we committed.
        const it = events[Symbol.asyncIterator]();
        const buffered = [];
        let meaningful = false;
        let ttft = null;
        for (;;) {
          const { value, done } = await withTimeout(it.next(), (cfg.first_token_timeout_s || 60) * 1000);
          if (done) break;
          buffered.push(value);
          if (value.t === 'text' || value.t === 'tool_start' || value.t === 'reasoning') { meaningful = true; ttft = Date.now() - t0; break; }
        }
        if (!meaningful) throw new UpstreamError('empty', 200, 'provider returned an empty answer');

        // Committed.
        log.attempts.push({ target: `${slug}/${t.model.id}`, ok: true, ms: ttft });
        log.served = `${slug}/${t.model.id}`;
        log.ttft = ttft;
        st.setSticky(req._sticky, t.id, cfg.sticky_minutes);
        yield { t: 'meta', provider: slug, providerName: t.provider.name, model: t.model.id, attempts: log.attempts, guest: t.key.anonymous };

        const think = cfg.strip_think_tags !== false ? thinkStripper() : null;
        const rescue = toolRescuer(req._toolNames);
        let usage = null;
        let sawTool = false;
        let finish = 'stop';
        const record = [];
        const emitText = function* (ev) {
          const parts = think && ev.t === 'text' ? think.push(ev.v) : [ev];
          for (const p of parts) for (const q of rescue.push(p)) { record.push(q); yield q; }
        };
        const handle = function* (ev) {
          if (ev.t === 'usage') { usage = ev; return; }
          if (ev.t === 'finish') { finish = ev.reason; return; }
          if (ev.t === 'tool_start') sawTool = true;
          if (ev.t === 'text') { yield* emitText(ev); return; }
          record.push(ev);
          yield ev;
        };
        try {
          for (const ev of buffered) yield* handle(ev);
          for (;;) {
            const { value, done } = await it.next();
            if (done) break;
            yield* handle(value);
          }
        } catch (e) {
          // Mid-stream failure: we can't switch provider any more — tell the client.
          st.recordFailure(slug, t.model.id, t.key.id, e.kind || 'network', { message: e.message });
          log.status = 502; log.error = `stream interrupted: ${e.message}`; log.ms = Date.now() - started;
          logRequest(cfg, log);
          throw new HttpError(502, `The provider (${t.provider.name}) dropped the connection mid-answer: ${e.message}`, 'upstream_interrupted');
        }
        if (think) for (const p of think.flush()) for (const q of rescue.push(p)) { record.push(q); yield q; }
        const rs = rescue.flush(0);
        for (const e of rs.events) { record.push(e); yield e; }
        if (rs.rescued) { sawTool = true; finish = 'tool_calls'; }
        if (sawTool && finish === 'stop') finish = 'tool_calls';
        const outEst = estimateTokens(record.filter((e) => e.t === 'text' || e.t === 'tool_args').map((e) => e.v).join(''));
        const u = { t: 'usage', in: usage?.in || req._promptTokens, out: usage?.out || outEst };
        record.push(u);
        yield u;
        record.push({ t: 'finish', reason: finish });
        yield { t: 'finish', reason: finish };

        const total = Date.now() - t0;
        st.recordSuccess(slug, t.model.id, t.key.id, { latency: total, ttft, tokensIn: u.in, tokensOut: u.out });
        log.status = 200; log.ms = Date.now() - started; log.tokens_in = u.in; log.tokens_out = u.out; log.finish = finish;
        logRequest(cfg, log);
        if (ck) cachePut(cfg, ck, { events: record, served: log.served, provider: slug, model: t.model.id });
        return;
      } catch (e) {
        if (e instanceof HttpError) throw e;
        if (e.kind === 'aborted' || ctx.signal?.aborted) {
          log.status = 499; log.error = 'client disconnected'; log.ms = Date.now() - started;
          logRequest(cfg, log);
          return;
        }
        const kind = e.kind || 'network';
        lastErr = e;
        log.attempts.push({ target: `${slug}/${t.model.id}`, ok: false, kind, status: e.status, ms: Date.now() - t0, error: String(e.message).slice(0, 200) });
        // Same-target retries for fixable problems.
        if (kind === 'bad_request' && !strict) { strict = true; if (e.maxTokens) maxTok = Math.min(maxTok || e.maxTokens, e.maxTokens); continue; }
        if (kind === 'context' && e.maxTokens && (!maxTok || maxTok > e.maxTokens)) { st.recordFailure(slug, t.model.id, t.key.id, 'context', { maxTokens: e.maxTokens, ctx: e.ctx }); maxTok = e.maxTokens; continue; }
        if (kind === 'bad_request' && /stream/i.test(e.message) && streamUp) { st.modelFacts(slug, t.model.id).no_stream = true; streamUp = false; continue; }
        st.recordFailure(slug, t.model.id, t.key.id, kind, { message: e.message, retryAfterMs: e.retryAfterMs, maxTokens: e.maxTokens, ctx: e.ctx });
        if (kind === 'network' || kind === 'timeout' || (kind === 'server' && e.status !== 503)) deadProviders.add(slug);
        if (kind === 'bad_request') badRequests++;
        break;
      }
    }
    // Three different providers rejecting the same request → it's the request.
    if (badRequests >= 3) break;
  }

  log.status = lastErr?.kind === 'bad_request' && badRequests >= 3 ? 400 : 503;
  log.error = lastErr ? `${lastErr.kind}: ${lastErr.message}` : 'no attempt possible';
  log.ms = Date.now() - started;
  logRequest(cfg, log);
  const tried = log.attempts.map((a) => `${a.target} → ${a.kind}${a.status ? ' ' + a.status : ''}`).join('; ');
  if (log.status === 400) throw new HttpError(400, `Providers rejected this request: ${lastErr.message} (tried: ${tried})`, 'invalid_request_error');
  throw new HttpError(503, `All free models failed for this request (tried: ${tried || 'none'}). They usually recover within a minute; adding more providers in the dashboard makes this rarer.`, 'all_failed');
}

function withTimeout(p, ms) {
  let timer;
  return Promise.race([
    p.finally(() => clearTimeout(timer)),
    new Promise((_, rej) => { timer = setTimeout(() => rej(new UpstreamError('timeout', 0, `no response within ${Math.round(ms / 1000)} s`)), ms); }),
  ]);
}

/** Collect a full non-streamed answer from runChat events. */
export async function collect(gen) {
  const out = { text: '', reasoning: '', tools: [], usage: { in: 0, out: 0 }, finish: 'stop', meta: null };
  for await (const ev of gen) {
    if (ev.t === 'meta') out.meta = ev;
    else if (ev.t === 'text') out.text += ev.v;
    else if (ev.t === 'reasoning') out.reasoning += ev.v;
    else if (ev.t === 'tool_start') out.tools[ev.i] = { id: ev.id || 'call_' + uid('', 20), name: ev.name, arguments: '' };
    else if (ev.t === 'tool_args') { if (out.tools[ev.i]) out.tools[ev.i].arguments += ev.v; }
    else if (ev.t === 'usage') out.usage = { in: ev.in, out: ev.out };
    else if (ev.t === 'finish') out.finish = ev.reason;
  }
  out.tools = out.tools.filter(Boolean);
  return out;
}

// ---------- fusion: several drafts, one judged answer ----------

async function* runFusion(cfg, req, ctx, all, log, started) {
  const { list } = eligible(all, req);
  const ranked = rank(list, { profile: 'auto:smart' }, cfg, req);
  // 3 drafts from different providers and different model families.
  const picks = [];
  const fam = (t) => t.model.key.split('-').slice(0, 2).join('-');
  for (const t of ranked) {
    if (picks.length >= 3) break;
    if (picks.some((p) => p.provider.slug === t.provider.slug || fam(p) === fam(t))) continue;
    picks.push(t);
  }
  if (picks.length < 2) {
    yield* runChat(cfg, { ...req, model: 'auto:smart' }, ctx);
    return;
  }
  const drafts = await Promise.all(picks.map(async (t) => {
    try {
      const r = await collect(runChat(cfg, { ...req, model: `${t.provider.slug}/${t.model.id}`, stream: false, tools: undefined }, { ...ctx, endpoint: 'fusion-draft' }));
      return r.text ? { model: `${t.provider.slug}/${t.model.id}`, text: r.text } : null;
    } catch { return null; }
  }));
  const good = drafts.filter(Boolean);
  if (!good.length) throw new HttpError(503, 'Fusion: no draft could be produced right now.', 'all_failed');
  const question = (req.messages || []).filter((m) => m.role === 'user').map((m) => contentText(m.content)).pop() || '';
  const judgeMessages = [
    ...(req.messages || []).slice(0, -1),
    {
      role: 'user',
      content: `${question}\n\n---\nSeveral assistants drafted answers to the request above. Write the single best final answer: keep what is correct, fix mistakes, merge useful details, drop anything wrong. Answer the user directly — do not mention drafts.\n\n` +
        good.map((d, i) => `### Draft ${i + 1}\n${d.text}`).join('\n\n'),
    },
  ];
  log.fusion = good.map((d) => d.model);
  yield* runChat(cfg, { ...req, model: 'auto:smart', messages: judgeMessages }, { ...ctx, endpoint: 'fusion-judge' });
}

// ---------- embeddings ----------

export async function runEmbeddings(cfg, body, ctx = {}) {
  const all = allTargets(cfg, 'embedding');
  if (!all.length) throw new HttpError(503, 'No embedding provider configured. Add a key for Jina AI, Voyage AI, Cohere, NVIDIA or another provider listed with embedding models.', 'no_providers');
  const req = { messages: [], _promptTokens: estimateTokens(body.input) };
  const plan = resolve(cfg, body.model || 'auto', all);
  let ordered = plan.exact?.length ? plan.exact : [];
  if (!plan.exact) {
    ordered = all
      .filter((t) => !st.unavailableReason(t.provider.slug, t.model.id, t.key.id))
      .sort((a, b) => st.health(b.provider.slug, b.model.id, b.key.id).reliability - st.health(a.provider.slug, a.model.id, a.key.id).reliability);
  }
  let last;
  for (const t of ordered.slice(0, cfg.max_attempts || 8)) {
    const t0 = Date.now();
    try {
      const { json } = await callJson(t, '/embeddings', { ...body, model: t.model.id }, { signal: ctx.signal });
      st.recordSuccess(t.provider.slug, t.model.id, t.key.id, { latency: Date.now() - t0, tokensIn: json.usage?.prompt_tokens || req._promptTokens });
      logRequest(cfg, { id: uid('req_', 16), ts: new Date().toISOString(), endpoint: 'embeddings', requested: body.model || 'auto', served: `${t.provider.slug}/${t.model.id}`, status: 200, ms: Date.now() - t0 });
      return { ...json, model: `${t.provider.slug}/${t.model.id}` };
    } catch (e) {
      last = e;
      st.recordFailure(t.provider.slug, t.model.id, t.key.id, e.kind || 'network', { message: e.message, retryAfterMs: e.retryAfterMs });
      if (e.kind === 'bad_request') break;
    }
  }
  throw new HttpError(last?.kind === 'bad_request' ? 400 : 503, `Embeddings failed: ${last?.message || 'no provider available'}`, 'all_failed');
}

// ---------- model listing ----------

export function listModels(cfg, { all = false } = {}) {
  const targets = allTargets(cfg, 'chat');
  const seen = new Map();
  for (const t of targets) {
    const k = t.model.key;
    if (!seen.has(k)) seen.set(k, { id: k, providers: new Set(), ctx: t.model.ctx, vision: t.model.vision, quality: t.model.quality });
    seen.get(k).providers.add(t.provider.slug);
  }
  const created = Math.floor(Date.now() / 1000);
  const data = [
    ...Object.entries(PROFILES).map(([id, d]) => ({ id, object: 'model', created, owned_by: 'free-llm-router', description: d })),
    ...Object.keys(cfg.profiles || {}).map((n) => ({ id: `auto:${n}`, object: 'model', created, owned_by: 'free-llm-router', description: 'custom profile' })),
    ...[...seen.values()].sort((a, b) => b.quality - a.quality).map((m) => ({ id: m.id, object: 'model', created, owned_by: [...m.providers].join(','), context_length: m.ctx, vision: m.vision })),
  ];
  if (all) {
    for (const t of targets) data.push({ id: `${t.provider.slug}/${t.model.id}`, object: 'model', created, owned_by: t.provider.slug, context_length: t.model.ctx });
  }
  return { object: 'list', data };
}

// ---------- guest warm-up ----------

/**
 * Guest (no-key) models come and go. Probe them quietly in the background so the
 * first real request goes straight to one that answers. At most once per 6 h.
 */
export async function probeGuests(cfg) {
  const guests = allTargets(cfg, 'chat').filter((t) => t.key.anonymous);
  const due = guests.filter((t) => Date.now() - (st.modelFacts(t.provider.slug, t.model.id).probed_at || 0) > 6 * 3600e3);
  // One provider at a time per worker, spaced out: guest tiers allow ~1 request/second.
  const byProvider = new Map();
  for (const t of due) {
    if (!byProvider.has(t.provider.slug)) byProvider.set(t.provider.slug, []);
    byProvider.get(t.provider.slug).push(t);
  }
  const probeOne = async (t) => {
    st.modelFacts(t.provider.slug, t.model.id).probed_at = Date.now();
    const t0 = Date.now();
    try {
      const { events } = await callChat(t, buildBody({ messages: [{ role: 'user', content: 'Reply with: OK' }] }, t, { maxTokens: 8 }), { timeoutMs: 30000, connectTimeoutMs: 20000 });
      for await (const _ of events) { /* drain */ }
      st.recordSuccess(t.provider.slug, t.model.id, t.key.id, { latency: Date.now() - t0 });
    } catch (e) {
      st.recordFailure(t.provider.slug, t.model.id, t.key.id, e.kind || 'network', { message: e.message, retryAfterMs: e.retryAfterMs });
    }
  };
  const worker = async (list) => {
    for (const t of list) {
      await probeOne(t);
      await new Promise((r) => setTimeout(r, 1200));
    }
  };
  await Promise.all([...byProvider.values()].map(worker));
  st.saveState();
  return { probed: due.length };
}
