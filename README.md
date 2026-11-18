<p align="center">
  <h1 align="center">Free-LLM — Open Directory of Free AI &amp; LLM APIs</h1>
<!--STATS:START-->
  <p align="center"><strong>450+ free LLM models from 86 providers</strong> — find, compare &amp; configure free models in seconds, plus 9 local/self-hosted tools for unlimited private use.</p>
<!--STATS:END-->
</p>

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><strong>🌐 Live at free-llm.com</strong></a> —
  <a href="https://free-llm.com/compare" target="_blank" rel="noopener">Compare providers</a> ·
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener">Submit a provider</a> ·
  <a href="https://free-llm.com/guides" target="_blank" rel="noopener">Guides</a> ·
  <a href="https://free-llm.com/hall-of-fame" target="_blank" rel="noopener">Hall of Fame</a>
</p>

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><img alt="Website" src="https://img.shields.io/badge/Website-free--llm.com-blue?style=for-the-badge" /></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" /></a>
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener"><img alt="Community Driven" src="https://img.shields.io/badge/Community-Driven-orange?style=for-the-badge" /></a>
</p>

<p align="center">
  🌐 <a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a>
</p>

---

## ⚡ New: Free-LLM Router — all these free APIs behind one address

**The idea:** every provider below gives a *small* free plan, each with its own key and limits. The router stacks them: your app (Claude Code, Codex, Cursor, your own code…) talks to **one** OpenAI/Anthropic-compatible address, and the router always sends the request to a free model that is up — switching **instantly** when one is busy or out of quota.

**The big advantage:** many small free plans behave like one big free plan that never goes down — and the list of providers updates itself the same day from free-llm.com, for everyone, free.

```bash
npm install -g github:nejib1/Free-LLM   # installs the `free-llm` command
free-llm                                # guided setup, then http://localhost:4000
free-llm setup claude                   # Claude Code now runs on free models (also: codex, opencode, aider)
```

<p align="center"><a href="router/README.md"><img src="router/docs/dashboard.png" width="760" alt="Free-LLM Router dashboard"></a></p>

Works with zero keys to try (guest mode) · one-command setup for coding agents · OpenAI, Anthropic, Codex Responses, Ollama & MCP APIs · zero dependencies · keys stay encrypted on your computer.
**→ [Read how it works](router/README.md)** · [free-llm.com/router](https://free-llm.com/router)

---

## Why This Exists

Finding a free LLM API shouldn't mean hunting through a dozen changelogs, signing up for five platforms just to compare rate limits, or guessing which provider still has a free tier this month.

This repo — backed by the live directory at **[free-llm.com](https://free-llm.com)** — is a structured, community-maintained reference covering every provider that lets you use LLMs at zero cost.

- ✅ **Community-maintained** — votes, submissions, and edit suggestions from real users, moderated before publishing
- ✅ **Credit card transparency** — every provider below is labeled with whether it needs a card, phone verification, or nothing at all
- ✅ **Ready-to-run code** — Python/JavaScript/curl snippets for every active provider in [`code-examples/`](code-examples/), plus per-tool configs for Claude Code, Cursor, Codex, and OpenCode
- ✅ **Side-by-side comparison** — [free-llm.com/compare](https://free-llm.com/compare) puts two providers head-to-head on limits, models, and pricing

---

## How to Use — 3 Steps

1. **Pick a provider** — see the [Provider Directory](#provider-directory) below. New to this? Start with **Groq** (no credit card, ~30 RPM / 1,000 requests per day per model, free forever).
2. **Get your API key** — every row links straight to the provider's key page in [Quick Reference](#quick-reference--base-urls--api-keys). Most only need an email address.
3. **Plug it in** — copy the base URL + a model ID from the tables below into the snippets in [Quick Start](#quick-start--use-any-free-api-in-30-seconds).

Full details, live status, and community notes for each provider live on its page at **free-llm.com/provider/&lt;slug&gt;** (e.g. [free-llm.com/provider/groq](https://free-llm.com/provider/groq)).

---

## Quick Start — Use Any Free API in 30 Seconds

Most providers below expose an **OpenAI-compatible endpoint**. Any tool that accepts a `baseURL` + `apiKey` works — just swap the two.

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # free, no credit card
    api_key="GROQ_API_KEY",                      # get at console.groq.com/keys
)

response = client.chat.completions.create(
    model="openai/gpt-oss-120b",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
# Groq free tier: ~30 RPM, 1,000 requests/day per chat model — plenty for personal use
```

### Coding assistants

Point your AI coding tool at a free backend instead of a paid one:

- **Claude Code** — speaks the Anthropic API, so use a provider with a native Anthropic endpoint (OpenRouter, Z.AI, FreeInference, Ollama) or a LiteLLM proxy. See [`code-examples/claude-code.md`](code-examples/claude-code.md)
- **Cursor** — Settings → Models → Add Model. See [`code-examples/cursor.md`](code-examples/cursor.md)
- **Codex CLI** — set `OPENAI_BASE_URL` + `OPENAI_API_KEY`. See [`code-examples/codex.md`](code-examples/codex.md)
- **OpenCode** — open source AI coding agent, supports multiple providers via `/connect` or env vars. See [`code-examples/opencode.md`](code-examples/opencode.md)

Every other provider has a ready-to-copy snippet in [`code-examples/`](code-examples/) — see [Code Examples](#code-examples) below.

---

## Provider Directory

### ⚡ Permanent Free Tiers

Ongoing free access with rate-limited quotas that never expire.

<!--TABLE:PERMANENT:START-->
| Provider · sign-up | Free limits | Key models |
|:---|:---|:---|
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 No card</sub> | ⏱️ Varies by model (per-model limits are now shown only inside AI Studio)<br>📅 Varies by model. Free: Gemini 3.x Flash / Flash-Lite and Gemini 2.5 Pro/Flash (2.5 redirect to…<br>🗓️ Free of charge<br><sub>[details →](https://free-llm.com/provider/google-ai-studio)</sub> | Gemini 3.8 Flash, Gemma 4 26B A4B IT, Gemma 4 31B IT, Gemini 3 Flash Preview |
| **[Mistral (La Plateforme)](https://free-llm.com/provider/mistral-ai)**<br><sub>📱 Phone check</sub> | ⏱️ 1 request/second<br>🗓️ Free | Mistral Small, Mistral Large 4 (Preview), Codestral 2508, Ministral 3 8B |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 No card</sub> | ⏱️ 20 requests/minute<br>📅 1,000 API calls/month (trial key)<br>🗓️ 1,000 API calls/month (trial key, non-commercial) | Command A (111B), Command A Translate, Command A Vision, North Mini Code |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 Phone check</sub> | ⏱️ ~40 RPM (varies per model, not published) | GLM-5.3 Flash, DiffusionGemma 26B A4B, Riva Translate 4B v2, Cosmos Reason 2 8B |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 No card</sub> | ⏱️ 30 RPM; 8K TPM on most chat models (varies by model)<br>📅 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model)<br>🗓️ Free Forever | GPT-OSS 120B, Qwen3.8 27B, Whisper Large v3, Whisper Large v3 Turbo |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ Email sign-up</sub> | ⏱️ ~1 request/second (Flash models)<br>📅 ~1,000 requests/day (Flash tier)<br>🗓️ Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ Email sign-up</sub> | ⏱️ 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go)<br>🗓️ Beta Access | GPT OSS 120B, BGE-M3 (embeddings), Whisper Large v3 Turbo, Qwen2.5 VL 72B Instruct |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 No card</sub> | ⏱️ Varies by model<br>📅 10,000 neurons/day<br>🗓️ ~300,000 neurons/month | GLM-5.3 Flash, FLUX.2 Dev (image), Whisper Large v3 Turbo, EuroLLM 9B |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 No card</sub> | ⏱️ 200 requests/hour per IP on free models (anonymous use allowed)<br>📅 Default free models only<br>🗓️ Free plan, no expiry | Nemotron 3.5 Lightning, Nemotron 3 Nano Omni Reasoning, Dots3-Note Preview, Reflection Beam 1.0 |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 Card required</sub> | ⏱️ Standard rate limits (figures not published)<br>📅 Free models only (no monthly credit)<br>🗓️ Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 ch…<br><sub>[details →](https://free-llm.com/provider/nous-portal)</sub> | StepFun Step 3.7 Flash, Reflection Beam 1.0, Upstage Solar Mini 4, Crouton Alpha (stealth, free) |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 Card required</sub> | ⏱️ 10 requests, 4M input / 100K output tokens per 60s (per API key)<br>📅 No daily cap published (free while the API is experimental); a Hetzner account with billing de…<br>🗓️ Free during experimental phase, no billing system yet<br><sub>[details →](https://free-llm.com/provider/hetzner-inference)</sub> | Qwen3.8 27B, Qwen3.6 35B A3B |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 Phone check</sub> | ⏱️ 500 requests/day per model<br>📅 2,000 requests/day total<br>🗓️ Free, no billing | Qwen3.8 27B, Nex N2.5 Pro, LongCat Flash Lite, ERNIE 4.5 300B A47B |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 No card</sub> | ⏱️ Not published ("generous quota"; HTTP 429 when rate-limited)<br>📅 No published daily cap | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M3, Qwen3.6 35B A3B |
| **[Ollama Cloud](https://free-llm.com/provider/ollama-cloud)**<br><sub>🟢 No card</sub> | ⏱️ Pay-as-you-go: 3 concurrent requests; only Beam (beam:cloud) is labelled free<br>📅 No free monthly allowance any more (starter credits removed); other cloud models are billed pe…<br>🗓️ Weekly usage limit resets every 7 days<br><sub>[details →](https://free-llm.com/provider/ollama-cloud)</sub> | Reflection Beam (501B) |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 Phone check</sub> | ⏱️ Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/mod…<br>📅 Not fully published — verify on docs.siliconflow.cn<br>🗓️ Free models available after identity verification<br><sub>[details →](https://free-llm.com/provider/siliconflow)</sub> | GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B, GLM-4 9B 0414 |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 No card</sub> | ⏱️ Not published (daily credit allowance)<br>📅 Daily free credit allowance (amount not published by Aion Labs)<br>🗓️ Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 No card</sub> | ⏱️ 1 RPM<br>📅 1,000 requests/day<br>🗓️ Free plan, $0/month | GPT-OSS 20B, GLM-4.7 Flash, Essential AI RNJ 1, Kimi K2.7 Code |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ Email sign-up</sub> | ⏱️ 5 RPM on :free models<br>📅 200 requests/day<br>🗓️ Starter plan free, shared queue | DeepSeek V4.1 Flash (free), MiniMax M3.1 Flash (free), Muse Glimmer 30B |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 No card</sub> | ⏱️ 5 requests/second, 200 RPM (text models); 20 RPM for OCR<br>📅 No daily cap published | Typhoon 2.5 30B A3B Instruct, Typhoon OCR 1.5 |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ Email sign-up</sub> | ⏱️ 10 requests/minute per user (increase on request: sealion@aisingapore.org) | Qwen SEA-LION v4.5 27B Instruct, Llama SEA-LION v3.5 70B Reasoning, SEA-Guard (safety), SEA-LION Embedding 600M |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ Email sign-up</sub> | ⏱️ Baseline rate limits (figures not published) | Auto router, MiniMax M3, Nemotron 3 Ultra, Nemotron 3 Super |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ Email sign-up</sub> | ⏱️ About 30 RPM per account (video 2 RPM), per third-party listings | Agnes 3.0 Flash, Agnes 2.5 Flash, Agnes Image 2.1 Flash (image) |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 No card</sub> | ⏱️ Queue-based; anonymous requests have the lowest priority, registered users earn kudos for prio…<br>📅 No fixed cap (volunteer capacity)<br><sub>[details →](https://free-llm.com/provider/ai-horde)</sub> | Gemma 4 E4B IT, Qwen3 4B, Llama 3.2 1B Instruct, L3 8B Stheno v3.2 |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ Email sign-up</sub> | ⏱️ 1 request at a time; max 12K context tokens<br>📅 Limited trial uses per model (about 5 requests per 2 days, per third-party list) | Qwen3.5 27B Derestricted |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 Phone check</sub> | ⏱️ Not published on the HTTP doc<br>📅 Not published (Lite is free) | Spark Lite |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 Phone check</sub> | ⏱️ Low concurrency on free Flash models (GLM-4.7-Flash reported at 1 concurrent request) | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4-Flash-250414, GLM-4.6V-Flash (vision) |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ Email sign-up</sub> | ⏱️ Per-organization, per-model RPM/TPM (values shown in console only) | Qwen3.5 4B (free) |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 Phone check</sub> | 📅 Not published (\"限时放量\" during public beta) | SenseNova 6.8 Flash Lite |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 No card</sub> | ⏱️ API key required (anonymous access removed); no card<br>📅 Free usage paid from Quest Pollen earned in the dashboard<br>🗓️ Free, no billing system | GPT-OSS 20B, Mistral Large 3, Kimi K2.6, GLM 5.3 Flash |
| **[LLM7.io](https://free-llm.com/provider/llm7-io)**<br><sub>🟢 No card</sub> | ⏱️ 1 req/s, 60/min, 250/hour (free token from dash.llm7.io)<br>📅 100,000 tokens per 24h (free token; may be reduced without notice)<br>🗓️ Free, no billing | Nemotron 3 Nano 30B, GLM 5.3 Flash, Mistral Nemo Instruct 2407, Codestral Latest |
<!--TABLE:PERMANENT:END-->

### 💰 Renewable Credits

Free access that renews periodically, no one-time expiry.

<!--TABLE:RENEWABLE:START-->
| Provider · sign-up | Free limits | Key models |
|:---|:---|:---|
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 No card</sub> | 🎁 50 requests/day (up to 1000 with $10 topup)<br>⏱️ 20 requests/minute | Gemma 4 31B IT, NVIDIA Nemotron 3 Ultra, Recursive Flint v1.0 (free), Nemotron 3.5 Super VL |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 Phone check</sub> | 🎁 Monthly free token grant after SMS verification (does not accumulate)<br>⏱️ Network limits (see docs.gonkabroker.com Limits & Quotas) | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 Card required</sub> | 🎁 1M input+output tokens/day shared across free core models, reset 00:00 UTC<br>⏱️ 10 RPM and 250K TPM per free core model | GPT-6 Luna, DeepSeek V4.1 Flash 1017, Clef Flash (decision endpoint, free promo) |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 No card</sub> | 🎁 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models<br>⏱️ 20 RPM on free models (60 RPM for paying orgs) | Gemma 4 31B IT, Ling 3.0 Tiny, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ Email sign-up</sub> | 🎁 $5/month<br>⏱️ Lower per-model limits than the paid tier (429 on excess) | Nemotron 3.5 Lightning (free), Llama 3.3 70B, MiniMax M3.1 Flash, GLM-4.7 Flash |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ Email sign-up</sub> | 🎁 Free allowance, resets on a rolling 7-day period<br>⏱️ 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ Email sign-up</sub> | 🎁 60 weighted units/day (120 with credit), resets 00:00 UTC<br>⏱️ 10 RPM (20 RPM with any credit), 2 concurrent requests | Qwen3.7 Flash, Reflection Beam (free), Nemotron 3.5 Lightning (free), DeepSeek V4 Flash 0731 (free) |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 No card</sub> | 🎁 100K ANY tokens per day, free models only<br>⏱️ Limited API calls on the Free plan (exact RPM not published) | See provider |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ Email sign-up</sub> | 🎁 Resets every day (Flash models only)<br>⏱️ Daily usage allowance (amount not published) | GLM-5.3 Flash, DeepSeek V4.1 Flash |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 No card</sub> | 🎁 $0.50 of managed model usage per day; 5,000 requests per month<br>⏱️ 100 managed requests per day | GPT-OSS 120B, DeepSeek V4 Flash, Qwen3.6 27B, Gemma 4 31B IT |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ Email sign-up</sub> | 🎁 100 requests/day and 1M tokens/day per account (500 RPD on some, e.g. glm-4.7-flash-free, codi…<br>⏱️ 5 RPM per account on most *-free routes<br><sub>[details →](https://free-llm.com/provider/aihubmix)</sub> | Coding GLM 5.3 (free), Coding GLM 5.3 Flash (free), Coding Kimi K3 (free), Coding MiniMax M3 (free) |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 Card required</sub> | 🎁 300,000 tokens/month + 20 CUH/month<br>⏱️ About 2 requests/second (Lite) | Granite 4 H Small, Llama 3.3 70B Instruct, Llama 4 Maverick, GPT-OSS 120B |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ Email sign-up</sub> | 🎁 $1 free credits, refreshed every 4 weeks<br>⏱️ 1 concurrent request (open models); 10 requests/second (closed models) | See provider |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 Phone check</sub> | 🎁 100 free calls/day per user (free experience access token) | DeepSeek V4 Flash 0731, GLM 5.3 Flash, Qwen3.8 27B |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 No card</sub> | 🎁 Tier 1: 50-500 free-model requests/day (varies by model)<br>⏱️ Tier 1 (free): 20-200 RPM | Manta Pro 1.0, Manta Flash 1.0, Manta Mini 1.0, Mistral Small 3.2 24B |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ Email sign-up</sub> | 🎁 Free-model hourly/daily request and token allowances (values per account, not published)<br>⏱️ Account-specific (read via GET /v1/rate-limit) | Llama 3.1 8B Free, Gemma E4B Free, Mistral 7B (tier free, $0), Kode 14B (tier free, $0) |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 Card required</sub> | 🎁 $5 free credits every month (payment method attached)<br>⏱️ Not published for Free plan (most relaxed on flex window) | Kimi K3, GLM 5.3, GLM 5.3 Flash, DeepSeek V4.1 Flash 1017 |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ Email sign-up</sub> | 🎁 Per-model daily allowance (e.g. 200K tokens/day on dated previews)<br>⏱️ Not published; lower allowance in an account's first 24h | Nemotron 3 Ultra 550B, Nemotron 3.5 Super VL (free), Qwen3.8 27B (free), Agnes 3.0 Flash |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ Email sign-up</sub> | 🎁 50 requests/day per account shared across free models, reset 07:00 WIB<br>⏱️ 5 requests/minute (free models) | GLM 4.7 Flash, Qwen3 30B, Gemma 4 26B, Llama 3.1 8B |
<!--TABLE:RENEWABLE:END-->

### 🎁 One-Time Trial Credits

Sign up and receive credits to use until depleted.

<!--TABLE:TRIAL:START-->
| Provider · sign-up | Free credit | Key models |
|:---|:---|:---|
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ Email sign-up</sub> | 🎁 Limited free runs on select models<br>⌛ One-time | See provider |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ Email sign-up</sub> | 🎁 Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1)<br>⌛ One-time | Nemotron 3.5 Lightning 30B A3B, MiniMax M3, GPT-OSS 120B, GLM 5.3 Flash |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 Phone check</sub> | 🎁 $1 after phone verification (Free Tier)<br>⌛ One-time | DeepSeek V4 Flash 0731, Qwen3.8 27B, MiMo V2.6 Flash, GLM-5.3 Flash |
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 Card required</sub> | 🎁 $5 after adding a verified payment method (expires after 30 days)<br>⌛ 30 days | GPT OSS 120B, Qwen 3.8 27B |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ Email sign-up</sub> | 🎁 No automatic sign-up credit; $10 per referral (both sides)<br>⌛ One-time | GLM 5.3, Kimi K3, DeepSeek V4.1 Flash, Qwen3.8 27B |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ Email sign-up</sub> | 🎁 1M tokens (+60 min audio transcription), all serverless models<br>⌛ One-time | GPT-OSS 120B, Whisper Large v3, Voxtral Small 24B, Holo2 30B A3B |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ Email sign-up</sub> | 🎁 ~1M tokens per model, 90 days (Singapore; newer models only since Oct 29, 2026)<br>⌛ One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ Email sign-up</sub> | 🎁 $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify)<br>⌛ 3 months | See provider |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ Email sign-up</sub> | 🎁 Trial credits at onboarding (amount not published)<br>⌛ One-time | GLM-5.1, Gemma 4 31B, GLM 5.2, GLM 5.3 Flash |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ Email sign-up</sub> | 🎁 No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per sec…<br>⌛ One-time<br><sub>[details →](https://free-llm.com/provider/cerebrium)</sub> | See provider |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 No card</sub> | 🎁 $5<br>⌛ One-time | Grok 4.7, grok-4.6, grok-4.3, grok-build-0.1 |
| **[IteraCompute](https://free-llm.com/provider/iteracompute)**<br><sub>✉️ Email sign-up</sub> | 🎁 30M tokens/month on Qwen3.8-27B (promotion, no card)<br>⌛ Until Nov 24, 2026 00:00 PT | Qwen3.8 27B |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ Email sign-up</sub> | — | GLM-5.3 Flash, MiniMax M2.7, DeepSeek V4 Flash 0731 |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 No card</sub> | 🎁 30-day trial, 1M tokens/day, no card<br>⌛ 30 days | GPT-OSS 120B, Qwen3.8 27B, Gemma 4 31B, GLM-5.2 |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 No card</sub> | 🎁 1M free tokens for new users<br>⌛ One-time | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M2.7 |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 No card</sub> | 🎁 $2 welcome credit, no card<br>⌛ One-time | GLM-4.7 Flash, GLM-4.6V Flash, GLM-4.1V Thinking Flash |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 No card</sub> | 🎁 $5 welcome credit after CLI login<br>⌛ One-time | Vectoree Auto (router) |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 Phone check</sub> | 🎁 INR 100 free credits on signup<br>⌛ One-time; credits do not expire (per third-party list) | Sarvam 105B, Sarvam 105B Conversations |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ Email sign-up</sub> | 🎁 $2 free voucher on signup ($4 with an invite code, per third-party list)<br>⌛ One-time | Kimi K2.7 Code |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 No card</sub> | 🎁 100 free credits on sign-up (~$1, at $0.01/credit)<br>⌛ One-time, then pay-as-you-go | Qwen3.8 27B, Gemma 4 26B A4B IT, Qwen3.5 0.8B, DiffusionGemma 26B A4B |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 Card required</sub> | 🎁 1M free tokens per language model, once per account per model<br>⌛ 90 days after claim (intl promo page; docs say 1 year); campaign ends 2026-12-31" - DeepSeek-V…<br><sub>[details →](https://free-llm.com/provider/tencent-tokenhub)</sub> | See provider |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ Email sign-up</sub> | 🎁 Free-tier quota access, no billing account<br>⌛ Up to 90 days for new Google Cloud users | Gemini 3.1 Pro Preview, Gemini 3 Flash Preview, Gemini 2.5 Pro, Gemini 2.5 Flash |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 No card</sub> | 🎁 Free tokens on an auto-generated key (amount not stated on page)<br>⌛ Keys do not expire | Jina Embeddings v5 Text Small, Jina Embeddings v5 Text Nano, Jina Embeddings v5 Omni Small, Jina Embeddings v3 |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ Email sign-up</sub> | 🎁 First 200M tokens free per model (voyage-4 family, rerank-2.5); 50M on domain models<br>⌛ One-time per account per model | Voyage 4 Large, Voyage 4, Voyage 4 Lite, Voyage Code 3 |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 No card</sub> | 🎁 100M tokens<br>⌛ One-time (new accounts) | Mercury 3, Mercury 2.5, Mercury 2 |
<!--TABLE:TRIAL:END-->

### 🖥️ Local / Self-Hosted (Unlimited, Private, Free Forever)

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

## Quick Reference — Base URLs & API Keys

<!--TABLE:QUICKREF:START-->
| Provider · sign-up · API key | OpenAI-compatible base URL |
|:---|:---|
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://openrouter.ai/)</sub> | `https://openrouter.ai/api/v1` |
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://aistudio.google.com/)</sub> | `https://generativelanguage.googleapis.com/v1beta/openai` |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://cohere.com/)</sub> | `https://api.cohere.ai/compatibility/v1` |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://console.groq.com/)</sub> | `https://api.groq.com/openai/v1` |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://dash.cloudflare.com/)</sub> | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1` |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://kilo.ai/gateway)</sub> | `https://ai-gateway.kilo.ai/api/v1` |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://freeinference.org)</sub> | `https://freeinference.org/v1` |
| **[Ollama Cloud](https://free-llm.com/provider/ollama-cloud)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://ollama.com/cloud)</sub> | `https://ollama.com/v1` |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://requesty.ai/)</sub> | `https://router.requesty.ai/v1` |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://www.aionlabs.ai/pricing/)</sub> | `https://api.aionlabs.ai/v1` |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://grokified.com)</sub> | `https://api.grokified.com/v1` |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://api.airforce/)</sub> | `https://api.airforce/v1` |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://anyapi.ai)</sub> | `https://api.anyapi.ai/v1` |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://inferbase.ai)</sub> | `https://api.inferbase.ai/v1` |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://opentyphoon.ai)</sub> | `https://api.opentyphoon.ai/v1` |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://regolo.ai)</sub> | `https://api.regolo.ai/v1` |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://gonkarouter.io)</sub> | `https://api.gonkarouter.io/v1` |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://aiapi-pro.com)</sub> | `https://aiapi-pro.com/v1` |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://vectoree.ai)</sub> | `https://vectoree.ai/api/v1` |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://aihorde.net)</sub> | `https://oai.aihorde.net/v1` |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://docs.vlm.run/gateway/rate-limits)</sub> | `https://gateway.vlm.run/v1/openai` |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://docs.meganova.ai/tiers)</sub> | `https://api.meganova.ai/v1` |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://jina.ai/embeddings/)</sub> | `https://api.jina.ai/v1` |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://pollinations.ai)</sub> | `https://gen.pollinations.ai/v1` |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://www.inceptionlabs.ai/)</sub> | `https://api.inceptionlabs.ai/v1` |
| **[LLM7.io](https://free-llm.com/provider/llm7-io)**<br><sub>🟢 No card · [🔑&nbsp;Get&nbsp;key](https://llm7.io)</sub> | `https://api.llm7.io/v1` |
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://replicate.com/)</sub> | <sub>native API only — [setup guide](https://free-llm.com/provider/replicate)</sub> |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://fireworks.ai/)</sub> | `https://api.fireworks.ai/inference/v1` |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://novita.ai/)</sub> | `https://api.novita.ai/v3/openai` |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://console.scaleway.com/generative-api/models)</sub> | `https://api.scaleway.ai/v1` |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://bailian.console.alibabacloud.com/)</sub> | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://console.upstage.ai/)</sub> | `https://api.upstage.ai/v1` |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://z.ai/)</sub> | `https://api.z.ai/api/paas/v4` |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://endpoints.ai.cloud.ovh.net/)</sub> | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://friendli.ai/)</sub> | `https://inference.friendli.ai/v1` |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://www.cerebrium.ai/)</sub> | <sub>native API only — [setup guide](https://free-llm.com/provider/cerebrium)</sub> |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://vercel.com/ai-gateway)</sub> | `https://ai-gateway.vercel.sh/v1` |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://routeway.ai/)</sub> | `https://api.routeway.ai/v1` |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://tokenharbor.ai)</sub> | `https://tokenharbor.ai/v1` |
| **[IteraCompute](https://free-llm.com/provider/iteracompute)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://iteracompute.com/free/)</sub> | `https://api.iteracompute.com/v1` |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://bazaarlink.ai/free)</sub> | `https://api.bazaarlink.ai/v1` |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://inference.dahl.global/)</sub> | `https://inference.dahl.global/v1` |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://zro.moonmath.ai)</sub> | `https://zro.moonmath.ai/v1` |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://docs.sea-lion.ai/guides/inferencing/api)</sub> | `https://api.sea-lion.ai/v1` |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://aihubmix.com)</sub> | `https://aihubmix.com/v1` |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://llm.kiwi/pricing)</sub> | `https://api.llm.kiwi/v1` |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://agnes-ai.com)</sub> | `https://apihub.agnes-ai.com/v1` |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://www.arliai.com/pricing)</sub> | `https://api.arliai.com/v1` |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://www.hpc-ai.com/model-apis)</sub> | `https://api.hpc-ai.com/inference/v1` |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://docs.bytez.com/model-api/docs/billing)</sub> | `https://api.bytez.com/models/v2/openai/v1` |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://docs.mixlayer.com/credits-and-limits)</sub> | `https://models.mixlayer.ai/v1` |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://simplellm.eu/docs/)</sub> | `https://api.simplellm.eu/v1` |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview)</sub> | <sub>native API only — [setup guide](https://free-llm.com/provider/vertex-ai-express)</sub> |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://docs.voyageai.com/docs/pricing)</sub> | `https://api.voyageai.com/v1` |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://llmtr.com/en/terms)</sub> | `https://llmtr.com/v1` |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ Email sign-up · [🔑&nbsp;Get&nbsp;key](https://kiosapi.id/pricing)</sub> | `https://api.kiosapi.id/v1` |
| **[Mistral (La Plateforme)](https://free-llm.com/provider/mistral-ai)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://console.mistral.ai/)</sub> | `https://api.mistral.ai/v1` |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://build.nvidia.com/explore/discover)</sub> | `https://integrate.api.nvidia.com/v1` |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://app.hyperbolic.xyz/)</sub> | `https://api.hyperbolic.ai/inference/v1` |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://modelscope.cn)</sub> | `https://api-inference.modelscope.cn/v1` |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://gonkabroker.com)</sub> | `https://proxy.gonkabroker.com/v1` |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://cloud.siliconflow.cn/models)</sub> | `https://api.siliconflow.cn/v1` |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://www.sarvam.ai/api-pricing)</sub> | `https://api.sarvam.ai/v1` |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://www.xfyun.cn/doc/spark/HTTP调用文档.html)</sub> | `https://spark-api-open.xf-yun.com/v1` |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://docs.bigmodel.cn/cn/guide/start/model-overview)</sub> | `https://open.bigmodel.cn/api/paas/v4` |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://moark.com/docs/FAQ)</sub> | `https://api.moark.com/v1` |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 Phone check · [🔑&nbsp;Get&nbsp;key](https://www.sensenova.cn/token-plan)</sub> | `https://token.sensenova.cn/v1` |
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://cerebras.ai/inference)</sub> | `https://api.cerebras.ai/v1` |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://portal.nousresearch.com)</sub> | `https://inference-api.nousresearch.com/v1` |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://experiments.hetzner.com/inference)</sub> | `https://inference.hetzner.com/api/v1` |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://www.experientiallabs.ai/pricing)</sub> | `https://api.experientiallabs.ai/v1` |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://www.tencentcloud.com/act/pro/tokenhub)</sub> | `https://tokenhub-intl.tencentmaas.com/v1` |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://www.ibm.com/products/watsonx-ai/pricing)</sub> | <sub>native API only — [setup guide](https://free-llm.com/provider/ibm-watsonx)</sub> |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 Card required · [🔑&nbsp;Get&nbsp;key](https://docs.sailresearch.com/pricing)</sub> | `https://api.sailresearch.com/v1` |
<!--TABLE:QUICKREF:END-->

---

## Guides & Tutorials

Published at [free-llm.com/guides](https://free-llm.com/guides/):

- **Best Free LLM APIs in 2026** — side-by-side comparison of top picks
- **Gemini vs ChatGPT (Free Tier)** — what you actually get for $0
- **How to Use OpenRouter** — setup walkthrough with code
- **OpenRouter Alternatives** — other aggregators worth trying
- **Local LLMs with Ollama** — get started in under 5 minutes
- **Ultimate Free LLM API Guide** — the comprehensive deep-dive
- **Best Free LLMs for Coding** — free coding models + Claude Code, Codex & Cursor setup
- **Free OpenRouter Alternatives** — gateways and APIs with bigger free tiers
- **Free LLM Fallback System** — chain providers so you never hit a rate limit
- **Monthly report: November 2026** — new free providers, shutdowns, model changes

---

## Community Features

Free-LLM is **community-driven**. The website at [free-llm.com](https://free-llm.com) lets visitors:

- **Vote** on providers to surface the most useful ones
- **Submit** new providers and models
- **Propose edits** to existing provider data (admin-reviewed)
- **Report** models that have gone from free to paid
- **Earn recognition** on the [Hall of Fame](https://free-llm.com/hall-of-fame) leaderboard

Data syncs back to this repository.

---

## Code Examples

The [`code-examples/`](code-examples/) directory has ready-to-run Python, JavaScript, and curl snippets — just add your API key.

**By coding assistant:** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md) · [OpenCode](code-examples/opencode.md)

<!--CODEEX:PROVIDERS:START-->
**By provider (74):** [Agnes AI](code-examples/agnes-ai) · [AI Horde (OpenAI-compatible front)](code-examples/ai-horde) · [AIHubMix (free models)](code-examples/aihubmix) · [Aion Labs](code-examples/aion-labs) · [AnyAPI](code-examples/anyapi) · [Api.Airforce](code-examples/api-airforce) · [Arli AI](code-examples/arli-ai) · [BazaarLink](code-examples/bazaarlink) · [Bytez](code-examples/bytez) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Dahl Inference](code-examples/dahl-inference) · [Experiential Labs](code-examples/experiential-labs) · [Fireworks AI](code-examples/fireworks-ai) · [FreeInference](code-examples/freeinference) · [Friendli AI](code-examples/friendli-ai) · [Gonka Broker](code-examples/gonka-broker) · [GonkaRouter](code-examples/gonkarouter) · [Google AI Studio](code-examples/google-ai-studio) · [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](code-examples/vertex-ai-express) · [Grokified](code-examples/grokified) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [HPC-AI Model APIs](code-examples/hpc-ai) · [Hyperbolic](code-examples/hyperbolic) · [IBM watsonx.ai (Lite plan)](code-examples/ibm-watsonx) · [iFlytek Spark Lite](code-examples/iflytek-spark) · [Inception Labs](code-examples/inception-labs) · [Inferbase](code-examples/inferbase) · [IteraCompute](code-examples/iteracompute) · [Jina AI (Embeddings / Reader API)](code-examples/jina-ai) · [Kilo AI Gateway](code-examples/kilo-gateway) · [Kiosapi.id](code-examples/kiosapi) · [LLM.kiwi](code-examples/llm-kiwi) · [LLM7.io](code-examples/llm7-io) · [LLMTR](code-examples/llmtr) · [MegaNova AI](code-examples/meganova) · [Mistral (La Plateforme)](code-examples/mistral-ai) · [Mixlayer](code-examples/mixlayer) · [Moark (Gitee AI)](code-examples/moark) · [ModelScope](code-examples/modelscope) · [Nous Portal](code-examples/nous-portal) · [NovAI](code-examples/novai) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [Ollama Cloud](code-examples/ollama-cloud) · [OpenRouter](code-examples/openrouter) · [OpenTyphoon (Typhoon API)](code-examples/opentyphoon) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Regolo.ai](code-examples/regolo-ai) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Routeway](code-examples/routeway) · [Sail Research](code-examples/sail-research) · [Sarvam AI](code-examples/sarvam-ai) · [Scaleway Generative APIs](code-examples/scaleway) · [SEA-LION API](code-examples/sea-lion) · [SenseNova (SenseTime)](code-examples/sensenova) · [SiliconFlow](code-examples/siliconflow) · [SimpleLLM](code-examples/simplellm) · [Tencent Cloud TokenHub](code-examples/tencent-tokenhub) · [Token Harbor](code-examples/token-harbor) · [Upstage](code-examples/upstage) · [Vectoree](code-examples/vectoree) · [Vercel AI Gateway](code-examples/vercel-ai-gateway) · [VLM Run Gateway](code-examples/vlm-run) · [Voyage AI (embeddings & rerankers)](code-examples/voyage-ai) · [Z.AI (GLM)](code-examples/z-ai) · [Zhipu BigModel (China)](code-examples/zhipu-bigmodel) · [Zro (MoonMath)](code-examples/zro)
<!--CODEEX:PROVIDERS:END-->

**Local / Self-Hosted:** [BentoML](code-examples/bentoml) · [GPT4All](code-examples/gpt4all) · [Jan.ai](code-examples/jan-ai) · [KoboldCpp](code-examples/koboldcpp) · [llama.cpp](code-examples/llama-cpp) · [llamafile](code-examples/llamafile) · [LM Studio](code-examples/lm-studio) · [Ollama](code-examples/ollama) · [Text Gen WebUI](code-examples/text-generation-webui)

---

## Repository Structure

```
Free-LLM/
├── README.md                 ← You are here (English)
├── README.zh-CN.md            ← 简体中文
├── README.zh-TW.md            ← 繁體中文
├── README.ja.md               ← 日本語
├── README.ko.md                ← 한국어
├── CONTRIBUTING.md            ← Contribution guidelines
├── code-examples/             ← Ready-to-use snippets (per-provider + per-tool)
├── .github/                   ← Issue/PR templates
└── LICENSE                    ← MIT
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. Quick version:

1. **Add a provider** — use the [submit form](https://free-llm.com/submit) on the website, or open an [issue](https://github.com/nejib1/Free-LLM/issues/new/choose)/PR here.
2. **Fix inaccurate data** — rate limits change, providers graduate or shut down. Open an issue with a link to the official source (the tables below are regenerated daily from the live database, so table edits in PRs get overwritten).
3. **Add a config snippet** — have a working config for a tool we don't cover? Add it to [`code-examples/`](code-examples/).
4. **Vote & discuss** — help the community surface the best options at [free-llm.com](https://free-llm.com).

### Criteria for inclusion

A provider belongs in this list if:
1. It offers a **free tier**, a renewable free allowance, or a clearly labelled trial credit — see [Provider Directory](#provider-directory) for how we split permanent tiers from one-time credits
2. The API is **publicly accessible** (no waitlist, closed beta, or reverse-engineering)
3. It is the provider's own service: no resold, pooled or shared keys for other companies' models ("free Claude/GPT" key pools are rejected)
4. Every row is checked against the provider's official pricing page, docs or public `/v1/models` list before it goes live

---

## Links

- 🌐 **Live site**: [free-llm.com](https://free-llm.com) — directory, voting, submissions
- 🆚 **Compare providers**: [free-llm.com/compare](https://free-llm.com/compare)
- 📚 **Guides**: [free-llm.com/guides](https://free-llm.com/guides/)
- 🏆 **Hall of Fame**: [free-llm.com/hall-of-fame](https://free-llm.com/hall-of-fame)
- 🧩 **JSON catalog**: [free-llm.com/catalog.json](https://free-llm.com/catalog.json)
- ➕ **Submit a provider**: [free-llm.com/submit](https://free-llm.com/submit)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-11-18<!--LASTSYNC:END--></sub></p>
