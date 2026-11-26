<div align="center">

# ⚡ Free-LLM Router

**All the free AI APIs behind one address. If one is busy, the next one answers — instantly.**

Use Claude Code, Codex, Cursor, OpenCode, Aider, Open WebUI or your own code on **free** models from Google Gemini, Groq, OpenRouter, NVIDIA, Cloudflare, Cohere and 60+ other providers — without juggling keys, limits and errors.

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

Dozens of companies give away AI for free: Google, Groq, NVIDIA, Cloudflare, Cohere… But each free plan is **small** (a few requests per minute, a daily cap) and each one has its **own key, own address, own rules**. When a free plan runs out in the middle of your work, your tool just stops.

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
  Gemini  Groq  OpenRouter  NVIDIA  Cohere  …60+ more
```

<p align="center"><img src="docs/dashboard.png" width="820" alt="Free-LLM Router dashboard: models ready, connection details and how it works"></p>

### The big advantage

> **Many small free plans, stacked together, behave like one big free plan — that never goes down.**

- 🆓 **Free, for real.** Open source (MIT). No premium tier, no account, no telemetry.
- 📡 **Always up to date — the same day, for everyone.** The list of free providers and models comes live from [free-llm.com](https://free-llm.com), checked by hand against official sources and refreshed automatically every few hours. New free model this morning → in your router this afternoon. No paywall, no 30-day delay.
- 🚀 **Running in a minute.** One command installs it, a guided setup shows where to get the best free keys (most need no credit card), tests each one, and connects your tools. 2–3 keys already give you dozens of strong models.
- 🔌 **One command per tool.** `free-llm setup claude` — Claude Code now runs on free models. Same for Codex, OpenCode, Aider; ready-made recipes for Cursor, Cline, Roo, Kilo, Continue, Zed, JetBrains, Open WebUI, LibreChat…
- 🔒 **100% local and private.** Your keys stay on your computer, encrypted, and each one is only ever sent to its own provider — [details below](#-is-it-safe-yes--100-local-and-private).
- 🪶 **Tiny.** Zero dependencies, a download under 200 KB, Node 18+. No Docker required (but supported).

---

## 🔒 Is it safe? Yes — 100% local and private

The router asks for your API keys, so here is exactly what happens to them:

| | |
|:---|:---|
| 🏠 **Runs on your computer** | It's a small program on your own machine (listening on `localhost` only, by default). There is no Free-LLM server in the middle. |
| 🔐 **Keys stored only on your computer** | In `~/.free-llm/config.json`, encrypted with AES-256-GCM. Never uploaded anywhere — not to free-llm.com, not to any cloud. No account to create. |
| 🎯 **Each key goes only to its own provider** | Your Groq key is only ever sent to `api.groq.com`, your Gemini key only to Google, and so on. Each key is **locked** to its provider's address the first time it's used: if that address ever changed, the router would refuse to send the key and warn you. |
| 🙈 **No telemetry, no tracking** | Your prompts and answers go straight from your computer to the provider. The only other download is the public list of free models ([catalog.json](https://free-llm.com/catalog.json)) — the router sends nothing about you to get it. |
| 🔎 **Open source, MIT** | Every line is here. Every network call is in [`src/upstream.js`](src/upstream.js) (providers) and [`src/catalog.js`](src/catalog.js) (public catalog) — check them, or watch the traffic yourself. |
| 🧹 **Easy to remove** | Delete a key from the dashboard or with `free-llm keys remove`. Uninstall = delete `~/.free-llm`. |

> Tip: you can revoke any key at any time on the provider's website — the router simply moves on to your other free providers.

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
| [NVIDIA](https://free-llm.com/provider/nvidia-nim) · [Cloudflare](https://free-llm.com/provider/cloudflare-workers-ai) · [Cohere](https://free-llm.com/provider/cohere) | 📱/🟢 | strong open models, generous limits |

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
| `groq-cloud/openai/gpt-oss-120b` | this provider + model first (falls back to `auto`) |

A specific model or `provider/model` is a **preference, not a guarantee**: if it is rate-limited, down or fails before any text is sent, the router answers with another free model so your app keeps working. The dashboard’s *Recent requests* table shows which model actually answered (“Answered by”). To get an error instead of a substitute, turn off *“If the exact model asked for is unavailable, use another free model”* in Settings (`"fallback_to_auto": false` in `~/.free-llm/config.json`). As with any streaming API, check the final event (`response.completed` or `response.failed`), not only the HTTP 200 that opens the stream.

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
free-llm status --json       same as JSON, for scripts (also: models, providers)
free-llm update              refresh the catalog now
```

---

## FAQ

**Is it really free?** Yes. The router is MIT-licensed and has no paid tier. The models are the providers' own free plans — the router doesn't resell anything and never sees your traffic.

**Do I need keys?** For real work, yes: the router uses *your* free accounts. 2–3 free keys take about a minute each, most without a credit card, and `free-llm providers` shows where to get them. With no key at all, the router falls back to "guest mode" whenever the catalog lists a provider that answers without an account (a few models, tightly limited) — enough to see it work.

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

---

## 🙌 Help build the router

The router is small (plain Node.js, no dependencies, no build step) and easy to get into: clone, `npm test`, and you have a working copy with a mock provider, no API key needed.

**Good places to start**
- 🟢 [`good first issue`](https://github.com/nejib1/Free-LLM/labels/good%20first%20issue): small, well-scoped tasks with pointers to the code
- 🙋 [`help wanted`](https://github.com/nejib1/Free-LLM/labels/help%20wanted): bigger pieces we'd love a hand with
- 🧩 A setup recipe for your favourite tool, a provider quirk you hit, a dashboard improvement, a translation, a test for an untested file: all welcome, no need to ask first for small things

**What you get:** your name and avatar below and in [CONTRIBUTORS.md](../CONTRIBUTORS.md), a mention in the [release notes](../CHANGELOG.md) of the version that ships your change, and your commits kept under your name when the pull request is merged.

### Router contributors

<!--ROUTERCONTRIB:START-->
<table>
  <tr><td align="center" valign="top" width="14%"><a href="https://github.com/octo-patch"><img src="https://avatars.githubusercontent.com/u/266937838?v=4&s=80" width="64" height="64" alt="octo-patch"><br><sub><b>octo-patch</b></sub></a><br><sub title="MiniMax-M3.1-Flash in auto:reasoning routes, with a regression test">⚡ Router <a href="https://github.com/nejib1/Free-LLM/issues/40">#40</a></sub></td></tr>
</table>
<!--ROUTERCONTRIB:END-->

See [CONTRIBUTING.md](../CONTRIBUTING.md#5-improve-free-llm-router) for the details.
