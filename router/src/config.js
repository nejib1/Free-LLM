// Config + encrypted key storage, all under ~/.free-llm (or $FREE_LLM_HOME).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { uid } from './util.js';

export const HOME = process.env.FREE_LLM_HOME || path.join(os.homedir(), '.free-llm');
export const PATHS = {
  home: HOME,
  config: path.join(HOME, 'config.json'),
  masterKey: path.join(HOME, 'master.key'),
  catalog: path.join(HOME, 'catalog.json'),
  state: path.join(HOME, 'state.json'),
  log: path.join(HOME, 'requests.jsonl'),
  pid: path.join(HOME, 'router.pid'),
  backups: path.join(HOME, 'backups'),
};

export const STRATEGIES = ['balanced', 'smart', 'fast', 'spread', 'order'];

export const DEFAULTS = {
  version: 1,
  host: '127.0.0.1',
  port: 4000,
  api_key: null, // generated on first run
  strategy: 'balanced',
  sticky_minutes: 30,
  max_attempts: 8,
  request_timeout_s: 300,
  first_token_timeout_s: 60,
  strip_think_tags: true,
  fallback_to_auto: true,
  catalog: { url: 'https://free-llm.com/catalog.json', refresh_hours: 6 },
  cache: { enabled: false, ttl_seconds: 3600, max_entries: 500 },
  ollama: { enabled: true },
  mcp: { enabled: true },
  log_requests: true,
  // Map what agents ask for ("claude-sonnet-4-5", "gpt-5-codex") to a router profile.
  aliases: {
    'claude-*opus*': 'auto:smart',
    'claude-*sonnet*': 'auto:coding',
    'claude-*haiku*': 'auto:fast',
    'claude-*': 'auto:coding',
    'gpt-*codex*': 'auto:coding',
    'gpt-*mini*': 'auto:fast',
    'gpt-*nano*': 'auto:fast',
    'gpt-*': 'auto',
    'o1*': 'auto:smart',
    'o3*': 'auto:smart',
    'o4*': 'auto:smart',
    'default': 'auto',
  },
  chain: [], // ["groq-cloud/openai/gpt-oss-120b", ...] used by strategy "order" and as preference
  providers: {}, // slug → { enabled, keys: [{id,label,value,added_at}], account_id, disabled_models: [] }
};

function ensureHome() {
  fs.mkdirSync(HOME, { recursive: true, mode: 0o700 });
  fs.mkdirSync(PATHS.backups, { recursive: true, mode: 0o700 });
}

// ---------- encryption (AES-256-GCM) ----------

let masterKeyCache = null;
function masterKey() {
  if (masterKeyCache) return masterKeyCache;
  if (process.env.FREE_LLM_MASTER_KEY) {
    masterKeyCache = crypto.createHash('sha256').update(process.env.FREE_LLM_MASTER_KEY).digest();
    return masterKeyCache;
  }
  ensureHome();
  if (!fs.existsSync(PATHS.masterKey)) {
    fs.writeFileSync(PATHS.masterKey, crypto.randomBytes(32).toString('base64'), { mode: 0o600 });
  }
  masterKeyCache = Buffer.from(fs.readFileSync(PATHS.masterKey, 'utf8').trim(), 'base64');
  return masterKeyCache;
}

export function encrypt(plain) {
  const iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('aes-256-gcm', masterKey(), iv);
  const ct = Buffer.concat([c.update(String(plain), 'utf8'), c.final()]);
  return `enc:v1:${iv.toString('base64')}:${c.getAuthTag().toString('base64')}:${ct.toString('base64')}`;
}

export function decrypt(value) {
  if (typeof value !== 'string' || !value.startsWith('enc:v1:')) return value;
  const [, , iv, tag, ct] = value.split(':');
  const d = crypto.createDecipheriv('aes-256-gcm', masterKey(), Buffer.from(iv, 'base64'));
  d.setAuthTag(Buffer.from(tag, 'base64'));
  return Buffer.concat([d.update(Buffer.from(ct, 'base64')), d.final()]).toString('utf8');
}

// ---------- load / save ----------

function deepMerge(base, over) {
  if (Array.isArray(base) || Array.isArray(over) || typeof base !== 'object' || typeof over !== 'object' || !base || !over) {
    return over === undefined ? base : over;
  }
  const out = { ...base };
  for (const [k, v] of Object.entries(over)) out[k] = k in base ? deepMerge(base[k], v) : v;
  return out;
}

export function configExists() {
  return fs.existsSync(PATHS.config);
}

export function loadConfig() {
  ensureHome();
  let raw = {};
  if (fs.existsSync(PATHS.config)) {
    try {
      raw = JSON.parse(fs.readFileSync(PATHS.config, 'utf8'));
    } catch (e) {
      throw new Error(`Cannot read ${PATHS.config}: ${e.message}`);
    }
  }
  const cfg = deepMerge(structuredClone(DEFAULTS), raw);
  // Aliases: user entries win, but keep defaults for anything not overridden.
  cfg.aliases = { ...DEFAULTS.aliases, ...(raw.aliases || {}) };
  let changed = false;
  if (!cfg.api_key) {
    cfg.api_key = 'fllm-' + uid('', 40);
    changed = true;
  }
  if (process.env.FREE_LLM_API_KEY) cfg.api_key = process.env.FREE_LLM_API_KEY;
  if (process.env.FREE_LLM_PORT) cfg.port = Number(process.env.FREE_LLM_PORT);
  if (process.env.FREE_LLM_HOST) cfg.host = process.env.FREE_LLM_HOST;
  if (importEnvKeys(cfg)) changed = true;
  if (changed) saveConfig(cfg);
  return cfg;
}

export function saveConfig(cfg) {
  ensureHome();
  const out = structuredClone(cfg);
  for (const p of Object.values(out.providers || {})) {
    for (const k of p.keys || []) if (k.value && !String(k.value).startsWith('enc:v1:')) k.value = encrypt(k.value);
    if (p.account_id && !String(p.account_id).startsWith('enc:v1:')) p.account_id = encrypt(p.account_id);
  }
  const tmp = PATHS.config + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(out, null, 2), { mode: 0o600 });
  fs.renameSync(tmp, PATHS.config);
}

// ---------- keys ----------

export function providerCfg(cfg, slug) {
  if (!cfg.providers[slug]) cfg.providers[slug] = { enabled: true, keys: [], disabled_models: [] };
  const p = cfg.providers[slug];
  p.keys ||= [];
  p.disabled_models ||= [];
  if (p.enabled === undefined) p.enabled = true;
  return p;
}

/**
 * Decrypted keys for a provider: [{id, label, value, host}].
 * Safety: each key is pinned to the provider's domain the first time it is used.
 * Pass the provider's current domain as `host`: keys pinned to another domain are
 * left out, so a changed (or tampered) catalog can never send a key elsewhere.
 */
export function providerKeys(cfg, slug, host = null) {
  const p = cfg.providers[slug];
  if (!p || p.enabled === false) return [];
  const out = [];
  let pinned = false;
  for (const k of p.keys || []) {
    if (host && !k.host) { k.host = host; pinned = true; }
    if (host && k.host !== host) continue;
    try {
      out.push({ id: k.id, label: k.label || '', value: decrypt(k.value), host: k.host || null });
    } catch {
      // wrong master key → skip silently, doctor reports it
    }
  }
  if (pinned) saveConfig(cfg);
  return out;
}

/** Keys that are blocked because the provider's address no longer matches their pinned domain. */
export function blockedKeys(cfg, slug, host) {
  return (cfg.providers[slug]?.keys || []).filter((k) => host && k.host && k.host !== host).map((k) => ({ id: k.id, pinned: k.host, now: host }));
}

/** Domain a provider's requests go to (what keys are pinned to). */
export function hostOf(baseUrl) {
  try { return new URL(String(baseUrl).replace('{account_id}', 'x')).host.toLowerCase(); } catch { return null; }
}

export function providerAccountId(cfg, slug) {
  const v = cfg.providers[slug]?.account_id;
  if (!v) return null;
  try { return decrypt(v); } catch { return null; }
}

export function addKey(cfg, slug, value, label = '') {
  const p = providerCfg(cfg, slug);
  const v = String(value).trim();
  for (const k of p.keys) {
    try { if (decrypt(k.value) === v) return k.id; } catch { /* ignore */ }
  }
  const id = uid('k_', 10);
  p.keys.push({ id, label, value: v, added_at: new Date().toISOString() });
  p.enabled = true;
  return id;
}

export function removeKey(cfg, slug, keyId) {
  const p = cfg.providers[slug];
  if (!p) return false;
  const before = p.keys.length;
  p.keys = keyId ? p.keys.filter((k) => k.id !== keyId) : [];
  return p.keys.length !== before;
}

/** Well-known environment variable names → catalog slug. */
export const ENV_KEYS = {
  GROQ_API_KEY: 'groq-cloud',
  GEMINI_API_KEY: 'google-ai-studio',
  GOOGLE_API_KEY: 'google-ai-studio',
  MISTRAL_API_KEY: 'mistral-ai',
  OPENROUTER_API_KEY: 'openrouter',
  CEREBRAS_API_KEY: 'cerebras',
  COHERE_API_KEY: 'cohere',
  CO_API_KEY: 'cohere',
  NVIDIA_API_KEY: 'nvidia-nim',
  NVIDIA_NIM_API_KEY: 'nvidia-nim',
  CLOUDFLARE_API_TOKEN: 'cloudflare-workers-ai',
  ZAI_API_KEY: 'z-ai',
  HF_TOKEN: 'huggingface-inference',
  HUGGINGFACE_API_KEY: 'huggingface-inference',
  SAMBANOVA_API_KEY: 'sambanova',
  FIREWORKS_API_KEY: 'fireworks-ai',
  TOGETHER_API_KEY: 'together-ai',
  DEEPINFRA_API_KEY: 'deepinfra',
  NOVITA_API_KEY: 'novita-ai',
  SCALEWAY_API_KEY: 'scaleway',
  MODELSCOPE_API_KEY: 'modelscope',
  SILICONFLOW_API_KEY: 'siliconflow',
  DASHSCOPE_API_KEY: 'qwen-alibaba',
  OVH_AI_ENDPOINTS_ACCESS_TOKEN: 'ovh-ai',
  LLM7_API_KEY: 'llm7-io',
  KILO_API_KEY: 'kilo-gateway',
  VERCEL_AI_GATEWAY_API_KEY: 'vercel-ai-gateway',
  AI_GATEWAY_API_KEY: 'vercel-ai-gateway',
  REQUESTY_API_KEY: 'requesty',
  JINA_API_KEY: 'jina-ai',
  VOYAGE_API_KEY: 'voyage-ai',
};

/**
 * Picks up keys from the environment: the well-known names above plus a generic
 * FREE_LLM_KEY_<SLUG_IN_CAPS>=... (dashes as underscores). Returns true if new keys were added.
 */
export function importEnvKeys(cfg) {
  let added = false;
  const add = (slug, v) => {
    if (!v) return;
    const before = JSON.stringify(cfg.providers[slug]?.keys?.length || 0);
    addKey(cfg, slug, v, 'from environment');
    if (JSON.stringify(cfg.providers[slug].keys.length) !== before) added = true;
  };
  if (process.env.FREE_LLM_NO_ENV_IMPORT) return false;
  for (const [name, slug] of Object.entries(ENV_KEYS)) add(slug, process.env[name]);
  for (const [name, v] of Object.entries(process.env)) {
    const m = name.match(/^FREE_LLM_KEY_([A-Z0-9_]+)$/);
    if (m) add(m[1].toLowerCase().replace(/_/g, '-'), v);
  }
  if (process.env.CLOUDFLARE_ACCOUNT_ID && !cfg.providers['cloudflare-workers-ai']?.account_id) {
    providerCfg(cfg, 'cloudflare-workers-ai').account_id = process.env.CLOUDFLARE_ACCOUNT_ID;
    added = true;
  }
  return added;
}

/** Copy a file into ~/.free-llm/backups before an agent config is changed. */
export function backupFile(file) {
  if (!fs.existsSync(file)) return null;
  ensureHome();
  const dest = path.join(PATHS.backups, `${path.basename(file)}.${new Date().toISOString().replace(/[:.]/g, '-')}`);
  fs.copyFileSync(file, dest);
  return dest;
}
