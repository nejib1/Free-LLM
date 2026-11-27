<h1 align="center">Free-LLM — Every Free LLM API in One Place</h1>
<!--STATS:START-->
  <p align="center"><strong>460+ free LLM models from 79 free API providers</strong> — find, compare &amp; configure free models in seconds, plus 9 local/self-hosted tools for unlimited private use.</p>
<!--STATS:END-->

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><strong>🌐 Live directory: free-llm.com</strong></a> ·
  <a href="https://free-llm.com/models" target="_blank" rel="noopener">Free models</a> ·
  <a href="https://free-llm.com/compare" target="_blank" rel="noopener">Compare</a> ·
  <a href="https://free-llm.com/guides" target="_blank" rel="noopener">Guides</a> ·
  <a href="https://free-llm.com/changelog" target="_blank" rel="noopener">Changelog</a> ·
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener">Submit a provider</a>
</p>

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><img alt="Website" src="https://img.shields.io/badge/Website-free--llm.com-blue?style=for-the-badge" /></a>
  <a href="https://github.com/nejib1/Free-LLM/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/nejib1/Free-LLM?style=for-the-badge&color=f5b301" /></a>
  <a href="https://github.com/nejib1/Free-LLM/commits/main"><img alt="Data updated" src="https://img.shields.io/github/last-commit/nejib1/Free-LLM?style=for-the-badge&label=data%20updated&color=2ea44f" /></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" /></a>
</p>

<p align="center">
  🌐 <a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a>
</p>

Free LLM APIs come and go every week: a model is retired, a free tier starts asking for a card, a trial quietly ends. This repository tracks all of it. Every table below is **rebuilt every night from the [free-llm.com](https://free-llm.com) database**, where each provider is checked against its own pricing page, docs or public model list. What you read here is what works today.

- 🔎 **Find**: which providers give free access, to which models, with what limits
- 💳 **Know the catch**: every entry says whether you need a card, a phone number, an email, or nothing at all
- ⚡ **Use it**: base URLs, ready-to-run code for each provider, and setups for Claude Code, Codex, Cursor and OpenCode
- 🔁 **Never hit a wall**: the [Free-LLM Router](#-free-llm-router-many-small-free-plans-one-big-one) stacks all your free keys behind one address

<details>
<summary><strong>Contents</strong></summary>

- [🚀 Start here: the best free picks right now](#-start-here-the-best-free-picks-right-now)
- [🧠 Free models available from the most providers](#-free-models-available-from-the-most-providers)
- [📰 What changed recently](#-what-changed-recently)
- [⚡ Free-LLM Router: many small free plans, one big one](#-free-llm-router-many-small-free-plans-one-big-one)
- [Quick start: first request in 30 seconds](#quick-start-first-request-in-30-seconds)
- [Coding assistants on free models](#coding-assistants-on-free-models)
- [Provider directory](#provider-directory)
- [Quick reference: base URLs and API keys](#quick-reference-base-urls-and-api-keys)
- [How this list stays accurate](#how-this-list-stays-accurate)
- [FAQ](#faq)
- [Guides](#guides)
- [Code examples](#code-examples)
- [Contributing](#contributing)
- [🙌 Contributors](#-contributors)
- [Links and support](#links-and-support)

</details>

---

## 🚀 Start here: the best free picks right now

Not sure where to begin? One good option for each common need. The rows come from live data: if a provider stops being free, the next best one takes its place on the next nightly sync.

<!--TOPPICKS:START-->
| If you want… | Use | Free limits | Free models |
|:---|:---|:---|:---|
| Best all-rounder (long context, images) | **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 No card</sub> | ⏱️ Varies by model (per-model limits are now shown only inside AI Studio)<br>📅 Varies by model (shown in AI Studio). Free: Gemini 4 Hydrogen, Gemini…<br><sub>[details →](https://free-llm.com/provider/google-ai-studio)</sub> | Gemini 3.8 Flash, Gemini 3 Flash Preview, Gemini 3.1 Flash-Lite |
| Fastest responses | **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 No card</sub> | ⏱️ 30 RPM; 8K TPM on most chat models (varies by model)<br>📅 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by m…<br><sub>[details →](https://free-llm.com/provider/groq-cloud)</sub> | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B |
| Many free models behind one key | **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 No card</sub> | ⏱️ 20 requests/minute<br>📅 50 requests/day (up to 1000 with $10 topup) | Gemma 4 31B IT, Gemma 4 26B A4B IT, Nemotron 3.5 Super VL |
| Large open models (GLM, Mistral Large, Nemotron) | **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 Phone check</sub> | ⏱️ ~40 RPM (varies per model, not published) | GLM-5.3 Flash, Gemma 4 31B IT, Nemotron 3.5 Super VL |
| Try it with no account at all | **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 No card</sub> | ⏱️ 200 requests/hour per IP on free models (anonymous use allowed)<br>📅 Default free models only | Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B, Nemotron 3.5 Lightning |
| Claude Code (native Anthropic endpoint) | **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ Email sign-up</sub> | ⏱️ ~1 request/second (Flash models)<br>📅 ~1,000 requests/day (Flash tier) | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| Text, image and speech models in one free plan | **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 No card</sub> | ⏱️ Varies by model<br>📅 10,000 neurons/day | Qwen3.8 27B, GLM 4.7 Flash, GPT OSS 120B |
| Hosted in the EU | **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ Email sign-up</sub> | ⏱️ 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-…<br><sub>[details →](https://free-llm.com/provider/ovh-ai)</sub> | Qwen3.8 27B, GPT OSS 120B, Gemma 4 26B A4B |
| Unlimited and private (runs on your computer) | **[Ollama](https://free-llm.com/provider/ollama)**<br><sub>🟢 No card</sub> | No limits: your hardware is the limit | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B |
<!--TOPPICKS:END-->

**Sign-up legend:** 🟢 no card · ✉️ email sign-up · 📱 phone verification · 💳 card required (usually not charged)

---

## 🧠 Free models available from the most providers

The same open model is often free at several providers. If one of them rate-limits you or drops the model, switch to another with the same model ID family. 🟢 = no card needed there.

<!--TOPMODELS:START-->
| Model | Free on | Where to start | Context |
|:---|:---|:---|:---|
| **[GLM-5.3 Flash](https://free-llm.com/free-models/glm-5.3-flash)** | 12 providers | [FreeInference](https://free-llm.com/provider/freeinference) 🟢 · [Pollinations.ai](https://free-llm.com/provider/pollinations-ai) 🟢 · [NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)<br><sub>[all 12 →](https://free-llm.com/free-models/glm-5.3-flash)</sub> | 1M |
| **[Qwen3.8 27B](https://free-llm.com/free-models/qwen3.8-27b)** | 12 providers | [Groq](https://free-llm.com/provider/groq-cloud) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)<br><sub>[all 12 →](https://free-llm.com/free-models/qwen3.8-27b)</sub> | 131K |
| **[GLM 4.7 Flash](https://free-llm.com/free-models/glm-4.7-flash)** | 10 providers | [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [Inferbase](https://free-llm.com/provider/inferbase) 🟢 · [NovAI](https://free-llm.com/provider/novai) 🟢<br><sub>[all 10 →](https://free-llm.com/free-models/glm-4.7-flash)</sub> | 200K |
| **[GPT-OSS 120B](https://free-llm.com/free-models/gpt-oss-120b)** | 10 providers | [Groq](https://free-llm.com/provider/groq-cloud) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [Inferbase](https://free-llm.com/provider/inferbase) 🟢<br><sub>[all 10 →](https://free-llm.com/free-models/gpt-oss-120b)</sub> | 131K |
| **[Gemma 4 31B IT](https://free-llm.com/free-models/gemma-4-31b)** | 10 providers | [OpenRouter](https://free-llm.com/provider/openrouter) 🟢 · [Google AI Studio](https://free-llm.com/provider/google-ai-studio) 🟢 · [Requesty](https://free-llm.com/provider/requesty) 🟢<br><sub>[all 10 →](https://free-llm.com/free-models/gemma-4-31b)</sub> | 262K |
| **[DeepSeek V4.1 Flash](https://free-llm.com/free-models/deepseek-v4.1-flash)** | 7 providers | [ModelScope](https://free-llm.com/provider/modelscope) · [Token Harbor](https://free-llm.com/provider/token-harbor) · [Zro (MoonMath)](https://free-llm.com/provider/zro)<br><sub>[all 7 →](https://free-llm.com/free-models/deepseek-v4.1-flash)</sub> | 1M |
| **[Gemma 4 26B A4B IT](https://free-llm.com/free-models/gemma-4-26b)** | 7 providers | [OpenRouter](https://free-llm.com/provider/openrouter) 🟢 · [Google AI Studio](https://free-llm.com/provider/google-ai-studio) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢<br><sub>[all 7 →](https://free-llm.com/free-models/gemma-4-26b)</sub> | 262K |
| **[DeepSeek V4 Flash 0731](https://free-llm.com/free-models/deepseek-v4-flash-0731)** | 6 providers | [ModelScope](https://free-llm.com/provider/modelscope) · [Gonka Broker](https://free-llm.com/provider/gonka-broker) · [BazaarLink](https://free-llm.com/provider/bazaarlink)<br><sub>[all 6 →](https://free-llm.com/free-models/deepseek-v4-flash-0731)</sub> | — |
| **[GLM 5.3](https://free-llm.com/free-models/glm-5.3)** | 6 providers | [LLMTR](https://free-llm.com/provider/llmtr) · [Fireworks AI](https://free-llm.com/provider/fireworks-ai) · [Novita AI](https://free-llm.com/provider/novita-ai)<br><sub>[all 6 →](https://free-llm.com/free-models/glm-5.3)</sub> | 512K |
| **[Llama 3.3 70B Instruct](https://free-llm.com/free-models/llama-3.3-70b)** | 6 providers | [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [OVH AI Endpoints](https://free-llm.com/provider/ovh-ai) · [Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)<br><sub>[all 6 →](https://free-llm.com/free-models/llama-3.3-70b)</sub> | 24K |
| **[DeepSeek V4 Flash](https://free-llm.com/free-models/deepseek-v4-flash)** | 5 providers | [FreeInference](https://free-llm.com/provider/freeinference) 🟢 · [Inferbase](https://free-llm.com/provider/inferbase) 🟢 · [Pollinations.ai](https://free-llm.com/provider/pollinations-ai) 🟢<br><sub>[all 5 →](https://free-llm.com/free-models/deepseek-v4-flash)</sub> | 1M |
| **[GPT-OSS 20B](https://free-llm.com/free-models/gpt-oss-20b)** | 5 providers | [Groq](https://free-llm.com/provider/groq-cloud) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [Api.Airforce](https://free-llm.com/provider/api-airforce) 🟢<br><sub>[all 5 →](https://free-llm.com/free-models/gpt-oss-20b)</sub> | 131K |
<!--TOPMODELS:END-->

**→ All free models, searchable by name, context and vision: [free-llm.com/models](https://free-llm.com/models)**

---

## 📰 What changed recently

<!--WHATSNEW:START-->
- `2026-11-26` ⛔ **[Inferaft](https://free-llm.com/provider/inferaft)** — free tier ended
- `2026-11-26` 🆕 **[AMD Token Lab](https://free-llm.com/provider/amd-token-lab)** — new free provider
- `2026-11-26` 🆕 **[Plugsky](https://free-llm.com/provider/plugsky)** — new free provider
- `2026-11-25` ⛔ **[IteraCompute](https://free-llm.com/provider/iteracompute)** — free tier ended
- `2026-11-23` ➖ **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)** — no longer free: Dots3-Note Preview, Cohere North Mini Code
- `2026-11-23` ➖ **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)** — no longer free: Gemini 2.5 Flash-Lite, Gemini 2.5 Flash
- `2026-11-23` ➖ **[Api.Airforce](https://free-llm.com/provider/api-airforce)** — no longer free: GLM-4.7 Flash
- `2026-11-23` ➖ **[Routeway](https://free-llm.com/provider/routeway)** — no longer free: DeepSeek V4.1 Flash (free)
- `2026-11-21` ⛔ **[LLM7.io](https://free-llm.com/provider/llm7-io)** — free tier ended
- `2026-11-21` ⛔ **[Mistral (La Plateforme)](https://free-llm.com/provider/mistral-ai)** — free tier ended
- `2026-11-21` ⛔ **[Ollama Cloud](https://free-llm.com/provider/ollama-cloud)** — free tier ended
- `2026-11-21` 🆕 **[HiAPI](https://free-llm.com/provider/hiapi)** — new free provider

**→ Full history: [FREE-TIER-CHANGELOG.md](FREE-TIER-CHANGELOG.md) · [free-llm.com/changelog](https://free-llm.com/changelog) · [RSS](https://free-llm.com/changelog-feed)**
<!--WHATSNEW:END-->

---

## ⚡ Free-LLM Router: many small free plans, one big one

Every provider above gives a *small* free plan, each with its own key and limits. The router stacks them: your app or coding agent talks to **one** OpenAI- and Anthropic-compatible address on your computer, and every request goes to a free model that is up right now. When one provider is busy or out of quota, the next one answers.

```bash
npm install -g github:nejib1/Free-LLM   # installs the `free-llm` command
free-llm                                # guided setup, then open http://localhost:4000
free-llm setup claude                   # Claude Code on free models (also: codex, opencode, aider)
```

<p align="center"><a href="router/README.md"><img src="router/docs/dashboard.png" width="760" alt="Free-LLM Router dashboard"></a></p>

- **Nothing to sign up for to try it**: no account, no credit card, and while a provider answers without an account (shown on [free-llm.com/router](https://free-llm.com/router)) it works with no API key at all. Free keys only make it faster.
- **One address, every free key**: OpenAI, Anthropic Messages, Codex Responses, Ollama and MCP APIs
- **Self-updating**: the provider list follows free-llm.com the same day, so dead offers drop out on their own
- **Local and private**: runs on your machine, keys are stored encrypted and only ever sent to their own provider, no account, no telemetry, zero dependencies

**→ [How it works](router/README.md)** · [free-llm.com/router](https://free-llm.com/router) · [Release notes](CHANGELOG.md)

---

## Quick start: first request in 30 seconds

Most providers expose an **OpenAI-compatible endpoint**, so any SDK or tool that takes a base URL and an API key works: swap those two values and keep your code. The example uses Groq (no card, about 30 requests a minute and 1,000 a day); [get a key](https://console.groq.com/keys) first.

<details open>
<summary><strong>Python</strong></summary>

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key="YOUR_GROQ_API_KEY",
)

reply = client.chat.completions.create(
    model="openai/gpt-oss-120b",
    messages=[{"role": "user", "content": "Explain rate limits in one sentence."}],
)
print(reply.choices[0].message.content)
```
</details>

<details>
<summary><strong>JavaScript / TypeScript</strong></summary>

```js
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

const reply = await client.chat.completions.create({
  model: "openai/gpt-oss-120b",
  messages: [{ role: "user", content: "Explain rate limits in one sentence." }],
});
console.log(reply.choices[0].message.content);
```
</details>

<details>
<summary><strong>curl</strong></summary>

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model": "openai/gpt-oss-120b", "messages": [{"role": "user", "content": "Hello!"}]}'
```
</details>

**Switching provider** = change `base_url`, the key and the model ID. All three are in the [Quick reference](#quick-reference-base-urls-and-api-keys) and on each provider's page. When you get an HTTP `429`, you hit the free limit: wait for the window to reset, or fall back to another provider ([guide](https://free-llm.com/guides/free-llm-fallback-system)), or let the [router](#-free-llm-router-many-small-free-plans-one-big-one) do it for you.

---

## Coding assistants on free models

| Tool | How | Guide |
|:---|:---|:---|
| **Claude Code** | Needs the Anthropic Messages API: use a provider with a native Anthropic endpoint (OpenRouter, Z.AI, FreeInference, local Ollama), a LiteLLM proxy, or `free-llm setup claude` | [`claude-code.md`](code-examples/claude-code.md) |
| **Codex CLI** | Add a provider to `~/.codex/config.toml` with `wire_api = "chat"` | [`codex.md`](code-examples/codex.md) |
| **Cursor** | Settings → Models → override the OpenAI base URL, add the model ID | [`cursor.md`](code-examples/cursor.md) |
| **OpenCode** | `/connect`, or an environment variable per provider | [`opencode.md`](code-examples/opencode.md) |

Agent sessions send many requests in a row, so a 20–30 requests/minute plan throttles quickly. Pick a fast provider (Groq, NVIDIA NIM), spread the load with the router, or run a local model.

---

## Provider directory

Three kinds of free access, kept apart because they behave very differently over time. Each provider name links to its page on free-llm.com, with every free model, the exact limits, setup steps and community notes.

### ⚡ Permanent free tiers

Ongoing free access with rate limits; nothing runs out, the quota resets.

<!--TABLE:PERMANENT:START-->
| Provider · sign-up | Free limits | Key models |
|:---|:---|:---|
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 No card</sub> | ⏱️ Varies by model (per-model limits are now shown only inside AI Studio)<br>📅 Varies by model (shown in AI Studio). Free: Gemini 4 Hydrogen, Gemini 3.x Flash / Flash-Lite a…<br>🗓️ Free of charge<br><sub>[details →](https://free-llm.com/provider/google-ai-studio)</sub> | Gemini 3.8 Flash, Gemini 3 Flash Preview, Gemini 3.1 Flash-Lite, Gemini 3.5 Flash-Lite |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 No card</sub> | ⏱️ 30 RPM; 8K TPM on most chat models (varies by model)<br>📅 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model)<br>🗓️ Free Forever | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B, Whisper Large v3 |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 Phone check</sub> | ⏱️ ~40 RPM (varies per model, not published) | GLM-5.3 Flash, Gemma 4 31B IT, Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 No card</sub> | ⏱️ Varies by model<br>📅 10,000 neurons/day<br>🗓️ ~300,000 neurons/month | Qwen3.8 27B, GLM 4.7 Flash, GPT OSS 120B, Gemma 4 26B A4B |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 No card</sub> | ⏱️ 20 requests/minute<br>📅 1,000 API calls/month (trial key)<br>🗓️ 1,000 API calls/month (trial key, non-commercial) | Command A (111B), Command A Vision, Command A Reasoning, Command R+ (08-2024) |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ Email sign-up</sub> | ⏱️ ~1 request/second (Flash models)<br>📅 ~1,000 requests/day (Flash tier)<br>🗓️ Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 No card</sub> | ⏱️ 200 requests/hour per IP on free models (anonymous use allowed)<br>📅 Default free models only<br>🗓️ Free plan, no expiry | Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B, Nemotron 3.5 Lightning, Glyph Cluster (stealth) |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ Email sign-up</sub> | ⏱️ 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go)<br>🗓️ Beta Access | Qwen3.8 27B, GPT OSS 120B, Gemma 4 26B A4B, Llama 3.3 70B Instruct |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 Phone check</sub> | ⏱️ Concurrency limited dynamically according to platform load<br>📅 Counted in Magicubes: about 0.5, 1 or 2 per call depending on model size<br>🗓️ Free, no billing | Qwen3.8 27B, GLM-4.7 Flash, DeepSeek V4.1 Flash (1017), DeepSeek V4.1 Flash |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 No card</sub> | ⏱️ Not published ("generous quota"; HTTP 429 when rate-limited)<br>📅 No published daily cap | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M3, Qwen3.6 35B A3B |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 Phone check</sub> | ⏱️ Fixed limits on free models, shown in the console after login<br>📅 Not published on the public site<br>🗓️ Free models available after identity verification | Qwen3.5 4B, GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 Phone check</sub> | ⏱️ Low concurrency on free Flash models (GLM-4.7-Flash reported at 1 concurrent request) | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4-Flash-250414, GLM-4.6V-Flash (vision) |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 No card</sub> | ⏱️ Queue-based; anonymous requests have the lowest priority, registered users earn kudos for prio…<br>📅 No fixed cap (volunteer capacity)<br><sub>[details →](https://free-llm.com/provider/ai-horde)</sub> | L3 8B Stheno v3.2, Gemma 4 E4B IT, Qwen3 4B, Llama 3.2 1B Instruct |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 No card</sub> | ⏱️ 5 requests/min before the first top-up<br>📅 Free Flash models with no daily cap published; $2 welcome credit for paid models | GLM-4.7 Flash, GLM-4.6V Flash, GLM-4.1V Thinking Flash, CogView-3 Flash |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 No card</sub> | ⏱️ API key required (anonymous access removed); no card<br>📅 Free usage paid from Quest Pollen earned in the dashboard<br>🗓️ Free usage is paid from Quest Pollen earned in the dashboard | GLM 5.3 Flash, GPT-OSS 20B, DeepSeek V4 Flash, Mistral Large 3 |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 No card</sub> | ⏱️ Not published (daily credit allowance)<br>📅 Daily free credit allowance (amount not published by Aion Labs)<br>🗓️ Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 No card</sub> | ⏱️ 1 RPM<br>📅 1,000 requests/day<br>🗓️ Free plan, $0/month | GPT-OSS 20B, Kimi K2.7 Code, Llama Instant |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 No card</sub> | ⏱️ 30 requests/day on the free plan; effective upstream rate limits also apply<br>📅 30 requests/day<br>🗓️ 800 rounds/month | fm-v1-lite (free tier alias, default model), fm-v1-standard (paid, Standard plan only), fm-v1-pro (paid, Pro plan only) |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 No card</sub> | ⏱️ 5 requests/second, 200 RPM (text models); 20 RPM for OCR<br>📅 No daily cap published | Typhoon 2.5 30B A3B Instruct, Typhoon OCR 1.5 |
| **[Plugsky](https://free-llm.com/provider/plugsky)**<br><sub>🟢 No card</sub> | ⏱️ 30 RPM<br>📅 500 requests/day (about 100/day for accounts created from 2 Nov 2026)<br>🗓️ Free plan, no card, 2 API keys | plugsky-micro, plugsky-lite |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ Email sign-up</sub> | ⏱️ Baseline rate limits (figures not published) | MiniMax M3, Auto router, Nemotron 3 Ultra, Nemotron 3 Super |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ Email sign-up</sub> | ⏱️ 10 requests/minute per user (increase on request: sealion@aisingapore.org) | Qwen SEA-LION v4.5 27B Instruct, Llama SEA-LION v3.5 70B Reasoning, SEA-Guard (safety), SEA-LION Embedding 600M |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ Email sign-up</sub> | ⏱️ About 30 RPM per account (video 2 RPM), per third-party listings | Agnes 3.0 Flash, Agnes 2.5 Flash, Agnes Image 2.1 Flash (image) |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ Email sign-up</sub> | ⏱️ 30 requests per minute per API key, enforced as one request every 2 seconds (429 with Retry-Af…<br>📅 None published<br>🗓️ None published<br><sub>[details →](https://free-llm.com/provider/merkium)</sub> | Ganymede 1.1 (now Neptune), Pluto 1.2 Pro (now Ceres), Pluto 1.2 Flash (now Ceres) |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ Email sign-up</sub> | ⏱️ 5 RPM on :free models<br>📅 200 requests/day<br>🗓️ Starter plan free, shared queue | MiniMax M3.1 Flash (free), Muse Glimmer 30B |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ Email sign-up</sub> | ⏱️ 1 request at a time; max 12K context tokens<br>📅 Limited trial uses per model (about 5 requests per 2 days, per third-party list) | Qwen3.5 27B Derestricted |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ Email sign-up</sub> | ⏱️ Per-organization, per-model RPM/TPM (values shown in console only) | Qwen3.5 4B (free) |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 Phone check</sub> | ⏱️ Not published on the HTTP doc<br>📅 Not published (Lite is free) | Spark Lite |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 Phone check</sub> | 📅 Not published (\"限时放量\" during public beta) | SenseNova 6.8 Flash Lite |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 Card required</sub> | ⏱️ Standard rate limits (figures not published)<br>📅 Free models only (no monthly credit)<br>🗓️ Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 ch…<br><sub>[details →](https://free-llm.com/provider/nous-portal)</sub> | StepFun Step 3.7 Flash, Upstage Solar Mini 4, Qwen4 Max, LongCat 2.5 |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 Card required</sub> | ⏱️ 10 requests, 4M input / 100K output tokens per 60s (per API key)<br>📅 No daily cap published (free while the API is experimental); a Hetzner account with billing de…<br>🗓️ Free until the experiment ends on 8 December 2026<br><sub>[details →](https://free-llm.com/provider/hetzner-inference)</sub> | Qwen3.8 27B, Qwen3.6 35B A3B |
<!--TABLE:PERMANENT:END-->

### 💰 Renewable credits

A free allowance (credits, tokens or neurons) that refills every day or month.

<!--TABLE:RENEWABLE:START-->
| Provider · sign-up | Free limits | Key models |
|:---|:---|:---|
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 No card</sub> | 🎁 50 requests/day (up to 1000 with $10 topup)<br>⏱️ 20 requests/minute | Gemma 4 31B IT, Gemma 4 26B A4B IT, Nemotron 3.5 Super VL, Recursive Flint v1.0 (free) |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ Email sign-up</sub> | 🎁 $5/month<br>⏱️ Lower per-model limits than the paid tier (429 on excess) | GLM-4.7 Flash, GPT-OSS 120B, Llama 3.3 70B, Nemotron 3.5 Lightning (free) |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 No card</sub> | 🎁 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models<br>⏱️ 20 RPM on free models (60 RPM for paying orgs) | Gemma 4 31B IT, Nemotron 3.5 Lightning 30B A3B, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 No card</sub> | 🎁 Tier 1: 50-500 free-model requests/day (varies by model)<br>⏱️ Tier 1 (free): 20-200 RPM | GLM 4.7 Flash (needs $1 top-up per third-party list), Mistral Small 3.2 24B, L3 8B Stheno v3.2, Manta Pro 1.0 |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 No card</sub> | 🎁 $0.50 of managed model usage per day; 5,000 requests per month<br>⏱️ 100 managed requests per day | GPT-OSS 120B, Gemma 4 31B IT, GLM-4.7 Flash, DeepSeek V4 Flash |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 No card</sub> | 🎁 See provider<br>⏱️ See provider | GLM 5.3 Flash (zai-org/GLM-5.3-Flash), gpt-oss 120B (openai/gpt-oss-120b), DeepSeek V4.1 Flash (deepseek-ai/DeepSeek-V4.1-Flash), GLM 5.3 (zai-org/GLM-5.3) |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 No card</sub> | 🎁 100K ANY tokens per day, free models only<br>⏱️ Limited API calls on the Free plan (exact RPM not published) | See provider |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ Email sign-up</sub> | 🎁 Per-model daily allowance (e.g. 200K tokens/day on dated previews)<br>⏱️ Not published; lower allowance in an account's first 24h | Qwen3.8 27B (free), Gemma 4 31B, DeepSeek V4.1 Flash, GLM-5.3 |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ Email sign-up</sub> | 🎁 100 requests/day and 1M tokens/day per account (500 RPD on some, e.g. glm-4.7-flash-free, codi…<br>⏱️ 5 RPM per account on most *-free routes<br><sub>[details →](https://free-llm.com/provider/aihubmix)</sub> | Gemma 4 31B IT (free), GLM 4.7 Flash (free), Nemotron 3 Ultra 550B A55B (free), Coding GLM 5.3 (free) |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ Email sign-up</sub> | 🎁 Daily cap in points (pts), per account; resets 00:00 UTC+8<br>⏱️ 20 RPM per account, 30 RPM per API key, 120 RPM per IP, 8 concurrent requests per key | GLM-5.3-Flash, Qwen3.8-27B, Gemma-4-31B-IT, DeepSeek-V4.1-Flash |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ Email sign-up</sub> | 🎁 50 requests/day per account shared across free models, reset 07:00 WIB<br>⏱️ 5 requests/minute (free models) | GLM 4.7 Flash, Gemma 4 26B, Llama 3.1 8B, Qwen3 30B |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ Email sign-up</sub> | 🎁 60 weighted units/day (120 with credit), resets 00:00 UTC<br>⏱️ 10 RPM (20 RPM with any credit), 2 concurrent requests | DeepSeek V4 Flash 0731 (free), Nemotron 3.5 Lightning (free), Glyph Cluster (stealth), Qwen3.7 Flash |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ Email sign-up</sub> | 🎁 Free-model hourly/daily request and token allowances (values per account, not published)<br>⏱️ Account-specific (read via GET /v1/rate-limit) | Llama 3.1 8B Free, Gemma E4B Free, Mistral 7B (tier free, $0), Kode 14B (tier free, $0) |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ Email sign-up</sub> | 🎁 Free allowance, resets on a rolling 7-day period<br>⏱️ 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ Email sign-up</sub> | 🎁 Resets every day (Flash models only)<br>⏱️ Daily usage allowance (amount not published) | GLM-5.3 Flash, DeepSeek V4.1 Flash |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ Email sign-up</sub> | 🎁 See provider<br>⏱️ No per-key RPM/TPM cap; one request at a time per account | DeepSeek V4.1 Flash 1017 |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ Email sign-up</sub> | 🎁 50 requests/day (first 7 days), then 10 requests/day<br>⏱️ 10 requests/minute per key | qwen3-coder-30b |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ Email sign-up</sub> | 🎁 $1 free credits, refreshed every 4 weeks<br>⏱️ 1 concurrent request (open models); 10 requests/second (closed models) | See provider |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 Phone check</sub> | 🎁 Monthly free token grant after SMS verification (does not accumulate)<br>⏱️ Network limits (see docs.gonkabroker.com Limits & Quotas) | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 Phone check</sub> | 🎁 100 free calls/day per user (free experience access token) | GLM 5.3 Flash, Qwen3.8 27B, DeepSeek V4 Flash 0731 |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 Card required</sub> | 🎁 $5 free credits every month (payment method attached)<br>⏱️ Not published for Free plan (most relaxed on flex window) | GLM 5.3 Flash, Gemma 4 31B IT, GLM 5.3, Kimi K3 |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 Card required</sub> | 🎁 300,000 tokens/month + 20 CUH/month<br>⏱️ About 2 requests/second (Lite) | GPT-OSS 120B, Llama 3.3 70B Instruct, Mistral Small 3.1 24B, Granite 4 H Small |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 Card required</sub> | 🎁 1M input+output tokens/day shared across free core models, reset 00:00 UTC<br>⏱️ 10 RPM and 250K TPM per free core model | DeepSeek V4.1 Flash 1017, GPT-6 Luna, Clef Flash (decision endpoint, free promo) |
<!--TABLE:RENEWABLE:END-->

### 🎁 One-time trial credits

Credits you get once at sign-up; when they are spent, it's over. Good for testing a big model before paying.

<!--TABLE:TRIAL:START-->
| Provider · sign-up | Free credit | Key models |
|:---|:---|:---|
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 Card required</sub> | 🎁 $5 after adding a verified payment method (expires after 30 days)<br>⌛ 30 days | GPT OSS 120B, Qwen 3.8 27B |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ Email sign-up</sub> | 🎁 1M tokens (+60 min audio transcription), all serverless models<br>⌛ One-time | Qwen3.8 27B, GPT-OSS 120B, DeepSeek V4.1 Flash (1017), Gemma 4 26B A4B IT |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ Email sign-up</sub> | 🎁 Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1)<br>⌛ One-time | GLM 5.3 Flash, GPT-OSS 120B, DeepSeek V4.1 Flash, GLM 5.3 |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ Email sign-up</sub> | 🎁 ~1M tokens per model, 90 days (Singapore; newer models only since Oct 29, 2026)<br>⌛ One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ Email sign-up</sub> | 🎁 No automatic sign-up credit; $10 per referral (both sides)<br>⌛ One-time | Qwen3.8 27B, GLM 5.3, Llama 3.3 70B Instruct, Kimi K3 |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 Phone check</sub> | 🎁 $1 after phone verification (Free Tier)<br>⌛ One-time | Qwen3.8 27B, GLM-5.3 Flash, DeepSeek V4.1 Flash, DeepSeek V4 Flash 0731 |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 No card</sub> | 🎁 30-day trial, 1M tokens/day, no card<br>⌛ 30 days | Qwen3.8 27B, GPT-OSS 120B, Gemma 4 31B, GLM-5.2 |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 No card</sub> | 🎁 Free tokens on an auto-generated key (amount not stated on page)<br>⌛ Keys do not expire | Jina Embeddings v5 Text Small, Jina Embeddings v5 Text Nano, Jina Embeddings v5 Omni Small, Jina Embeddings v3 |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 No card</sub> | 🎁 100 free credits on sign-up (~$1, at $0.01/credit)<br>⌛ One-time, then pay-as-you-go | Qwen3.8 27B, Gemma 4 26B A4B IT, Qwen3.5 0.8B, DiffusionGemma 26B A4B |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 No card</sub> | 🎁 $5<br>⌛ One-time | Grok 4.7, grok-4.6, grok-4.3, grok-build-0.1 |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 No card</sub> | 🎁 1M free tokens for new users<br>⌛ One-time | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M2.7 |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 No card</sub> | 🎁 100M tokens<br>⌛ One-time (new accounts) | Mercury 3, Mercury 2.5, Mercury 2 |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 No card</sub> | 🎁 $5 welcome credit after CLI login<br>⌛ One-time | Vectoree Auto (router) |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ Email sign-up</sub> | — | DeepSeek V4.1 Flash, GLM 5.3, GPT-6.1 Sol, Claude Opus 5.5 |
| **[AMD Token Lab](https://free-llm.com/provider/amd-token-lab)**<br><sub>✉️ Email sign-up</sub> | — | Qwen3.8-27B, Gemma-4-31B-IT, DeepSeek-V4.1-Flash, DeepSeek-V4-Flash |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ Email sign-up</sub> | 🎁 First 200M tokens free per model (voyage-4 family, rerank-2.5); 50M on domain models<br>⌛ One-time per account per model | Voyage 4 Large, Voyage 4, Voyage 4 Lite, Voyage Code 3 |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ Email sign-up</sub> | 🎁 Trial credits at onboarding (amount not published)<br>⌛ One-time | GLM 5.3 Flash, Gemma 4 31B, GLM 5.3, GLM 5.2 |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ Email sign-up</sub> | 🎁 Free-tier quota access, no billing account<br>⌛ Up to 90 days for new Google Cloud users | Gemini 3.1 Pro Preview, Gemini 3 Flash Preview, Gemini 2.5 Pro, Gemini 2.5 Flash |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ Email sign-up</sub> | — | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ Email sign-up</sub> | 🎁 $2 free voucher on signup ($4 with an invite code, per third-party list)<br>⌛ One-time | Kimi K2.7 Code |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ Email sign-up</sub> | 🎁 No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per sec…<br>⌛ One-time<br><sub>[details →](https://free-llm.com/provider/cerebrium)</sub> | See provider |
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ Email sign-up</sub> | 🎁 Limited free runs on select models<br>⌛ One-time | See provider |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ Email sign-up</sub> | 🎁 $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify)<br>⌛ 3 months | See provider |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 Phone check</sub> | 🎁 INR 100 free credits on signup<br>⌛ One-time; credits do not expire (per third-party list) | Sarvam 105B, Sarvam 105B Conversations |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 Card required</sub> | 🎁 1M free tokens per language model, once per account per model<br>⌛ 90 days after claim (intl promo page; docs say 1 year); campaign ends 2026-12-31" - DeepSeek-V…<br><sub>[details →](https://free-llm.com/provider/tencent-tokenhub)</sub> | See provider |
<!--TABLE:TRIAL:END-->

### 🖥️ Local and self-hosted: unlimited, private, free forever

Run open models on your own computer: no account, no limits other than your hardware, nothing leaves your machine.

| Tool | Type | Highlights |
|:---|:---|:---|
| [Ollama](https://ollama.com/) | CLI + API | 100+ models, GPU acceleration, OpenAI-compatible endpoint |
| [LM Studio](https://lmstudio.ai/) | Desktop GUI | Any GGUF model, built-in model browser, offline |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ engine | Runs any GGUF, minimal dependencies |
| [GPT4All](https://gpt4all.io/) | Desktop app | CPU-only, no GPU required, open source (no release since Feb 2025) |
| [Jan.ai](https://jan.ai/) | Desktop app | Privacy-focused, 100% offline ChatGPT alternative |
| [KoboldCpp](https://github.com/LostRuins/koboldcpp) | Single executable | Optimized for creative writing, GGUF |
| [llamafile](https://github.com/mozilla-ai/llamafile) | Single executable | Multi-platform, combines llama.cpp + Cosmopolitan Libc |
| [Text Generation WebUI](https://github.com/oobabooga/textgen) | Gradio UI | Highly customizable, advanced local experimentation |
| [BentoML](https://www.bentoml.com/) | Inference platform | Deploy any AI/ML model anywhere, production-grade |

---

## Quick reference: base URLs and API keys

Every hosted provider that is free today, with the base URL to paste into an OpenAI-compatible client and a direct link to create a key. Easiest sign-ups first.

<!--TABLE:QUICKREF:START-->
| Provider · sign-up · API key | OpenAI-compatible base URL |
|:---|:---|
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://aistudio.google.com/)</sub> | `https://generativelanguage.googleapis.com/v1beta/openai` |
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://openrouter.ai/)</sub> | `https://openrouter.ai/api/v1` |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://console.groq.com/)</sub> | `https://api.groq.com/openai/v1` |
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://cerebras.ai/inference)</sub> | `https://api.cerebras.ai/v1` |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://build.nvidia.com/explore/discover)</sub> | `https://integrate.api.nvidia.com/v1` |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://dash.cloudflare.com/)</sub> | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1` |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://cohere.com/)</sub> | `https://api.cohere.ai/compatibility/v1` |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://z.ai/)</sub> | `https://api.z.ai/api/paas/v4` |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://kilo.ai/gateway)</sub> | `https://ai-gateway.kilo.ai/api/v1` |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://console.scaleway.com/generative-api/models)</sub> | `https://api.scaleway.ai/v1` |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://endpoints.ai.cloud.ovh.net/)</sub> | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://vercel.com/ai-gateway)</sub> | `https://ai-gateway.vercel.sh/v1` |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://fireworks.ai/)</sub> | `https://api.fireworks.ai/inference/v1` |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://bailian.console.alibabacloud.com/)</sub> | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://modelscope.cn)</sub> | `https://api-inference.modelscope.cn/v1` |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://requesty.ai/)</sub> | `https://router.requesty.ai/v1` |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://freeinference.org)</sub> | `https://freeinference.org/v1` |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://novita.ai/)</sub> | `https://api.novita.ai/v3/openai` |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://www.siliconflow.cn/pricing)</sub> | `https://api.siliconflow.cn/v1` |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://app.hyperbolic.xyz/)</sub> | `https://api.hyperbolic.ai/inference/v1` |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://docs.bigmodel.cn/cn/guide/start/model-overview)</sub> | `https://open.bigmodel.cn/api/paas/v4` |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://docs.meganova.ai/tiers)</sub> | `https://api.meganova.ai/v1` |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://inferbase.ai)</sub> | `https://api.inferbase.ai/v1` |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://regolo.ai)</sub> | `https://api.regolo.ai/v1` |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://aihorde.net)</sub> | `https://oai.aihorde.net/v1` |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://jina.ai/embeddings/)</sub> | `https://api.jina.ai/v1` |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://aiapi-pro.com)</sub> | `https://aiapi-pro.com/v1` |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://pollinations.ai)</sub> | `https://gen.pollinations.ai/v1` |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://www.runcrate.ai/inference/free)</sub> | `https://api.runcrate.ai/v1` |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://docs.vlm.run/gateway/rate-limits)</sub> | `https://gateway.vlm.run/v1/openai` |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://grokified.com)</sub> | `https://api.grokified.com/v1` |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://www.aionlabs.ai/pricing/)</sub> | `https://api.aionlabs.ai/v1` |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://api.airforce/)</sub> | `https://api.airforce/v1` |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://freemodel.online/)</sub> | `https://freemodel.online/v1 (OpenAI-compatible) · https://freemodel.online/api/gateway (Anthropic-compatible)` |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://gonkarouter.io)</sub> | `https://api.gonkarouter.io/v1` |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://www.inceptionlabs.ai/)</sub> | `https://api.inceptionlabs.ai/v1` |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://opentyphoon.ai)</sub> | `https://api.opentyphoon.ai/v1` |
| **[Plugsky](https://free-llm.com/provider/plugsky)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://plugsky.com/)</sub> | `https://api.plugsky.com/v1` |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://vectoree.ai)</sub> | `https://vectoree.ai/api/v1` |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://anyapi.ai)</sub> | `https://api.anyapi.ai/v1` |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://llmtr.com/en/terms)</sub> | `https://llmtr.com/v1` |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://aihubmix.com)</sub> | `https://aihubmix.com/v1` |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://developer.amd.com.cn/radeon/tokenfactory)</sub> | `https://developer.amd.com.cn/radeon/api/v1` |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://hiapi.ai/)</sub> | `https://api.hiapi.ai/v1` |
| **[AMD Token Lab](https://free-llm.com/provider/amd-token-lab)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://notebooks.amd.com/tokenlab)</sub> | `https://api.tokenlab.amd.com/v1` |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://docs.voyageai.com/docs/pricing)</sub> | `https://api.voyageai.com/v1` |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://friendli.ai/)</sub> | `https://inference.friendli.ai/v1` |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview)</sub> | <sub>native API only — [setup guide](https://free-llm.com/provider/vertex-ai-express)</sub> |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://kiosapi.id/pricing)</sub> | `https://api.kiosapi.id/v1` |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://llm.kiwi/pricing)</sub> | `https://api.llm.kiwi/v1` |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://bazaarlink.ai/free)</sub> | `https://api.bazaarlink.ai/v1` |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://docs.sea-lion.ai/guides/inferencing/api)</sub> | `https://api.sea-lion.ai/v1` |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://simplellm.eu/docs/)</sub> | `https://api.simplellm.eu/v1` |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://agnes-ai.com)</sub> | `https://apihub.agnes-ai.com/v1` |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://inference.dahl.global/)</sub> | `https://inference.dahl.global/v1` |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://www.merkium.nl/)</sub> | `https://chat.merkium.nl/api/v1` |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://tokenharbor.ai)</sub> | `https://tokenharbor.ai/v1` |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://routeway.ai/)</sub> | `https://api.routeway.ai/v1` |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://zro.moonmath.ai)</sub> | `https://zro.moonmath.ai/v1` |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://www.arliai.com/pricing)</sub> | `https://api.arliai.com/v1` |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://cheapllm.shop/)</sub> | `https://cheapllm.shop/v1` |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://www.hpc-ai.com/model-apis)</sub> | `https://api.hpc-ai.com/inference/v1` |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://docs.mixlayer.com/credits-and-limits)</sub> | `https://models.mixlayer.ai/v1` |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://synap402.com/)</sub> | `https://synap402.com/v1` |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://docs.bytez.com/model-api/docs/billing)</sub> | `https://api.bytez.com/models/v2/openai/v1` |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://www.cerebrium.ai/)</sub> | <sub>native API only — [setup guide](https://free-llm.com/provider/cerebrium)</sub> |
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://replicate.com/)</sub> | <sub>native API only — [setup guide](https://free-llm.com/provider/replicate)</sub> |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://console.upstage.ai/)</sub> | `https://api.upstage.ai/v1` |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://gonkabroker.com)</sub> | `https://proxy.gonkabroker.com/v1` |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://moark.com/docs/FAQ)</sub> | `https://api.moark.com/v1` |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://www.sarvam.ai/api-pricing)</sub> | `https://api.sarvam.ai/v1` |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://www.xfyun.cn/doc/spark/HTTP调用文档.html)</sub> | `https://spark-api-open.xf-yun.com/v1` |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://www.sensenova.cn/token-plan)</sub> | `https://token.sensenova.cn/v1` |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://docs.sailresearch.com/pricing)</sub> | `https://api.sailresearch.com/v1` |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://www.ibm.com/products/watsonx-ai/pricing)</sub> | <sub>native API only — [setup guide](https://free-llm.com/provider/ibm-watsonx)</sub> |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://portal.nousresearch.com)</sub> | `https://inference-api.nousresearch.com/v1` |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://www.experientiallabs.ai/pricing)</sub> | `https://api.experientiallabs.ai/v1` |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://experiments.hetzner.com/inference)</sub> | `https://inference.hetzner.com/api/v1` |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://www.tencentcloud.com/act/pro/tokenhub)</sub> | `https://tokenhub-intl.tencentmaas.com/v1` |
<!--TABLE:QUICKREF:END-->

---

## How this list stays accurate

- **Official sources only.** Before an entry goes live, its free tier is checked on the provider's own pricing page, docs or public `/v1/models` list. Third-party lists and blog posts don't count.
- **Rebuilt every night.** The tables in this README, the [free-tier changelog](FREE-TIER-CHANGELOG.md) and the router's catalog snapshot are regenerated daily from the free-llm.com database. Hand edits to the tables are overwritten; corrections go in the data.
- **Nothing silently disappears.** When a model or a provider stops being free, it is marked as such and logged with its date in the [changelog](https://free-llm.com/changelog) ([RSS](https://free-llm.com/changelog-feed)), instead of vanishing.
- **Readers keep it honest.** Many changes come from people who noticed a free tier ending. If you spot one, [open a correction](https://github.com/nejib1/Free-LLM/issues/new/choose) with a link to the official page, or use the report button on the provider's page.
- **No key pools.** Services that resell or share access to other companies' models ("free Claude/GPT keys") are never listed.

---

## FAQ

<details>
<summary><strong>Are these APIs really free?</strong></summary>

Yes, within limits. "Free" here means you can make real API calls without paying: a rate-limited free tier, a renewable allowance, or one-time sign-up credits. None of them is unlimited; the limits are listed for each provider. Local tools such as Ollama are the only truly unlimited option, because they run on your own hardware.
</details>

<details>
<summary><strong>Do I need a credit card?</strong></summary>

For most providers, no. Each entry is labelled 🟢 no card, ✉️ email sign-up, 📱 phone verification or 💳 card required. A card on file is sometimes needed to unlock a free tier even though nothing is charged; those providers are clearly marked.
</details>

<details>
<summary><strong>Which one should I start with?</strong></summary>

For most people: [Google AI Studio](https://free-llm.com/provider/google-ai-studio) (Gemini, long context, images), [Groq](https://free-llm.com/provider/groq-cloud) (speed) and [OpenRouter](https://free-llm.com/provider/openrouter) (many free models behind one key). All three work without a card. See [Start here](#-start-here-the-best-free-picks-right-now) for other needs.
</details>

<details>
<summary><strong>Can I use free tiers in production or for commercial work?</strong></summary>

It depends on the provider. Some free tiers are explicitly for evaluation or non-commercial use (Cohere's trial keys, for example), and free models on some gateways may use your prompts for training. Read the provider's terms before building on it, and plan a fallback: free tiers can change with little notice.
</details>

<details>
<summary><strong>Are my prompts private?</strong></summary>

Not always. Some free models, especially on aggregators, may log or train on inputs. Check the provider's data policy, avoid sending secrets or personal data to a free endpoint, or run a local model when privacy matters.
</details>

<details>
<summary><strong>What happens when I hit the limit?</strong></summary>

The API returns HTTP `429 Too Many Requests` until the window resets (per minute, per day or per month, depending on the provider). Retrying with backoff, switching to another provider that serves the same model, or using the [Free-LLM Router](#-free-llm-router-many-small-free-plans-one-big-one) keeps things running.
</details>

<details>
<summary><strong>Is there a machine-readable version?</strong></summary>

Yes: [free-llm.com/catalog.json](https://free-llm.com/catalog.json) lists every free provider and model with base URLs and limits. The router uses it, and you can too.
</details>

---

## Guides

In-depth guides on [free-llm.com/guides](https://free-llm.com/guides/), kept up to date with the same data:

| Getting started | Coding | Going further |
|:---|:---|:---|
| [Best free LLM APIs in 2026](https://free-llm.com/guides/best-free-llm-apis-2026) | [Claude Code for free](https://free-llm.com/guides/claude-code-free) | [Never hit a rate limit: fallback chains](https://free-llm.com/guides/free-llm-fallback-system) |
| [Ultimate free LLM API guide](https://free-llm.com/guides/ultimate-free-llm-api-guide) | [Best free LLMs for coding](https://free-llm.com/guides/best-free-llm-for-coding) | [OpenRouter alternatives](https://free-llm.com/guides/openrouter-alternatives) |
| [Gemini vs ChatGPT: the free tiers](https://free-llm.com/guides/gemini-vs-chatgpt-free) | [How to use OpenRouter](https://free-llm.com/guides/how-to-use-openrouter) | [Local LLMs with Ollama](https://free-llm.com/guides/local-llm-ollama-guide) |

📰 Monthly report: [what changed in November 2026](https://free-llm.com/guides/free-llm-apis-november-2026-what-changed)

---

## Code examples

[`code-examples/`](code-examples/) has a folder per provider with a `python.py`, a `javascript.js`, a `curl.sh` and a README with its free models; add your key and run.

**By coding assistant:** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md) · [OpenCode](code-examples/opencode.md)

<!--CODEEX:PROVIDERS:START-->
**By provider (70):** [Agnes AI](code-examples/agnes-ai) · [AI Horde (OpenAI-compatible front)](code-examples/ai-horde) · [AIHubMix (free models)](code-examples/aihubmix) · [Aion Labs](code-examples/aion-labs) · [AnyAPI](code-examples/anyapi) · [Api.Airforce](code-examples/api-airforce) · [Arli AI](code-examples/arli-ai) · [BazaarLink](code-examples/bazaarlink) · [Bytez](code-examples/bytez) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Dahl Inference](code-examples/dahl-inference) · [Experiential Labs](code-examples/experiential-labs) · [Fireworks AI](code-examples/fireworks-ai) · [FreeInference](code-examples/freeinference) · [Friendli AI](code-examples/friendli-ai) · [Gonka Broker](code-examples/gonka-broker) · [GonkaRouter](code-examples/gonkarouter) · [Google AI Studio](code-examples/google-ai-studio) · [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](code-examples/vertex-ai-express) · [Grokified](code-examples/grokified) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [HPC-AI Model APIs](code-examples/hpc-ai) · [Hyperbolic](code-examples/hyperbolic) · [IBM watsonx.ai (Lite plan)](code-examples/ibm-watsonx) · [iFlytek Spark Lite](code-examples/iflytek-spark) · [Inception Labs](code-examples/inception-labs) · [Inferbase](code-examples/inferbase) · [Jina AI (Embeddings / Reader API)](code-examples/jina-ai) · [Kilo AI Gateway](code-examples/kilo-gateway) · [Kiosapi.id](code-examples/kiosapi) · [LLM.kiwi](code-examples/llm-kiwi) · [LLMTR](code-examples/llmtr) · [MegaNova AI](code-examples/meganova) · [Mixlayer](code-examples/mixlayer) · [Moark (Gitee AI)](code-examples/moark) · [ModelScope](code-examples/modelscope) · [Nous Portal](code-examples/nous-portal) · [NovAI](code-examples/novai) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OpenTyphoon (Typhoon API)](code-examples/opentyphoon) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Regolo.ai](code-examples/regolo-ai) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Routeway](code-examples/routeway) · [Sail Research](code-examples/sail-research) · [Sarvam AI](code-examples/sarvam-ai) · [Scaleway Generative APIs](code-examples/scaleway) · [SEA-LION API](code-examples/sea-lion) · [SenseNova (SenseTime)](code-examples/sensenova) · [SiliconFlow](code-examples/siliconflow) · [SimpleLLM](code-examples/simplellm) · [Tencent Cloud TokenHub](code-examples/tencent-tokenhub) · [Token Harbor](code-examples/token-harbor) · [Upstage](code-examples/upstage) · [Vectoree](code-examples/vectoree) · [Vercel AI Gateway](code-examples/vercel-ai-gateway) · [VLM Run Gateway](code-examples/vlm-run) · [Voyage AI (embeddings & rerankers)](code-examples/voyage-ai) · [Z.AI (GLM)](code-examples/z-ai) · [Zhipu BigModel (China)](code-examples/zhipu-bigmodel) · [Zro (MoonMath)](code-examples/zro)
<!--CODEEX:PROVIDERS:END-->

**Local / Self-Hosted:** [BentoML](code-examples/bentoml) · [GPT4All](code-examples/gpt4all) · [Jan.ai](code-examples/jan-ai) · [KoboldCpp](code-examples/koboldcpp) · [llama.cpp](code-examples/llama-cpp) · [llamafile](code-examples/llamafile) · [LM Studio](code-examples/lm-studio) · [Ollama](code-examples/ollama) · [Text Gen WebUI](code-examples/text-generation-webui)

<details>
<summary><strong>Repository structure</strong></summary>

```
Free-LLM/
├── README.md                  ← You are here (English)
├── README.zh-CN.md            ← 简体中文
├── README.zh-TW.md            ← 繁體中文
├── README.ja.md               ← 日本語
├── README.ko.md               ← 한국어
├── FREE-TIER-CHANGELOG.md     ← Every free tier that started or ended, by date
├── code-examples/             ← Ready-to-run snippets, per provider and per coding tool
├── router/                    ← Free-LLM Router (source, tests, docs)
├── package.json · Dockerfile  ← Install or run the router
├── CHANGELOG.md               ← Router release notes
├── CONTRIBUTING.md · CODE_OF_CONDUCT.md · SECURITY.md · SUPPORT.md
└── LICENSE                    ← MIT
```
</details>

---

## Contributing

Corrections are the most useful contribution: free tiers change faster than anyone can track alone.

1. **Something is wrong or outdated?** [Open a data correction](https://github.com/nejib1/Free-LLM/issues/new/choose) with a link to the provider's official page. A PR that edits a table works too: the tables are rebuilt every night, so we apply the fact to the database and credit you as a co-author.
2. **A provider is missing?** Use the [submit form](https://free-llm.com/submit) or the "Add a provider" issue form. Vendors are welcome to submit their own service; just say so.
3. **A config for a tool we don't cover?** PRs to [`code-examples/`](code-examples/) and to the router are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

**What gets listed:** real free API access (free tier, renewable allowance or clearly labelled trial credits), publicly available (no waitlist or closed beta), operated by the provider itself (no resold or pooled keys), and verified on an official page.

---

## 🙌 Contributors

<!--CONTRIBUTORS:START-->
Every contribution we use is credited: your name here and in [CONTRIBUTORS.md](CONTRIBUTORS.md), co-author credit on the commit (so you show up in GitHub's Contributors list) and a thank-you in the issue. Data corrections count as much as code.

<table>
  <tr><td align="center" valign="top" width="14%"><a href="https://github.com/octo-patch"><img src="https://avatars.githubusercontent.com/u/266937838?v=4&s=80" width="64" height="64" alt="octo-patch"><br><sub><b>octo-patch</b></sub></a><br><sub title="MiniMax-M3.1-Flash in auto:reasoning routes, with a regression test">⚡ Router <a href="https://github.com/nejib1/Free-LLM/issues/40">#40</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/tridev-tej"><img src="https://avatars.githubusercontent.com/u/188414140?v=4&s=80" width="64" height="64" alt="tridev-tej"><br><sub><b>tridev-tej</b></sub></a><br><sub title="--json output for status, models and providers, with a CLI test">⚡ Router <a href="https://github.com/nejib1/Free-LLM/issues/43">#43</a> <a href="https://github.com/nejib1/Free-LLM/issues/45">#45</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/astocero-stack"><img src="https://avatars.githubusercontent.com/u/300149493?v=4&s=80" width="64" height="64" alt="astocero-stack"><br><sub><b>astocero-stack</b></sub></a><br><sub title="OpenCode setup guide">📖 Docs</sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/alfa-reza"><img src="https://avatars.githubusercontent.com/u/239479281?v=4&s=80" width="64" height="64" alt="alfa-reza"><br><sub><b>alfa-reza</b></sub></a><br><sub title="Vercel AI Gateway, Kilo AI Gateway, Routeway, Api.Airforce, LLM7.io models">🔍 Data <a href="https://github.com/nejib1/Free-LLM/issues/9">#9</a> <a href="https://github.com/nejib1/Free-LLM/issues/10">#10</a> <a href="https://github.com/nejib1/Free-LLM/issues/11">#11</a> <a href="https://github.com/nejib1/Free-LLM/issues/12">#12</a> <a href="https://github.com/nejib1/Free-LLM/issues/15">#15</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/alexstalkingking-ai"><img src="https://avatars.githubusercontent.com/u/294624862?v=4&s=80" width="64" height="64" alt="alexstalkingking-ai"><br><sub><b>alexstalkingking-ai</b></sub></a><br><sub title="First OpenCode guide proposal">📖 Docs <a href="https://github.com/nejib1/Free-LLM/issues/7">#7</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/DecayingSec"><img src="https://avatars.githubusercontent.com/u/56653747?v=4&s=80" width="64" height="64" alt="DecayingSec"><br><sub><b>DecayingSec</b></sub></a><br><sub title="Nous Portal asks for a payment method">🐛 Report <a href="https://github.com/nejib1/Free-LLM/issues/17">#17</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/APT37"><img src="https://avatars.githubusercontent.com/u/175374158?v=4&s=80" width="64" height="64" alt="APT37"><br><sub><b>APT37</b></sub></a><br><sub title="Screenshots that settled the Nous Portal card question">🐛 Report <a href="https://github.com/nejib1/Free-LLM/issues/17">#17</a></sub></td></tr>
  <tr><td align="center" valign="top" width="14%"><a href="https://github.com/yummy342"><img src="https://avatars.githubusercontent.com/u/287117562?v=4&s=80" width="64" height="64" alt="yummy342"><br><sub><b>yummy342</b></sub></a><br><sub title="FreeModel">🔍 Data <a href="https://github.com/nejib1/Free-LLM/issues/20">#20</a> <a href="https://github.com/nejib1/Free-LLM/issues/21">#21</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/autoimago"><img src="https://avatars.githubusercontent.com/u/231848405?v=4&s=80" width="64" height="64" alt="autoimago"><br><sub><b>autoimago</b></sub></a><br><sub title="Dahl Inference details">🔍 Data <a href="https://github.com/nejib1/Free-LLM/issues/23">#23</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/K-3-LT"><img src="https://avatars.githubusercontent.com/u/76082878?v=4&s=80" width="64" height="64" alt="K-3-LT"><br><sub><b>K-3-LT</b></sub></a><br><sub title="IteraCompute promotion terms and end date">🔍 Data <a href="https://github.com/nejib1/Free-LLM/issues/26">#26</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/vvvvking"><img src="https://avatars.githubusercontent.com/u/270492221?v=4&s=80" width="64" height="64" alt="vvvvking"><br><sub><b>vvvvking</b></sub></a><br><sub title="NovAI permanent free tier and models">🔍 Data <a href="https://github.com/nejib1/Free-LLM/issues/28">#28</a> <a href="https://github.com/nejib1/Free-LLM/issues/32">#32</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/abdeshahi"><img src="https://avatars.githubusercontent.com/u/300836033?v=4&s=80" width="64" height="64" alt="abdeshahi"><br><sub><b>abdeshahi</b></sub></a><br><sub title="Claude Code guide: Anthropic format, ANTHROPIC_MODEL, proxy setup">📖 Docs <a href="https://github.com/nejib1/Free-LLM/issues/29">#29</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/noraj"><img src="https://avatars.githubusercontent.com/u/16578570?v=4&s=80" width="64" height="64" alt="noraj"><br><sub><b>noraj</b></sub></a><br><sub title="Hetzner Inference sign-up requirements">🐛 Report <a href="https://github.com/nejib1/Free-LLM/issues/30">#30</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/waylake"><img src="https://avatars.githubusercontent.com/u/101973534?v=4&s=80" width="64" height="64" alt="waylake"><br><sub><b>waylake</b></sub></a><br><sub title="Inferaft">🔍 Data <a href="https://github.com/nejib1/Free-LLM/issues/33">#33</a></sub></td></tr>
  <tr><td align="center" valign="top" width="14%"><a href="https://github.com/Volko61"><img src="https://avatars.githubusercontent.com/u/147256076?v=4&s=80" width="64" height="64" alt="Volko61"><br><sub><b>Volko61</b></sub></a><br><sub title="cheapllm.shop details">🔍 Data <a href="https://github.com/nejib1/Free-LLM/issues/34">#34</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/itzosama"><img src="https://avatars.githubusercontent.com/u/55598032?v=4&s=80" width="64" height="64" alt="itzosama"><br><sub><b>itzosama</b></sub></a><br><sub title="Ollama Cloud Beam no longer free">🐛 Report <a href="https://github.com/nejib1/Free-LLM/issues/35">#35</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/CarpeNecopinum"><img src="https://avatars.githubusercontent.com/u/2080713?v=4&s=80" width="64" height="64" alt="CarpeNecopinum"><br><sub><b>CarpeNecopinum</b></sub></a><br><sub title="Mistral API no longer free">🐛 Report <a href="https://github.com/nejib1/Free-LLM/issues/37">#37</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/JoursBleu"><img src="https://avatars.githubusercontent.com/u/22388449?v=4&s=80" width="64" height="64" alt="JoursBleu"><br><sub><b>JoursBleu</b></sub></a><br><sub title="AMD Radeon Cloud Token Factory">🔍 Data <a href="https://github.com/nejib1/Free-LLM/issues/38">#38</a></sub></td><td align="center" valign="top" width="14%"><a href="https://github.com/DoSpamu"><img src="https://avatars.githubusercontent.com/u/63198180?v=4&s=80" width="64" height="64" alt="DoSpamu"><br><sub><b>DoSpamu</b></sub></a><br><sub title="Added AMD Token Lab">🔍 Data <a href="https://github.com/nejib1/Free-LLM/issues/47">#47</a></sub></td></tr>
</table>

**Want your name here?** Report a free tier that changed, add a provider, improve a guide, or pick a [`good first issue`](https://github.com/nejib1/Free-LLM/labels/good%20first%20issue) in the router.
<!--CONTRIBUTORS:END-->

---

## Links and support

- 🌐 [free-llm.com](https://free-llm.com) · 🧠 [Free models](https://free-llm.com/models) · 🆚 [Compare](https://free-llm.com/compare) · 📚 [Guides](https://free-llm.com/guides/) · 📰 [Changelog](https://free-llm.com/changelog) ([RSS](https://free-llm.com/changelog-feed))
- 🧩 [JSON catalog](https://free-llm.com/catalog.json) · ⚡ [Router](https://free-llm.com/router) · ➕ [Submit a provider](https://free-llm.com/submit) · 🏆 [Hall of Fame](https://free-llm.com/hall-of-fame)
- 💬 Questions and ideas: [GitHub Discussions](https://github.com/nejib1/Free-LLM/discussions) · 🐛 Bugs and corrections: [issues](https://github.com/nejib1/Free-LLM/issues/new/choose) ([which form?](SUPPORT.md)) · 🔒 Security: [SECURITY.md](SECURITY.md) · 🤝 [Code of conduct](CODE_OF_CONDUCT.md)

If this list saved you time, a ⭐ helps other people find it.

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

**License:** MIT, see [LICENSE](LICENSE).

---

<p align="center"><sub>Tables rebuilt automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-11-27<!--LASTSYNC:END--></sub></p>
