<p align="center">
  <h1 align="center">Free-LLM — 무료 AI·LLM API 오픈 디렉터리</h1>
<!--STATS:START-->
  <p align="center"><strong>51개 제공업체의 무료 LLM 모델 270개 이상</strong> — 몇 초 만에 무료 모델을 찾고, 비교하고, 설정하세요. 무제한·프라이빗하게 쓸 수 있는 로컬/셀프호스팅 도구도 9종 제공합니다.</p>
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
- ✅ **바로 쓰는 코드** — [`code-examples/`](code-examples/) 에 33개 제공업체 전체의 Python / JavaScript / curl 예제, Claude Code·Cursor·Codex·OpenCode 전용 설정도 포함
- ✅ **나란히 비교** — [free-llm.com/compare](https://free-llm.com/compare) 에서 두 제공업체의 제한, 모델, 요금을 바로 비교

---

## 사용 방법 — 3단계

1. **제공업체 선택** — 아래 [Provider Directory](#provider-directory) 참고. 처음이라면 **Groq**로 시작하세요 (신용카드 불필요, 30 RPM / 하루 14,400회 요청, 영구 무료).
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
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
# Groq 무료 요금제: 30 RPM, 하루 14,400회 요청 — 개인 용도로 충분
```

### 코딩 어시스턴트

유료 API 대신 AI 코딩 도구를 무료 백엔드에 연결하세요:

- **Claude Code** — `ANTHROPIC_BASE_URL` 과 `ANTHROPIC_AUTH_TOKEN` 설정. [`code-examples/claude-code.md`](code-examples/claude-code.md) 참고
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
| [Google AI Studio](https://aistudio.google.com/) | 불필요 | Varies by model (per-model limits are now shown only inside AI Studio) | Varies by model. Free: Flash, Flash-Lite and Gemini 2.5 Pro; Gemini 3.x Pro models are paid | 완전 무료 | Gemini 3 Flash Preview, Gemini 2.5 Flash-Lite, Gemini 3.1 Flash-Lite, Gemini 3.5 Flash-Lite |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 전화번호 인증 필요 | 1 request/second | - | Free | Codestral 2508, Ministral 3 8B, Ministral 3 14B, Mistral Large 3 |
| [Cohere](https://cohere.com/) | 불필요 | 20 requests/minute | 1,000 API calls/month (trial key) | 1,000 API calls/month (trial key, non-commercial) | North Mini Code, Command A Reasoning, Command R+ (08-2024), Command R (08-2024) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 전화번호 인증 필요 | ~40 RPM (varies per model, not published) | - | - | Nemotron 3.5 Super VL, DeepSeek V4.1 Flash, Nemotron 3 Ultra 550B A55B, Nemotron 3.5 Lightning 30B A3B |
| [Groq](https://console.groq.com/) | 불필요 | 30 RPM; 8K TPM on most chat models (varies by model) | 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model) | Free Forever | Qwen3.8 27B, Whisper Large v3, Whisper Large v3 Turbo, GPT-OSS 120B |
| [Z.AI (GLM)](https://z.ai/) | 가입 필요 | ~1 request/second (Flash models) | ~1,000 requests/day (Flash tier) | Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 가입 필요 | 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go) | 비공개 | Beta Access | Llama 3.3 70B Instruct, GPT OSS 20B, GPT OSS 120B, Qwen3.5 9B |
| [Coze](https://www.coze.com/) | 가입 필요 | 모델별 상이 | 토큰 기반 일일 한도 | 매일 초기화 | GPT-4o (via Coze), Gemini 1.5 Pro (via Coze) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 불필요 | 모델별 상이 | 하루 10,000 neurons | ~300,000 neurons/month | Kimi K2.6, GLM-5.3 Flash, Qwen3.8 27B, DeepSeek V4.1 Flash |
| [Nous Portal](https://portal.nousresearch.com) | 불필요 | Standard rate limits (figures not published) | Free models only (no monthly credit) | Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 charge) is required to get a key - verify | Ornith 1.5 122B, Reflection Beam 1.0, LongCat 2.5 Preview, Laguna XS 2.1 |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | 불필요 | 10 requests, 4M input / 100K output tokens per 60s (per API key) | No daily cap published (free while the API is experimental) | Free during experimental phase, no billing system yet | Qwen3.8 27B, Qwen3.6 35B A3B |
| [Pollinations.ai](https://pollinations.ai) | 불필요 | API key required (anonymous access removed); no card | Free usage paid from Quest Pollen earned in the dashboard | Free, no billing system | GPT-OSS 20B, Mistral Large 3, Kimi K2.6, GLM 5.3 Flash |
| [Kilo AI Gateway](https://kilo.ai/gateway) | 불필요 | 200 requests/hour per IP on free models (anonymous use allowed) | Default free models only | Free plan, no expiry | Nemotron 3 Nano Omni Reasoning, LFM2.5 2.6B, Dots3-Note Preview, XingChen Xing4.0 29B A4B |
| [Ollama Cloud](https://ollama.com/cloud) | 불필요 | Starter usage credits; starter models only (add credits to unlock all models) | Monthly starter allowance (resets monthly from sign-up date) | Weekly usage limit resets every 7 days | Reflection Beam (501B), Gemma 4, DeepSeek V4.1 Flash, GPT-OSS 120B (Cloud) |
| [SiliconFlow](https://siliconflow.com/pricing) | 전화번호 인증 필요 | Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/models | Not fully published — verify on docs.siliconflow.cn | Free models available after identity verification | GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B, GLM-4 9B 0414 |
| [ModelScope](https://modelscope.cn) | 전화번호 인증 필요 | 500 requests/day per model | 2,000 requests/day total | Free, no billing | Step 3.7 Flash, MiniMax M3, GLM-5.2, DeepSeek V4.1 Flash |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | 불필요 | Not published (daily credit allowance) | Daily free credit allowance (amount not published by Aion Labs) | Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| [Api.Airforce](https://api.airforce/) | 불필요 | 1 RPM | 1,000 requests/day | Free plan, $0/month | See provider |
| [Routeway](https://routeway.ai/) | 가입 필요 | 5 RPM on :free models | 200 requests/day | Starter plan free, shared queue | Muse Glimmer 30B, MiniMax M2.7, DeepSeek V4 Flash |
| [LLM7.io](https://llm7.io) | 불필요 | 1 req/s, 60/min, 250/hour (free token from dash.llm7.io) | 100,000 tokens per 24h (free token; may be reduced without notice) | Free, no billing | Nemotron 3 Nano 30B, GLM 5.3 Flash, Mistral Nemo Instruct 2407, Codestral Latest |
<!--TABLE:PERMANENT:END-->

### 💰 갱신형 크레딧

주기적으로 갱신되는 무료 크레딧으로, 일회성 만료가 없습니다.

<!--TABLE:RENEWABLE:START-->
| 제공업체 | 신용카드? | 속도 제한 | 무료 제공량 | 주요 모델 |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 불필요 | 20 requests/minute | 50 requests/day (up to 1000 with $10 topup) | Nemotron 3.5 Super VL, XingChen Xing4.0 29B A4B, MiniMax M3.1 Flash, Liquid LFM 2.5 2.6B |
| [Token Harbor](https://tokenharbor.ai) | 가입 필요 | 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | Free allowance, resets on a rolling 7-day period | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| [Requesty](https://requesty.ai/) | 불필요 | 20 RPM on free models (60 RPM for paying orgs) | 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models | Ling 3.0 Tiny, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B, Mistral Leanstral 1.5 |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | 가입 필요 | Rate limited per model (lower than paid tier) | Monthly free credit (~$5, verify) | See provider |
| [Onomeo](https://onomeo.com) | 가입 필요 | 12 requests/minute per key | 30 free-model calls every 5 hours per account | Glyph Cluster (stealth), Gemini 3.5 Flash-Lite, Muse Glimmer 30B, GLM-4.6V Flash |
| [IteraCompute](https://iteracompute.com/free/) | 가입 필요 | 160K tokens/minute (fair use, may queue) | No daily cap; 30M tokens per month | Qwen3.8 27B |
| [BazaarLink](https://bazaarlink.ai/free) | 가입 필요 | 10 RPM (20 RPM with any credit), 2 concurrent requests | 60 weighted units/day (120 with credit), resets 00:00 UTC | Qwen3.7 Flash, Reflection Beam (free), Nemotron 3.5 Lightning (free), Glyph Cluster (stealth) |
<!--TABLE:RENEWABLE:END-->

### 🎁 일회성 체험 크레딧

가입하면 소진할 때까지 쓸 수 있는 크레딧을 받습니다.

<!--TABLE:TRIAL:START-->
| 제공업체 | 신용카드? | 크레딧 금액 | 유효기간 | 주요 모델 |
|:---|:---:|:---|:---|:---|
| [Replicate](https://replicate.com/) | 가입 필요 | Limited free runs on select models | 일회성 | See provider |
| [Fireworks AI](https://fireworks.ai/) | 가입 필요 | Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1) | 일회성 | Nemotron 3.5 Lightning 30B A3B, MiniMax M3, GPT-OSS 120B, GLM 5.3 Flash |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | 가입 필요 | $1 trial credit, valid 30 days (bank card required) | 일회성 | Qwen3 235B A22B Instruct 2507, GLM 5.3, GPT OSS 120B, Qwen3.8 27B |
| [Cerebras](https://cerebras.ai/inference) | 가입 필요 | $5 after adding a verified payment method (expires after 30 days) | 30일 | Qwen 3.8 27B, GPT OSS 120B |
| [Novita AI](https://novita.ai/) | 가입 필요 | No automatic sign-up credit; $10 per referral (both sides) | 일회성 | GLM 5.3, Kimi K3, DeepSeek V4.1 Flash, Qwen3.8 27B |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | 가입 필요 | 1M tokens | 일회성 | Qwen3 235B A22B Instruct 2507, DeepSeek V4.1 Flash, GLM 5.3, Gemma 4 26B A4B IT |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | 가입 필요 | Typically 1M tokens per model, valid 90 days (Singapore region) | One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| [AI21 Labs](https://docs.ai21.com/) | 가입 필요 | $10 (valid 7 days, no card) | 3개월 | Jamba Large, Jamba Mini |
| [Upstage](https://console.upstage.ai/) | 가입 필요 | $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify) | 3개월 | See provider |
| [Cerebrium](https://www.cerebrium.ai/) | 가입 필요 | No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per second) | 일회성 | See provider |
| [Nscale](https://www.nscale.com/product/inference) | 가입 필요 | No sign-up credit: minimum $5 card top-up (early users may get free credits) | 일회성 | See provider |
| [Inception Labs](https://www.inceptionlabs.ai/) | 불필요 | — | — | Mercury 3, Mercury 2.5, Mercury 2 |
| [Dahl Inference](https://inference.dahl.global/) | 가입 필요 | — | — | GLM-5.3 Flash, MiniMax M2.7, DeepSeek V4 Flash 0731 |
| [Friendli AI](https://friendli.ai/) | 가입 필요 | Trial credits at onboarding (amount not published) | 일회성 | GLM-5.1, DeepSeek V3.2, Gemma 4 31B, GLM 5.2 |
| [Grokified](https://grokified.com) | 불필요 | $5 | 일회성 | grok-4.6, grok-4.3, grok-build-0.1 |
<!--TABLE:TRIAL:END-->

### 🖥️ 로컬 / 셀프호스팅 (무제한, 프라이빗, 영구 무료)

| 도구 | 유형 | 특징 |
|:---|:---|:---|
| [Ollama](https://ollama.com/) | CLI + API | 100개 이상 모델, GPU 가속, OpenAI 호환 엔드포인트 |
| [LM Studio](https://lmstudio.ai/) | 데스크톱 GUI | 모든 GGUF 모델 지원, 내장 모델 브라우저, 오프라인 사용 가능 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ 엔진 | 모든 GGUF 실행, 의존성 최소화 |
| [GPT4All](https://gpt4all.io/) | 데스크톱 앱 | CPU만으로 동작, GPU 불필요, 오픈소스 |
| [Jan.ai](https://jan.ai/) | 데스크톱 앱 | 프라이버시 중심, 100% 오프라인 ChatGPT 대안 |
| [KoboldCpp](https://github.com/LostRuins/koboldcpp) | 단일 실행 파일 | 창작·롤플레이에 최적화, GGUF 지원 |
| [llamafile](https://github.com/Mozilla-Ocho/llamafile) | 단일 실행 파일 | 크로스 플랫폼, llama.cpp + Cosmopolitan Libc 결합 |
| [Text Generation WebUI](https://github.com/oobabooga/text-generation-webui) | Gradio UI | 높은 커스터마이징, 고급 로컬 실험용 |
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
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | `https://api.tokenfactory.nebius.com/v1` | [발급 →](https://tokenfactory.nebius.com/) |
| [Cerebras](https://cerebras.ai/inference) | `https://api.cerebras.ai/v1` | [발급 →](https://cerebras.ai/inference) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [발급 →](https://console.groq.com/) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [발급 →](https://novita.ai/) |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [발급 →](https://console.scaleway.com/generative-api/models) |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [발급 →](https://bailian.console.alibabacloud.com/) |
| [AI21 Labs](https://docs.ai21.com/) | `https://api.ai21.com/studio/v1` | [발급 →](https://docs.ai21.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [발급 →](https://console.upstage.ai/) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [발급 →](https://z.ai/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [발급 →](https://endpoints.ai.cloud.ovh.net/) |
| [Coze](https://www.coze.com/) | `https://api.coze.com/v1` | [발급 →](https://www.coze.com/) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [발급 →](https://dash.cloudflare.com/) |
| [Nous Portal](https://portal.nousresearch.com) | `https://inference-api.nousresearch.com/v1` | [발급 →](https://portal.nousresearch.com) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | `https://inference.hetzner.com/api/v1` | [발급 →](https://experiments.hetzner.com/inference) |
| [Pollinations.ai](https://pollinations.ai) | `https://text.pollinations.ai` | [발급 →](https://pollinations.ai) |
| [Kilo AI Gateway](https://kilo.ai/gateway) | `https://api.kilo.ai/api/gateway` | [발급 →](https://kilo.ai/gateway) |
| [Token Harbor](https://tokenharbor.ai) | `https://tokenharbor.ai/v1` | [발급 →](https://tokenharbor.ai) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [발급 →](https://www.cerebrium.ai/) |
| [Ollama Cloud](https://ollama.com/cloud) | `https://ollama.com/v1` | [발급 →](https://ollama.com/cloud) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [발급 →](https://requesty.ai/) |
| [SiliconFlow](https://siliconflow.com/pricing) | `https://api.siliconflow.com/v1` | [발급 →](https://siliconflow.com/pricing) |
| [ModelScope](https://modelscope.cn) | `https://api-inference.modelscope.cn/v1` | [발급 →](https://modelscope.cn) |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | `https://api.aionlabs.ai/v1` | [발급 →](https://www.aionlabs.ai/pricing/) |
| [Nscale](https://www.nscale.com/product/inference) | `https://inference.api.nscale.com/v1` | [발급 →](https://www.nscale.com/product/inference) |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | `https://ai-gateway.vercel.sh/v1` | [발급 →](https://vercel.com/ai-gateway) |
| [Api.Airforce](https://api.airforce/) | `https://api.airforce/v1` | [발급 →](https://api.airforce/) |
| [Routeway](https://routeway.ai/) | `https://api.routeway.ai/v1` | [발급 →](https://routeway.ai/) |
| [Onomeo](https://onomeo.com) | `https://onomeo.com/v1` | [발급 →](https://onomeo.com) |
| [IteraCompute](https://iteracompute.com/free/) | `https://api.iteracompute.com/v1` | [발급 →](https://iteracompute.com/free/) |
| [Inception Labs](https://www.inceptionlabs.ai/) | `https://api.inceptionlabs.ai/v1` | [발급 →](https://www.inceptionlabs.ai/) |
| [BazaarLink](https://bazaarlink.ai/free) | `https://api.bazaarlink.ai/v1` | [발급 →](https://bazaarlink.ai/free) |
| [Dahl Inference](https://inference.dahl.global/) | `https://inference.dahl.global/v1` | [발급 →](https://inference.dahl.global/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [발급 →](https://friendli.ai/) |
| [LLM7.io](https://llm7.io) | `https://api.llm7.io/v1` | [발급 →](https://llm7.io) |
| [Grokified](https://grokified.com) | `https://api.grokified.com/v1` | [발급 →](https://grokified.com) |
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
**제공업체별 (31개):** [AI21 Labs](code-examples/ai21-labs) · [Aion Labs](code-examples/aion-labs) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [Google AI Studio](code-examples/google-ai-studio) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [LLM7.io](code-examples/llm7-io) · [Mistral (La Plateforme)](code-examples/mistral-ai) · [ModelScope](code-examples/modelscope) · [Nebius (Token Factory)](code-examples/nebius) · [Nous Portal](code-examples/nous-portal) · [Novita AI](code-examples/novita-ai) · [Nscale](code-examples/nscale) · [NVIDIA NIM](code-examples/nvidia-nim) · [Ollama Cloud](code-examples/ollama-cloud) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Scaleway Generative APIs](code-examples/scaleway) · [SiliconFlow](code-examples/siliconflow) · [Upstage](code-examples/upstage) · [Z.AI (GLM)](code-examples/z-ai)
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

---

## Links

- 🌐 **공식 사이트**: [free-llm.com](https://free-llm.com) — 디렉터리, 투표, 제출
- 🆚 **제공업체 비교**: [free-llm.com/compare](https://free-llm.com/compare)
- 📚 **가이드**: [free-llm.com/guides](https://free-llm.com/guides/)
- 🏆 **명예의 전당**: [free-llm.com/hall-of-fame](https://free-llm.com/hall-of-fame)
- ➕ **제공업체 제출**: [free-llm.com/submit](https://free-llm.com/submit)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

---

## License

MIT — 자세한 내용은 [LICENSE](LICENSE) 를 참고하세요.

---

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-10-27<!--LASTSYNC:END--></sub></p>
