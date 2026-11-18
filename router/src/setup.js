// One-command setup for coding agents & apps. Every file we touch is backed up
// first (~/.free-llm/backups) and our edits are fenced so --remove can undo them.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { backupFile } from './config.js';

const H = os.homedir();
const FENCE_START = '# >>> free-llm-router (managed block — `free-llm setup <agent> --remove` to undo)';
const FENCE_END = '# <<< free-llm-router';

export function urls(cfg) {
  const host = cfg.host === '0.0.0.0' || cfg.host === '::' ? '127.0.0.1' : cfg.host;
  const root = `http://${host.includes(':') ? `[${host}]` : host}:${cfg.port}`;
  return { root, v1: `${root}/v1`, key: cfg.api_key };
}

function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}
function writeJson(file, obj) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n');
}
function stripFence(text) {
  const re = new RegExp(`\\n?${FENCE_START.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${FENCE_END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n?`, 'g');
  return text.replace(re, '\n').replace(/\n{3,}/g, '\n\n');
}

// ---------- agents ----------

export const AGENTS = {
  claude: {
    name: 'Claude Code',
    file: () => path.join(H, '.claude', 'settings.json'),
    env: (u) => ({
      ANTHROPIC_BASE_URL: u.root,
      ANTHROPIC_AUTH_TOKEN: u.key,
      ANTHROPIC_DEFAULT_OPUS_MODEL: 'auto:smart',
      ANTHROPIC_DEFAULT_SONNET_MODEL: 'auto:coding',
      ANTHROPIC_DEFAULT_HAIKU_MODEL: 'auto:fast',
      API_TIMEOUT_MS: '600000',
    }),
    apply(cfg, { remove } = {}) {
      const file = this.file();
      const u = urls(cfg);
      const j = readJson(file) || {};
      backupFile(file);
      j.env ||= {};
      for (const k of Object.keys(this.env(u))) delete j.env[k];
      if (!remove) Object.assign(j.env, this.env(u));
      if (!Object.keys(j.env).length) delete j.env;
      writeJson(file, j);
      return { file, note: remove ? 'Claude Code is back to its normal account.' : 'Start `claude` as usual: it now runs on free models. Opus → auto:smart, Sonnet → auto:coding, Haiku → auto:fast.' };
    },
    launch: (cfg) => ({ cmd: 'claude', env: AGENTS.claude.env(urls(cfg)) }),
  },

  codex: {
    name: 'Codex CLI',
    file: () => path.join(process.env.CODEX_HOME || path.join(H, '.codex'), 'config.toml'),
    apply(cfg, { remove, makeDefault } = {}) {
      const file = this.file();
      const u = urls(cfg);
      let t = '';
      try { t = fs.readFileSync(file, 'utf8'); } catch { /* new file */ }
      backupFile(file);
      t = stripFence(t);
      if (!remove) {
        const block = [
          FENCE_START,
          '[model_providers.free-llm]',
          'name = "Free-LLM Router"',
          `base_url = "${u.v1}"`,
          'wire_api = "responses"',
          `http_headers = { "Authorization" = "Bearer ${u.key}" }`,
          'request_max_retries = 2',
          'stream_idle_timeout_ms = 600000',
          '',
          '[profiles.free-llm]',
          'model_provider = "free-llm"',
          'model = "auto:coding"',
          FENCE_END,
        ].join('\n');
        if (makeDefault) {
          // top-level keys must come before any [table]
          const cut = t.search(/^\[/m);
          const head = cut < 0 ? t : t.slice(0, cut);
          const rest = cut < 0 ? '' : t.slice(cut);
          t = `${FENCE_START}\nmodel_provider = "free-llm"\nmodel = "auto:coding"\n${FENCE_END}\n` + head.replace(/^(model_provider|model)\s*=.*\n/gm, '') + rest;
        }
        t = t.trimEnd() + '\n\n' + block + '\n';
      }
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, t.replace(/^\n+/, ''));
      return { file, note: remove ? 'Codex config cleaned.' : makeDefault ? 'Run `codex` as usual — free models are now the default.' : 'Run `codex --profile free-llm` (or `free-llm launch codex`).' };
    },
    launch: () => ({ cmd: 'codex', args: ['--profile', 'free-llm'], env: {} }),
    needsSetup: true,
  },

  opencode: {
    name: 'OpenCode',
    file: () => path.join(process.env.XDG_CONFIG_HOME || path.join(H, '.config'), 'opencode', 'opencode.json'),
    apply(cfg, { remove, makeDefault } = {}) {
      const file = this.file();
      const u = urls(cfg);
      const j = readJson(file) || { $schema: 'https://opencode.ai/config.json' };
      backupFile(file);
      j.provider ||= {};
      delete j.provider['free-llm'];
      if (j.model?.startsWith('free-llm/')) delete j.model;
      if (!remove) {
        j.provider['free-llm'] = {
          npm: '@ai-sdk/openai-compatible',
          name: 'Free-LLM Router (free models)',
          options: { baseURL: u.v1, apiKey: u.key },
          models: {
            'auto:coding': { name: 'Free · best for coding', tool_call: true },
            auto: { name: 'Free · auto', tool_call: true },
            'auto:smart': { name: 'Free · most capable', tool_call: true },
            'auto:fast': { name: 'Free · fastest', tool_call: true },
            'auto:long': { name: 'Free · long context', tool_call: true },
          },
        };
        if (makeDefault) j.model = 'free-llm/auto:coding';
      }
      if (!Object.keys(j.provider).length) delete j.provider;
      writeJson(file, j);
      return { file, note: remove ? 'OpenCode config cleaned.' : 'In OpenCode pick a "Free-LLM Router" model with /models (or run `free-llm launch opencode`).' };
    },
    launch: () => ({ cmd: 'opencode', args: ['-m', 'free-llm/auto:coding'], env: {} }),
    needsSetup: true,
  },

  aider: {
    name: 'Aider',
    file: () => path.join(H, '.aider.conf.yml'),
    apply(cfg, { remove } = {}) {
      const file = this.file();
      const u = urls(cfg);
      let t = '';
      try { t = fs.readFileSync(file, 'utf8'); } catch { /* new */ }
      backupFile(file);
      t = stripFence(t);
      if (!remove) {
        t = t.replace(/^(openai-api-base|openai-api-key|model|weak-model|editor-model)\s*:.*\n/gm, '');
        t = t.trimEnd() + `\n${FENCE_START}\nopenai-api-base: ${u.v1}\nopenai-api-key: ${u.key}\nmodel: openai/auto:coding\nweak-model: openai/auto:fast\neditor-model: openai/auto:coding\nshow-model-warnings: false\n${FENCE_END}\n`;
      }
      fs.writeFileSync(file, t.replace(/^\n+/, ''));
      return { file, note: remove ? 'Aider config cleaned.' : 'Run `aider` as usual.' };
    },
    launch: (cfg) => {
      const u = urls(cfg);
      return { cmd: 'aider', args: ['--model', 'openai/auto:coding', '--weak-model', 'openai/auto:fast', '--no-show-model-warnings'], env: { OPENAI_API_BASE: u.v1, OPENAI_API_KEY: u.key } };
    },
  },

  qwen: {
    name: 'Qwen Code',
    launch: (cfg) => { const u = urls(cfg); return { cmd: 'qwen', env: { OPENAI_BASE_URL: u.v1, OPENAI_API_KEY: u.key, OPENAI_MODEL: 'auto:coding' } }; },
  },
  crush: {
    name: 'Crush',
    launch: (cfg) => { const u = urls(cfg); return { cmd: 'crush', env: { OPENAI_API_BASE_URL: u.v1, OPENAI_API_KEY: u.key } }; },
  },
  goose: {
    name: 'Goose',
    launch: (cfg) => { const u = urls(cfg); return { cmd: 'goose', env: { GOOSE_PROVIDER: 'openai', OPENAI_HOST: u.root, OPENAI_BASE_PATH: 'v1/chat/completions', OPENAI_API_KEY: u.key, GOOSE_MODEL: 'auto:coding' } }; },
  },
};

/** Copy-paste instructions for everything (also used by the dashboard). */
export function snippets(cfg) {
  const u = urls(cfg);
  return [
    { id: 'claude', name: 'Claude Code', kind: 'agent', auto: true, cmd: 'free-llm setup claude', text: `# one command (edits ~/.claude/settings.json, backup kept):\nfree-llm setup claude\n\n# or just for one session:\nANTHROPIC_BASE_URL=${u.root} ANTHROPIC_AUTH_TOKEN=${u.key} claude` },
    { id: 'codex', name: 'Codex CLI', kind: 'agent', auto: true, cmd: 'free-llm setup codex', text: `free-llm setup codex\ncodex --profile free-llm\n\n# ~/.codex/config.toml\n[model_providers.free-llm]\nname = "Free-LLM Router"\nbase_url = "${u.v1}"\nwire_api = "responses"\nhttp_headers = { "Authorization" = "Bearer ${u.key}" }\n\n[profiles.free-llm]\nmodel_provider = "free-llm"\nmodel = "auto:coding"` },
    { id: 'cursor', name: 'Cursor', kind: 'editor', text: `Settings → Models → OpenAI API Key\n  • API key:            ${u.key}\n  • Override base URL:  ${u.v1}\n  • Add model:          auto:coding\n\nNote: Cursor calls custom endpoints from its own servers, so a router on localhost\nis not reachable — run the router on a server, or expose it with a tunnel\n(e.g. cloudflared tunnel --url ${u.root}).` },
    { id: 'opencode', name: 'OpenCode', kind: 'agent', auto: true, cmd: 'free-llm setup opencode', text: 'free-llm setup opencode\nopencode   # then /models → "Free-LLM Router"' },
    { id: 'aider', name: 'Aider', kind: 'agent', auto: true, cmd: 'free-llm setup aider', text: `free-llm setup aider\n\n# or:\naider --openai-api-base ${u.v1} --openai-api-key ${u.key} --model openai/auto:coding` },
    { id: 'cline', name: 'Cline / Roo Code / Kilo Code', kind: 'editor', text: `API Provider: OpenAI Compatible\nBase URL:     ${u.v1}\nAPI Key:      ${u.key}\nModel ID:     auto:coding` },
    { id: 'continue', name: 'Continue', kind: 'editor', text: `# ~/.continue/config.yaml\nmodels:\n  - name: Free (auto)\n    provider: openai\n    model: auto:coding\n    apiBase: ${u.v1}\n    apiKey: ${u.key}\n    roles: [chat, edit, apply]\n  - name: Free autocomplete\n    provider: openai\n    model: auto:fast\n    apiBase: ${u.v1}\n    apiKey: ${u.key}\n    roles: [autocomplete]` },
    { id: 'zed', name: 'Zed', kind: 'editor', text: `// settings.json — Zed talks to the router's Ollama-compatible API\n"language_models": {\n  "ollama": { "api_url": "${u.root}" }\n}\n// or OpenAI-compatible:\n"language_models": {\n  "openai_compatible": {\n    "Free-LLM": {\n      "api_url": "${u.v1}",\n      "available_models": [{ "name": "auto:coding", "max_tokens": 128000 }]\n    }\n  }\n}\n// API key: ${u.key}` },
    { id: 'jetbrains', name: 'JetBrains AI Assistant', kind: 'editor', text: `Settings → Tools → AI Assistant → Models → Third-party AI providers\n  • Provider: OpenAI-compatible (LM Studio) or Ollama\n  • URL: ${u.v1}  (Ollama: ${u.root})\n  • API key: ${u.key}` },
    { id: 'qwen', name: 'Qwen Code', kind: 'agent', text: `OPENAI_BASE_URL=${u.v1} OPENAI_API_KEY=${u.key} OPENAI_MODEL=auto:coding qwen\n# or: free-llm launch qwen` },
    { id: 'goose', name: 'Goose', kind: 'agent', text: 'free-llm launch goose' },
    { id: 'openwebui', name: 'Open WebUI / LibreChat / LobeChat', kind: 'app', text: `Admin → Connections → OpenAI API\n  • URL: ${u.v1}\n  • Key: ${u.key}\n(Open WebUI in Docker: use http://host.docker.internal:${cfg.port}/v1)` },
    { id: 'mcp', name: 'MCP (Claude Code, Cursor, ChatGPT…)', kind: 'mcp', text: `# Claude Code: give it free models as tools ("second opinion")\nclaude mcp add --transport http free-llm ${u.root}/mcp --header "Authorization: Bearer ${u.key}"\n\n# generic MCP JSON\n{ "mcpServers": { "free-llm": { "type": "http", "url": "${u.root}/mcp", "headers": { "Authorization": "Bearer ${u.key}" } } } }` },
    { id: 'python', name: 'Python (OpenAI SDK)', kind: 'code', text: `from openai import OpenAI\n\nclient = OpenAI(base_url="${u.v1}", api_key="${u.key}")\nr = client.chat.completions.create(\n    model="auto",  # or auto:coding, auto:fast, deepseek-v4-flash, …\n    messages=[{"role": "user", "content": "Hello!"}],\n)\nprint(r.choices[0].message.content)` },
    { id: 'node', name: 'JavaScript (OpenAI SDK)', kind: 'code', text: `import OpenAI from "openai";\n\nconst client = new OpenAI({ baseURL: "${u.v1}", apiKey: "${u.key}" });\nconst r = await client.chat.completions.create({\n  model: "auto",\n  messages: [{ role: "user", content: "Hello!" }],\n});\nconsole.log(r.choices[0].message.content);` },
    { id: 'anthropic', name: 'Anthropic SDK', kind: 'code', text: `import anthropic\n\nclient = anthropic.Anthropic(base_url="${u.root}", api_key="${u.key}")\nmsg = client.messages.create(model="auto", max_tokens=1024,\n    messages=[{"role": "user", "content": "Hello!"}])\nprint(msg.content[0].text)` },
    { id: 'curl', name: 'curl', kind: 'code', text: `curl ${u.v1}/chat/completions \\\n  -H "Authorization: Bearer ${u.key}" \\\n  -H "Content-Type: application/json" \\\n  -d '{"model":"auto","messages":[{"role":"user","content":"Hello!"}]}'` },
    { id: 'env', name: 'Environment variables', kind: 'code', text: `export OPENAI_BASE_URL=${u.v1}\nexport OPENAI_API_KEY=${u.key}\nexport ANTHROPIC_BASE_URL=${u.root}\nexport ANTHROPIC_AUTH_TOKEN=${u.key}` },
  ];
}
