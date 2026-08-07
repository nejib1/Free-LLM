<p align="center">
  <h1 align="center">Free-LLM — 무료 AI·LLM API 오픈 디렉터리</h1>
  <p align="center"><strong>33개 제공업체의 무료 LLM 모델 130개 이상</strong> — 몇 초 만에 무료 모델을 찾고, 비교하고, 설정하세요. 무제한·프라이빗하게 쓸 수 있는 로컬/셀프호스팅 도구도 9종 제공합니다.</p>
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

| 제공업체 | 신용카드? | 속도 제한 | 일일 한도 | 월간 한도 | 주요 모델 |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | 불필요 | 5–30 RPM (모델별 상이) | 9,000 RPD (Flash) / 25 RPD (Pro) | 완전 무료 | Gemini 3.1 Pro Preview, 3.6 Flash, 3.5 Flash, 3.5 Flash-Lite |
| [Groq](https://console.groq.com/) | 불필요 | 30 RPM | 14,400 RPD | 영구 무료 | Llama 3.3 70B, Qwen3.6 27B, GPT-OSS 120B/20B, Kimi K2, Whisper |
| [Cerebras](https://inference.cerebras.ai/) | 불필요 | 30 RPM | 하루 100만 토큰 | 영구 무료 | GPT-OSS 120B, GLM-4.7, Gemma 4 31B |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | 불필요 | 시간당 300회 | 서버 부하에 따라 다름 | 영구 무료 (속도 제한 있음) | Llama 3.2 11B, Qwen 2.5 72B, Gemma 2 9B, Flux.1 |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 불필요 | 모델별 상이 | 하루 10,000 neurons | 월 약 30만 neurons | Llama 3.1 8B, Mistral 7B, Qwen 1.5 7B, DeepSeek Coder 6.7B, Phi-2 |
| [Cohere](https://cohere.com/) | 불필요 | 20 RPM | — | 월 1,000회 요청 | Command A+, Command A Reasoning, Command A, Command R+, Command R |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 전화번호 인증 필요 | 초당 1회 | — | 무료 ("Experiment" 플랜) | Mistral Large 3, Mistral Medium 3.5, Codestral, Mistral Small |
| [Inference.net](https://inference.net/) | 불필요 | 30 RPM (공정 사용) | 공정 사용 범위 내 | 등록된 모델은 무료 | DeepSeek-R1, Llama 3.1 8B/70B |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 가입 필요 | 2 RPM (비인증) / 400 RPM (인증) | 비공개 | 베타 제공 중 | Qwen3-32B, Qwen3.6-27B, 오픈소스 모델 20종 이상 |
| [Chutes.ai](https://chutes.ai/) | 가입 필요 | 커뮤니티 컴퓨팅 자원에 따라 다름 | 가용성에 따라 다름 | 상한 없음 | DeepSeek-R1, Llama 3.1 70B, Qwen 2.5 72B |
| [Coze](https://www.coze.com/) | 가입 필요 | 모델별 상이 | 토큰 기반 일일 한도 | 매일 초기화 | GPT-4o (Coze 경유), Gemini 1.5 Pro (Coze 경유) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 전화번호 인증 필요 | 40 RPM | — | — | Llama 4 Scout, DeepSeek-R1, 다양한 오픈소스 모델 |
| [Z.AI (GLM)](https://z.ai/) | 가입 필요 | 초당 약 1회 (Flash 등급) | 하루 약 1,000회 (Flash 등급) | 무료 요금제 지속 제공 | GLM-4.5-Flash, GLM-4.7-Flash |

### 💰 갱신형 크레딧

주기적으로 갱신되는 무료 크레딧으로, 일회성 만료가 없습니다.

| 제공업체 | 신용카드? | 속도 제한 | 무료 제공량 | 주요 모델 |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 불필요 | 20 RPM | 하루 50회 요청 (일회성 $10 충전 시 최대 1,000회) | DeepSeek V4 Flash, Llama 4 Maverick/Scout, GPT-OSS 120B, Gemini 2.0 (무료 모델 29개 이상) |
| [GitHub Models](https://github.com/marketplace/models) | 불필요 | 10 RPM (상위 등급) | 50 RPD (상위) / 150 RPD (mini 등급) | GPT-5 Chat, GPT-5 Mini, Llama 4 Scout/Maverick, Phi-4, Mistral Medium |
| [Grok / xAI](https://console.x.ai/) | 가입 필요 | 무료 요금제는 제한적 | 가입 시 일회성 $25 크레딧 (데이터 공유 동의 시 월 $150 옵션) | Grok 4.5, Grok 4.3 |
| [Venice.ai](https://venice.ai/) ⚠️ *전체 API 사용에는 Pro 구독 필요* | 가입 필요 | 10 RPM (무료 요금제) | 일일 사용량 제한, 매일 초기화 | Llama 3.1 405B, Dolphin Mixtral, Stable Diffusion 3 |

### 🎁 일회성 체험 크레딧

가입하면 소진할 때까지 쓸 수 있는 크레딧을 받습니다.

| 제공업체 | 신용카드? | 크레딧 금액 | 유효기간 | 주요 모델 |
|:---|:---:|:---|:---|:---|
| [Together.AI](https://together.ai/) ⚠️ *무료 연구용 모델은 최소 $5 입금 필요* | 가입 필요 | 무료 연구용 모델 | 영구 무료 (연구 목적) | Apriel 1.6/1.5 15B Thinker |
| [DeepSeek](https://platform.deepseek.com/) | 가입 필요 | 500만 토큰 | 30일 | DeepSeek-V4 Flash (채팅 + 추론 모드) |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | 가입 필요 | $5 크레딧 | 일회성 | Llama 3.3 70B, DeepSeek-V3.1 |
| [Cerebrium](https://www.cerebrium.ai/) | 가입 필요 | $30 크레딧 | 일회성 | 모든 모델 배포 가능 (서버리스 GPU 플랫폼, 공유 엔드포인트 아님) |
| [AI21 Labs](https://docs.ai21.com/) | 가입 필요 | $10 크레딧 | 3개월 | Jamba Large, Jamba Mini |
| [Fireworks AI](https://fireworks.ai/) | 가입 필요 | $1 크레딧 | 일회성 체험 | 다양한 오픈소스 모델 |
| [Friendli AI](https://friendli.ai/) | 가입 필요 | 가입 시 체험 크레딧 제공 | 일회성 | 주요 오픈소스 모델 |
| [Hyperbolic](https://app.hyperbolic.xyz/) | 가입 필요 | $1 크레딧 | 일회성 체험 | Llama 3.1 405B, DeepSeek V3 |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | 가입 필요 | 체험 크레딧 | 일회성 체험 | DeepSeek-R1, 다양한 오픈소스 모델 |
| [Novita AI](https://novita.ai/) | 가입 필요 | $0.50 크레딧 | 90일 | Llama, Mistral |
| [Replicate](https://replicate.com/) | 가입 필요 | 소액 체험 크레딧 | — | 1000개 이상의 모델 (LLM, 이미지, 오디오) |
| [Upstage](https://console.upstage.ai/) | 가입 필요 | $10 크레딧 | 3개월 | Solar Mini, Solar Pro 3 |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | 가입 필요 | 모델당 입력 100만 + 출력 100만 토큰 (국제/싱가포르 계정만 해당) | 90일 | Qwen3.7-Max, Qwen-Plus, Qwen-Flash, Qwen3-Coder-Plus |
| [Scaleway](https://console.scaleway.com/generative-api/models) | 가입 필요 | 무료 100만 토큰 | 일회성 체험 | Mistral, Llama, Qwen (EU 호스팅) |
| [Requesty](https://requesty.ai/) | 가입 필요 | 매월 무료 크레딧 | 매월 갱신 | 멀티 프로바이더 라우팅 |

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

| 제공업체 | Base URL | API 키 발급 |
|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | `https://generativelanguage.googleapis.com/v1beta` | [발급 →](https://aistudio.google.com/app/apikey) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [발급 →](https://console.groq.com/keys) |
| [Cerebras](https://inference.cerebras.ai/) | `https://api.cerebras.ai/v1` | [발급 →](https://cloud.cerebras.ai/) |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | `https://router.huggingface.co/v1` | [발급 →](https://huggingface.co/settings/tokens) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [발급 →](https://dash.cloudflare.com/profile/api-tokens) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [발급 →](https://dashboard.cohere.com/api-keys) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [발급 →](https://console.mistral.ai/api-keys) |
| [Inference.net](https://inference.net/) | `https://api.inference.net/v1` | [발급 →](https://inference.net/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [발급 →](https://endpoints.ai.cloud.ovh.net/) |
| [Chutes.ai](https://chutes.ai/) | `https://api.chutes.ai/v1` | [발급 →](https://chutes.ai/) |
| [Coze](https://www.coze.com/) | `https://api.coze.com/v1` | [발급 →](https://www.coze.com/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [발급 →](https://build.nvidia.com/settings/api-keys) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [발급 →](https://z.ai/) |
| [OpenRouter](https://openrouter.ai/) | `https://openrouter.ai/api/v1` | [발급 →](https://openrouter.ai/keys) |
| [GitHub Models](https://github.com/marketplace/models) | `https://models.inference.ai.azure.com` | [발급 →](https://github.com/marketplace/models) |
| [Grok / xAI](https://console.x.ai/) | `https://api.x.ai/v1` | [발급 →](https://console.x.ai/) |
| [Venice.ai](https://venice.ai/) | `https://api.venice.ai/api/v1` | [발급 →](https://venice.ai/) |
| [Together.AI](https://together.ai/) | `https://api.together.xyz/v1` | [발급 →](https://together.ai/) |
| [DeepSeek](https://platform.deepseek.com/) | `https://api.deepseek.com/v1` | [발급 →](https://platform.deepseek.com/api_keys) |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | `https://api.sambanova.ai/v1` | [발급 →](https://cloud.sambanova.ai/apis) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [발급 →](https://www.cerebrium.ai/) |
| [AI21 Labs](https://docs.ai21.com/) | `https://api.ai21.com/studio/v1` | [발급 →](https://studio.ai21.com/account/api-key) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [발급 →](https://fireworks.ai/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [발급 →](https://friendli.ai/) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.xyz/v1` | [발급 →](https://app.hyperbolic.xyz/) |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | `https://api.tokenfactory.nebius.com/v1` | [발급 →](https://studio.nebius.com/settings/api-keys) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [발급 →](https://novita.ai/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [발급 →](https://replicate.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [발급 →](https://console.upstage.ai/) |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [발급 →](https://bailian.console.alibabacloud.com/) |
| [Scaleway](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [발급 →](https://console.scaleway.com/generative-api/models) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [발급 →](https://requesty.ai/) |

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

**제공업체별 (33개):** [AI21 Labs](code-examples/ai21-labs) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Chutes.ai](code-examples/chutes-ai) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [DeepInfra](code-examples/deepinfra) · [DeepSeek](code-examples/deepseek) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [GitHub Models](code-examples/github-models) · [Google AI Studio](code-examples/google-ai-studio) · [Grok / xAI](code-examples/grok-xai) · [Groq](code-examples/groq-cloud) · [Hugging Face Inference](code-examples/huggingface-inference) · [Hyperbolic](code-examples/hyperbolic) · [Inference.net](code-examples/inference-net) · [Mistral AI](code-examples/mistral-ai) · [Nebius](code-examples/nebius) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Qwen / Alibaba](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [SambaNova](code-examples/sambanova) · [Scaleway](code-examples/scaleway) · [Together.AI](code-examples/together-ai) · [Upstage](code-examples/upstage) · [Venice.ai](code-examples/venice-ai) · [Z.AI (GLM)](code-examples/z-ai)

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

## License

MIT — 자세한 내용은 [LICENSE](LICENSE) 를 참고하세요.
