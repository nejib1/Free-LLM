<div align="center">

# ⚡ Free-LLM Router

**All the free AI APIs behind one address. If one is busy, the next one answers — instantly.**

Use Claude Code, Codex, Cursor, OpenCode, Aider, Open WebUI or your own code on **free** models from Google Gemini, Groq, Mistral, OpenRouter, NVIDIA, Cloudflare, Cohere and 60+ other providers — without juggling keys, limits and errors.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../LICENSE)
![Node 18+](https://img.shields.io/badge/node-18%2B-brightgreen)
![Zero dependencies](https://img.shields.io/badge/dependencies-0-blue)
[![Live catalog](https://img.shields.io/badge/catalog-free--llm.com-orange)](https://free-llm.com)

</div>

```bash
npx github:nejib1/Free-LLM
```

<sub>That's the whole install (Node.js 18+). It opens a 1-minute guided setup, then the router runs at <code>http://localhost:4000</code>.</sub>

---

## The idea, in plain words

Dozens of companies give away AI for free: Google, Groq, Mistral, NVIDIA, Cloudflare… But each free plan is **small** (a few requests per minute, a daily cap) and each one has its **own key, own address, own rules**. When a free plan runs out in the middle of your work, your tool just stops.

**Free-LLM Router puts them all behind one address.** Your app talks to the router as if it were OpenAI or Anthropic. For every request, the router:

1. picks the best free model that is **up right now** (quality, speed, quota left);
2. if that provider is slow, down or out of quota, **switches to the next one instantly** — your app never sees the error;
3. learns from every answer (speed, failures, rate limits), so it gets smarter the more you use it.

```
 Claude Code / Codex / Cursor / your app
                  │   one address, one key
                  ▼
        ⚡ Free-LLM Router  (on your computer)
     ┌──────┬──────┬───────┬──────────┬─────────┐
     ▼      ▼      ▼       ▼          ▼         ▼
  Gemini  Groq  Mistral  OpenRouter  NVIDIA  …60+ more
```

### The big advantage

> **Many small free plans, stacked together, behave like one big free plan — that never goes down.**

- 🆓 **Free, for real.** Open source (MIT). No premium tier, no account, no telemetry.
- 📡 **Always up to date — the same day, for everyone.** The list of free providers and models comes live from [free-llm.com](https://free-llm.com), checked by hand against official sources and refreshed automatically every few hours. New free model this morning → in your router this afternoon. No paywall, no 30-day delay.
- 🚀 **Works in 10 seconds, even with zero keys.** Guest mode answers right away with no-account models (slow and limited — enough to try). Add 2–3 free keys and you get dozens of strong models.
- 🔌 **One command per tool.** `free-llm setup claude` — Claude Code now runs on free models. Same for Codex, OpenCode, Aider; ready-made recipes for Cursor, Cline, Roo, Kilo, Continue, Zed, JetBrains, Open WebUI, LibreChat…
- 🔒 **Your keys never leave your computer.** Stored encrypted (AES-256-GCM) in `~/.free-llm`. Requests go straight from your machine to the provider.
- 🪶 **Tiny.** Zero dependencies, a ~100 KB download, Node 18+. No Docker required (but supported).

---

## Get started

### 1 · Install and run

```bash
npx github:nejib1/Free-LLM          # try it now
# or install the `free-llm` command permanently:
npm install -g github:nejib1/Free-LLM
```

<details><summary>Other ways: one-line installer, Docker, Windows</summary>

```bash
# macOS / Linux one-liner (checks Node.js, installs, starts the guided setup)
curl -fsSL https://free-llm.com/install.sh | sh

# Windows (PowerShell)
irm https://free-llm.com/install.ps1 | iex

# Docker
docker build -t free-llm https://github.com/nejib1/Free-LLM.git
docker run -d --name free-llm -p 4000:4000 -v free-llm:/data free-llm
docker logs free-llm      # shows your router key
```
</details>

### 2 · Add a few free keys (1 minute each)

The guided setup suggests the best providers and opens the right page. Or later:

```bash
free-llm providers                      # best free providers, with sign-up links
free-llm keys add groq gsk_xxx          # paste a key — tested immediately
```

…or simply open the dashboard at **http://localhost:4000** → *Free keys* → paste.

| Good first picks | Sign-up | Why |
|:---|:---|:---|
| [Google AI Studio](https://free-llm.com/provider/google-ai-studio) | 🟢 no card | Gemini models, big context, images |
| [Groq](https://free-llm.com/provider/groq-cloud) | 🟢 no card | extremely fast |
| [OpenRouter](https://free-llm.com/provider/openrouter) | 🟢 no card | many `:free` models in one key |
| [Cerebras](https://free-llm.com/provider/cerebras) · [Mistral](https://free-llm.com/provider/mistral-ai) · [NVIDIA](https://free-llm.com/provider/nvidia-nim) | 📱/💳 | strong models, generous limits |

The more keys you add, the more capacity and the fewer interruptions. Several keys for the same provider are rotated automatically.

### 3 · Connect your tools

```bash
free-llm setup claude      # Claude Code   (Opus → auto:smart, Sonnet → auto:coding, Haiku → auto:fast)
free-llm setup codex       # Codex CLI     → then: codex --profile free-llm
free-llm setup opencode    # OpenCode
free-llm setup aider       # Aider
free-llm launch qwen       # Qwen Code, Goose, Crush: started with the right settings
free-llm connect           # copy-paste recipes for everything else
```

Every change is backed up first (`~/.free-llm/backups`) and undone with `--remove`.

Anything else that speaks the OpenAI API:

| Setting | Value |
|:---|:---|
| Base URL | `http://localhost:4000/v1` |
| API key | your router key (shown at start and in the dashboard) |
| Model | `auto` — or a profile below, or any model id |

```python
from openai import OpenAI
client = OpenAI(base_url="http://localhost:4000/v1", api_key="fllm-…")
print(client.chat.completions.create(model="auto", messages=[{"role": "user", "content": "Hi!"}]).choices[0].message.content)
```

---

## Choose how it picks: profiles

Send one of these as the **model name**:

| Model name | What you get |
|:---|:---|
| `auto` | best overall for this request (your default strategy) |
| `auto:coding` | strongest coding models first — for agents |
| `auto:smart` | most capable first, speed second |
| `auto:fast` | lowest latency first — chat, autocomplete |
| `auto:long` | largest context windows first |
| `auto:vision` | models that read images |
| `auto:reasoning` | thinking / reasoning models first |
| `auto:spread` | rotate across providers to stretch free quotas |
| `auto:fusion` | asks **3 different models**, then merges the best answer |
| `deepseek-v4-flash` | that model, on whichever provider serves it for free (falls back to `auto`) |
| `groq-cloud/openai/gpt-oss-120b` | exactly this provider + model |

Unknown names (`claude-sonnet-4-5`, `gpt-5-codex`…) are mapped to a sensible profile, so tools work out of the box. You can change the mapping in Settings.

---

## What's inside

**APIs it speaks** — so almost every tool just works:

| Surface | Endpoint | Used by |
|:---|:---|:---|
| OpenAI Chat Completions | `/v1/chat/completions` | OpenAI SDKs, Cursor, Cline, Continue, Open WebUI, LangChain… |
| OpenAI Responses | `/v1/responses` | Codex CLI (incl. custom tools like `apply_patch`) |
| Anthropic Messages | `/v1/messages` (+ `count_tokens`) | Claude Code, Anthropic SDKs |
| Ollama | `/api/chat`, `/api/generate`, `/api/tags`… | Zed, JetBrains, Open WebUI, Obsidian plugins |
| Embeddings | `/v1/embeddings` | RAG, search |
| Legacy completions | `/v1/completions` | editor autocomplete |
| MCP server | `/mcp` | give Claude Code / Cursor / ChatGPT free models as a tool (`ask_free_model`, `second_opinion`) |

**Routing that survives free tiers**

- Instant failover on rate limits, quota exhaustion, server errors, timeouts, empty answers and silent providers (first-token timeout) — before your app sees anything.
- Reads `Retry-After` and `x-ratelimit-*` headers to stop *before* hitting a limit; tells per-minute limits from daily quotas.
- Bad keys are detected and parked; several keys per provider are rotated.
- Learns each model's real speed, reliability, max output and context — and its tool-calling / image support.
- Sticky conversations: a chat stays on the same model (consistent style, better caching).
- Five strategies: balanced, smart, fast, spread, or your own order.

**Compatibility fixes you don't have to think about**

- Translates tool calling between Anthropic, OpenAI-Responses and OpenAI-Chat formats, including streaming.
- Rescues tool calls that weaker models write as plain text (`<tool_call>{…}</tool_call>`).
- Moves `<think>…</think>` reasoning out of the visible answer.
- Retries with simpler parameters when a provider rejects an optional one; adapts `max_tokens` to each model's real limit.
- Provider quirks handled: Mistral's tool-call ids, Gemini's JSON-schema subset, Cloudflare account ids, OpenRouter attribution…

**Dashboard** at `http://localhost:4000` — add and test keys, see which models are ready, chat playground, live activity with every switch the router made, copy-paste recipes for each tool, settings.

**Command line** — `free-llm help`:

```
free-llm                     guided setup the first time, then start
free-llm start --daemon      run in the background      free-llm stop
free-llm service install     start automatically at login (systemd / launchd / Windows)
free-llm status | doctor     health check and diagnostics
free-llm chat "question"     ask from the terminal
free-llm models | providers  what you can use, where to get more
free-llm update              refresh the catalog now
```

---

## FAQ

**Is it really free?** Yes. The router is MIT-licensed and has no paid tier. The models are the providers' own free plans — the router doesn't resell anything and never sees your traffic.

**Do I need keys?** No to try (guest mode), yes for real work. Guest models are shared by everyone and capped (for example ~100K tokens/day), which is not enough for a coding agent. 2–3 free keys change everything.

**Is it as good as Claude or GPT-5?** Free models are very good today (DeepSeek V4, Kimi K2, GLM-5, Qwen 3.x, Gemini Flash, gpt-oss…), but they are not the paid frontier models. For many tasks you won't notice; for the hardest ones, `auto:smart` and `auto:fusion` help.

**Where do my keys go?** Into `~/.free-llm/config.json`, encrypted with a key stored next to it (`master.key`, or `FREE_LLM_MASTER_KEY`). Requests go directly from your computer to each provider.

**What leaves my computer?** Your requests (to the provider that answers them) and one download of the public catalog every few hours. Nothing else: no telemetry, no account.

**Can I share it on my network / a server?** `free-llm start --host 0.0.0.0` — every request then needs the router key. Needed for Cursor, which calls custom endpoints from its own servers.

**Terms of service?** Each provider's free plan has its own rules (personal use, rate limits, data use). The router only uses *your* keys at *your* request — read the terms of the providers you sign up for. Don't use it to dodge limits on a single account with fake identities.

**Does it work offline / with local models?** The catalog also lists local tools (Ollama, LM Studio…); the router itself focuses on hosted free APIs. You can run both side by side.

---

## For developers

```
router/
  bin/free-llm.js         CLI
  src/server.js           HTTP surfaces + admin API
  src/router.js           selection, failover, fusion, cache, logs
  src/upstream.js         provider calls, quirks, stream parsing, error classification
  src/adapters/           anthropic.js · responses.js · openai.js · ollama.js
  src/state.js            health, cooldowns, learned limits, stats (~/.free-llm/state.json)
  src/catalog.js          live catalog + quality priors
  src/setup.js            agent configuration
  public/dashboard.html   the dashboard (no build step)
  test/                   node --test router/test/router.test.js
```

Environment: `FREE_LLM_HOME`, `FREE_LLM_PORT`, `FREE_LLM_HOST`, `FREE_LLM_API_KEY`, `FREE_LLM_MASTER_KEY`. Keys can also come from `GROQ_API_KEY`, `GEMINI_API_KEY`, `MISTRAL_API_KEY`, `OPENROUTER_API_KEY`… or `FREE_LLM_KEY_<PROVIDER_SLUG>`.

The catalog format is public: [free-llm.com/catalog.json](https://free-llm.com/catalog.json). Found a new free provider or a wrong limit? [Submit it on free-llm.com](https://free-llm.com/submit) — once checked, it reaches every router the same day.

Contributions welcome — see [CONTRIBUTING.md](../CONTRIBUTING.md).
