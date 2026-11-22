// Live catalog from free-llm.com: same-day updates, with two fallbacks
// (GitHub mirror, then the snapshot bundled in the package).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PATHS } from './config.js';
import { USER_AGENT, modelKey } from './util.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SNAPSHOT = path.join(HERE, '..', 'catalog.snapshot.json');
const MIRROR = 'https://raw.githubusercontent.com/nejib1/Free-LLM/main/router/catalog.snapshot.json';

// ---------- quality heuristics (a prior; live measurements take over with use) ----------

// Absolute capability tiers for well-known families (first match wins). Models not
// listed fall back to a size-based estimate. Live success/latency data refine this.
const FAMILY_TIERS = [
  [/distill/, 58],
  [/gemini-[\d.]+-pro/, 90],
  [/gpt-5(?![\d.]*-?(nano|mini))/, 88],
  [/deepseek-?v[4-9](?!.*flash)/, 88],
  [/kimi-?k2/, 86],
  [/glm-?5(?!.*(flash|air))/, 85],
  [/qwen-?3\.[5-9].*(397|max|plus)|qwen-?3-?coder-?480|qwen-?3\.[5-9]-?coder/, 85],
  [/deepseek-?v[4-9]/, 80],
  [/deepseek-?(v3|r1|r2)/, 82],
  [/minimax-?m[2-9]/, 80],
  [/qwen-?3.*235/, 80],
  [/glm-?4\.[5-9](?!.*(flash|air))/, 78],
  [/gemini-[\d.]+-flash(?!-lite)/, 78],
  [/gpt-oss-120b/, 76],
  [/mistral-(large|medium)|magistral-medium|devstral-?2/, 76],
  [/glm-?(5|4\.[5-9]).*(flash|air)/, 72],
  [/nemotron.*ultra/, 72],
  [/llama-?4-?maverick/, 70],
  [/codestral|devstral/, 68],
  [/qwen-?3\.[5-9].*122|qwen-?3.*(80|72)b/, 68],
  [/gemini-[\d.]+-flash-lite/, 66],
  [/command-a|nemotron.*super/, 66],
  [/llama-?3\.[13]-?(70|405)b|llama-?3\.3/, 62],
  [/gpt-oss-20b/, 58],
];
const CODING_BONUS = /coder|codestral|devstral|kimi-?k2|glm-?(5|4\.[5-9])|deepseek-?v|minimax-?m|gpt-oss-120b|gpt-5|gemini-[\d.]+-pro/;
const SMALL_PENALTY = /(^|[^a-z])(nano|lite|tiny|mini|small)([^a-z]|$)|(?<![\d.])[0-3](\.\d)?b(?![a-z])/;

function paramsB(s) {
  // "120b", "70b", "8x22b"; MoE active-param suffixes like "a12b" are ignored
  let best = 0;
  for (const m of s.matchAll(/(?<![a-z\d.])(\d+(?:\.\d+)?)(?:x(\d+(?:\.\d+)?))?b(?![a-z])/g)) {
    const n = m[2] ? parseFloat(m[1]) * parseFloat(m[2]) : parseFloat(m[1]);
    if (n > best && n < 3000) best = n;
  }
  return best;
}

/** 0..100 — rough "how capable is this model" prior. */
export function qualityPrior(id, name) {
  const s = `${id} ${name}`.toLowerCase();
  if (/guard|safeguard|ocr/.test(s)) return 5;
  for (const [re, tier] of FAMILY_TIERS) if (re.test(s)) return tier;
  const p = paramsB(s);
  let q = p ? Math.min(64, 14 + Math.log2(p + 1) * 7) : 40;
  if (SMALL_PENALTY.test(s)) q -= 12;
  return Math.max(1, Math.min(100, Math.round(q)));
}

export function codingPrior(id, name) {
  const s = `${id} ${name}`.toLowerCase();
  return qualityPrior(id, name) + (CODING_BONUS.test(s) ? 10 : 0);
}

const REASONING = /reason|think|r1\b|-r2\b|qwq|magistral|gpt-oss|deepseek-?v[4-9]|kimi-?k2\.?[5-9]?-?thinking|nemotron.*reasoning/;

// ---------- loading ----------

let current = null;
let lastFetchAttempt = 0;
let lastError = null;

async function fetchJson(url) {
  const r = await fetch(url, { headers: { 'user-agent': USER_AGENT, accept: 'application/json' }, signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error(`HTTP ${r.status} from ${url}`);
  const d = await r.json();
  if (!Array.isArray(d.providers) || !d.providers.length) throw new Error(`No providers in ${url}`);
  return d;
}

function readFileJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

export function buildIndex(raw, source) {
  const providers = new Map();
  const models = [];
  for (const p of raw.providers || []) {
    const base = p.openai_base_url || (p.openai_compatible !== false ? p.base_url : null);
    const prov = {
      slug: p.slug,
      name: p.name,
      type: p.type,
      base: base ? base.replace(/\/+$/, '') : null,
      usable: Boolean(base) && p.openai_compatible !== false && p.type !== 'Local',
      needs: p.needs || [],
      anonymousKey: p.anonymous_key ?? null,
      signup: p.signup_requirement || null,
      category: p.category || null,
      freeTier: p.free_tier || null,
      verified: Boolean(p.verified),
      rateLimit: p.rate_limit || null,
      dailyLimit: p.daily_limit || null,
      credits: p.credits || null,
      website: p.website || null,
      helpUrl: p.key_help_url || p.url || `https://free-llm.com/provider/${p.slug}`,
      models: [],
    };
    for (const m of p.models || []) {
      if (!m.id) continue;
      const model = {
        provider: p.slug,
        id: m.id,
        name: m.name || m.id,
        key: m.key || modelKey(m.name || m.id),
        kind: m.kind || 'chat',
        vision: Boolean(m.vision),
        ctx: m.context_tokens || null,
        reasoning: REASONING.test(`${m.id} ${m.name}`.toLowerCase()),
        quality: qualityPrior(m.id, m.name || ''),
        coding: codingPrior(m.id, m.name || ''),
      };
      prov.models.push(model);
      models.push(model);
    }
    providers.set(p.slug, prov);
  }
  return {
    source,
    updatedAt: raw.updated_at || null,
    generatedAt: raw.generated_at || null,
    loadedAt: new Date().toISOString(),
    providers,
    models,
  };
}

/** Load from disk cache immediately (fast start), then refresh from the network. */
export async function loadCatalog(cfg, { force = false } = {}) {
  if (!current) {
    const cached = readFileJson(PATHS.catalog);
    const snap = readFileJson(SNAPSHOT);
    if (cached) current = buildIndex(cached, 'cache');
    else if (snap) current = buildIndex(snap, 'bundled snapshot');
  }
  const maxAge = (cfg.catalog?.refresh_hours ?? 6) * 3600e3;
  let age = Infinity;
  try { age = Date.now() - fs.statSync(PATHS.catalog).mtimeMs; } catch { /* none yet */ }
  if (force || age > maxAge || !current || current.source === 'bundled snapshot') {
    await refreshCatalog(cfg);
  }
  if (!current) throw new Error(`Could not load the model catalog: ${lastError}`);
  return current;
}

export async function refreshCatalog(cfg) {
  lastFetchAttempt = Date.now();
  const urls = [cfg.catalog?.url || 'https://free-llm.com/catalog.json', MIRROR];
  for (const url of urls) {
    try {
      const raw = await fetchJson(url);
      fs.writeFileSync(PATHS.catalog, JSON.stringify(raw));
      current = buildIndex(raw, url.includes('free-llm.com') ? 'free-llm.com (live)' : url === MIRROR ? 'GitHub mirror' : 'custom catalog');
      lastError = null;
      return current;
    } catch (e) {
      lastError = e.message;
    }
  }
  return current;
}

export function catalog() {
  return current;
}

export function catalogStatus() {
  return {
    source: current?.source || null,
    updated_at: current?.updatedAt || null,
    loaded_at: current?.loadedAt || null,
    providers: current?.providers.size || 0,
    models: current?.models.length || 0,
    last_fetch_attempt: lastFetchAttempt ? new Date(lastFetchAttempt).toISOString() : null,
    last_error: lastError,
  };
}

/** Background refresh loop. */
export function startCatalogRefresh(cfg, onUpdate) {
  const every = Math.max(1, cfg.catalog?.refresh_hours ?? 6) * 3600e3;
  const t = setInterval(async () => {
    const before = current?.generatedAt;
    await refreshCatalog(cfg);
    if (current?.generatedAt !== before && onUpdate) onUpdate(current);
  }, every);
  t.unref();
  return t;
}

const SIGNUP_PENALTY = { no: 0, registration: 3, phone_verification: 8, credit_card: 30 };

// Our own judgement of which free tiers are worth signing up for first:
// how well known and trusted the provider is, how generous and stable its
// free plan has been, and how good its free models are in practice.
const POPULARITY = {
  'google-ai-studio': 100, 'groq-cloud': 95, openrouter: 95, cerebras: 85, 'mistral-ai': 85,
  'nvidia-nim': 80, 'cloudflare-workers-ai': 75, cohere: 70, 'z-ai': 65, 'kilo-gateway': 55,
  scaleway: 55, 'vercel-ai-gateway': 50, 'ovh-ai': 50, modelscope: 50, 'qwen-alibaba': 50,
  'fireworks-ai': 50, freeinference: 45, 'llm7-io': 45, siliconflow: 45, 'novita-ai': 45,
  hyperbolic: 45, requesty: 45, 'ollama-cloud': 40, 'zhipu-bigmodel': 40,
};

/** "Which free provider should I sign up for first?" */
export function recommendScore(p) {
  const chat = p.models.filter((m) => m.kind === 'chat');
  if (!p.usable || !chat.length) return -1;
  const best = Math.max(...chat.map((m) => m.quality));
  return (POPULARITY[p.slug] ?? 20) * 0.6 + best * 0.3 + Math.min(10, chat.length) - (SIGNUP_PENALTY[p.signup] ?? 5) - (p.category === 'trial_credit' ? 25 : 0);
}
