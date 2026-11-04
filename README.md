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
| Provider | Credit Card? | Rate Limit | Daily Limit | Monthly Limit | Key Models |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | No | Varies by model (per-model limits are now shown only inside AI Studio) | Varies by model. Free: Gemini 3.x Flash / Flash-Lite and Gemini 2.5 Pro/Flash (2.5 redirect to 3.x on Dec 1, 2026); Gemini 3.x Pro and Gemini 4 are paid | Free of charge | Gemini 3.8 Flash, Gemma 4 26B A4B IT, Gemma 4 31B IT, Gemini 3 Flash Preview |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | Phone verification | 1 request/second | - | Free | Mistral Small, Mistral Large 4 (Preview), Codestral 2508, Ministral 3 8B |
| [Cohere](https://cohere.com/) | No | 20 requests/minute | 1,000 API calls/month (trial key) | 1,000 API calls/month (trial key, non-commercial) | Command A (111B), Command A Translate, Command A Vision, North Mini Code |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | Phone verification | ~40 RPM (varies per model, not published) | - | - | GLM-5.3 Flash, DiffusionGemma 26B A4B, Riva Translate 4B v2, Cosmos Reason 2 8B |
| [Groq](https://console.groq.com/) | No | 30 RPM; 8K TPM on most chat models (varies by model) | 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model) | Free Forever | GPT-OSS 120B, Qwen3.8 27B, Whisper Large v3, Whisper Large v3 Turbo |
| [Z.AI (GLM)](https://z.ai/) | Registration | ~1 request/second (Flash models) | ~1,000 requests/day (Flash tier) | Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | No | Varies by model | 10,000 neurons/day | ~300,000 neurons/month | GLM-5.3 Flash, FLUX.2 Dev (image), Whisper Large v3 Turbo, EuroLLM 9B |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | Registration | 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go) | Unspecified | Beta Access | GPT OSS 120B, BGE-M3 (embeddings), Whisper Large v3 Turbo, Qwen2.5 VL 72B Instruct |
| [Pollinations.ai](https://pollinations.ai) | No | API key required (anonymous access removed); no card | Free usage paid from Quest Pollen earned in the dashboard | Free, no billing system | GPT-OSS 20B, Mistral Large 3, Kimi K2.6, GLM 5.3 Flash |
| [Nous Portal](https://portal.nousresearch.com) | Card required | Standard rate limits (figures not published) | Free models only (no monthly credit) | Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 charge) is required to get a key - verify | StepFun Step 3.7 Flash, Reflection Beam 1.0, Upstage Solar Mini 4, Crouton Alpha (stealth, free) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | Card required | 10 requests, 4M input / 100K output tokens per 60s (per API key) | No daily cap published (free while the API is experimental); a Hetzner account with billing details is required and Hetzner may ask for a card or ID to verify it | Free during experimental phase, no billing system yet | Qwen3.8 27B, Qwen3.6 35B A3B |
| [ModelScope](https://modelscope.cn) | Phone verification | 500 requests/day per model | 2,000 requests/day total | Free, no billing | Qwen3.8 27B, Nex N2.5 Pro, LongCat Flash Lite, ERNIE 4.5 300B A47B |
| [Kilo AI Gateway](https://kilo.ai/gateway) | No | 200 requests/hour per IP on free models (anonymous use allowed) | Default free models only | Free plan, no expiry | Nemotron 3.5 Lightning, Nemotron 3 Nano Omni Reasoning, Dots3-Note Preview, Reflection Beam 1.0 |
| [Ollama Cloud](https://ollama.com/cloud) | No | Pay-as-you-go: 3 concurrent requests; only Beam (beam:cloud) is labelled free | No free monthly allowance any more (starter credits removed); other cloud models are billed per token | Weekly usage limit resets every 7 days | Reflection Beam (501B) |
| [SiliconFlow](https://cloud.siliconflow.cn/models) | Phone verification | Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/models | Not fully published — verify on docs.siliconflow.cn | Free models available after identity verification | GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B, GLM-4 9B 0414 |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | No | Not published (daily credit allowance) | Daily free credit allowance (amount not published by Aion Labs) | Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| [Api.Airforce](https://api.airforce/) | No | 1 RPM | 1,000 requests/day | Free plan, $0/month | GPT-OSS 20B, GLM-4.7 Flash, Essential AI RNJ 1, Kimi K2.7 Code |
| [Routeway](https://routeway.ai/) | Registration | 5 RPM on :free models | 200 requests/day | Starter plan free, shared queue | DeepSeek V4.1 Flash (free), MiniMax M3.1 Flash (free), Muse Glimmer 30B |
| [FreeInference](https://freeinference.org) | No | Not published ("generous quota"; HTTP 429 when rate-limited) | No published daily cap | — | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M3, Qwen3.6 35B A3B |
| [OpenTyphoon (Typhoon API)](https://opentyphoon.ai) | No | 5 requests/second, 200 RPM (text models); 20 RPM for OCR | No daily cap published | — | Typhoon 2.5 30B A3B Instruct, Typhoon OCR 1.5 |
| [SEA-LION API](https://docs.sea-lion.ai/guides/inferencing/api) | Registration | 10 requests/minute per user (increase on request: sealion@aisingapore.org) | Not published | — | Qwen SEA-LION v4.5 27B Instruct, Llama SEA-LION v3.5 70B Reasoning, SEA-Guard (safety), SEA-LION Embedding 600M |
| [LLM.kiwi](https://llm.kiwi/pricing) | Registration | Baseline rate limits (figures not published) | Not published | — | Auto router, MiniMax M3, Nemotron 3 Ultra, Nemotron 3 Super |
| [Agnes AI](https://agnes-ai.com) | Registration | About 30 RPM per account (video 2 RPM), per third-party listings | Not published | — | Agnes 3.0 Flash, Agnes 2.5 Flash, Agnes Image 2.1 Flash (image) |
| [AI Horde (OpenAI-compatible front)](https://aihorde.net) | No | Queue-based; anonymous requests have the lowest priority, registered users earn kudos for priority | No fixed cap (volunteer capacity) | — | Gemma 4 E4B IT, Qwen3 4B, Llama 3.2 1B Instruct, L3 8B Stheno v3.2 |
| [Arli AI](https://www.arliai.com/pricing) | Registration | 1 request at a time; max 12K context tokens | Limited trial uses per model (about 5 requests per 2 days, per third-party list) | — | Qwen3.5 27B Derestricted |
| [iFlytek Spark Lite](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) | Phone verification | Not published on the HTTP doc | Not published (Lite is free) | — | Spark Lite |
| [Zhipu BigModel (China)](https://docs.bigmodel.cn/cn/guide/start/model-overview) | Phone verification | Low concurrency on free Flash models (GLM-4.7-Flash reported at 1 concurrent request) | Not published | — | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4-Flash-250414, GLM-4.6V-Flash (vision) |
| [Mixlayer](https://docs.mixlayer.com/credits-and-limits) | Registration | Per-organization, per-model RPM/TPM (values shown in console only) | Not published | — | Qwen3.5 4B (free) |
| [SenseNova (SenseTime)](https://www.sensenova.cn/token-plan) | Phone verification | Not published | Not published (\"限时放量\" during public beta) | — | SenseNova 6.8 Flash Lite |
| [LLM7.io](https://llm7.io) | No | 1 req/s, 60/min, 250/hour (free token from dash.llm7.io) | 100,000 tokens per 24h (free token; may be reduced without notice) | Free, no billing | Nemotron 3 Nano 30B, GLM 5.3 Flash, Mistral Nemo Instruct 2407, Codestral Latest |
<!--TABLE:PERMANENT:END-->

### 💰 Renewable Credits

Free access that renews periodically, no one-time expiry.

<!--TABLE:RENEWABLE:START-->
| Provider | Credit Card? | Rate Limit | Free Offer | Key Models |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | No | 20 requests/minute | 50 requests/day (up to 1000 with $10 topup) | Gemma 4 31B IT, NVIDIA Nemotron 3 Ultra, Recursive Flint v1.0 (free), Nemotron 3.5 Super VL |
| [Requesty](https://requesty.ai/) | No | 20 RPM on free models (60 RPM for paying orgs) | 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models | Gemma 4 31B IT, Ling 3.0 Tiny, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | Registration | Lower per-model limits than the paid tier (429 on excess) | $5/month | Nemotron 3.5 Lightning (free), Llama 3.3 70B, MiniMax M3.1 Flash, GLM-4.7 Flash |
| [Token Harbor](https://tokenharbor.ai) | Registration | 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | Free allowance, resets on a rolling 7-day period | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| [BazaarLink](https://bazaarlink.ai/free) | Registration | 10 RPM (20 RPM with any credit), 2 concurrent requests | 60 weighted units/day (120 with credit), resets 00:00 UTC | Qwen3.7 Flash, Reflection Beam (free), Nemotron 3.5 Lightning (free), DeepSeek V4 Flash 0731 (free) |
| [AnyAPI](https://anyapi.ai) | No | Limited API calls on the Free plan (exact RPM not published) | 100K ANY tokens per day, free models only | See provider |
| [Zro (MoonMath)](https://zro.moonmath.ai) | Registration | Daily usage allowance (amount not published) | Resets every day (Flash models only) | GLM-5.3 Flash, DeepSeek V4.1 Flash |
| [Inferbase](https://inferbase.ai) | No | 100 managed requests per day | $0.50 of managed model usage per day; 5,000 requests per month | GPT-OSS 120B, DeepSeek V4 Flash, Qwen3.6 27B, Gemma 4 31B IT |
| [Gonka Broker](https://gonkabroker.com) | Phone verification | Network limits (see docs.gonkabroker.com Limits & Quotas) | Monthly free token grant after SMS verification (does not accumulate) | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| [AIHubMix (free models)](https://aihubmix.com) | Registration | 5 RPM per account on most *-free routes | 100 requests/day and 1M tokens/day per account (500 RPD on some, e.g. glm-4.7-flash-free, coding-minimax-m3-free) | Coding GLM 5.3 (free), Coding GLM 5.3 Flash (free), Coding Kimi K3 (free), Coding MiniMax M3 (free) |
| [IBM watsonx.ai (Lite plan)](https://www.ibm.com/products/watsonx-ai/pricing) | Card required | About 2 requests/second (Lite) | 300,000 tokens/month + 20 CUH/month | Granite 4 H Small, Llama 3.3 70B Instruct, Llama 4 Maverick, GPT-OSS 120B |
| [Bytez](https://docs.bytez.com/model-api/docs/billing) | Registration | 1 concurrent request (open models); 10 requests/second (closed models) | $1 free credits, refreshed every 4 weeks | See provider |
| [Moark (Gitee AI)](https://moark.com/docs/FAQ) | Phone verification | Not published | 100 free calls/day per user (free experience access token) | DeepSeek V4 Flash 0731, GLM 5.3 Flash, Qwen3.8 27B |
| [MegaNova AI](https://docs.meganova.ai/tiers) | No | Tier 1 (free): 20-200 RPM | Tier 1: 50-500 free-model requests/day (varies by model) | Manta Pro 1.0, Manta Flash 1.0, Manta Mini 1.0, Mistral Small 3.2 24B |
| [SimpleLLM](https://simplellm.eu/docs/) | Registration | Account-specific (read via GET /v1/rate-limit) | Free-model hourly/daily request and token allowances (values per account, not published) | Llama 3.1 8B Free, Gemma E4B Free, Mistral 7B (tier free, $0), Kode 14B (tier free, $0) |
| [Experiential Labs](https://www.experientiallabs.ai/pricing) | Card required | 10 RPM and 250K TPM per free core model | 1M input+output tokens/day shared across free core models, reset 00:00 UTC | GPT-6 Luna, DeepSeek V4.1 Flash 1017, Clef Flash (decision endpoint, free promo) |
| [Sail Research](https://docs.sailresearch.com/pricing) | Card required | Not published for Free plan (most relaxed on flex window) | $5 free credits every month (payment method attached) | Kimi K3, GLM 5.3, GLM 5.3 Flash, DeepSeek V4.1 Flash 1017 |
| [LLMTR](https://llmtr.com/en/terms) | Registration | Not published; lower allowance in an account's first 24h | Per-model daily allowance (e.g. 200K tokens/day on dated previews) | Nemotron 3 Ultra 550B, Nemotron 3.5 Super VL (free), Qwen3.8 27B (free), Agnes 3.0 Flash |
| [Kiosapi.id](https://kiosapi.id/pricing) | Registration | 5 requests/minute (free models) | 50 requests/day per account shared across free models, reset 07:00 WIB | GLM 4.7 Flash, Qwen3 30B, Gemma 4 26B, Llama 3.1 8B |
<!--TABLE:RENEWABLE:END-->

### 🎁 One-Time Trial Credits

Sign up and receive credits to use until depleted.

<!--TABLE:TRIAL:START-->
| Provider | Credit Card? | Credit Amount | Expiry | Key Models |
|:---|:---:|:---|:---|:---|
| [Replicate](https://replicate.com/) | Registration | Limited free runs on select models | One-time | See provider |
| [Fireworks AI](https://fireworks.ai/) | Registration | Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1) | One-time | Nemotron 3.5 Lightning 30B A3B, MiniMax M3, GPT-OSS 120B, GLM 5.3 Flash |
| [Hyperbolic](https://app.hyperbolic.xyz/) | Phone verification | $1 after phone verification (Free Tier) | One-time | DeepSeek V4 Flash 0731, Qwen3.8 27B, MiMo V2.6 Flash, GLM-5.3 Flash |
| [Cerebras](https://cerebras.ai/inference) | Card required | $5 after adding a verified payment method (expires after 30 days) | 30 days | GPT OSS 120B, Qwen 3.8 27B |
| [Novita AI](https://novita.ai/) | Registration | No automatic sign-up credit; $10 per referral (both sides) | One-time | GLM 5.3, Kimi K3, DeepSeek V4.1 Flash, Qwen3.8 27B |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | Registration | 1M tokens (+60 min audio transcription), all serverless models | One-time | GPT-OSS 120B, Whisper Large v3, Voxtral Small 24B, Holo2 30B A3B |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | Registration | ~1M tokens per model, 90 days (Singapore; newer models only since Oct 29, 2026) | One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| [Upstage](https://console.upstage.ai/) | Registration | $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify) | 3 months | See provider |
| [Cerebrium](https://www.cerebrium.ai/) | Registration | No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per second) | One-time | See provider |
| [Friendli AI](https://friendli.ai/) | Registration | Trial credits at onboarding (amount not published) | One-time | GLM-5.1, Gemma 4 31B, GLM 5.2, GLM 5.3 Flash |
| [Grokified](https://grokified.com) | No | $5 | One-time | Grok 4.7, grok-4.6, grok-4.3, grok-build-0.1 |
| [IteraCompute](https://iteracompute.com/free/) | Registration | 30M tokens/month on Qwen3.8-27B (promotion, no card) | Until Nov 24, 2026 00:00 PT | Qwen3.8 27B |
| [Dahl Inference](https://inference.dahl.global/) | Registration | — | — | GLM-5.3 Flash, MiniMax M2.7, DeepSeek V4 Flash 0731 |
| [Regolo.ai](https://regolo.ai) | No | 30-day trial, 1M tokens/day, no card | 30 days | GPT-OSS 120B, Qwen3.8 27B, Gemma 4 31B, GLM-5.2 |
| [GonkaRouter](https://gonkarouter.io) | No | 1M free tokens for new users | One-time | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M2.7 |
| [NovAI](https://aiapi-pro.com) | No | $2 welcome credit, no card | One-time | GLM-4.7 Flash, GLM-4.6V Flash, GLM-4.1V Thinking Flash |
| [Vectoree](https://vectoree.ai) | No | $5 welcome credit after CLI login | One-time | Vectoree Auto (router) |
| [Sarvam AI](https://www.sarvam.ai/api-pricing) | Phone verification | INR 100 free credits on signup | One-time; credits do not expire (per third-party list) | Sarvam 105B, Sarvam 105B Conversations |
| [HPC-AI Model APIs](https://www.hpc-ai.com/model-apis) | Registration | $2 free voucher on signup ($4 with an invite code, per third-party list) | One-time | Kimi K2.7 Code |
| [VLM Run Gateway](https://docs.vlm.run/gateway/rate-limits) | No | 100 free credits on sign-up (~$1, at $0.01/credit) | One-time, then pay-as-you-go | Qwen3.8 27B, Gemma 4 26B A4B IT, Qwen3.5 0.8B, DiffusionGemma 26B A4B |
| [Tencent Cloud TokenHub](https://www.tencentcloud.com/act/pro/tokenhub) | Card required | 1M free tokens per language model, once per account per model | 90 days after claim (intl promo page; docs say 1 year); campaign ends 2026-12-31" - DeepSeek-V4-Pro | See provider |
| [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) | Registration | Free-tier quota access, no billing account | Up to 90 days for new Google Cloud users | Gemini 3.1 Pro Preview, Gemini 3 Flash Preview, Gemini 2.5 Pro, Gemini 2.5 Flash |
| [Jina AI (Embeddings / Reader API)](https://jina.ai/embeddings/) | No | Free tokens on an auto-generated key (amount not stated on page) | Keys do not expire | Jina Embeddings v5 Text Small, Jina Embeddings v5 Text Nano, Jina Embeddings v5 Omni Small, Jina Embeddings v3 |
| [Voyage AI (embeddings & rerankers)](https://docs.voyageai.com/docs/pricing) | Registration | First 200M tokens free per model (voyage-4 family, rerank-2.5); 50M on domain models | One-time per account per model | Voyage 4 Large, Voyage 4, Voyage 4 Lite, Voyage Code 3 |
| [Inception Labs](https://www.inceptionlabs.ai/) | No | 100M tokens | One-time (new accounts) | Mercury 3, Mercury 2.5, Mercury 2 |
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
| Provider | Base URL | Get API Key |
|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | `https://openrouter.ai/api/v1` | [Get Key →](https://openrouter.ai/) |
| [Google AI Studio](https://aistudio.google.com/) | `https://generativelanguage.googleapis.com/v1beta` | [Get Key →](https://aistudio.google.com/) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [Get Key →](https://console.mistral.ai/) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [Get Key →](https://cohere.com/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [Get Key →](https://replicate.com/) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [Get Key →](https://fireworks.ai/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [Get Key →](https://build.nvidia.com/explore/discover) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.ai/inference/v1` | [Get Key →](https://app.hyperbolic.xyz/) |
| [Cerebras](https://cerebras.ai/inference) | `https://api.cerebras.ai/v1` | [Get Key →](https://cerebras.ai/inference) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [Get Key →](https://console.groq.com/) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [Get Key →](https://novita.ai/) |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [Get Key →](https://console.scaleway.com/generative-api/models) |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [Get Key →](https://bailian.console.alibabacloud.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [Get Key →](https://console.upstage.ai/) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [Get Key →](https://z.ai/) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [Get Key →](https://dash.cloudflare.com/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [Get Key →](https://endpoints.ai.cloud.ovh.net/) |
| [Pollinations.ai](https://pollinations.ai) | `https://gen.pollinations.ai/v1` | [Get Key →](https://pollinations.ai) |
| [Nous Portal](https://portal.nousresearch.com) | `https://inference-api.nousresearch.com/v1` | [Get Key →](https://portal.nousresearch.com) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | `https://inference.hetzner.com/api/v1` | [Get Key →](https://experiments.hetzner.com/inference) |
| [ModelScope](https://modelscope.cn) | `https://api-inference.modelscope.cn/v1` | [Get Key →](https://modelscope.cn) |
| [Kilo AI Gateway](https://kilo.ai/gateway) | `https://ai-gateway.kilo.ai/api/v1` | [Get Key →](https://kilo.ai/gateway) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [Get Key →](https://www.cerebrium.ai/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [Get Key →](https://friendli.ai/) |
| [Ollama Cloud](https://ollama.com/cloud) | `https://ollama.com/v1` | [Get Key →](https://ollama.com/cloud) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [Get Key →](https://requesty.ai/) |
| [SiliconFlow](https://cloud.siliconflow.cn/models) | `https://api.siliconflow.cn/v1` | [Get Key →](https://cloud.siliconflow.cn/models) |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | `https://api.aionlabs.ai/v1` | [Get Key →](https://www.aionlabs.ai/pricing/) |
| [Grokified](https://grokified.com) | `https://api.grokified.com/v1` | [Get Key →](https://grokified.com) |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | `https://ai-gateway.vercel.sh/v1` | [Get Key →](https://vercel.com/ai-gateway) |
| [Api.Airforce](https://api.airforce/) | `https://api.airforce/v1` | [Get Key →](https://api.airforce/) |
| [Routeway](https://routeway.ai/) | `https://api.routeway.ai/v1` | [Get Key →](https://routeway.ai/) |
| [Token Harbor](https://tokenharbor.ai) | `https://tokenharbor.ai/v1` | [Get Key →](https://tokenharbor.ai) |
| [IteraCompute](https://iteracompute.com/free/) | `https://api.iteracompute.com/v1` | [Get Key →](https://iteracompute.com/free/) |
| [BazaarLink](https://bazaarlink.ai/free) | `https://api.bazaarlink.ai/v1` | [Get Key →](https://bazaarlink.ai/free) |
| [Dahl Inference](https://inference.dahl.global/) | `https://inference.dahl.global/v1` | [Get Key →](https://inference.dahl.global/) |
| [FreeInference](https://freeinference.org) | `https://freeinference.org/v1` | [Get Key →](https://freeinference.org) |
| [AnyAPI](https://anyapi.ai) | `https://api.anyapi.ai/v1` | [Get Key →](https://anyapi.ai) |
| [Zro (MoonMath)](https://zro.moonmath.ai) | `https://zro.moonmath.ai/v1` | [Get Key →](https://zro.moonmath.ai) |
| [Inferbase](https://inferbase.ai) | `https://api.inferbase.ai/v1` | [Get Key →](https://inferbase.ai) |
| [OpenTyphoon (Typhoon API)](https://opentyphoon.ai) | `https://api.opentyphoon.ai/v1` | [Get Key →](https://opentyphoon.ai) |
| [Gonka Broker](https://gonkabroker.com) | `https://proxy.gonkabroker.com/v1` | [Get Key →](https://gonkabroker.com) |
| [Regolo.ai](https://regolo.ai) | `https://api.regolo.ai/v1` | [Get Key →](https://regolo.ai) |
| [GonkaRouter](https://gonkarouter.io) | `https://api.gonkarouter.io/v1` | [Get Key →](https://gonkarouter.io) |
| [NovAI](https://aiapi-pro.com) | `https://aiapi-pro.com/v1` | [Get Key →](https://aiapi-pro.com) |
| [Vectoree](https://vectoree.ai) | `https://vectoree.ai/api/v1` | [Get Key →](https://vectoree.ai) |
| [SEA-LION API](https://docs.sea-lion.ai/guides/inferencing/api) | `https://api.sea-lion.ai/v1` | [Get Key →](https://docs.sea-lion.ai/guides/inferencing/api) |
| [AIHubMix (free models)](https://aihubmix.com) | `https://aihubmix.com/v1` | [Get Key →](https://aihubmix.com) |
| [LLM.kiwi](https://llm.kiwi/pricing) | `https://api.llm.kiwi/v1` | [Get Key →](https://llm.kiwi/pricing) |
| [Agnes AI](https://agnes-ai.com) | `https://apihub.agnes-ai.com/v1` | [Get Key →](https://agnes-ai.com) |
| [AI Horde (OpenAI-compatible front)](https://aihorde.net) | `https://oai.aihorde.net/v1` | [Get Key →](https://aihorde.net) |
| [Arli AI](https://www.arliai.com/pricing) | `https://api.arliai.com/v1` | [Get Key →](https://www.arliai.com/pricing) |
| [Sarvam AI](https://www.sarvam.ai/api-pricing) | `https://api.sarvam.ai/v1` | [Get Key →](https://www.sarvam.ai/api-pricing) |
| [HPC-AI Model APIs](https://www.hpc-ai.com/model-apis) | `https://api.hpc-ai.com/inference/v1` | [Get Key →](https://www.hpc-ai.com/model-apis) |
| [VLM Run Gateway](https://docs.vlm.run/gateway/rate-limits) | `https://gateway.vlm.run/v1/openai` | [Get Key →](https://docs.vlm.run/gateway/rate-limits) |
| [Tencent Cloud TokenHub](https://www.tencentcloud.com/act/pro/tokenhub) | `https://tokenhub-intl.tencentmaas.com/v1` | [Get Key →](https://www.tencentcloud.com/act/pro/tokenhub) |
| [iFlytek Spark Lite](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) | `https://spark-api-open.xf-yun.com/v1` | [Get Key →](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) |
| [Zhipu BigModel (China)](https://docs.bigmodel.cn/cn/guide/start/model-overview) | `https://open.bigmodel.cn/api/paas/v4` | [Get Key →](https://docs.bigmodel.cn/cn/guide/start/model-overview) |
| [IBM watsonx.ai (Lite plan)](https://www.ibm.com/products/watsonx-ai/pricing) | `https://us-south.ml.cloud.ibm.com/ml/v1/text/chat?version=2025-02-11` | [Get Key →](https://www.ibm.com/products/watsonx-ai/pricing) |
| [Bytez](https://docs.bytez.com/model-api/docs/billing) | `https://api.bytez.com/models/v2/openai/v1` | [Get Key →](https://docs.bytez.com/model-api/docs/billing) |
| [Mixlayer](https://docs.mixlayer.com/credits-and-limits) | `https://models.mixlayer.ai/v1` | [Get Key →](https://docs.mixlayer.com/credits-and-limits) |
| [Moark (Gitee AI)](https://moark.com/docs/FAQ) | `https://api.moark.com/v1` | [Get Key →](https://moark.com/docs/FAQ) |
| [MegaNova AI](https://docs.meganova.ai/tiers) | `https://api.meganova.ai/v1` | [Get Key →](https://docs.meganova.ai/tiers) |
| [SimpleLLM](https://simplellm.eu/docs/) | `https://api.simplellm.eu/v1` | [Get Key →](https://simplellm.eu/docs/) |
| [Experiential Labs](https://www.experientiallabs.ai/pricing) | `https://api.experientiallabs.ai/v1` | [Get Key →](https://www.experientiallabs.ai/pricing) |
| [Sail Research](https://docs.sailresearch.com/pricing) | `https://api.sailresearch.com/v1` | [Get Key →](https://docs.sailresearch.com/pricing) |
| [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) | `https://aiplatform.googleapis.com/v1/publishers/google/models/MODEL_ID:generateContent` | [Get Key →](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) |
| [Jina AI (Embeddings / Reader API)](https://jina.ai/embeddings/) | `https://api.jina.ai/v1/embeddings` | [Get Key →](https://jina.ai/embeddings/) |
| [Voyage AI (embeddings & rerankers)](https://docs.voyageai.com/docs/pricing) | `https://api.voyageai.com/v1/embeddings` | [Get Key →](https://docs.voyageai.com/docs/pricing) |
| [SenseNova (SenseTime)](https://www.sensenova.cn/token-plan) | `https://token.sensenova.cn/v1` | [Get Key →](https://www.sensenova.cn/token-plan) |
| [LLMTR](https://llmtr.com/en/terms) | `https://llmtr.com/v1` | [Get Key →](https://llmtr.com/en/terms) |
| [Kiosapi.id](https://kiosapi.id/pricing) | `https://api.kiosapi.id/v1` | [Get Key →](https://kiosapi.id/pricing) |
| [Inception Labs](https://www.inceptionlabs.ai/) | `https://api.inceptionlabs.ai/v1` | [Get Key →](https://www.inceptionlabs.ai/) |
| [LLM7.io](https://llm7.io) | `https://api.llm7.io/v1` | [Get Key →](https://llm7.io) |
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
**By provider (38):** [Aion Labs](code-examples/aion-labs) · [Api.Airforce](code-examples/api-airforce) · [BazaarLink](code-examples/bazaarlink) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Dahl Inference](code-examples/dahl-inference) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [Google AI Studio](code-examples/google-ai-studio) · [Grokified](code-examples/grokified) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [Hyperbolic](code-examples/hyperbolic) · [Inception Labs](code-examples/inception-labs) · [IteraCompute](code-examples/iteracompute) · [Kilo AI Gateway](code-examples/kilo-gateway) · [LLM7.io](code-examples/llm7-io) · [Mistral (La Plateforme)](code-examples/mistral-ai) · [ModelScope](code-examples/modelscope) · [Nous Portal](code-examples/nous-portal) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [Ollama Cloud](code-examples/ollama-cloud) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Routeway](code-examples/routeway) · [Scaleway Generative APIs](code-examples/scaleway) · [SiliconFlow](code-examples/siliconflow) · [Token Harbor](code-examples/token-harbor) · [Upstage](code-examples/upstage) · [Vercel AI Gateway](code-examples/vercel-ai-gateway) · [Z.AI (GLM)](code-examples/z-ai)
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
- ➕ **Submit a provider**: [free-llm.com/submit](https://free-llm.com/submit)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-11-04<!--LASTSYNC:END--></sub></p>
