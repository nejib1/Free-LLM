<p align="center">
  <h1 align="center">Free-LLM — 무료 AI·LLM API 오픈 디렉터리</h1>
<!--STATS:START-->
  <p align="center"><strong>86개 제공업체의 무료 LLM 모델 450개 이상</strong> — 몇 초 만에 무료 모델을 찾고, 비교하고, 설정하세요. 무제한·프라이빗하게 쓸 수 있는 로컬/셀프호스팅 도구도 9종 제공합니다.</p>
<!--STATS:END-->
</p>

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><strong>🌐 free-llm.com 바로가기</strong></a> —
  <a href="https://free-llm.com/compare" target="_blank" rel="noopener">제공업체 비교</a> ·
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener">제공업체 제출</a> ·
  <a href="https://free-llm.com/guides" target="_blank" rel="noopener">가이드</a> ·
  <a href="https://free-llm.com/hall-of-fame" target="_blank" rel="noopener">명예의 전당</a>
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

## 이 프로젝트가 필요한 이유

무료 LLM API를 찾는 일이 수십 개의 릴리스 노트를 뒤지거나, 요금 한도를 비교하려고 다섯 개 플랫폼에 가입하거나, 이번 달에 어떤 제공업체가 아직 무료 요금제를 유지하는지 추측하는 일이 되어서는 안 됩니다.

이 저장소는 **[free-llm.com](https://free-llm.com)** 의 온라인 디렉터리를 기반으로, 무료로 LLM을 사용할 수 있는 모든 제공업체를 다루는 구조화된 커뮤니티 운영 참고 자료입니다.

- ✅ **커뮤니티 운영** — 실제 사용자의 투표, 제출, 수정 제안을 게시 전에 검토
- ✅ **신용카드 정보 투명 공개** — 아래 각 제공업체마다 카드 필요 여부, 전화번호 인증 필요 여부, 또는 아무것도 필요 없는지 명확히 표시
- ✅ **바로 쓰는 코드** — [`code-examples/`](code-examples/) 에 운영 중인 모든 제공업체의 Python / JavaScript / curl 예제, Claude Code·Cursor·Codex·OpenCode 전용 설정도 포함
- ✅ **나란히 비교** — [free-llm.com/compare](https://free-llm.com/compare) 에서 두 제공업체의 제한, 모델, 요금을 바로 비교

---

## 사용 방법 — 3단계

1. **제공업체 선택** — 아래 [Provider Directory](#provider-directory) 참고. 처음이라면 **Groq**로 시작하세요 (신용카드 불필요, 약 30 RPM / 모델당 하루 1,000회 요청, 영구 무료).
2. **API 키 발급** — [Quick Reference](#quick-reference--base-urls--api-keys) 의 각 행이 해당 제공업체의 키 발급 페이지로 바로 연결됩니다. 대부분 이메일만 있으면 됩니다.
3. **코드에 연결** — 아래 표의 base URL과 모델 ID를 [Quick Start](#quick-start--use-any-free-api-in-30-seconds) 예제 코드에 붙여넣으세요.

각 제공업체의 상세 정보, 실시간 상태, 커뮤니티 코멘트는 free-llm.com의 제공업체 페이지에서 확인할 수 있습니다: **free-llm.com/provider/&lt;slug&gt;** (예: [free-llm.com/provider/groq](https://free-llm.com/provider/groq)).

---

## Quick Start — 30초 만에 무료 API 사용하기

아래 대부분의 제공업체는 **OpenAI 호환 엔드포인트**를 제공합니다. `baseURL`과 `apiKey`를 받는 도구라면 이 두 값만 바꾸면 바로 사용할 수 있습니다.

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # 무료, 신용카드 불필요
    api_key="GROQ_API_KEY",                      # console.groq.com/keys 에서 발급
)

response = client.chat.completions.create(
    model="openai/gpt-oss-120b",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
# Groq 무료 요금제: 약 30 RPM, 채팅 모델당 하루 1,000회 요청 — 개인 용도로 충분
```

### 코딩 어시스턴트

유료 API 대신 AI 코딩 도구를 무료 백엔드에 연결하세요:

- **Claude Code** — Anthropic API를 사용하므로 Anthropic 호환 엔드포인트가 있는 제공업체(OpenRouter, Z.AI, FreeInference, Ollama)나 LiteLLM 프록시를 사용하세요. [`code-examples/claude-code.md`](code-examples/claude-code.md) 참고
- **Cursor** — Settings → Models → Add Model. [`code-examples/cursor.md`](code-examples/cursor.md) 참고
- **Codex CLI** — `OPENAI_BASE_URL` 과 `OPENAI_API_KEY` 설정. [`code-examples/codex.md`](code-examples/codex.md) 참고
- **OpenCode** — 오픈소스 AI 코딩 에이전트. `/connect` 또는 환경 변수로 여러 제공업체 지원. [`code-examples/opencode.md`](code-examples/opencode.md) 참고

다른 모든 제공업체의 바로 쓰는 예제는 아래 [Code Examples](#code-examples) 와 [`code-examples/`](code-examples/) 디렉터리에 있습니다.

---

## Provider Directory

### ⚡ 영구 무료 요금제

만료 없이 계속 사용할 수 있는, 속도 제한이 있는 무료 액세스입니다.

<!--TABLE:PERMANENT:START-->
| 제공업체 | 신용카드? | 속도 제한 | 일일 한도 | 월간 한도 | 주요 모델 |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | 불필요 | Varies by model (per-model limits are now shown only inside AI Studio) | Varies by model. Free: Gemini 3.x Flash / Flash-Lite and Gemini 2.5 Pro/Flash (2.5 redirect to 3.x on Dec 1, 2026); Gemini 3.x Pro and Gemini 4 are paid | 완전 무료 | Gemini 3.8 Flash, Gemma 4 26B A4B IT, Gemma 4 31B IT, Gemini 3 Flash Preview |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 전화번호 인증 필요 | 1 request/second | - | Free | Mistral Small, Mistral Large 4 (Preview), Codestral 2508, Ministral 3 8B |
| [Cohere](https://cohere.com/) | 불필요 | 20 requests/minute | 1,000 API calls/month (trial key) | 1,000 API calls/month (trial key, non-commercial) | Command A (111B), Command A Translate, Command A Vision, North Mini Code |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 전화번호 인증 필요 | ~40 RPM (varies per model, not published) | - | - | GLM-5.3 Flash, DiffusionGemma 26B A4B, Riva Translate 4B v2, Cosmos Reason 2 8B |
| [Groq](https://console.groq.com/) | 불필요 | 30 RPM; 8K TPM on most chat models (varies by model) | 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model) | Free Forever | GPT-OSS 120B, Qwen3.8 27B, Whisper Large v3, Whisper Large v3 Turbo |
| [Z.AI (GLM)](https://z.ai/) | 가입 필요 | ~1 request/second (Flash models) | ~1,000 requests/day (Flash tier) | Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 가입 필요 | 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go) | 비공개 | Beta Access | GPT OSS 120B, BGE-M3 (embeddings), Whisper Large v3 Turbo, Qwen2.5 VL 72B Instruct |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 불필요 | 모델별 상이 | 하루 10,000 neurons | ~300,000 neurons/month | GLM-5.3 Flash, FLUX.2 Dev (image), Whisper Large v3 Turbo, EuroLLM 9B |
| [Nous Portal](https://portal.nousresearch.com) | 카드 등록 필요 | Standard rate limits (figures not published) | Free models only (no monthly credit) | Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 charge) is required to get a key - verify | StepFun Step 3.7 Flash, Reflection Beam 1.0, Upstage Solar Mini 4, Crouton Alpha (stealth, free) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | 카드 등록 필요 | 10 requests, 4M input / 100K output tokens per 60s (per API key) | No daily cap published (free while the API is experimental); a Hetzner account with billing details is required and Hetzner may ask for a card or ID to verify it | Free during experimental phase, no billing system yet | Qwen3.8 27B, Qwen3.6 35B A3B |
| [ModelScope](https://modelscope.cn) | 전화번호 인증 필요 | 500 requests/day per model | 2,000 requests/day total | Free, no billing | Qwen3.8 27B, Nex N2.5 Pro, LongCat Flash Lite, ERNIE 4.5 300B A47B |
| [Kilo AI Gateway](https://kilo.ai/gateway) | 불필요 | 200 requests/hour per IP on free models (anonymous use allowed) | Default free models only | Free plan, no expiry | Nemotron 3.5 Lightning, Nemotron 3 Nano Omni Reasoning, Dots3-Note Preview, Reflection Beam 1.0 |
| [FreeInference](https://freeinference.org) | 불필요 | Not published ("generous quota"; HTTP 429 when rate-limited) | No published daily cap | — | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M3, Qwen3.6 35B A3B |
| [Ollama Cloud](https://ollama.com/cloud) | 불필요 | Pay-as-you-go: 3 concurrent requests; only Beam (beam:cloud) is labelled free | No free monthly allowance any more (starter credits removed); other cloud models are billed per token | Weekly usage limit resets every 7 days | Reflection Beam (501B) |
| [Pollinations.ai](https://pollinations.ai) | 불필요 | API key required (anonymous access removed); no card | Free usage paid from Quest Pollen earned in the dashboard | Free, no billing system | GPT-OSS 20B, Mistral Large 3, Kimi K2.6, GLM 5.3 Flash |
| [SiliconFlow](https://cloud.siliconflow.cn/models) | 전화번호 인증 필요 | Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/models | Not fully published — verify on docs.siliconflow.cn | Free models available after identity verification | GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B, GLM-4 9B 0414 |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | 불필요 | Not published (daily credit allowance) | Daily free credit allowance (amount not published by Aion Labs) | Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| [Api.Airforce](https://api.airforce/) | 불필요 | 1 RPM | 1,000 requests/day | Free plan, $0/month | GPT-OSS 20B, GLM-4.7 Flash, Essential AI RNJ 1, Kimi K2.7 Code |
| [Routeway](https://routeway.ai/) | 가입 필요 | 5 RPM on :free models | 200 requests/day | Starter plan free, shared queue | DeepSeek V4.1 Flash (free), MiniMax M3.1 Flash (free), Muse Glimmer 30B |
| [OpenTyphoon (Typhoon API)](https://opentyphoon.ai) | 불필요 | 5 requests/second, 200 RPM (text models); 20 RPM for OCR | No daily cap published | — | Typhoon 2.5 30B A3B Instruct, Typhoon OCR 1.5 |
| [SEA-LION API](https://docs.sea-lion.ai/guides/inferencing/api) | 가입 필요 | 10 requests/minute per user (increase on request: sealion@aisingapore.org) | Not published | — | Qwen SEA-LION v4.5 27B Instruct, Llama SEA-LION v3.5 70B Reasoning, SEA-Guard (safety), SEA-LION Embedding 600M |
| [LLM.kiwi](https://llm.kiwi/pricing) | 가입 필요 | Baseline rate limits (figures not published) | Not published | — | Auto router, MiniMax M3, Nemotron 3 Ultra, Nemotron 3 Super |
| [Agnes AI](https://agnes-ai.com) | 가입 필요 | About 30 RPM per account (video 2 RPM), per third-party listings | Not published | — | Agnes 3.0 Flash, Agnes 2.5 Flash, Agnes Image 2.1 Flash (image) |
| [AI Horde (OpenAI-compatible front)](https://aihorde.net) | 불필요 | Queue-based; anonymous requests have the lowest priority, registered users earn kudos for priority | No fixed cap (volunteer capacity) | — | Gemma 4 E4B IT, Qwen3 4B, Llama 3.2 1B Instruct, L3 8B Stheno v3.2 |
| [Arli AI](https://www.arliai.com/pricing) | 가입 필요 | 1 request at a time; max 12K context tokens | Limited trial uses per model (about 5 requests per 2 days, per third-party list) | — | Qwen3.5 27B Derestricted |
| [iFlytek Spark Lite](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) | 전화번호 인증 필요 | Not published on the HTTP doc | Not published (Lite is free) | — | Spark Lite |
| [Zhipu BigModel (China)](https://docs.bigmodel.cn/cn/guide/start/model-overview) | 전화번호 인증 필요 | Low concurrency on free Flash models (GLM-4.7-Flash reported at 1 concurrent request) | Not published | — | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4-Flash-250414, GLM-4.6V-Flash (vision) |
| [Mixlayer](https://docs.mixlayer.com/credits-and-limits) | 가입 필요 | Per-organization, per-model RPM/TPM (values shown in console only) | Not published | — | Qwen3.5 4B (free) |
| [SenseNova (SenseTime)](https://www.sensenova.cn/token-plan) | 전화번호 인증 필요 | Not published | Not published (\"限时放量\" during public beta) | — | SenseNova 6.8 Flash Lite |
| [LLM7.io](https://llm7.io) | 불필요 | 1 req/s, 60/min, 250/hour (free token from dash.llm7.io) | 100,000 tokens per 24h (free token; may be reduced without notice) | Free, no billing | Nemotron 3 Nano 30B, GLM 5.3 Flash, Mistral Nemo Instruct 2407, Codestral Latest |
<!--TABLE:PERMANENT:END-->

### 💰 갱신형 크레딧

주기적으로 갱신되는 무료 크레딧으로, 일회성 만료가 없습니다.

<!--TABLE:RENEWABLE:START-->
| 제공업체 | 신용카드? | 속도 제한 | 무료 제공량 | 주요 모델 |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 불필요 | 20 requests/minute | 50 requests/day (up to 1000 with $10 topup) | Gemma 4 31B IT, NVIDIA Nemotron 3 Ultra, Recursive Flint v1.0 (free), Nemotron 3.5 Super VL |
| [Requesty](https://requesty.ai/) | 불필요 | 20 RPM on free models (60 RPM for paying orgs) | 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models | Gemma 4 31B IT, Ling 3.0 Tiny, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | 가입 필요 | Lower per-model limits than the paid tier (429 on excess) | $5/month | Nemotron 3.5 Lightning (free), Llama 3.3 70B, MiniMax M3.1 Flash, GLM-4.7 Flash |
| [Token Harbor](https://tokenharbor.ai) | 가입 필요 | 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | Free allowance, resets on a rolling 7-day period | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| [BazaarLink](https://bazaarlink.ai/free) | 가입 필요 | 10 RPM (20 RPM with any credit), 2 concurrent requests | 60 weighted units/day (120 with credit), resets 00:00 UTC | Qwen3.7 Flash, Reflection Beam (free), Nemotron 3.5 Lightning (free), DeepSeek V4 Flash 0731 (free) |
| [AnyAPI](https://anyapi.ai) | 불필요 | Limited API calls on the Free plan (exact RPM not published) | 100K ANY tokens per day, free models only | See provider |
| [Zro (MoonMath)](https://zro.moonmath.ai) | 가입 필요 | Daily usage allowance (amount not published) | Resets every day (Flash models only) | GLM-5.3 Flash, DeepSeek V4.1 Flash |
| [Inferbase](https://inferbase.ai) | 불필요 | 100 managed requests per day | $0.50 of managed model usage per day; 5,000 requests per month | GPT-OSS 120B, DeepSeek V4 Flash, Qwen3.6 27B, Gemma 4 31B IT |
| [Gonka Broker](https://gonkabroker.com) | 전화번호 인증 필요 | Network limits (see docs.gonkabroker.com Limits & Quotas) | Monthly free token grant after SMS verification (does not accumulate) | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| [AIHubMix (free models)](https://aihubmix.com) | 가입 필요 | 5 RPM per account on most *-free routes | 100 requests/day and 1M tokens/day per account (500 RPD on some, e.g. glm-4.7-flash-free, coding-minimax-m3-free) | Coding GLM 5.3 (free), Coding GLM 5.3 Flash (free), Coding Kimi K3 (free), Coding MiniMax M3 (free) |
| [IBM watsonx.ai (Lite plan)](https://www.ibm.com/products/watsonx-ai/pricing) | 카드 등록 필요 | About 2 requests/second (Lite) | 300,000 tokens/month + 20 CUH/month | Granite 4 H Small, Llama 3.3 70B Instruct, Llama 4 Maverick, GPT-OSS 120B |
| [Bytez](https://docs.bytez.com/model-api/docs/billing) | 가입 필요 | 1 concurrent request (open models); 10 requests/second (closed models) | $1 free credits, refreshed every 4 weeks | See provider |
| [Moark (Gitee AI)](https://moark.com/docs/FAQ) | 전화번호 인증 필요 | Not published | 100 free calls/day per user (free experience access token) | DeepSeek V4 Flash 0731, GLM 5.3 Flash, Qwen3.8 27B |
| [MegaNova AI](https://docs.meganova.ai/tiers) | 불필요 | Tier 1 (free): 20-200 RPM | Tier 1: 50-500 free-model requests/day (varies by model) | Manta Pro 1.0, Manta Flash 1.0, Manta Mini 1.0, Mistral Small 3.2 24B |
| [SimpleLLM](https://simplellm.eu/docs/) | 가입 필요 | Account-specific (read via GET /v1/rate-limit) | Free-model hourly/daily request and token allowances (values per account, not published) | Llama 3.1 8B Free, Gemma E4B Free, Mistral 7B (tier free, $0), Kode 14B (tier free, $0) |
| [Experiential Labs](https://www.experientiallabs.ai/pricing) | 카드 등록 필요 | 10 RPM and 250K TPM per free core model | 1M input+output tokens/day shared across free core models, reset 00:00 UTC | GPT-6 Luna, DeepSeek V4.1 Flash 1017, Clef Flash (decision endpoint, free promo) |
| [Sail Research](https://docs.sailresearch.com/pricing) | 카드 등록 필요 | Not published for Free plan (most relaxed on flex window) | $5 free credits every month (payment method attached) | Kimi K3, GLM 5.3, GLM 5.3 Flash, DeepSeek V4.1 Flash 1017 |
| [LLMTR](https://llmtr.com/en/terms) | 가입 필요 | Not published; lower allowance in an account's first 24h | Per-model daily allowance (e.g. 200K tokens/day on dated previews) | Nemotron 3 Ultra 550B, Nemotron 3.5 Super VL (free), Qwen3.8 27B (free), Agnes 3.0 Flash |
| [Kiosapi.id](https://kiosapi.id/pricing) | 가입 필요 | 5 requests/minute (free models) | 50 requests/day per account shared across free models, reset 07:00 WIB | GLM 4.7 Flash, Qwen3 30B, Gemma 4 26B, Llama 3.1 8B |
<!--TABLE:RENEWABLE:END-->

### 🎁 일회성 체험 크레딧

가입하면 소진할 때까지 쓸 수 있는 크레딧을 받습니다.

<!--TABLE:TRIAL:START-->
| 제공업체 | 신용카드? | 크레딧 금액 | 유효기간 | 주요 모델 |
|:---|:---:|:---|:---|:---|
| [Replicate](https://replicate.com/) | 가입 필요 | Limited free runs on select models | 일회성 | See provider |
| [Fireworks AI](https://fireworks.ai/) | 가입 필요 | Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1) | 일회성 | Nemotron 3.5 Lightning 30B A3B, MiniMax M3, GPT-OSS 120B, GLM 5.3 Flash |
| [Hyperbolic](https://app.hyperbolic.xyz/) | 전화번호 인증 필요 | $1 after phone verification (Free Tier) | 일회성 | DeepSeek V4 Flash 0731, Qwen3.8 27B, MiMo V2.6 Flash, GLM-5.3 Flash |
| [Cerebras](https://cerebras.ai/inference) | 카드 등록 필요 | $5 after adding a verified payment method (expires after 30 days) | 30일 | GPT OSS 120B, Qwen 3.8 27B |
| [Novita AI](https://novita.ai/) | 가입 필요 | No automatic sign-up credit; $10 per referral (both sides) | 일회성 | GLM 5.3, Kimi K3, DeepSeek V4.1 Flash, Qwen3.8 27B |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | 가입 필요 | 1M tokens (+60 min audio transcription), all serverless models | 일회성 | GPT-OSS 120B, Whisper Large v3, Voxtral Small 24B, Holo2 30B A3B |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | 가입 필요 | ~1M tokens per model, 90 days (Singapore; newer models only since Oct 29, 2026) | One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| [Upstage](https://console.upstage.ai/) | 가입 필요 | $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify) | 3개월 | See provider |
| [Cerebrium](https://www.cerebrium.ai/) | 가입 필요 | No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per second) | 일회성 | See provider |
| [Friendli AI](https://friendli.ai/) | 가입 필요 | Trial credits at onboarding (amount not published) | 일회성 | GLM-5.1, Gemma 4 31B, GLM 5.2, GLM 5.3 Flash |
| [Grokified](https://grokified.com) | 불필요 | $5 | 일회성 | Grok 4.7, grok-4.6, grok-4.3, grok-build-0.1 |
| [IteraCompute](https://iteracompute.com/free/) | 가입 필요 | 30M tokens/month on Qwen3.8-27B (promotion, no card) | Until Nov 24, 2026 00:00 PT | Qwen3.8 27B |
| [Dahl Inference](https://inference.dahl.global/) | 가입 필요 | — | — | GLM-5.3 Flash, MiniMax M2.7, DeepSeek V4 Flash 0731 |
| [Regolo.ai](https://regolo.ai) | 불필요 | 30-day trial, 1M tokens/day, no card | 30일 | GPT-OSS 120B, Qwen3.8 27B, Gemma 4 31B, GLM-5.2 |
| [GonkaRouter](https://gonkarouter.io) | 불필요 | 1M free tokens for new users | 일회성 | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M2.7 |
| [NovAI](https://aiapi-pro.com) | 불필요 | $2 welcome credit, no card | 일회성 | GLM-4.7 Flash, GLM-4.6V Flash, GLM-4.1V Thinking Flash |
| [Vectoree](https://vectoree.ai) | 불필요 | $5 welcome credit after CLI login | 일회성 | Vectoree Auto (router) |
| [Sarvam AI](https://www.sarvam.ai/api-pricing) | 전화번호 인증 필요 | INR 100 free credits on signup | One-time; credits do not expire (per third-party list) | Sarvam 105B, Sarvam 105B Conversations |
| [HPC-AI Model APIs](https://www.hpc-ai.com/model-apis) | 가입 필요 | $2 free voucher on signup ($4 with an invite code, per third-party list) | 일회성 | Kimi K2.7 Code |
| [VLM Run Gateway](https://docs.vlm.run/gateway/rate-limits) | 불필요 | 100 free credits on sign-up (~$1, at $0.01/credit) | One-time, then pay-as-you-go | Qwen3.8 27B, Gemma 4 26B A4B IT, Qwen3.5 0.8B, DiffusionGemma 26B A4B |
| [Tencent Cloud TokenHub](https://www.tencentcloud.com/act/pro/tokenhub) | 카드 등록 필요 | 1M free tokens per language model, once per account per model | 90 days after claim (intl promo page; docs say 1 year); campaign ends 2026-12-31" - DeepSeek-V4-Pro | See provider |
| [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) | 가입 필요 | Free-tier quota access, no billing account | Up to 90 days for new Google Cloud users | Gemini 3.1 Pro Preview, Gemini 3 Flash Preview, Gemini 2.5 Pro, Gemini 2.5 Flash |
| [Jina AI (Embeddings / Reader API)](https://jina.ai/embeddings/) | 불필요 | Free tokens on an auto-generated key (amount not stated on page) | Keys do not expire | Jina Embeddings v5 Text Small, Jina Embeddings v5 Text Nano, Jina Embeddings v5 Omni Small, Jina Embeddings v3 |
| [Voyage AI (embeddings & rerankers)](https://docs.voyageai.com/docs/pricing) | 가입 필요 | First 200M tokens free per model (voyage-4 family, rerank-2.5); 50M on domain models | One-time per account per model | Voyage 4 Large, Voyage 4, Voyage 4 Lite, Voyage Code 3 |
| [Inception Labs](https://www.inceptionlabs.ai/) | 불필요 | 100M tokens | One-time (new accounts) | Mercury 3, Mercury 2.5, Mercury 2 |
<!--TABLE:TRIAL:END-->

### 🖥️ 로컬 / 셀프호스팅 (무제한, 프라이빗, 영구 무료)

| 도구 | 유형 | 특징 |
|:---|:---|:---|
| [Ollama](https://ollama.com/) | CLI + API | 100개 이상 모델, GPU 가속, OpenAI 호환 엔드포인트 |
| [LM Studio](https://lmstudio.ai/) | 데스크톱 GUI | 모든 GGUF 모델 지원, 내장 모델 브라우저, 오프라인 사용 가능 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ 엔진 | 모든 GGUF 실행, 의존성 최소화 |
| [GPT4All](https://gpt4all.io/) | 데스크톱 앱 | CPU만으로 동작, GPU 불필요, 오픈소스 (2025년 2월 이후 새 릴리스 없음) |
| [Jan.ai](https://jan.ai/) | 데스크톱 앱 | 프라이버시 중심, 100% 오프라인 ChatGPT 대안 |
| [KoboldCpp](https://github.com/LostRuins/koboldcpp) | 단일 실행 파일 | 창작·롤플레이에 최적화, GGUF 지원 |
| [llamafile](https://github.com/mozilla-ai/llamafile) | 단일 실행 파일 | 크로스 플랫폼, llama.cpp + Cosmopolitan Libc 결합 |
| [Text Generation WebUI](https://github.com/oobabooga/textgen) | Gradio UI | 높은 커스터마이징, 고급 로컬 실험용 |
| [BentoML](https://www.bentoml.com/) | 추론 플랫폼 | 어디서든 AI/ML 모델 배포 가능, 프로덕션급 |

---

## Quick Reference — Base URL 및 API 키

<!--TABLE:QUICKREF:START-->
| 제공업체 | Base URL | API 키 발급 |
|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | `https://openrouter.ai/api/v1` | [발급 →](https://openrouter.ai/) |
| [Google AI Studio](https://aistudio.google.com/) | `https://generativelanguage.googleapis.com/v1beta` | [발급 →](https://aistudio.google.com/) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [발급 →](https://console.mistral.ai/) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [발급 →](https://cohere.com/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [발급 →](https://replicate.com/) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [발급 →](https://fireworks.ai/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [발급 →](https://build.nvidia.com/explore/discover) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.ai/inference/v1` | [발급 →](https://app.hyperbolic.xyz/) |
| [Cerebras](https://cerebras.ai/inference) | `https://api.cerebras.ai/v1` | [발급 →](https://cerebras.ai/inference) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [발급 →](https://console.groq.com/) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [발급 →](https://novita.ai/) |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [발급 →](https://console.scaleway.com/generative-api/models) |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [발급 →](https://bailian.console.alibabacloud.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [발급 →](https://console.upstage.ai/) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [발급 →](https://z.ai/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [발급 →](https://endpoints.ai.cloud.ovh.net/) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [발급 →](https://dash.cloudflare.com/) |
| [Nous Portal](https://portal.nousresearch.com) | `https://inference-api.nousresearch.com/v1` | [발급 →](https://portal.nousresearch.com) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | `https://inference.hetzner.com/api/v1` | [발급 →](https://experiments.hetzner.com/inference) |
| [ModelScope](https://modelscope.cn) | `https://api-inference.modelscope.cn/v1` | [발급 →](https://modelscope.cn) |
| [Kilo AI Gateway](https://kilo.ai/gateway) | `https://ai-gateway.kilo.ai/api/v1` | [발급 →](https://kilo.ai/gateway) |
| [FreeInference](https://freeinference.org) | `https://freeinference.org/v1` | [발급 →](https://freeinference.org) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [발급 →](https://www.cerebrium.ai/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [발급 →](https://friendli.ai/) |
| [Ollama Cloud](https://ollama.com/cloud) | `https://ollama.com/v1` | [발급 →](https://ollama.com/cloud) |
| [Pollinations.ai](https://pollinations.ai) | `https://gen.pollinations.ai/v1` | [발급 →](https://pollinations.ai) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [발급 →](https://requesty.ai/) |
| [SiliconFlow](https://cloud.siliconflow.cn/models) | `https://api.siliconflow.cn/v1` | [발급 →](https://cloud.siliconflow.cn/models) |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | `https://api.aionlabs.ai/v1` | [발급 →](https://www.aionlabs.ai/pricing/) |
| [Grokified](https://grokified.com) | `https://api.grokified.com/v1` | [발급 →](https://grokified.com) |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | `https://ai-gateway.vercel.sh/v1` | [발급 →](https://vercel.com/ai-gateway) |
| [Api.Airforce](https://api.airforce/) | `https://api.airforce/v1` | [발급 →](https://api.airforce/) |
| [Routeway](https://routeway.ai/) | `https://api.routeway.ai/v1` | [발급 →](https://routeway.ai/) |
| [Token Harbor](https://tokenharbor.ai) | `https://tokenharbor.ai/v1` | [발급 →](https://tokenharbor.ai) |
| [IteraCompute](https://iteracompute.com/free/) | `https://api.iteracompute.com/v1` | [발급 →](https://iteracompute.com/free/) |
| [BazaarLink](https://bazaarlink.ai/free) | `https://api.bazaarlink.ai/v1` | [발급 →](https://bazaarlink.ai/free) |
| [Dahl Inference](https://inference.dahl.global/) | `https://inference.dahl.global/v1` | [발급 →](https://inference.dahl.global/) |
| [AnyAPI](https://anyapi.ai) | `https://api.anyapi.ai/v1` | [발급 →](https://anyapi.ai) |
| [Zro (MoonMath)](https://zro.moonmath.ai) | `https://zro.moonmath.ai/v1` | [발급 →](https://zro.moonmath.ai) |
| [Inferbase](https://inferbase.ai) | `https://api.inferbase.ai/v1` | [발급 →](https://inferbase.ai) |
| [OpenTyphoon (Typhoon API)](https://opentyphoon.ai) | `https://api.opentyphoon.ai/v1` | [발급 →](https://opentyphoon.ai) |
| [Gonka Broker](https://gonkabroker.com) | `https://proxy.gonkabroker.com/v1` | [발급 →](https://gonkabroker.com) |
| [Regolo.ai](https://regolo.ai) | `https://api.regolo.ai/v1` | [발급 →](https://regolo.ai) |
| [GonkaRouter](https://gonkarouter.io) | `https://api.gonkarouter.io/v1` | [발급 →](https://gonkarouter.io) |
| [NovAI](https://aiapi-pro.com) | `https://aiapi-pro.com/v1` | [발급 →](https://aiapi-pro.com) |
| [Vectoree](https://vectoree.ai) | `https://vectoree.ai/api/v1` | [발급 →](https://vectoree.ai) |
| [SEA-LION API](https://docs.sea-lion.ai/guides/inferencing/api) | `https://api.sea-lion.ai/v1` | [발급 →](https://docs.sea-lion.ai/guides/inferencing/api) |
| [AIHubMix (free models)](https://aihubmix.com) | `https://aihubmix.com/v1` | [발급 →](https://aihubmix.com) |
| [LLM.kiwi](https://llm.kiwi/pricing) | `https://api.llm.kiwi/v1` | [발급 →](https://llm.kiwi/pricing) |
| [Agnes AI](https://agnes-ai.com) | `https://apihub.agnes-ai.com/v1` | [발급 →](https://agnes-ai.com) |
| [AI Horde (OpenAI-compatible front)](https://aihorde.net) | `https://oai.aihorde.net/v1` | [발급 →](https://aihorde.net) |
| [Arli AI](https://www.arliai.com/pricing) | `https://api.arliai.com/v1` | [발급 →](https://www.arliai.com/pricing) |
| [Sarvam AI](https://www.sarvam.ai/api-pricing) | `https://api.sarvam.ai/v1` | [발급 →](https://www.sarvam.ai/api-pricing) |
| [HPC-AI Model APIs](https://www.hpc-ai.com/model-apis) | `https://api.hpc-ai.com/inference/v1` | [발급 →](https://www.hpc-ai.com/model-apis) |
| [VLM Run Gateway](https://docs.vlm.run/gateway/rate-limits) | `https://gateway.vlm.run/v1/openai` | [발급 →](https://docs.vlm.run/gateway/rate-limits) |
| [Tencent Cloud TokenHub](https://www.tencentcloud.com/act/pro/tokenhub) | `https://tokenhub-intl.tencentmaas.com/v1` | [발급 →](https://www.tencentcloud.com/act/pro/tokenhub) |
| [iFlytek Spark Lite](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) | `https://spark-api-open.xf-yun.com/v1` | [발급 →](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) |
| [Zhipu BigModel (China)](https://docs.bigmodel.cn/cn/guide/start/model-overview) | `https://open.bigmodel.cn/api/paas/v4` | [발급 →](https://docs.bigmodel.cn/cn/guide/start/model-overview) |
| [IBM watsonx.ai (Lite plan)](https://www.ibm.com/products/watsonx-ai/pricing) | `https://us-south.ml.cloud.ibm.com/ml/v1/text/chat?version=2025-02-11` | [발급 →](https://www.ibm.com/products/watsonx-ai/pricing) |
| [Bytez](https://docs.bytez.com/model-api/docs/billing) | `https://api.bytez.com/models/v2/openai/v1` | [발급 →](https://docs.bytez.com/model-api/docs/billing) |
| [Mixlayer](https://docs.mixlayer.com/credits-and-limits) | `https://models.mixlayer.ai/v1` | [발급 →](https://docs.mixlayer.com/credits-and-limits) |
| [Moark (Gitee AI)](https://moark.com/docs/FAQ) | `https://api.moark.com/v1` | [발급 →](https://moark.com/docs/FAQ) |
| [MegaNova AI](https://docs.meganova.ai/tiers) | `https://api.meganova.ai/v1` | [발급 →](https://docs.meganova.ai/tiers) |
| [SimpleLLM](https://simplellm.eu/docs/) | `https://api.simplellm.eu/v1` | [발급 →](https://simplellm.eu/docs/) |
| [Experiential Labs](https://www.experientiallabs.ai/pricing) | `https://api.experientiallabs.ai/v1` | [발급 →](https://www.experientiallabs.ai/pricing) |
| [Sail Research](https://docs.sailresearch.com/pricing) | `https://api.sailresearch.com/v1` | [발급 →](https://docs.sailresearch.com/pricing) |
| [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) | `https://aiplatform.googleapis.com/v1/publishers/google/models/MODEL_ID:generateContent` | [발급 →](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) |
| [Jina AI (Embeddings / Reader API)](https://jina.ai/embeddings/) | `https://api.jina.ai/v1/embeddings` | [발급 →](https://jina.ai/embeddings/) |
| [Voyage AI (embeddings & rerankers)](https://docs.voyageai.com/docs/pricing) | `https://api.voyageai.com/v1/embeddings` | [발급 →](https://docs.voyageai.com/docs/pricing) |
| [SenseNova (SenseTime)](https://www.sensenova.cn/token-plan) | `https://token.sensenova.cn/v1` | [발급 →](https://www.sensenova.cn/token-plan) |
| [LLMTR](https://llmtr.com/en/terms) | `https://llmtr.com/v1` | [발급 →](https://llmtr.com/en/terms) |
| [Kiosapi.id](https://kiosapi.id/pricing) | `https://api.kiosapi.id/v1` | [발급 →](https://kiosapi.id/pricing) |
| [Inception Labs](https://www.inceptionlabs.ai/) | `https://api.inceptionlabs.ai/v1` | [발급 →](https://www.inceptionlabs.ai/) |
| [LLM7.io](https://llm7.io) | `https://api.llm7.io/v1` | [발급 →](https://llm7.io) |
<!--TABLE:QUICKREF:END-->

---

## 가이드 및 튜토리얼

[free-llm.com/guides](https://free-llm.com/guides/) 에서 확인하세요:

- **2026년 최고의 무료 LLM API** — 주요 선택지 비교
- **Gemini vs ChatGPT (무료 요금제)** — $0로 실제 무엇을 쓸 수 있는지
- **OpenRouter 사용법** — 코드가 포함된 설정 가이드
- **OpenRouter 대안** — 시도해볼 만한 다른 애그리게이터
- **Ollama로 로컬 LLM 시작하기** — 5분 안에 시작
- **궁극의 무료 LLM API 가이드** — 가장 자세한 심층 분석
- **코딩용 최고의 무료 LLM** — 무료 코딩 모델 + Claude Code / Codex / Cursor 설정
- **무료 OpenRouter 대안** — 무료 한도가 더 큰 게이트웨이와 API
- **무료 LLM 폴백 시스템** — 여러 제공업체를 연결해 속도 제한을 피하기
- **월간 리포트: 2026년 11월** — 새 무료 제공업체, 서비스 종료, 모델 변경

---

## 커뮤니티 기능

Free-LLM은 **커뮤니티 중심**의 프로젝트입니다. [free-llm.com](https://free-llm.com) 에서는 다음이 가능합니다:

- **투표**로 가장 유용한 제공업체를 부각
- **제출**로 새로운 제공업체·모델 추가 제안
- **수정 제안**으로 기존 제공업체 정보 업데이트 제안 (관리자 검토)
- **신고**로 무료에서 유료로 바뀐 모델 알리기
- [명예의 전당](https://free-llm.com/hall-of-fame) 에서 인정받기

데이터는 이 저장소로도 동기화됩니다.

---

## Code Examples

[`code-examples/`](code-examples/) 디렉터리에는 바로 실행 가능한 Python, JavaScript, curl 예제가 있습니다 — API 키만 추가하면 됩니다.

**코딩 어시스턴트별:** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md) · [OpenCode](code-examples/opencode.md)

<!--CODEEX:PROVIDERS:START-->
**제공업체별 (74개):** [Agnes AI](code-examples/agnes-ai) · [AI Horde (OpenAI-compatible front)](code-examples/ai-horde) · [AIHubMix (free models)](code-examples/aihubmix) · [Aion Labs](code-examples/aion-labs) · [AnyAPI](code-examples/anyapi) · [Api.Airforce](code-examples/api-airforce) · [Arli AI](code-examples/arli-ai) · [BazaarLink](code-examples/bazaarlink) · [Bytez](code-examples/bytez) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Dahl Inference](code-examples/dahl-inference) · [Experiential Labs](code-examples/experiential-labs) · [Fireworks AI](code-examples/fireworks-ai) · [FreeInference](code-examples/freeinference) · [Friendli AI](code-examples/friendli-ai) · [Gonka Broker](code-examples/gonka-broker) · [GonkaRouter](code-examples/gonkarouter) · [Google AI Studio](code-examples/google-ai-studio) · [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](code-examples/vertex-ai-express) · [Grokified](code-examples/grokified) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [HPC-AI Model APIs](code-examples/hpc-ai) · [Hyperbolic](code-examples/hyperbolic) · [IBM watsonx.ai (Lite plan)](code-examples/ibm-watsonx) · [iFlytek Spark Lite](code-examples/iflytek-spark) · [Inception Labs](code-examples/inception-labs) · [Inferbase](code-examples/inferbase) · [IteraCompute](code-examples/iteracompute) · [Jina AI (Embeddings / Reader API)](code-examples/jina-ai) · [Kilo AI Gateway](code-examples/kilo-gateway) · [Kiosapi.id](code-examples/kiosapi) · [LLM.kiwi](code-examples/llm-kiwi) · [LLM7.io](code-examples/llm7-io) · [LLMTR](code-examples/llmtr) · [MegaNova AI](code-examples/meganova) · [Mistral (La Plateforme)](code-examples/mistral-ai) · [Mixlayer](code-examples/mixlayer) · [Moark (Gitee AI)](code-examples/moark) · [ModelScope](code-examples/modelscope) · [Nous Portal](code-examples/nous-portal) · [NovAI](code-examples/novai) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [Ollama Cloud](code-examples/ollama-cloud) · [OpenRouter](code-examples/openrouter) · [OpenTyphoon (Typhoon API)](code-examples/opentyphoon) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Regolo.ai](code-examples/regolo-ai) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Routeway](code-examples/routeway) · [Sail Research](code-examples/sail-research) · [Sarvam AI](code-examples/sarvam-ai) · [Scaleway Generative APIs](code-examples/scaleway) · [SEA-LION API](code-examples/sea-lion) · [SenseNova (SenseTime)](code-examples/sensenova) · [SiliconFlow](code-examples/siliconflow) · [SimpleLLM](code-examples/simplellm) · [Tencent Cloud TokenHub](code-examples/tencent-tokenhub) · [Token Harbor](code-examples/token-harbor) · [Upstage](code-examples/upstage) · [Vectoree](code-examples/vectoree) · [Vercel AI Gateway](code-examples/vercel-ai-gateway) · [VLM Run Gateway](code-examples/vlm-run) · [Voyage AI (embeddings & rerankers)](code-examples/voyage-ai) · [Z.AI (GLM)](code-examples/z-ai) · [Zhipu BigModel (China)](code-examples/zhipu-bigmodel) · [Zro (MoonMath)](code-examples/zro)
<!--CODEEX:PROVIDERS:END-->

**로컬 / 셀프호스팅:** [BentoML](code-examples/bentoml) · [GPT4All](code-examples/gpt4all) · [Jan.ai](code-examples/jan-ai) · [KoboldCpp](code-examples/koboldcpp) · [llama.cpp](code-examples/llama-cpp) · [llamafile](code-examples/llamafile) · [LM Studio](code-examples/lm-studio) · [Ollama](code-examples/ollama) · [Text Gen WebUI](code-examples/text-generation-webui)

---

## 저장소 구조

```
Free-LLM/
├── README.md                 ← 현재 파일 (영어)
├── README.zh-CN.md            ← 简体中文
├── README.zh-TW.md            ← 繁體中文
├── README.ja.md               ← 日本語
├── README.ko.md                ← 한국어
├── CONTRIBUTING.md            ← 기여 가이드
├── code-examples/             ← 바로 쓰는 예제 (제공업체별 + 도구별)
├── .github/                   ← Issue / PR 템플릿
└── LICENSE                    ← MIT
```

---

## Contributing (기여 방법)

전체 가이드는 [CONTRIBUTING.md](CONTRIBUTING.md) 를 참고하세요. 요약하면:

1. **제공업체 추가** — 사이트의 [제출 폼](https://free-llm.com/submit) 을 사용하거나, 이 저장소에서 [issue](https://github.com/nejib1/Free-LLM/issues/new/choose) / PR을 엽니다.
2. **잘못된 데이터 수정** — 속도 제한은 바뀌고, 제공업체는 유료화되거나 서비스를 종료하기도 합니다. PR을 환영합니다.
3. **코드 예제 추가** — 아직 다루지 않은 도구(코딩 어시스턴트, 채팅 UI, SDK)에 대한 작동하는 설정이 있다면 [`code-examples/`](code-examples/) 에 추가해 주세요.
4. **투표 및 토론** — [free-llm.com](https://free-llm.com) 에서 커뮤니티가 최선의 선택을 찾도록 도와주세요.

### 등재 기준

다음 조건을 만족하는 제공업체를 등재합니다:
1. **진짜 무료 요금제**를 명시적으로 제공할 것 (무료 대안 없이 결제를 요구하는 체험판은 제외) — 분류 방식은 [Provider Directory](#provider-directory) 참고
2. API가 **공개적으로 접근 가능**할 것 (대기 명단, 비공개 베타, 리버스 엔지니어링 불필요)
3. 체험 크레딧인 경우 명확히 표시하고, 영구 무료 대안이 있는지 명시할 것
4. 제공업체 자체 서비스일 것: 다른 회사 모델의 키를 재판매·공유하는 서비스("무료 Claude/GPT" 키 풀)는 등재하지 않음

---

## Links

- 🌐 **공식 사이트**: [free-llm.com](https://free-llm.com) — 디렉터리, 투표, 제출
- 🆚 **제공업체 비교**: [free-llm.com/compare](https://free-llm.com/compare)
- 📚 **가이드**: [free-llm.com/guides](https://free-llm.com/guides/)
- 🏆 **명예의 전당**: [free-llm.com/hall-of-fame](https://free-llm.com/hall-of-fame)
- 🧩 **JSON catalog**: [free-llm.com/catalog.json](https://free-llm.com/catalog.json)
- ➕ **제공업체 제출**: [free-llm.com/submit](https://free-llm.com/submit)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

---

## License

MIT — 자세한 내용은 [LICENSE](LICENSE) 를 참고하세요.

---

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-11-08<!--LASTSYNC:END--></sub></p>
