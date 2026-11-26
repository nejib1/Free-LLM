// HTTP server: OpenAI / Anthropic / Responses / Ollama / MCP surfaces + dashboard + admin API.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';
import { loadConfig, saveConfig, addKey, removeKey, providerCfg, providerKeys, providerAccountId, blockedKeys, hostOf, PATHS, STRATEGIES } from './config.js';
import { loadCatalog, catalog, catalogStatus, refreshCatalog, startCatalogRefresh, recommendScore } from './catalog.js';
import * as st from './state.js';
import { allTargets, listModels, recentRequests, runEmbeddings, PROFILES, cacheStats, cacheClear, probeGuests } from './router.js';
import { handleChat, handleCompletions } from './adapters/openai.js';
import { handleMessages, handleCountTokens, anthropicError } from './adapters/anthropic.js';
import { handleResponses, handleGetResponse } from './adapters/responses.js';
import { handleOllama } from './adapters/ollama.js';
import { handleMcp } from './mcp.js';
import { testKey } from './upstream.js';
import { snippets, urls, sshTunnelHint } from './setup.js';
import { readJson, sendJson, HttpError, VERSION, uid } from './util.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DASHBOARD = path.join(HERE, '..', 'public', 'dashboard.html');
const STARTED = Date.now();

function safeEqual(a, b) {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

function bearer(req) {
  const h = req.headers.authorization || '';
  if (/^bearer\s+/i.test(h)) return h.replace(/^bearer\s+/i, '').trim();
  return req.headers['x-api-key'] || req.headers['api-key'] || req.headers['x-goog-api-key'] || null;
}

function isLoopback(req) {
  const a = req.socket.remoteAddress || '';
  return a === '127.0.0.1' || a === '::1' || a === '::ffff:127.0.0.1';
}

/** Host header check against DNS-rebinding when the dashboard embeds the key. */
function isLocalHost(req) {
  const host = String(req.headers.host || '').replace(/:\d+$/, '').replace(/^\[|\]$/g, '');
  return ['localhost', '127.0.0.1', '::1'].includes(host);
}

function foreignOrigin(req) {
  const o = req.headers.origin;
  if (!o) return false;
  try { return !['localhost', '127.0.0.1', '[::1]'].includes(new URL(o).hostname); } catch { return true; }
}

function maskKey(v) {
  if (!v) return '';
  if (v.length <= 10) return '••••';
  return `${v.slice(0, 4)}…${v.slice(-4)}`;
}

function errorFor(style, res, status, message, type) {
  if (res.headersSent) {
    try {
      if (style === 'anthropic') res.write(`event: error\ndata: ${JSON.stringify({ type: 'error', error: { type: 'api_error', message } })}\n\n`);
      else res.write(`data: ${JSON.stringify({ error: { message, type: type || 'server_error' } })}\n\n`);
      res.end();
    } catch { /* socket gone */ }
    return;
  }
  if (style === 'anthropic') return anthropicError(res, status, message, type);
  if (style === 'ollama') return sendJson(res, status, { error: message });
  sendJson(res, status, { error: { message, type: type || (status >= 500 ? 'server_error' : 'invalid_request_error'), code: type || null } });
}

// ---------- admin API ----------

function providerView(cfg, prov) {
  const pc = cfg.providers[prov.slug] || {};
  const host = hostOf(prov.base);
  const blocked = new Map(blockedKeys(cfg, prov.slug, host).map((b) => [b.id, b]));
  const keys = (pc.keys || []).map((k) => {
    let v = '';
    try { v = providerKeys(cfg, prov.slug).find((x) => x.id === k.id)?.value || ''; } catch { /* ignore */ }
    const rate = st.keyRate(prov.slug, k.id);
    const b = blocked.get(k.id);
    const invalid = b ? `blocked for your safety: this key is locked to ${b.pinned}, but the provider address is now ${b.now}` : rate?.invalid_until > Date.now() ? rate.invalid_reason : null;
    return { id: k.id, label: k.label || '', masked: maskKey(v), added_at: k.added_at, sent_to: k.host || host, invalid, rate: rate?.rl || null };
  });
  const chat = prov.models.filter((m) => m.kind === 'chat');
  return {
    slug: prov.slug, name: prov.name, type: prov.type, usable: prov.usable, signup: prov.signup, category: prov.category,
    free_tier: prov.freeTier, verified: prov.verified, rate_limit: prov.rateLimit, daily_limit: prov.dailyLimit, credits: prov.credits,
    website: prov.website, help_url: prov.helpUrl, needs: prov.needs, has_account_id: Boolean(pc.account_id), sends_to: hostOf(prov.base),
    guest: prov.anonymousKey !== null, guest_enabled: pc.guest !== false,
    enabled: pc.enabled !== false, keys,
    models: prov.models.length, chat_models: chat.length, top_quality: Math.max(0, ...chat.map((m) => m.quality)), score: recommendScore(prov),
    kinds: [...new Set(prov.models.map((m) => m.kind))],
  };
}

function modelsView(cfg) {
  const targets = allTargets(cfg, 'chat');
  const byModel = new Map();
  for (const t of targets) {
    const id = `${t.provider.slug}/${t.model.id}`;
    if (!byModel.has(id)) {
      byModel.set(id, { id, provider: t.provider.slug, provider_name: t.provider.name, model: t.model.id, name: t.model.name, key: t.model.key, quality: t.model.quality, coding: t.model.coding, ctx: t.model.ctx, vision: t.model.vision, reasoning: t.model.reasoning, guest: t.key.anonymous, status: null, health: null });
    }
    const m = byModel.get(id);
    const why = st.unavailableReason(t.provider.slug, t.model.id, t.key.id);
    const h = st.health(t.provider.slug, t.model.id, t.key.id);
    if (!why) m.status = 'ok';
    else if (m.status !== 'ok') m.status = why;
    if (!m.health || h.uses > m.health.uses) m.health = h;
  }
  // disabled ones too, so they can be re-enabled
  const cat = catalog();
  for (const [slug, pc] of Object.entries(cfg.providers)) {
    for (const mid of pc.disabled_models || []) {
      const prov = cat?.providers.get(slug);
      const model = prov?.models.find((x) => x.id === mid);
      if (model) byModel.set(`${slug}/${mid}`, { id: `${slug}/${mid}`, provider: slug, provider_name: prov.name, model: mid, name: model.name, key: model.key, quality: model.quality, coding: model.coding, ctx: model.ctx, vision: model.vision, reasoning: model.reasoning, status: 'disabled', disabled: true, health: null });
    }
  }
  return [...byModel.values()].sort((a, b) => b.quality - a.quality);
}

function settingsView(cfg) {
  const { strategy, sticky_minutes, max_attempts, request_timeout_s, first_token_timeout_s, strip_think_tags, fallback_to_auto, cache, ollama, mcp, log_requests, chain, aliases, profiles, host, port, catalog: c } = cfg;
  return { strategy, strategies: STRATEGIES, sticky_minutes, max_attempts, request_timeout_s, first_token_timeout_s, strip_think_tags, fallback_to_auto, cache, ollama, mcp, log_requests, chain, aliases, profiles: profiles || {}, host, port, catalog: c };
}

async function admin(cfg, req, res, p, body) {
  const m = req.method;
  if (p === 'status' && m === 'GET') {
    const targets = allTargets(cfg, 'chat');
    const providersWithKeys = Object.entries(cfg.providers).filter(([, v]) => v.enabled !== false && v.keys?.length).length;
    const healthy = targets.filter((t) => !st.unavailableReason(t.provider.slug, t.model.id, t.key.id)).length;
    const u = urls(cfg);
    return sendJson(res, 200, {
      version: VERSION, uptime_s: Math.round((Date.now() - STARTED) / 1000), base_url: u.v1, root_url: u.root, api_key: cfg.api_key,
      home: PATHS.home, catalog: catalogStatus(), providers_with_keys: providersWithKeys,
      guest_mode: targets.length > 0 && targets.every((t) => t.key.anonymous),
      targets: targets.length, healthy_targets: healthy, models: new Set(targets.map((t) => t.model.key)).size,
      today: st.stats(1).totals, strategy: cfg.strategy, profiles: PROFILES, cache: cacheStats(),
    });
  }
  if (p === 'providers' && m === 'GET') {
    const cat = catalog();
    return sendJson(res, 200, { providers: [...cat.providers.values()].map((pv) => providerView(cfg, pv)) });
  }
  if (p === 'keys' && m === 'POST') {
    const slug = String(body.provider || '');
    const prov = catalog()?.providers.get(slug);
    if (!prov) throw new HttpError(404, `Unknown provider '${slug}'`);
    if (!body.key && !body.account_id) throw new HttpError(400, 'key is required');
    if (body.account_id) providerCfg(cfg, slug).account_id = String(body.account_id).trim();
    let id = null;
    if (body.key) id = addKey(cfg, slug, body.key, body.label || '');
    saveConfig(cfg);
    let test = null;
    if (id && prov.usable) {
      const value = providerKeys(cfg, slug, hostOf(prov.base)).find((k) => k.id === id)?.value;
      const model = prov.models.find((x) => x.kind === 'chat') || prov.models[0];
      if (model) test = await testKey({ provider: prov, model, key: { id, value, anonymous: false }, accountId: providerAccountId(cfg, slug) });
      if (test && test.ok) st.clearKeyState(slug, id);
    }
    return sendJson(res, 200, { ok: true, id, test });
  }
  if (p === 'keys' && m === 'DELETE') {
    removeKey(cfg, body.provider, body.id);
    if (body.id) st.clearKeyState(body.provider, body.id);
    saveConfig(cfg);
    return sendJson(res, 200, { ok: true });
  }
  if (p === 'keys/test' && m === 'POST') {
    const prov = catalog()?.providers.get(body.provider);
    if (!prov) throw new HttpError(404, 'Unknown provider');
    const keys = providerKeys(cfg, prov.slug, hostOf(prov.base)).filter((k) => !body.id || k.id === body.id);
    const model = prov.models.find((x) => x.kind === 'chat') || prov.models[0];
    const results = [];
    for (const k of keys) {
      const r = await testKey({ provider: prov, model, key: { ...k, anonymous: false }, accountId: providerAccountId(cfg, prov.slug) });
      if (r.ok) st.clearKeyState(prov.slug, k.id);
      results.push({ id: k.id, ...r });
    }
    return sendJson(res, 200, { results });
  }
  if (p === 'providers/toggle' && m === 'POST') {
    const pc = providerCfg(cfg, body.provider);
    if (body.guest !== undefined) pc.guest = Boolean(body.guest);
    else pc.enabled = Boolean(body.enabled);
    saveConfig(cfg);
    return sendJson(res, 200, { ok: true });
  }
  if (p === 'models' && m === 'GET') return sendJson(res, 200, { models: modelsView(cfg) });
  if (p === 'models/toggle' && m === 'POST') {
    const pc = providerCfg(cfg, body.provider);
    pc.disabled_models = (pc.disabled_models || []).filter((x) => x !== body.model);
    if (body.enabled === false) pc.disabled_models.push(body.model);
    saveConfig(cfg);
    return sendJson(res, 200, { ok: true });
  }
  if (p === 'settings' && m === 'GET') return sendJson(res, 200, settingsView(cfg));
  if (p === 'settings' && m === 'POST') {
    const allowed = ['strategy', 'sticky_minutes', 'max_attempts', 'request_timeout_s', 'first_token_timeout_s', 'strip_think_tags', 'fallback_to_auto', 'log_requests', 'chain', 'aliases', 'profiles', 'host', 'port'];
    for (const k of allowed) if (body[k] !== undefined) cfg[k] = body[k];
    if (body.cache) cfg.cache = { ...cfg.cache, ...body.cache };
    if (body.ollama) cfg.ollama = { ...cfg.ollama, ...body.ollama };
    if (body.mcp) cfg.mcp = { ...cfg.mcp, ...body.mcp };
    if (!STRATEGIES.includes(cfg.strategy)) cfg.strategy = 'balanced';
    if (cfg.cache && !cfg.cache.enabled) cacheClear();
    saveConfig(cfg);
    return sendJson(res, 200, { ok: true, settings: settingsView(cfg), restart_needed: body.host !== undefined || body.port !== undefined });
  }
  if (p === 'stats' && m === 'GET') {
    const days = Number(new URL(req.url, 'http://x').searchParams.get('days') || 7);
    return sendJson(res, 200, st.stats(Math.min(31, Math.max(1, days))));
  }
  if (p === 'health' && m === 'GET') return sendJson(res, 200, { targets: st.healthSnapshot() });
  if (p === 'logs' && m === 'GET') {
    const n = Number(new URL(req.url, 'http://x').searchParams.get('n') || 100);
    return sendJson(res, 200, { requests: recentRequests(Math.min(300, n)) });
  }
  if (p === 'catalog/refresh' && m === 'POST') {
    await refreshCatalog(cfg);
    return sendJson(res, 200, { ok: true, catalog: catalogStatus() });
  }
  if (p === 'reset-cooldowns' && m === 'POST') { st.resetCooldowns(); return sendJson(res, 200, { ok: true }); }
  if (p === 'setup' && m === 'GET') return sendJson(res, 200, { snippets: snippets(cfg) });
  if (p === 'api-key/rotate' && m === 'POST') {
    cfg.api_key = 'fllm-' + uid('', 40);
    saveConfig(cfg);
    return sendJson(res, 200, { ok: true, api_key: cfg.api_key });
  }
  throw new HttpError(404, `Unknown admin endpoint ${m} /admin/api/${p}`);
}

// ---------- main handler ----------

export async function startServer({ port, host, quiet } = {}) {
  const cfg = loadConfig();
  if (port) cfg.port = Number(port);
  if (host) cfg.host = host;
  st.loadState();
  st.startStateAutosave();
  await loadCatalog(cfg);
  startCatalogRefresh(cfg);

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://local');
    let p = url.pathname.replace(/\/+$/, '') || '/';
    // Tolerate clients that put /v1 twice or omit it for Anthropic.
    p = p.replace(/^\/v1\/v1\//, '/v1/');
    const style = p.startsWith('/api/') ? 'ollama' : (p === '/v1/messages' || p.startsWith('/v1/messages/')) ? 'anthropic' : 'openai';
    const ac = new AbortController();
    res.on('close', () => { if (!res.writableEnded) ac.abort(); });
    const ctx = { signal: ac.signal, client: String(req.headers['user-agent'] || '').slice(0, 80) };

    // CORS only on API routes — never on the dashboard page, which embeds the key.
    const isPage = p === '/' || p === '/dashboard';
    if (!isPage) res.setHeader('access-control-allow-origin', '*');
    res.setHeader('access-control-allow-headers', 'authorization, content-type, x-api-key, anthropic-version, anthropic-beta, openai-organization, x-stainless-arch, x-stainless-os, x-stainless-lang, x-stainless-package-version, x-stainless-runtime, x-stainless-runtime-version, x-stainless-retry-count, x-stainless-timeout, mcp-protocol-version, mcp-session-id');
    res.setHeader('access-control-allow-methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('x-powered-by', `free-llm-router/${VERSION}`);
    if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

    try {
      // ---- public ----
      if (p === '/health' || p === '/healthz') return sendJson(res, 200, { ok: true, version: VERSION, uptime_s: Math.round((Date.now() - STARTED) / 1000) });
      if (p === '/' || p === '/dashboard') {
        let html = fs.readFileSync(DASHBOARD, 'utf8');
        const trusted = isLoopback(req) && isLocalHost(req) && !foreignOrigin(req) && req.headers['sec-fetch-site'] !== 'cross-site';
        html = html.replace('__BOOT__', JSON.stringify({ key: trusted ? cfg.api_key : null, version: VERSION }).replace(/</g, '\\u003c'));
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-frame-options': 'DENY', 'referrer-policy': 'no-referrer' });
        res.end(html);
        return;
      }
      if (p === '/favicon.ico') { res.writeHead(204); res.end(); return; }
      // Ollama clients probe "/" and "/api/version" without auth.
      if (cfg.ollama?.enabled !== false && (p === '/api/version' || (p === '/api/tags' && req.method === 'GET' && isLoopback(req)))) {
        return await handleOllama(cfg, p, req.method, {}, res, ctx);
      }

      // ---- auth ----
      const key = bearer(req);
      if (!key || !safeEqual(key, cfg.api_key)) {
        // Local Ollama-style clients often can't send a key: allow them from loopback only.
        // A browser tab on another site would send its Origin: refuse those.
        const ollamaLocal = p.startsWith('/api/') && cfg.ollama?.enabled !== false && isLoopback(req) && isLocalHost(req) && !foreignOrigin(req);
        if (!ollamaLocal) {
          return errorFor(style, res, 401, `Missing or wrong API key. Use the router key shown in the dashboard (${urls(cfg).root}) or in ${PATHS.config}.`, 'authentication_error');
        }
      }

      if (p.startsWith('/admin/api/')) {
        const body = req.method === 'GET' ? {} : await readJson(req);
        return await admin(cfg, req, res, p.slice('/admin/api/'.length), body);
      }

      if (req.method === 'GET' && (p === '/v1/models' || p === '/models')) return sendJson(res, 200, listModels(cfg, { all: url.searchParams.has('all') }));
      if (req.method === 'GET' && p.startsWith('/v1/models/')) {
        const id = decodeURIComponent(p.slice('/v1/models/'.length));
        const m = listModels(cfg, { all: true }).data.find((x) => x.id === id);
        return m ? sendJson(res, 200, m) : sendJson(res, 404, { error: { message: `Model '${id}' not found`, type: 'invalid_request_error' } });
      }
      if (req.method === 'GET' && p.startsWith('/v1/responses/')) return handleGetResponse(p.split('/')[3], res);

      if (req.method !== 'POST' && p !== '/mcp') return errorFor(style, res, 405, `Use POST for ${p}`);
      const body = await readJson(req);

      switch (p) {
        case '/v1/chat/completions':
        case '/chat/completions':
          return await handleChat(cfg, body, res, ctx);
        case '/v1/completions':
        case '/completions':
          return await handleCompletions(cfg, body, res, ctx);
        case '/v1/responses':
        case '/responses':
          return await handleResponses(cfg, body, res, ctx);
        case '/v1/messages':
          return await handleMessages(cfg, body, res, ctx);
        case '/v1/messages/count_tokens':
          return handleCountTokens(body, res);
        case '/v1/embeddings':
        case '/embeddings':
          return sendJson(res, 200, await runEmbeddings(cfg, body, ctx));
        case '/mcp':
          if (cfg.mcp?.enabled === false) return errorFor(style, res, 404, 'MCP is disabled in settings');
          return await handleMcp(cfg, req, res, body, ctx);
        default:
          if (p.startsWith('/api/') && cfg.ollama?.enabled !== false) return await handleOllama(cfg, p, req.method, body, res, ctx);
          return errorFor(style, res, 404, `Unknown endpoint ${req.method} ${p}. See ${urls(cfg).root} for the list.`);
      }
    } catch (e) {
      const status = e.status || 500;
      if (status >= 500 && !(e instanceof HttpError)) console.error('[free-llm] internal error:', e);
      errorFor(style, res, status, e.message || String(e), e.type);
    }
  });

  server.requestTimeout = 0; // long agent turns
  server.headersTimeout = 60000;
  server.keepAliveTimeout = 65000;

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(cfg.port, cfg.host, resolve);
  });
  try { fs.writeFileSync(PATHS.pid, String(process.pid)); } catch { /* ignore */ }
  const shutdown = () => {
    st.saveState();
    try { fs.unlinkSync(PATHS.pid); } catch { /* ignore */ }
    server.close();
    process.exit(0);
  };
  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);
  if (!quiet) printBanner(cfg);
  if (!quiet) probeGuests(cfg).catch(() => {});
  return { server, cfg };
}

function printBanner(cfg) {
  const u = urls(cfg);
  const targets = allTargets(cfg, 'chat');
  const guest = targets.length && targets.every((t) => t.key.anonymous);
  const provs = new Set(targets.filter((t) => !t.key.anonymous).map((t) => t.provider.slug)).size;
  const c = catalogStatus();
  const lines = [
    '',
    `  ⚡ Free-LLM Router ${VERSION} is running`,
    '',
    `  Dashboard   ${u.root}`,
    `  OpenAI API  ${u.v1}`,
    `  API key     ${cfg.api_key}`,
    '',
    `  Catalog     ${c.providers} providers · ${c.models} models (${c.source})`,
    !targets.length
      ? `  Next step   add your first free key (1 minute, most need no card): ${u.root}/#keys  or  free-llm providers`
      : guest
      ? '  Mode        guest — works now with no keys, but slowly. Add free keys in the dashboard for real speed.'
      : `  Your keys   ${provs} provider${provs === 1 ? '' : 's'} · ${new Set(targets.map((t) => t.model.key)).size} models ready`,
    '',
    '  Use it with:  free-llm setup claude | codex | opencode | aider   (or see the dashboard → Connect)',
    '',
  ];
  const tunnel = sshTunnelHint(cfg);
  if (tunnel) {
    lines.push(
      '  Over SSH?    the dashboard only answers on this machine. On your own computer, run:',
      `              ${tunnel.command}`,
      `              then open ${tunnel.url}   (or share it on your network: free-llm start --host 0.0.0.0)`,
      '',
    );
  }
  console.log(lines.join('\n'));
}
