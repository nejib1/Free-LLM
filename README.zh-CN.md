<p align="center">
  <h1 align="center">Free-LLM — 免费 AI 与 LLM API 开放目录</h1>
<!--STATS:START-->
  <p align="center"><strong>来自 86 个提供商的 450+ 免费 LLM 模型</strong> — 几秒钟内发现、对比并配置免费模型，另有 9 款本地/自托管工具供无限私密使用。</p>
<!--STATS:END-->
</p>

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><strong>🌐 访问 free-llm.com</strong></a> —
  <a href="https://free-llm.com/compare" target="_blank" rel="noopener">对比提供商</a> ·
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener">提交新提供商</a> ·
  <a href="https://free-llm.com/guides" target="_blank" rel="noopener">使用指南</a> ·
  <a href="https://free-llm.com/hall-of-fame" target="_blank" rel="noopener">荣誉榜</a>
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

## 为什么需要这个项目

找一个免费 LLM API，不应该翻遍十几个更新日志，为了对比速率限制去注册五个不同平台，或者猜测哪个提供商这个月还有免费额度。

这个仓库依托 **[free-llm.com](https://free-llm.com)** 的在线目录，是一份结构化、由社区维护的参考资料，覆盖所有可以免费使用 LLM 的提供商。

- ✅ **社区维护** — 真实用户的投票、提交和编辑建议，发布前经过审核
- ✅ **信用卡透明** — 下方每个提供商都清楚标注是否需要信用卡、手机验证，或完全无需
- ✅ **即用代码** — [`code-examples/`](code-examples/) 中包含所有在线提供商的 Python / JavaScript / curl 代码片段，还有针对 Claude Code、Cursor、Codex 和 OpenCode 的专属配置
- ✅ **并排对比** — [free-llm.com/compare](https://free-llm.com/compare) 可将两个提供商的限制、模型和定价直接对比

---

## 三步上手

1. **选一个提供商** — 见下方 [Provider Directory](#provider-directory)。新手推荐从 **Groq** 开始（免信用卡，约 30 RPM / 每个模型每天 1,000 次请求，永久免费）。
2. **获取 API Key** — [Quick Reference](#quick-reference--base-urls--api-keys) 中每一行都直接链接到该提供商的密钥获取页面，大多数只需一个邮箱即可。
3. **接入代码** — 把下方表格中的 base URL + 模型 ID 复制到 [Quick Start](#quick-start--use-any-free-api-in-30-seconds) 的示例代码中。

每个提供商的完整详情、实时状态和社区备注都在其 free-llm.com 页面上：**free-llm.com/provider/&lt;slug&gt;**（例如 [free-llm.com/provider/groq](https://free-llm.com/provider/groq)）。

---

## Quick Start — 30 秒接入免费 API

下方大多数提供商都暴露 **OpenAI 兼容接口**。任何接受 `baseURL` + `apiKey` 的工具都能直接使用 — 替换这两项即可。

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # 免费，无需信用卡
    api_key="GROQ_API_KEY",                      # 在 console.groq.com/keys 获取
)

response = client.chat.completions.create(
    model="openai/gpt-oss-120b",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
# Groq 免费额度：约 30 RPM，每个聊天模型每天 1,000 次请求 — 个人使用完全够用
```

### 编程助手（Coding Assistants）

让你的 AI 编程工具接入免费后端，而不是付费 API：

- **Claude Code** — 使用 Anthropic API，因此需选择原生支持 Anthropic 端点的提供商（OpenRouter、Z.AI、FreeInference、Ollama），或通过 LiteLLM 代理，见 [`code-examples/claude-code.md`](code-examples/claude-code.md)
- **Cursor** — Settings → Models → Add Model，见 [`code-examples/cursor.md`](code-examples/cursor.md)
- **Codex CLI** — 设置 `OPENAI_BASE_URL` + `OPENAI_API_KEY`，见 [`code-examples/codex.md`](code-examples/codex.md)
- **OpenCode** — 开源 AI 编程助手，通过 `/connect` 或环境变量支持多个提供商，见 [`code-examples/opencode.md`](code-examples/opencode.md)

其他所有提供商的即用代码片段见下方 [Code Examples](#code-examples)，都在 [`code-examples/`](code-examples/) 目录中。

---

## Provider Directory

### ⚡ 永久免费额度

持续免费访问，限速但永不过期。

<!--TABLE:PERMANENT:START-->
| 提供商 | 需要信用卡？ | 速率限制 | 每日限额 | 每月限额 | 主要模型 |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | 否 | Varies by model (per-model limits are now shown only inside AI Studio) | Varies by model. Free: Gemini 3.x Flash / Flash-Lite and Gemini 2.5 Pro/Flash (2.5 redirect to 3.x on Dec 1, 2026); Gemini 3.x Pro and Gemini 4 are paid | 完全免费 | Gemini 3.8 Flash, Gemma 4 26B A4B IT, Gemma 4 31B IT, Gemini 3 Flash Preview |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 需手机验证 | 1 request/second | - | Free | Mistral Small, Mistral Large 4 (Preview), Codestral 2508, Ministral 3 8B |
| [Cohere](https://cohere.com/) | 否 | 20 requests/minute | 1,000 API calls/month (trial key) | 1,000 API calls/month (trial key, non-commercial) | Command A (111B), Command A Translate, Command A Vision, North Mini Code |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 需手机验证 | ~40 RPM (varies per model, not published) | - | - | GLM-5.3 Flash, DiffusionGemma 26B A4B, Riva Translate 4B v2, Cosmos Reason 2 8B |
| [Groq](https://console.groq.com/) | 否 | 30 RPM; 8K TPM on most chat models (varies by model) | 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model) | Free Forever | GPT-OSS 120B, Qwen3.8 27B, Whisper Large v3, Whisper Large v3 Turbo |
| [Z.AI (GLM)](https://z.ai/) | 需注册 | ~1 request/second (Flash models) | ~1,000 requests/day (Flash tier) | Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 否 | 因模型而异 | 每天 10,000 neurons | ~300,000 neurons/month | GLM-5.3 Flash, FLUX.2 Dev (image), Whisper Large v3 Turbo, EuroLLM 9B |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 需注册 | 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go) | 未公布 | Beta Access | GPT OSS 120B, BGE-M3 (embeddings), Whisper Large v3 Turbo, Qwen2.5 VL 72B Instruct |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | 需绑定银行卡 | 10 requests, 4M input / 100K output tokens per 60s (per API key) | No daily cap published (free while the API is experimental); a Hetzner account with billing details is required and Hetzner may ask for a card or ID to verify it | Free during experimental phase, no billing system yet | Qwen3.8 27B, Qwen3.6 35B A3B |
| [Kilo AI Gateway](https://kilo.ai/gateway) | 否 | 200 requests/hour per IP on free models (anonymous use allowed) | Default free models only | Free plan, no expiry | Nemotron 3.5 Lightning, Nemotron 3 Nano Omni Reasoning, Dots3-Note Preview, Reflection Beam 1.0 |
| [Ollama Cloud](https://ollama.com/cloud) | 否 | Pay-as-you-go: 3 concurrent requests; only Beam (beam:cloud) is labelled free | No free monthly allowance any more (starter credits removed); other cloud models are billed per token | Weekly usage limit resets every 7 days | Reflection Beam (501B) |
| [Nous Portal](https://portal.nousresearch.com) | 需绑定银行卡 | Standard rate limits (figures not published) | Free models only (no monthly credit) | Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 charge) is required to get a key - verify | StepFun Step 3.7 Flash, Reflection Beam 1.0, Upstage Solar Mini 4, Crouton Alpha (stealth, free) |
| [ModelScope](https://modelscope.cn) | 需手机验证 | 500 requests/day per model | 2,000 requests/day total | Free, no billing | Qwen3.8 27B, Nex N2.5 Pro, LongCat Flash Lite, ERNIE 4.5 300B A47B |
| [SiliconFlow](https://cloud.siliconflow.cn/models) | 需手机验证 | Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/models | Not fully published — verify on docs.siliconflow.cn | Free models available after identity verification | GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B, GLM-4 9B 0414 |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | 否 | Not published (daily credit allowance) | Daily free credit allowance (amount not published by Aion Labs) | Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| [Api.Airforce](https://api.airforce/) | 否 | 1 RPM | 1,000 requests/day | Free plan, $0/month | GPT-OSS 20B, GLM-4.7 Flash, Essential AI RNJ 1, Kimi K2.7 Code |
| [Routeway](https://routeway.ai/) | 需注册 | 5 RPM on :free models | 200 requests/day | Starter plan free, shared queue | DeepSeek V4.1 Flash (free), MiniMax M3.1 Flash (free), Muse Glimmer 30B |
| [FreeInference](https://freeinference.org) | 否 | Not published ("generous quota"; HTTP 429 when rate-limited) | No published daily cap | — | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M3, Qwen3.6 35B A3B |
| [OpenTyphoon (Typhoon API)](https://opentyphoon.ai) | 否 | 5 requests/second, 200 RPM (text models); 20 RPM for OCR | No daily cap published | — | Typhoon 2.5 30B A3B Instruct, Typhoon OCR 1.5 |
| [SEA-LION API](https://docs.sea-lion.ai/guides/inferencing/api) | 需注册 | 10 requests/minute per user (increase on request: sealion@aisingapore.org) | Not published | — | Qwen SEA-LION v4.5 27B Instruct, Llama SEA-LION v3.5 70B Reasoning, SEA-Guard (safety), SEA-LION Embedding 600M |
| [LLM.kiwi](https://llm.kiwi/pricing) | 需注册 | Baseline rate limits (figures not published) | Not published | — | Auto router, MiniMax M3, Nemotron 3 Ultra, Nemotron 3 Super |
| [Agnes AI](https://agnes-ai.com) | 需注册 | About 30 RPM per account (video 2 RPM), per third-party listings | Not published | — | Agnes 3.0 Flash, Agnes 2.5 Flash, Agnes Image 2.1 Flash (image) |
| [AI Horde (OpenAI-compatible front)](https://aihorde.net) | 否 | Queue-based; anonymous requests have the lowest priority, registered users earn kudos for priority | No fixed cap (volunteer capacity) | — | Gemma 4 E4B IT, Qwen3 4B, Llama 3.2 1B Instruct, L3 8B Stheno v3.2 |
| [Arli AI](https://www.arliai.com/pricing) | 需注册 | 1 request at a time; max 12K context tokens | Limited trial uses per model (about 5 requests per 2 days, per third-party list) | — | Qwen3.5 27B Derestricted |
| [iFlytek Spark Lite](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) | 需手机验证 | Not published on the HTTP doc | Not published (Lite is free) | — | Spark Lite |
| [Zhipu BigModel (China)](https://docs.bigmodel.cn/cn/guide/start/model-overview) | 需手机验证 | Low concurrency on free Flash models (GLM-4.7-Flash reported at 1 concurrent request) | Not published | — | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4-Flash-250414, GLM-4.6V-Flash (vision) |
| [Mixlayer](https://docs.mixlayer.com/credits-and-limits) | 需注册 | Per-organization, per-model RPM/TPM (values shown in console only) | Not published | — | Qwen3.5 4B (free) |
| [SenseNova (SenseTime)](https://www.sensenova.cn/token-plan) | 需手机验证 | Not published | Not published (\"限时放量\" during public beta) | — | SenseNova 6.8 Flash Lite |
| [Pollinations.ai](https://pollinations.ai) | 否 | API key required (anonymous access removed); no card | Free usage paid from Quest Pollen earned in the dashboard | Free, no billing system | GPT-OSS 20B, Mistral Large 3, Kimi K2.6, GLM 5.3 Flash |
| [LLM7.io](https://llm7.io) | 否 | 1 req/s, 60/min, 250/hour (free token from dash.llm7.io) | 100,000 tokens per 24h (free token; may be reduced without notice) | Free, no billing | Nemotron 3 Nano 30B, GLM 5.3 Flash, Mistral Nemo Instruct 2407, Codestral Latest |
<!--TABLE:PERMANENT:END-->

### 💰 可续期额度

定期续期的免费额度，没有一次性到期问题。

<!--TABLE:RENEWABLE:START-->
| 提供商 | 需要信用卡？ | 速率限制 | 免费额度 | 主要模型 |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 否 | 20 requests/minute | 50 requests/day (up to 1000 with $10 topup) | Gemma 4 31B IT, NVIDIA Nemotron 3 Ultra, Recursive Flint v1.0 (free), Nemotron 3.5 Super VL |
| [Gonka Broker](https://gonkabroker.com) | 需手机验证 | Network limits (see docs.gonkabroker.com Limits & Quotas) | Monthly free token grant after SMS verification (does not accumulate) | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| [Experiential Labs](https://www.experientiallabs.ai/pricing) | 需绑定银行卡 | 10 RPM and 250K TPM per free core model | 1M input+output tokens/day shared across free core models, reset 00:00 UTC | GPT-6 Luna, DeepSeek V4.1 Flash 1017, Clef Flash (decision endpoint, free promo) |
| [Requesty](https://requesty.ai/) | 否 | 20 RPM on free models (60 RPM for paying orgs) | 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models | Gemma 4 31B IT, Ling 3.0 Tiny, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | 需注册 | Lower per-model limits than the paid tier (429 on excess) | $5/month | Nemotron 3.5 Lightning (free), Llama 3.3 70B, MiniMax M3.1 Flash, GLM-4.7 Flash |
| [Token Harbor](https://tokenharbor.ai) | 需注册 | 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | Free allowance, resets on a rolling 7-day period | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| [BazaarLink](https://bazaarlink.ai/free) | 需注册 | 10 RPM (20 RPM with any credit), 2 concurrent requests | 60 weighted units/day (120 with credit), resets 00:00 UTC | Qwen3.7 Flash, Reflection Beam (free), Nemotron 3.5 Lightning (free), DeepSeek V4 Flash 0731 (free) |
| [AnyAPI](https://anyapi.ai) | 否 | Limited API calls on the Free plan (exact RPM not published) | 100K ANY tokens per day, free models only | See provider |
| [Zro (MoonMath)](https://zro.moonmath.ai) | 需注册 | Daily usage allowance (amount not published) | Resets every day (Flash models only) | GLM-5.3 Flash, DeepSeek V4.1 Flash |
| [Inferbase](https://inferbase.ai) | 否 | 100 managed requests per day | $0.50 of managed model usage per day; 5,000 requests per month | GPT-OSS 120B, DeepSeek V4 Flash, Qwen3.6 27B, Gemma 4 31B IT |
| [AIHubMix (free models)](https://aihubmix.com) | 需注册 | 5 RPM per account on most *-free routes | 100 requests/day and 1M tokens/day per account (500 RPD on some, e.g. glm-4.7-flash-free, coding-minimax-m3-free) | Coding GLM 5.3 (free), Coding GLM 5.3 Flash (free), Coding Kimi K3 (free), Coding MiniMax M3 (free) |
| [IBM watsonx.ai (Lite plan)](https://www.ibm.com/products/watsonx-ai/pricing) | 需绑定银行卡 | About 2 requests/second (Lite) | 300,000 tokens/month + 20 CUH/month | Granite 4 H Small, Llama 3.3 70B Instruct, Llama 4 Maverick, GPT-OSS 120B |
| [Bytez](https://docs.bytez.com/model-api/docs/billing) | 需注册 | 1 concurrent request (open models); 10 requests/second (closed models) | $1 free credits, refreshed every 4 weeks | See provider |
| [Moark (Gitee AI)](https://moark.com/docs/FAQ) | 需手机验证 | Not published | 100 free calls/day per user (free experience access token) | DeepSeek V4 Flash 0731, GLM 5.3 Flash, Qwen3.8 27B |
| [MegaNova AI](https://docs.meganova.ai/tiers) | 否 | Tier 1 (free): 20-200 RPM | Tier 1: 50-500 free-model requests/day (varies by model) | Manta Pro 1.0, Manta Flash 1.0, Manta Mini 1.0, Mistral Small 3.2 24B |
| [SimpleLLM](https://simplellm.eu/docs/) | 需注册 | Account-specific (read via GET /v1/rate-limit) | Free-model hourly/daily request and token allowances (values per account, not published) | Llama 3.1 8B Free, Gemma E4B Free, Mistral 7B (tier free, $0), Kode 14B (tier free, $0) |
| [Sail Research](https://docs.sailresearch.com/pricing) | 需绑定银行卡 | Not published for Free plan (most relaxed on flex window) | $5 free credits every month (payment method attached) | Kimi K3, GLM 5.3, GLM 5.3 Flash, DeepSeek V4.1 Flash 1017 |
| [LLMTR](https://llmtr.com/en/terms) | 需注册 | Not published; lower allowance in an account's first 24h | Per-model daily allowance (e.g. 200K tokens/day on dated previews) | Nemotron 3 Ultra 550B, Nemotron 3.5 Super VL (free), Qwen3.8 27B (free), Agnes 3.0 Flash |
| [Kiosapi.id](https://kiosapi.id/pricing) | 需注册 | 5 requests/minute (free models) | 50 requests/day per account shared across free models, reset 07:00 WIB | GLM 4.7 Flash, Qwen3 30B, Gemma 4 26B, Llama 3.1 8B |
<!--TABLE:RENEWABLE:END-->

### 🎁 一次性试用额度

注册后获得一次性额度，用完为止。

<!--TABLE:TRIAL:START-->
| 提供商 | 需要信用卡？ | 额度 | 有效期 | 主要模型 |
|:---|:---:|:---|:---|:---|
| [Replicate](https://replicate.com/) | 需注册 | Limited free runs on select models | 一次性 | See provider |
| [Fireworks AI](https://fireworks.ai/) | 需注册 | Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1) | 一次性 | Nemotron 3.5 Lightning 30B A3B, MiniMax M3, GPT-OSS 120B, GLM 5.3 Flash |
| [Hyperbolic](https://app.hyperbolic.xyz/) | 需手机验证 | $1 after phone verification (Free Tier) | 一次性 | DeepSeek V4 Flash 0731, Qwen3.8 27B, MiMo V2.6 Flash, GLM-5.3 Flash |
| [Cerebras](https://cerebras.ai/inference) | 需绑定银行卡 | $5 after adding a verified payment method (expires after 30 days) | 30 天 | GPT OSS 120B, Qwen 3.8 27B |
| [Novita AI](https://novita.ai/) | 需注册 | No automatic sign-up credit; $10 per referral (both sides) | 一次性 | GLM 5.3, Kimi K3, DeepSeek V4.1 Flash, Qwen3.8 27B |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | 需注册 | 1M tokens (+60 min audio transcription), all serverless models | 一次性 | GPT-OSS 120B, Whisper Large v3, Voxtral Small 24B, Holo2 30B A3B |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | 需注册 | ~1M tokens per model, 90 days (Singapore; newer models only since Oct 29, 2026) | One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| [Upstage](https://console.upstage.ai/) | 需注册 | $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify) | 3 个月 | See provider |
| [Friendli AI](https://friendli.ai/) | 需注册 | Trial credits at onboarding (amount not published) | 一次性 | GLM-5.1, Gemma 4 31B, GLM 5.2, GLM 5.3 Flash |
| [Cerebrium](https://www.cerebrium.ai/) | 需注册 | No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per second) | 一次性 | See provider |
| [Grokified](https://grokified.com) | 否 | $5 | 一次性 | Grok 4.7, grok-4.6, grok-4.3, grok-build-0.1 |
| [IteraCompute](https://iteracompute.com/free/) | 需注册 | 30M tokens/month on Qwen3.8-27B (promotion, no card) | Until Nov 24, 2026 00:00 PT | Qwen3.8 27B |
| [Dahl Inference](https://inference.dahl.global/) | 需注册 | — | — | GLM-5.3 Flash, MiniMax M2.7, DeepSeek V4 Flash 0731 |
| [Regolo.ai](https://regolo.ai) | 否 | 30-day trial, 1M tokens/day, no card | 30 天 | GPT-OSS 120B, Qwen3.8 27B, Gemma 4 31B, GLM-5.2 |
| [GonkaRouter](https://gonkarouter.io) | 否 | 1M free tokens for new users | 一次性 | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M2.7 |
| [NovAI](https://aiapi-pro.com) | 否 | $2 welcome credit, no card | 一次性 | GLM-4.7 Flash, GLM-4.6V Flash, GLM-4.1V Thinking Flash |
| [Vectoree](https://vectoree.ai) | 否 | $5 welcome credit after CLI login | 一次性 | Vectoree Auto (router) |
| [Sarvam AI](https://www.sarvam.ai/api-pricing) | 需手机验证 | INR 100 free credits on signup | One-time; credits do not expire (per third-party list) | Sarvam 105B, Sarvam 105B Conversations |
| [HPC-AI Model APIs](https://www.hpc-ai.com/model-apis) | 需注册 | $2 free voucher on signup ($4 with an invite code, per third-party list) | 一次性 | Kimi K2.7 Code |
| [VLM Run Gateway](https://docs.vlm.run/gateway/rate-limits) | 否 | 100 free credits on sign-up (~$1, at $0.01/credit) | One-time, then pay-as-you-go | Qwen3.8 27B, Gemma 4 26B A4B IT, Qwen3.5 0.8B, DiffusionGemma 26B A4B |
| [Tencent Cloud TokenHub](https://www.tencentcloud.com/act/pro/tokenhub) | 需绑定银行卡 | 1M free tokens per language model, once per account per model | 90 days after claim (intl promo page; docs say 1 year); campaign ends 2026-12-31" - DeepSeek-V4-Pro | See provider |
| [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) | 需注册 | Free-tier quota access, no billing account | Up to 90 days for new Google Cloud users | Gemini 3.1 Pro Preview, Gemini 3 Flash Preview, Gemini 2.5 Pro, Gemini 2.5 Flash |
| [Jina AI (Embeddings / Reader API)](https://jina.ai/embeddings/) | 否 | Free tokens on an auto-generated key (amount not stated on page) | Keys do not expire | Jina Embeddings v5 Text Small, Jina Embeddings v5 Text Nano, Jina Embeddings v5 Omni Small, Jina Embeddings v3 |
| [Voyage AI (embeddings & rerankers)](https://docs.voyageai.com/docs/pricing) | 需注册 | First 200M tokens free per model (voyage-4 family, rerank-2.5); 50M on domain models | One-time per account per model | Voyage 4 Large, Voyage 4, Voyage 4 Lite, Voyage Code 3 |
| [Inception Labs](https://www.inceptionlabs.ai/) | 否 | 100M tokens | One-time (new accounts) | Mercury 3, Mercury 2.5, Mercury 2 |
<!--TABLE:TRIAL:END-->

### 🖥️ 本地 / 自托管（无限、私密、永久免费）

| 工具 | 类型 | 亮点 |
|:---|:---|:---|
| [Ollama](https://ollama.com/) | CLI + API | 100+ 模型，支持 GPU 加速，OpenAI 兼容接口 |
| [LM Studio](https://lmstudio.ai/) | 桌面 GUI | 支持任意 GGUF 模型，内置模型浏览器，可离线使用 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ 引擎 | 运行任意 GGUF 模型，依赖极少 |
| [GPT4All](https://gpt4all.io/) | 桌面应用 | 纯 CPU 运行，无需 GPU，开源（自 2025 年 2 月起未再发布新版本） |
| [Jan.ai](https://jan.ai/) | 桌面应用 | 注重隐私，100% 离线的 ChatGPT 替代品 |
| [KoboldCpp](https://github.com/LostRuins/koboldcpp) | 单文件可执行程序 | 针对创意写作优化，支持 GGUF |
| [llamafile](https://github.com/mozilla-ai/llamafile) | 单文件可执行程序 | 跨平台，llama.cpp + Cosmopolitan Libc 结合体 |
| [Text Generation WebUI](https://github.com/oobabooga/textgen) | Gradio 界面 | 高度可定制，适合高级本地实验 |
| [BentoML](https://www.bentoml.com/) | 推理平台 | 可在任意环境部署任意 AI/ML 模型，生产级 |

---

## Quick Reference — Base URL 与 API Key

<!--TABLE:QUICKREF:START-->
| 提供商 | Base URL | 获取密钥 |
|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | `https://openrouter.ai/api/v1` | [获取密钥 →](https://openrouter.ai/) |
| [Google AI Studio](https://aistudio.google.com/) | `https://generativelanguage.googleapis.com/v1beta` | [获取密钥 →](https://aistudio.google.com/) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [获取密钥 →](https://console.mistral.ai/) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [获取密钥 →](https://cohere.com/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [获取密钥 →](https://replicate.com/) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [获取密钥 →](https://fireworks.ai/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [获取密钥 →](https://build.nvidia.com/explore/discover) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.ai/inference/v1` | [获取密钥 →](https://app.hyperbolic.xyz/) |
| [Cerebras](https://cerebras.ai/inference) | `https://api.cerebras.ai/v1` | [获取密钥 →](https://cerebras.ai/inference) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [获取密钥 →](https://console.groq.com/) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [获取密钥 →](https://novita.ai/) |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [获取密钥 →](https://console.scaleway.com/generative-api/models) |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [获取密钥 →](https://bailian.console.alibabacloud.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [获取密钥 →](https://console.upstage.ai/) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [获取密钥 →](https://z.ai/) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [获取密钥 →](https://dash.cloudflare.com/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [获取密钥 →](https://endpoints.ai.cloud.ovh.net/) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | `https://inference.hetzner.com/api/v1` | [获取密钥 →](https://experiments.hetzner.com/inference) |
| [Kilo AI Gateway](https://kilo.ai/gateway) | `https://ai-gateway.kilo.ai/api/v1` | [获取密钥 →](https://kilo.ai/gateway) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [获取密钥 →](https://friendli.ai/) |
| [Ollama Cloud](https://ollama.com/cloud) | `https://ollama.com/v1` | [获取密钥 →](https://ollama.com/cloud) |
| [Nous Portal](https://portal.nousresearch.com) | `https://inference-api.nousresearch.com/v1` | [获取密钥 →](https://portal.nousresearch.com) |
| [ModelScope](https://modelscope.cn) | `https://api-inference.modelscope.cn/v1` | [获取密钥 →](https://modelscope.cn) |
| [Gonka Broker](https://gonkabroker.com) | `https://proxy.gonkabroker.com/v1` | [获取密钥 →](https://gonkabroker.com) |
| [Experiential Labs](https://www.experientiallabs.ai/pricing) | `https://api.experientiallabs.ai/v1` | [获取密钥 →](https://www.experientiallabs.ai/pricing) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [获取密钥 →](https://www.cerebrium.ai/) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [获取密钥 →](https://requesty.ai/) |
| [SiliconFlow](https://cloud.siliconflow.cn/models) | `https://api.siliconflow.cn/v1` | [获取密钥 →](https://cloud.siliconflow.cn/models) |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | `https://api.aionlabs.ai/v1` | [获取密钥 →](https://www.aionlabs.ai/pricing/) |
| [Grokified](https://grokified.com) | `https://api.grokified.com/v1` | [获取密钥 →](https://grokified.com) |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | `https://ai-gateway.vercel.sh/v1` | [获取密钥 →](https://vercel.com/ai-gateway) |
| [Api.Airforce](https://api.airforce/) | `https://api.airforce/v1` | [获取密钥 →](https://api.airforce/) |
| [Routeway](https://routeway.ai/) | `https://api.routeway.ai/v1` | [获取密钥 →](https://routeway.ai/) |
| [Token Harbor](https://tokenharbor.ai) | `https://tokenharbor.ai/v1` | [获取密钥 →](https://tokenharbor.ai) |
| [IteraCompute](https://iteracompute.com/free/) | `https://api.iteracompute.com/v1` | [获取密钥 →](https://iteracompute.com/free/) |
| [BazaarLink](https://bazaarlink.ai/free) | `https://api.bazaarlink.ai/v1` | [获取密钥 →](https://bazaarlink.ai/free) |
| [Dahl Inference](https://inference.dahl.global/) | `https://inference.dahl.global/v1` | [获取密钥 →](https://inference.dahl.global/) |
| [FreeInference](https://freeinference.org) | `https://freeinference.org/v1` | [获取密钥 →](https://freeinference.org) |
| [AnyAPI](https://anyapi.ai) | `https://api.anyapi.ai/v1` | [获取密钥 →](https://anyapi.ai) |
| [Zro (MoonMath)](https://zro.moonmath.ai) | `https://zro.moonmath.ai/v1` | [获取密钥 →](https://zro.moonmath.ai) |
| [Inferbase](https://inferbase.ai) | `https://api.inferbase.ai/v1` | [获取密钥 →](https://inferbase.ai) |
| [OpenTyphoon (Typhoon API)](https://opentyphoon.ai) | `https://api.opentyphoon.ai/v1` | [获取密钥 →](https://opentyphoon.ai) |
| [Regolo.ai](https://regolo.ai) | `https://api.regolo.ai/v1` | [获取密钥 →](https://regolo.ai) |
| [GonkaRouter](https://gonkarouter.io) | `https://api.gonkarouter.io/v1` | [获取密钥 →](https://gonkarouter.io) |
| [NovAI](https://aiapi-pro.com) | `https://aiapi-pro.com/v1` | [获取密钥 →](https://aiapi-pro.com) |
| [Vectoree](https://vectoree.ai) | `https://vectoree.ai/api/v1` | [获取密钥 →](https://vectoree.ai) |
| [SEA-LION API](https://docs.sea-lion.ai/guides/inferencing/api) | `https://api.sea-lion.ai/v1` | [获取密钥 →](https://docs.sea-lion.ai/guides/inferencing/api) |
| [AIHubMix (free models)](https://aihubmix.com) | `https://aihubmix.com/v1` | [获取密钥 →](https://aihubmix.com) |
| [LLM.kiwi](https://llm.kiwi/pricing) | `https://api.llm.kiwi/v1` | [获取密钥 →](https://llm.kiwi/pricing) |
| [Agnes AI](https://agnes-ai.com) | `https://apihub.agnes-ai.com/v1` | [获取密钥 →](https://agnes-ai.com) |
| [AI Horde (OpenAI-compatible front)](https://aihorde.net) | `https://oai.aihorde.net/v1` | [获取密钥 →](https://aihorde.net) |
| [Arli AI](https://www.arliai.com/pricing) | `https://api.arliai.com/v1` | [获取密钥 →](https://www.arliai.com/pricing) |
| [Sarvam AI](https://www.sarvam.ai/api-pricing) | `https://api.sarvam.ai/v1` | [获取密钥 →](https://www.sarvam.ai/api-pricing) |
| [HPC-AI Model APIs](https://www.hpc-ai.com/model-apis) | `https://api.hpc-ai.com/inference/v1` | [获取密钥 →](https://www.hpc-ai.com/model-apis) |
| [VLM Run Gateway](https://docs.vlm.run/gateway/rate-limits) | `https://gateway.vlm.run/v1/openai` | [获取密钥 →](https://docs.vlm.run/gateway/rate-limits) |
| [Tencent Cloud TokenHub](https://www.tencentcloud.com/act/pro/tokenhub) | `https://tokenhub-intl.tencentmaas.com/v1` | [获取密钥 →](https://www.tencentcloud.com/act/pro/tokenhub) |
| [iFlytek Spark Lite](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) | `https://spark-api-open.xf-yun.com/v1` | [获取密钥 →](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) |
| [Zhipu BigModel (China)](https://docs.bigmodel.cn/cn/guide/start/model-overview) | `https://open.bigmodel.cn/api/paas/v4` | [获取密钥 →](https://docs.bigmodel.cn/cn/guide/start/model-overview) |
| [IBM watsonx.ai (Lite plan)](https://www.ibm.com/products/watsonx-ai/pricing) | `https://us-south.ml.cloud.ibm.com/ml/v1/text/chat?version=2025-02-11` | [获取密钥 →](https://www.ibm.com/products/watsonx-ai/pricing) |
| [Bytez](https://docs.bytez.com/model-api/docs/billing) | `https://api.bytez.com/models/v2/openai/v1` | [获取密钥 →](https://docs.bytez.com/model-api/docs/billing) |
| [Mixlayer](https://docs.mixlayer.com/credits-and-limits) | `https://models.mixlayer.ai/v1` | [获取密钥 →](https://docs.mixlayer.com/credits-and-limits) |
| [Moark (Gitee AI)](https://moark.com/docs/FAQ) | `https://api.moark.com/v1` | [获取密钥 →](https://moark.com/docs/FAQ) |
| [MegaNova AI](https://docs.meganova.ai/tiers) | `https://api.meganova.ai/v1` | [获取密钥 →](https://docs.meganova.ai/tiers) |
| [SimpleLLM](https://simplellm.eu/docs/) | `https://api.simplellm.eu/v1` | [获取密钥 →](https://simplellm.eu/docs/) |
| [Sail Research](https://docs.sailresearch.com/pricing) | `https://api.sailresearch.com/v1` | [获取密钥 →](https://docs.sailresearch.com/pricing) |
| [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) | `https://aiplatform.googleapis.com/v1/publishers/google/models/MODEL_ID:generateContent` | [获取密钥 →](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) |
| [Jina AI (Embeddings / Reader API)](https://jina.ai/embeddings/) | `https://api.jina.ai/v1/embeddings` | [获取密钥 →](https://jina.ai/embeddings/) |
| [Voyage AI (embeddings & rerankers)](https://docs.voyageai.com/docs/pricing) | `https://api.voyageai.com/v1/embeddings` | [获取密钥 →](https://docs.voyageai.com/docs/pricing) |
| [SenseNova (SenseTime)](https://www.sensenova.cn/token-plan) | `https://token.sensenova.cn/v1` | [获取密钥 →](https://www.sensenova.cn/token-plan) |
| [LLMTR](https://llmtr.com/en/terms) | `https://llmtr.com/v1` | [获取密钥 →](https://llmtr.com/en/terms) |
| [Kiosapi.id](https://kiosapi.id/pricing) | `https://api.kiosapi.id/v1` | [获取密钥 →](https://kiosapi.id/pricing) |
| [Pollinations.ai](https://pollinations.ai) | `https://gen.pollinations.ai/v1` | [获取密钥 →](https://pollinations.ai) |
| [Inception Labs](https://www.inceptionlabs.ai/) | `https://api.inceptionlabs.ai/v1` | [获取密钥 →](https://www.inceptionlabs.ai/) |
| [LLM7.io](https://llm7.io) | `https://api.llm7.io/v1` | [获取密钥 →](https://llm7.io) |
<!--TABLE:QUICKREF:END-->

---

## 使用指南

发布于 [free-llm.com/guides](https://free-llm.com/guides/)：

- **2026 年最佳免费 LLM API** — 主流选择的横向对比
- **Gemini vs ChatGPT（免费版）** — $0 究竟能用到什么
- **如何使用 OpenRouter** — 附代码的配置教程
- **OpenRouter 替代方案** — 其他值得尝试的聚合平台
- **用 Ollama 跑本地模型** — 5 分钟内上手
- **终极免费 LLM API 指南** — 最全面的深度解析
- **最佳免费编程 LLM** — 免费编程模型 + Claude Code / Codex / Cursor 配置
- **免费 OpenRouter 替代方案** — 免费额度更大的网关与 API
- **免费 LLM 回退系统** — 串联多个提供商，避免触发限流
- **月度报告：2026 年 11 月** — 新增免费提供商、停服与模型变动

---

## 社区功能

Free-LLM 是**社区驱动**的项目。访问 [free-llm.com](https://free-llm.com) 可以：

- **投票** 支持最有用的提供商
- **提交** 新的提供商和模型
- **提议编辑** 现有提供商数据（管理员审核）
- **举报** 已经从免费变为付费的模型
- 在 [荣誉榜](https://free-llm.com/hall-of-fame) 上获得认可

数据会同步回本仓库。

---

## Code Examples

[`code-examples/`](code-examples/) 目录中有可直接运行的 Python、JavaScript 和 curl 代码片段 — 填入你的 API Key 即可使用。

**按编程助手分类：** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md) · [OpenCode](code-examples/opencode.md)

<!--CODEEX:PROVIDERS:START-->
**按提供商分类（74 个）：** [Agnes AI](code-examples/agnes-ai) · [AI Horde (OpenAI-compatible front)](code-examples/ai-horde) · [AIHubMix (free models)](code-examples/aihubmix) · [Aion Labs](code-examples/aion-labs) · [AnyAPI](code-examples/anyapi) · [Api.Airforce](code-examples/api-airforce) · [Arli AI](code-examples/arli-ai) · [BazaarLink](code-examples/bazaarlink) · [Bytez](code-examples/bytez) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Dahl Inference](code-examples/dahl-inference) · [Experiential Labs](code-examples/experiential-labs) · [Fireworks AI](code-examples/fireworks-ai) · [FreeInference](code-examples/freeinference) · [Friendli AI](code-examples/friendli-ai) · [Gonka Broker](code-examples/gonka-broker) · [GonkaRouter](code-examples/gonkarouter) · [Google AI Studio](code-examples/google-ai-studio) · [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](code-examples/vertex-ai-express) · [Grokified](code-examples/grokified) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [HPC-AI Model APIs](code-examples/hpc-ai) · [Hyperbolic](code-examples/hyperbolic) · [IBM watsonx.ai (Lite plan)](code-examples/ibm-watsonx) · [iFlytek Spark Lite](code-examples/iflytek-spark) · [Inception Labs](code-examples/inception-labs) · [Inferbase](code-examples/inferbase) · [IteraCompute](code-examples/iteracompute) · [Jina AI (Embeddings / Reader API)](code-examples/jina-ai) · [Kilo AI Gateway](code-examples/kilo-gateway) · [Kiosapi.id](code-examples/kiosapi) · [LLM.kiwi](code-examples/llm-kiwi) · [LLM7.io](code-examples/llm7-io) · [LLMTR](code-examples/llmtr) · [MegaNova AI](code-examples/meganova) · [Mistral (La Plateforme)](code-examples/mistral-ai) · [Mixlayer](code-examples/mixlayer) · [Moark (Gitee AI)](code-examples/moark) · [ModelScope](code-examples/modelscope) · [Nous Portal](code-examples/nous-portal) · [NovAI](code-examples/novai) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [Ollama Cloud](code-examples/ollama-cloud) · [OpenRouter](code-examples/openrouter) · [OpenTyphoon (Typhoon API)](code-examples/opentyphoon) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Regolo.ai](code-examples/regolo-ai) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Routeway](code-examples/routeway) · [Sail Research](code-examples/sail-research) · [Sarvam AI](code-examples/sarvam-ai) · [Scaleway Generative APIs](code-examples/scaleway) · [SEA-LION API](code-examples/sea-lion) · [SenseNova (SenseTime)](code-examples/sensenova) · [SiliconFlow](code-examples/siliconflow) · [SimpleLLM](code-examples/simplellm) · [Tencent Cloud TokenHub](code-examples/tencent-tokenhub) · [Token Harbor](code-examples/token-harbor) · [Upstage](code-examples/upstage) · [Vectoree](code-examples/vectoree) · [Vercel AI Gateway](code-examples/vercel-ai-gateway) · [VLM Run Gateway](code-examples/vlm-run) · [Voyage AI (embeddings & rerankers)](code-examples/voyage-ai) · [Z.AI (GLM)](code-examples/z-ai) · [Zhipu BigModel (China)](code-examples/zhipu-bigmodel) · [Zro (MoonMath)](code-examples/zro)
<!--CODEEX:PROVIDERS:END-->

**本地 / 自托管：** [BentoML](code-examples/bentoml) · [GPT4All](code-examples/gpt4all) · [Jan.ai](code-examples/jan-ai) · [KoboldCpp](code-examples/koboldcpp) · [llama.cpp](code-examples/llama-cpp) · [llamafile](code-examples/llamafile) · [LM Studio](code-examples/lm-studio) · [Ollama](code-examples/ollama) · [Text Gen WebUI](code-examples/text-generation-webui)

---

## 仓库结构

```
Free-LLM/
├── README.md                 ← 当前文件（英文）
├── README.zh-CN.md            ← 简体中文
├── README.zh-TW.md            ← 繁體中文
├── README.ja.md               ← 日本語
├── README.ko.md                ← 한국어
├── CONTRIBUTING.md            ← 贡献指南
├── code-examples/             ← 即用代码片段（按提供商 + 按工具）
├── .github/                   ← Issue / PR 模板
└── LICENSE                    ← MIT
```

---

## 贡献指南

完整指南见 [CONTRIBUTING.md](CONTRIBUTING.md)。简要流程：

1. **添加提供商** — 使用网站上的 [提交表单](https://free-llm.com/submit)，或在此仓库开 [issue](https://github.com/nejib1/Free-LLM/issues/new/choose) / PR。
2. **修正错误数据** — 速率限制会变化，提供商可能转为付费或下线。欢迎提交 PR。
3. **添加代码示例** — 有其他工具（编程助手、聊天界面、SDK）的可用配置？欢迎添加到 [`code-examples/`](code-examples/)。
4. **投票与讨论** — 在 [free-llm.com](https://free-llm.com) 帮助社区发掘最佳选择。

### 收录标准

一个提供商要被收录，需要满足：
1. 明确提供**真正的免费额度**（不只是没有免费选项的付费试用）— 具体分类见 [Provider Directory](#provider-directory)
2. API 必须**公开可访问**（无需排队等候、非封闭测试、无需逆向工程）
3. 如果是试用额度，需清楚标注，并说明是否有永久免费的替代方案
4. 必须是提供商自己的服务：不收录转售、共享或拼车他人模型密钥的服务（“免费 Claude/GPT”密钥池一律拒绝）

---

## Links

- 🌐 **官网**：[free-llm.com](https://free-llm.com) — 目录、投票、提交
- 🆚 **对比提供商**：[free-llm.com/compare](https://free-llm.com/compare)
- 📚 **使用指南**：[free-llm.com/guides](https://free-llm.com/guides/)
- 🏆 **荣誉榜**：[free-llm.com/hall-of-fame](https://free-llm.com/hall-of-fame)
- 🧩 **JSON catalog**: [free-llm.com/catalog.json](https://free-llm.com/catalog.json)
- ➕ **提交提供商**：[free-llm.com/submit](https://free-llm.com/submit)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

---

## License

MIT — 详见 [LICENSE](LICENSE)。

---

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-11-14<!--LASTSYNC:END--></sub></p>
