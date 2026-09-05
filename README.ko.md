<p align="center">
  <h1 align="center">Free-LLM — 무료 AI·LLM API 오픈 디렉터리</h1>
<!--STATS:START-->
  <p align="center"><strong>41개 제공업체의 무료 LLM 모델 120개 이상</strong> — 몇 초 만에 무료 모델을 찾고, 비교하고, 설정하세요. 무제한·프라이빗하게 쓸 수 있는 로컬/셀프호스팅 도구도 9종 제공합니다.</p>
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
- ✅ **바로 쓰는 코드** — [`code-examples/`](code-examples/) 에 33개 제공업체 전체의 Python / JavaScript / curl 예제, Claude Code·Cursor·Codex 전용 설정도 포함
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

다른 모든 제공업체의 바로 쓰는 예제는 아래 [Code Examples](#code-examples) 와 [`code-examples/`](code-examples/) 디렉터리에 있습니다.

---

## Provider Directory

### ⚡ 영구 무료 요금제

만료 없이 계속 사용할 수 있는, 속도 제한이 있는 무료 액세스입니다.

<!--TABLE:PERMANENT:START-->
| 제공업체 | 신용카드? | 속도 제한 | 일일 한도 | 월간 한도 | 주요 모델 |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | 불필요 | 5-30 RPM (varies by model) | 9000 RPD (Flash) / 25 RPD (3.1 Pro) | 완전 무료 | Gemini 3.1 Pro, Gemini 3.1 Flash, Gemini 3.0 Flash, Gemini 3.0 Flash-Lite |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 전화번호 인증 필요 | 1 request/second | - | Free | Mistral 7B, Mixtral 8x7B, Mistral Small, Mistral Nemo |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | 불필요 | 300 Requests / hour | Capped by monthly credit, not a flat request count | $0.10/month in free routing credits (PRO: $2/month) | Llama 3.2 11B Vision, Llama 3.1 8B Instruct, Qwen 2.5 72B Instruct, Gemma 2 9B Instruct |
| [Cohere](https://cohere.com/) | 불필요 | 20 requests/minute | - | 1,000 requests/month | Command R+ (08-2024), Command R (08-2024), Command R7B (12-2024), Command A (111B) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 전화번호 인증 필요 | 40 requests/minute | - | - | See provider |
| [Groq](https://console.groq.com/) | 불필요 | 30 RPM, 14.4k RPD | 14,400 Requests/Day | Free Forever | Qwen3.6 27B, MiniMax M2.7, Whisper Large v3, Whisper Large v3 Turbo |
| [Z.AI (GLM)](https://z.ai/) | 가입 필요 | ~1 request/second (Flash models) | ~1,000 requests/day (Flash tier) | Free tier ongoing, subject to change | GLM-4.5-Flash, GLM-4.7-Flash |
| [Coze](https://www.coze.com/) | 가입 필요 | 모델별 상이 | 토큰 기반 일일 한도 | 매일 초기화 | GPT-4o (via Coze), Gemini 1.5 Pro (via Coze) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 불필요 | 모델별 상이 | 하루 10,000 neurons | ~300,000 neurons/month | Llama 3.1 8B Instruct, Llama 3.2 3B Instruct, Mistral 7B Instruct v0.2, Qwen 1.5 7B Chat |
| [LLM7.io](https://llm7.io) | 불필요 | 30 RPM (no signup) / 120 RPM (free email token) | Up to 5M tokens/day (rolling 24h, with free token) | Free, no billing | DeepSeek-R1, Qwen 2.5 |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 가입 필요 | 2 RPM (Anonymous) / 400 RPM (Auth) | 비공개 | Beta Access | Qwen3Guard-Gen-0.6B (Beta), Qwen3Guard-Gen-8B (Beta), stable-diffusion-xl-base-v10, nvr-tts-es-es |
| [Ollama Cloud](https://ollama.com/cloud) | 불필요 | Light usage tier, 1 concurrent model | Session limit resets every few hours | Weekly usage limit resets every 7 days | GPT-OSS 120B (Cloud), GPT-OSS 20B (Cloud), Qwen3.5 (Cloud), DeepSeek V4 Flash (Cloud) |
| [Nous Portal](https://portal.nousresearch.com) | 불필요 | Not fully published — verify on portal.nousresearch.com | Not published | Free tier: $0/month, no credit card | Hermes 4 |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | 불필요 | 3M input / 60K output tokens per 60s | 500M input / 5M output tokens per 24h | Free during experimental phase, no billing system yet | Qwen3.6 35B A3B |
| [Pollinations.ai](https://pollinations.ai) | 불필요 | ~1 request/15s (anonymous) — higher with a free API key | 공정 사용 범위 내 | Free, no billing system | OpenAI GPT-class (via Pollinations), Mistral-class (via Pollinations) |
| [SiliconFlow](https://siliconflow.com/pricing) | 전화번호 인증 필요 | Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/models | Not fully published — verify on docs.siliconflow.cn | Free models available after identity verification | See provider |
| [ModelScope](https://modelscope.cn) | 전화번호 인증 필요 | 500 requests/day per model | 2,000 requests/day total | Free, no billing | See provider |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | 불필요 | Not published — verify on aionlabs.ai/pricing | Daily token allowance (exact quota undisclosed) | Free, no billing | See provider |
| [Inference.net](https://inference.net/) | 불필요 | 30 RPM (공정 사용) | Fair use policy | Fair use policy | DeepSeek-R1, Llama 3.1 8B Instruct, Llama 3.1 70B Instruct |
<!--TABLE:PERMANENT:END-->

### 💰 갱신형 크레딧

주기적으로 갱신되는 무료 크레딧으로, 일회성 만료가 없습니다.

<!--TABLE:RENEWABLE:START-->
| 제공업체 | 신용카드? | 속도 제한 | 무료 제공량 | 주요 모델 |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 불필요 | 20 requests/minute | 50 requests/day (up to 1000 with $10 topup) | Google: Gemini 2.0 Flash (free), Google: Gemini 2.0 Pro (free), Meta: Llama 3.3 70B Instruct (free), NVIDIA: Llama 3.1 Nemotron 70B (free) |
| [Venice.ai](https://venice.ai/) | 가입 필요 | 10 RPM (무료 요금제) | Limited daily usage | Llama 3.1 405B, Dolphin Mixtral, Stable Diffusion 3 |
| [Requesty](https://requesty.ai/) | 불필요 | 60 RPM | 200 requests/day (free models) | See provider |
| [Grok (xAI)](https://console.x.ai/) | 가입 필요 | 무료 요금제는 제한적 | $25 one-time signup credit | Grok-2, Grok-2 Mini, Grok-2 Vision |
<!--TABLE:RENEWABLE:END-->

### 🎁 일회성 체험 크레딧

가입하면 소진할 때까지 쓸 수 있는 크레딧을 받습니다.

<!--TABLE:TRIAL:START-->
| 제공업체 | 신용카드? | 크레딧 금액 | 유효기간 | 주요 모델 |
|:---|:---:|:---|:---|:---|
| [Together.AI](https://together.ai/) ⚠️ *무료 연구용 모델은 최소 $5 입금 필요* | 가입 필요 | — | — | PrismML Ternary Bonsai 27B (Free) |
| [Replicate](https://replicate.com/) | 가입 필요 | 소액 체험 크레딧 | 일회성 | See provider |
| [Fireworks AI](https://fireworks.ai/) | 가입 필요 | $1 | 일회성 | See provider |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | 가입 필요 | $5 | 3개월 | See provider |
| [Hyperbolic](https://app.hyperbolic.xyz/) | 가입 필요 | $1 | 일회성 | See provider |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | 가입 필요 | $1 (requires a bank card on file) | 일회성 | See provider |
| [Cerebras](https://cerebras.ai/inference) | 가입 필요 | $5 | 30일 | Llama 3.1 8B (Fast), Llama 3.1 70B (Fast), Llama 4 Scout (Fast), Qwen3 32B (Fast) |
| [Novita AI](https://novita.ai/) | 가입 필요 | $0.50 | 일회성 | See provider |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | 가입 필요 | 1M tokens | 일회성 | See provider |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | 가입 필요 | 1M tokens/model | One-time per model | See provider |
| [AI21 Labs](https://docs.ai21.com/) | 가입 필요 | $10 | 3개월 | Jamba Large, Jamba Mini |
| [Upstage](https://console.upstage.ai/) | 가입 필요 | $10 | 3개월 | See provider |
| [DeepSeek](https://platform.deepseek.com/) | 가입 필요 | 5M tokens | 30일 | See provider |
| [Cerebrium](https://www.cerebrium.ai/) | 가입 필요 | $30 | 일회성 | See provider |
| [DeepInfra](https://deepinfra.com/) | 가입 필요 | $5 | One-time (90 days expiry) | See provider |
| [Friendli AI](https://friendli.ai/) | 가입 필요 | $10 | 일회성 | See provider |
| [Nscale](https://www.nscale.com/product/inference) | 불필요 | $5 | 일회성 | See provider |
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
| [Together.AI](https://together.ai/) | `https://api.together.xyz/v1` | [발급 →](https://together.ai/) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [발급 →](https://console.mistral.ai/) |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | `https://router.huggingface.co/v1` | [발급 →](https://huggingface.co/inference-api/serverless) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [발급 →](https://cohere.com/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [발급 →](https://replicate.com/) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [발급 →](https://fireworks.ai/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [발급 →](https://build.nvidia.com/explore/discover) |
| [Venice.ai](https://venice.ai/) | `https://api.venice.ai/api/v1` | [발급 →](https://venice.ai/) |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | `https://api.sambanova.ai/v1` | [발급 →](https://cloud.sambanova.ai/) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.xyz/v1` | [발급 →](https://app.hyperbolic.xyz/) |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | `https://api.tokenfactory.nebius.com/v1` | [발급 →](https://tokenfactory.nebius.com/) |
| [Cerebras](https://cerebras.ai/inference) | `https://api.cerebras.ai/v1` | [발급 →](https://cerebras.ai/inference) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [발급 →](https://novita.ai/) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [발급 →](https://console.groq.com/) |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [발급 →](https://console.scaleway.com/generative-api/models) |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [발급 →](https://bailian.console.alibabacloud.com/) |
| [AI21 Labs](https://docs.ai21.com/) | `https://api.ai21.com/studio/v1` | [발급 →](https://docs.ai21.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [발급 →](https://console.upstage.ai/) |
| [DeepSeek](https://platform.deepseek.com/) | `https://api.deepseek.com/v1` | [발급 →](https://platform.deepseek.com/) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [발급 →](https://z.ai/) |
| [Coze](https://www.coze.com/) | `https://api.coze.com/v1` | [발급 →](https://www.coze.com/) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [발급 →](https://dash.cloudflare.com/) |
| [LLM7.io](https://llm7.io) | `https://api.llm7.io/v1` | [발급 →](https://llm7.io) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [발급 →](https://requesty.ai/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [발급 →](https://endpoints.ai.cloud.ovh.net/) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [발급 →](https://www.cerebrium.ai/) |
| [DeepInfra](https://deepinfra.com/) | `https://api.deepinfra.com/v1/openai` | [발급 →](https://deepinfra.com/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [발급 →](https://friendli.ai/) |
| [Ollama Cloud](https://ollama.com/cloud) | `https://ollama.com/v1` | [발급 →](https://ollama.com/cloud) |
| [Nous Portal](https://portal.nousresearch.com) | `https://inference-api.nousresearch.com/v1` | [발급 →](https://portal.nousresearch.com) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | `https://inference.hetzner.com/api/v1` | [발급 →](https://experiments.hetzner.com/inference) |
| [Pollinations.ai](https://pollinations.ai) | `https://text.pollinations.ai` | [발급 →](https://pollinations.ai) |
| [SiliconFlow](https://siliconflow.com/pricing) | `https://api.siliconflow.com/v1` | [발급 →](https://siliconflow.com/pricing) |
| [ModelScope](https://modelscope.cn) | `https://api-inference.modelscope.cn/v1` | [발급 →](https://modelscope.cn) |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | `https://api.aionlabs.ai/v1` | [발급 →](https://www.aionlabs.ai/pricing/) |
| [Nscale](https://www.nscale.com/product/inference) | `https://inference.api.nscale.com/v1` | [발급 →](https://www.nscale.com/product/inference) |
| [Inference.net](https://inference.net/) | `https://api.inference.net/v1` | [발급 →](https://inference.net/) |
| [Grok (xAI)](https://console.x.ai/) | `https://api.x.ai/v1` | [발급 →](https://console.x.ai/) |
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

**코딩 어시스턴트별:** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md)

<!--CODEEX:PROVIDERS:START-->
**제공업체별 (40개):** [AI21 Labs](code-examples/ai21-labs) · [Aion Labs](code-examples/aion-labs) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [DeepInfra](code-examples/deepinfra) · [DeepSeek](code-examples/deepseek) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [Google AI Studio](code-examples/google-ai-studio) · [Grok (xAI)](code-examples/grok-xai) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [Hugging Face Inference](code-examples/huggingface-inference) · [Hyperbolic](code-examples/hyperbolic) · [Inference.net](code-examples/inference-net) · [LLM7.io](code-examples/llm7-io) · [Mistral (La Plateforme)](code-examples/mistral-ai) · [ModelScope](code-examples/modelscope) · [Nebius (Token Factory)](code-examples/nebius) · [Nous Portal](code-examples/nous-portal) · [Novita AI](code-examples/novita-ai) · [Nscale](code-examples/nscale) · [NVIDIA NIM](code-examples/nvidia-nim) · [Ollama Cloud](code-examples/ollama-cloud) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [SambaNova Cloud](code-examples/sambanova) · [Scaleway Generative APIs](code-examples/scaleway) · [SiliconFlow](code-examples/siliconflow) · [Together.AI](code-examples/together-ai) · [Upstage](code-examples/upstage) · [Venice.ai](code-examples/venice-ai) · [Z.AI (GLM)](code-examples/z-ai)
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

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-09-05<!--LASTSYNC:END--></sub></p>
