<h1 align="center">Free-LLM — 무료 AI·LLM API 오픈 디렉터리</h1>
<!--STATS:START-->
  <p align="center"><strong>79개 제공업체의 무료 LLM 모델 460개 이상</strong> — 몇 초 만에 무료 모델을 찾고, 비교하고, 설정하세요. 무제한·프라이빗하게 쓸 수 있는 로컬/셀프호스팅 도구도 9종 제공합니다.</p>
<!--STATS:END-->

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><strong>🌐 free-llm.com 바로가기</strong></a> —
  <a href="https://free-llm.com/compare" target="_blank" rel="noopener">제공업체 비교</a> ·
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener">제공업체 제출</a> ·
  <a href="https://free-llm.com/guides" target="_blank" rel="noopener">가이드</a> ·
  <a href="https://free-llm.com/hall-of-fame" target="_blank" rel="noopener">명예의 전당</a>
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

<details>
<summary><strong>목차</strong></summary>

- [⚡ 신기능: Free-LLM Router — 모든 무료 API를 하나의 주소로](#-신기능-free-llm-router--모든-무료-api를-하나의-주소로)
- [이 프로젝트가 필요한 이유](#이-프로젝트가-필요한-이유)
- [사용 방법 — 3단계](#사용-방법--3단계)
- [Quick Start — 30초 만에 무료 API 사용하기](#quick-start--30초-만에-무료-api-사용하기)
- [Provider Directory](#provider-directory)
- [Quick Reference — Base URL 및 API 키](#quick-reference--base-url-및-api-키)
- [가이드 및 튜토리얼](#가이드-및-튜토리얼)
- [커뮤니티 기능](#커뮤니티-기능)
- [Code Examples](#code-examples)
- [저장소 구조](#저장소-구조)
- [Contributing (기여 방법)](#contributing-기여-방법)
- [Links](#links)
- [커뮤니티 및 지원](#커뮤니티-및-지원)
- [Star History](#star-history)
- [License](#license)

</details>

---

## ⚡ 신기능: Free-LLM Router — 모든 무료 API를 하나의 주소로

**원리:** 아래 제공업체들은 각자 *작은* 무료 요금제만 제공하고, 키와 한도도 제각각입니다. 라우터는 이것들을 하나로 묶습니다. 앱(Claude Code, Codex, Cursor, 직접 만든 코드…)은 OpenAI/Anthropic 호환 주소 **하나**에만 연결하면 되고, 라우터는 항상 지금 동작하는 무료 모델로 요청을 보내며, 바쁘거나 한도가 찬 경우 **즉시** 다음 모델로 전환합니다.

**가장 큰 장점:** 작은 무료 요금제 여러 개가 멈추지 않는 하나의 큰 무료 요금제처럼 동작합니다. 제공업체 목록은 free-llm.com에서 매일 자동 업데이트되며 누구나 무료입니다.

```bash
npm install -g github:nejib1/Free-LLM   # `free-llm` 명령 설치
free-llm                                # 안내형 설정 후 http://localhost:4000
free-llm setup claude                   # Claude Code가 무료 모델로 동작 (codex, opencode, aider도 지원)
```

<p align="center"><a href="router/README.md"><img src="router/docs/dashboard.png" width="760" alt="Free-LLM Router dashboard"></a></p>

키 없이도 체험 가능(게스트 모드) · 코딩 에이전트 명령 한 줄 설정 · OpenAI, Anthropic, Codex Responses, Ollama, MCP API 지원 · 의존성 0개 · 키는 내 컴퓨터에 암호화 저장.

🔒 **100% 로컬, 완전한 프라이버시:** 라우터는 내 컴퓨터에서 실행되며 API 키는 절대 밖으로 나가지 않습니다(암호화 저장). 각 키는 해당 제공업체에만 전송됩니다 — 계정 불필요, 원격 수집 없음, 오픈 소스.

**→ [작동 방식 보기](router/README.md)** · [free-llm.com/router](https://free-llm.com/router)

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
2. **API 키 발급** — [Quick Reference](#quick-reference--base-url-및-api-키) 의 각 행이 해당 제공업체의 키 발급 페이지로 바로 연결됩니다. 대부분 이메일만 있으면 됩니다.
3. **코드에 연결** — 아래 표의 base URL과 모델 ID를 [Quick Start](#quick-start--30초-만에-무료-api-사용하기) 예제 코드에 붙여넣으세요.

각 제공업체의 상세 정보, 실시간 상태, 커뮤니티 코멘트는 free-llm.com의 제공업체 페이지에서 확인할 수 있습니다: **free-llm.com/provider/&lt;slug&gt;** (예: [free-llm.com/provider/groq-cloud](https://free-llm.com/provider/groq-cloud)).

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
| 제공업체 · 가입 조건 | 무료 한도 | 주요 모델 |
|:---|:---|:---|
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 카드 불필요</sub> | ⏱️ Varies by model (per-model limits are now shown only inside AI Studio)<br>📅 Varies by model. Free: Gemini 3.x Flash / Flash-Lite and Gemini 2.5 Pro/Flash (2.5 redirect to…<br>🗓️ 완전 무료<br><sub>[자세히 →](https://free-llm.com/provider/google-ai-studio)</sub> | Gemini 3.8 Flash, Gemma 4 26B A4B IT, Gemma 4 31B IT, Gemini 3 Flash Preview |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 카드 불필요</sub> | ⏱️ 20 requests/minute<br>📅 1,000 API calls/month (trial key)<br>🗓️ 1,000 API calls/month (trial key, non-commercial) | Command A (111B), Command A Translate, Command A Vision, North Mini Code |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 전화 인증</sub> | ⏱️ ~40 RPM (varies per model, not published) | GLM-5.3 Flash, Riva Translate 4B v2, Cosmos Reason 2 8B, Muse Glimmer 30B |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 카드 불필요</sub> | ⏱️ 30 RPM; 8K TPM on most chat models (varies by model)<br>📅 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model)<br>🗓️ Free Forever | GPT-OSS 120B, Qwen3.8 27B, Whisper Large v3, Whisper Large v3 Turbo |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ 이메일 가입</sub> | ⏱️ ~1 request/second (Flash models)<br>📅 ~1,000 requests/day (Flash tier)<br>🗓️ Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ 이메일 가입</sub> | ⏱️ 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go)<br>🗓️ Beta Access | GPT OSS 120B, BGE-M3 (embeddings), Whisper Large v3 Turbo, Qwen2.5 VL 72B Instruct |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 카드 불필요</sub> | ⏱️ 모델별 상이<br>📅 하루 10,000 neurons<br>🗓️ ~300,000 neurons/month | FLUX.2 Dev (image), Whisper Large v3 Turbo, EuroLLM 9B, Apertus v1.5 8B |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 카드 불필요</sub> | ⏱️ 200 requests/hour per IP on free models (anonymous use allowed)<br>📅 Default free models only<br>🗓️ Free plan, no expiry | Nemotron 3.5 Lightning, Nemotron 3 Nano Omni Reasoning, Dots3-Note Preview, Reflection Beam 1.0 |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 카드 필요</sub> | ⏱️ Standard rate limits (figures not published)<br>📅 Free models only (no monthly credit)<br>🗓️ Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 ch…<br><sub>[자세히 →](https://free-llm.com/provider/nous-portal)</sub> | StepFun Step 3.7 Flash, Upstage Solar Mini 4, Qwen4 Max, LongCat 2.5 |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 카드 필요</sub> | ⏱️ 10 requests, 4M input / 100K output tokens per 60s (per API key)<br>📅 No daily cap published (free while the API is experimental); a Hetzner account with billing de…<br>🗓️ Free during experimental phase, no billing system yet<br><sub>[자세히 →](https://free-llm.com/provider/hetzner-inference)</sub> | Qwen3.8 27B, Qwen3.6 35B A3B |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 전화 인증</sub> | ⏱️ 500 requests/day per model<br>📅 2,000 requests/day total<br>🗓️ Free, no billing | Qwen3.8 27B, Nex N2.5 Pro, LongCat Flash Lite, ERNIE 4.5 300B A47B |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 카드 불필요</sub> | ⏱️ Not published ("generous quota"; HTTP 429 when rate-limited)<br>📅 No published daily cap | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M3, Qwen3.6 35B A3B |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 카드 불필요</sub> | ⏱️ Queue-based; anonymous requests have the lowest priority, registered users earn kudos for prio…<br>📅 No fixed cap (volunteer capacity)<br><sub>[자세히 →](https://free-llm.com/provider/ai-horde)</sub> | Gemma 4 E4B IT, Qwen3 4B, Llama 3.2 1B Instruct, L3 8B Stheno v3.2 |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 전화 인증</sub> | ⏱️ Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/mod…<br>📅 Not fully published — verify on docs.siliconflow.cn<br>🗓️ Free models available after identity verification<br><sub>[자세히 →](https://free-llm.com/provider/siliconflow)</sub> | GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B, GLM-4 9B 0414 |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 카드 불필요</sub> | ⏱️ Not published (daily credit allowance)<br>📅 Daily free credit allowance (amount not published by Aion Labs)<br>🗓️ Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 카드 불필요</sub> | ⏱️ 1 RPM<br>📅 1,000 requests/day<br>🗓️ Free plan, $0/month | GPT-OSS 20B, GLM-4.7 Flash, Kimi K2.7 Code, Llama Instant |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ 이메일 가입</sub> | ⏱️ 5 RPM on :free models<br>📅 200 requests/day<br>🗓️ Starter plan free, shared queue | DeepSeek V4.1 Flash (free), MiniMax M3.1 Flash (free), Muse Glimmer 30B |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 카드 불필요</sub> | ⏱️ 5 requests/second, 200 RPM (text models); 20 RPM for OCR<br>📅 No daily cap published | Typhoon 2.5 30B A3B Instruct, Typhoon OCR 1.5 |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 카드 불필요</sub> | ⏱️ 5 requests/min before the first top-up<br>📅 Free Flash models with no daily cap published; $2 welcome credit for paid models | GLM-4.7 Flash, GLM-4.6V Flash, GLM-4.1V Thinking Flash, CogView-3 Flash |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ 이메일 가입</sub> | ⏱️ 10 requests/minute per user (increase on request: sealion@aisingapore.org) | Qwen SEA-LION v4.5 27B Instruct, Llama SEA-LION v3.5 70B Reasoning, SEA-Guard (safety), SEA-LION Embedding 600M |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ 이메일 가입</sub> | ⏱️ Baseline rate limits (figures not published) | Auto router, MiniMax M3, Nemotron 3 Ultra, Nemotron 3 Super |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ 이메일 가입</sub> | ⏱️ About 30 RPM per account (video 2 RPM), per third-party listings | Agnes 3.0 Flash, Agnes 2.5 Flash, Agnes Image 2.1 Flash (image) |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ 이메일 가입</sub> | ⏱️ 1 request at a time; max 12K context tokens<br>📅 Limited trial uses per model (about 5 requests per 2 days, per third-party list) | Qwen3.5 27B Derestricted |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 전화 인증</sub> | ⏱️ Not published on the HTTP doc<br>📅 Not published (Lite is free) | Spark Lite |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 전화 인증</sub> | ⏱️ Low concurrency on free Flash models (GLM-4.7-Flash reported at 1 concurrent request) | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4-Flash-250414, GLM-4.6V-Flash (vision) |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ 이메일 가입</sub> | ⏱️ Per-organization, per-model RPM/TPM (values shown in console only) | Qwen3.5 4B (free) |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 전화 인증</sub> | 📅 Not published (\"限时放量\" during public beta) | SenseNova 6.8 Flash Lite |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 카드 불필요</sub> | ⏱️ 30 requests/day on the free plan; effective upstream rate limits also apply<br>📅 30 requests/day<br>🗓️ 800 rounds/month | fm-v1-lite (free tier alias, default model), fm-v1-standard (paid, Standard plan only), fm-v1-pro (paid, Pro plan only) |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ 이메일 가입</sub> | ⏱️ 30 requests per minute per API key, enforced as one request every 2 seconds (429 with Retry-Af…<br>📅 None published<br>🗓️ None published<br><sub>[자세히 →](https://free-llm.com/provider/merkium)</sub> | Ganymede 1.1 (now Neptune), Pluto 1.2 Pro (now Ceres), Pluto 1.2 Flash (now Ceres) |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 카드 불필요</sub> | ⏱️ API key required (anonymous access removed); no card<br>📅 Free usage paid from Quest Pollen earned in the dashboard<br>🗓️ Free, no billing system | GPT-OSS 20B, Mistral Large 3, Kimi K2.6, GLM 5.3 Flash |
<!--TABLE:PERMANENT:END-->

### 💰 갱신형 크레딧

주기적으로 갱신되는 무료 크레딧으로, 일회성 만료가 없습니다.

<!--TABLE:RENEWABLE:START-->
| 제공업체 · 가입 조건 | 무료 한도 | 주요 모델 |
|:---|:---|:---|
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 카드 불필요</sub> | 🎁 50 requests/day (up to 1000 with $10 topup)<br>⏱️ 20 requests/minute | Gemma 4 31B IT, NVIDIA Nemotron 3 Ultra, Recursive Flint v1.0 (free), Nemotron 3.5 Super VL |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 전화 인증</sub> | 🎁 Monthly free token grant after SMS verification (does not accumulate)<br>⏱️ Network limits (see docs.gonkabroker.com Limits & Quotas) | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 카드 필요</sub> | 🎁 1M input+output tokens/day shared across free core models, reset 00:00 UTC<br>⏱️ 10 RPM and 250K TPM per free core model | GPT-6 Luna, DeepSeek V4.1 Flash 1017, Clef Flash (decision endpoint, free promo) |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ 이메일 가입</sub> | 🎁 See provider<br>⏱️ No per-key RPM/TPM cap; one request at a time per account | DeepSeek V4.1 Flash 1017 |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 카드 불필요</sub> | 🎁 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models<br>⏱️ 20 RPM on free models (60 RPM for paying orgs) | Gemma 4 31B IT, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B, Mistral Leanstral 1.5 |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ 이메일 가입</sub> | 🎁 $5/month<br>⏱️ Lower per-model limits than the paid tier (429 on excess) | Nemotron 3.5 Lightning (free), Llama 3.3 70B, MiniMax M3.1 Flash, GLM-4.7 Flash |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ 이메일 가입</sub> | 🎁 Free allowance, resets on a rolling 7-day period<br>⏱️ 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ 이메일 가입</sub> | 🎁 60 weighted units/day (120 with credit), resets 00:00 UTC<br>⏱️ 10 RPM (20 RPM with any credit), 2 concurrent requests | Qwen3.7 Flash, Nemotron 3.5 Lightning (free), DeepSeek V4 Flash 0731 (free), Glyph Cluster (stealth) |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 카드 불필요</sub> | 🎁 100K ANY tokens per day, free models only<br>⏱️ Limited API calls on the Free plan (exact RPM not published) | See provider |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ 이메일 가입</sub> | 🎁 Resets every day (Flash models only)<br>⏱️ Daily usage allowance (amount not published) | GLM-5.3 Flash, DeepSeek V4.1 Flash |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 카드 불필요</sub> | 🎁 $0.50 of managed model usage per day; 5,000 requests per month<br>⏱️ 100 managed requests per day | GPT-OSS 120B, DeepSeek V4 Flash, Qwen3.6 27B, Gemma 4 31B IT |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ 이메일 가입</sub> | 🎁 100 requests/day and 1M tokens/day per account (500 RPD on some, e.g. glm-4.7-flash-free, codi…<br>⏱️ 5 RPM per account on most *-free routes<br><sub>[자세히 →](https://free-llm.com/provider/aihubmix)</sub> | Coding GLM 5.3 (free), Coding GLM 5.3 Flash (free), Coding Kimi K3 (free), Coding MiniMax M3 (free) |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 카드 필요</sub> | 🎁 300,000 tokens/month + 20 CUH/month<br>⏱️ About 2 requests/second (Lite) | Granite 4 H Small, Llama 3.3 70B Instruct, Llama 4 Maverick, GPT-OSS 120B |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ 이메일 가입</sub> | 🎁 $1 free credits, refreshed every 4 weeks<br>⏱️ 1 concurrent request (open models); 10 requests/second (closed models) | See provider |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 전화 인증</sub> | 🎁 100 free calls/day per user (free experience access token) | DeepSeek V4 Flash 0731, GLM 5.3 Flash, Qwen3.8 27B |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 카드 불필요</sub> | 🎁 Tier 1: 50-500 free-model requests/day (varies by model)<br>⏱️ Tier 1 (free): 20-200 RPM | Manta Pro 1.0, Manta Flash 1.0, Manta Mini 1.0, Mistral Small 3.2 24B |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ 이메일 가입</sub> | 🎁 Free-model hourly/daily request and token allowances (values per account, not published)<br>⏱️ Account-specific (read via GET /v1/rate-limit) | Llama 3.1 8B Free, Gemma E4B Free, Mistral 7B (tier free, $0), Kode 14B (tier free, $0) |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 카드 필요</sub> | 🎁 $5 free credits every month (payment method attached)<br>⏱️ Not published for Free plan (most relaxed on flex window) | Kimi K3, GLM 5.3, GLM 5.3 Flash, DeepSeek V4.1 Flash 1017 |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ 이메일 가입</sub> | 🎁 Per-model daily allowance (e.g. 200K tokens/day on dated previews)<br>⏱️ Not published; lower allowance in an account's first 24h | Nemotron 3 Ultra 550B, Nemotron 3.5 Super VL (free), Qwen3.8 27B (free), GPT-OSS Safeguard 20B |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ 이메일 가입</sub> | 🎁 50 requests/day (first 7 days), then 10 requests/day<br>⏱️ 10 requests/minute per key | qwen3-coder-30b |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 카드 불필요</sub> | 🎁 See provider<br>⏱️ See provider | DeepSeek V4.1 Flash (deepseek-ai/DeepSeek-V4.1-Flash), GLM 5.3 Flash (zai-org/GLM-5.3-Flash), GLM 5.3 (zai-org/GLM-5.3), gpt-oss 120B (openai/gpt-oss-120b) |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ 이메일 가입</sub> | 🎁 Daily cap in points (pts), per account; resets 00:00 UTC+8<br>⏱️ 20 RPM per account, 30 RPM per API key, 120 RPM per IP, 8 concurrent requests per key | GLM-5.3-Flash, MiMo-V2.6-Flash, Qwen3.8-Flash-Next, DeepSeek-V4.1-Flash |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ 이메일 가입</sub> | 🎁 50 requests/day per account shared across free models, reset 07:00 WIB<br>⏱️ 5 requests/minute (free models) | GLM 4.7 Flash, Qwen3 30B, Gemma 4 26B, Llama 3.1 8B |
<!--TABLE:RENEWABLE:END-->

### 🎁 일회성 체험 크레딧

가입하면 소진할 때까지 쓸 수 있는 크레딧을 받습니다.

<!--TABLE:TRIAL:START-->
| 제공업체 · 가입 조건 | 무료 크레딧 | 주요 모델 |
|:---|:---|:---|
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ 이메일 가입</sub> | 🎁 Limited free runs on select models<br>⌛ 일회성 | See provider |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ 이메일 가입</sub> | 🎁 Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1)<br>⌛ 일회성 | Nemotron 3.5 Lightning 30B A3B, MiniMax M3, GPT-OSS 120B, GLM 5.3 Flash |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 전화 인증</sub> | 🎁 $1 after phone verification (Free Tier)<br>⌛ 일회성 | DeepSeek V4 Flash 0731, Qwen3.8 27B, MiMo V2.6 Flash, GLM-5.3 Flash |
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 카드 필요</sub> | 🎁 $5 after adding a verified payment method (expires after 30 days)<br>⌛ 30일 | GPT OSS 120B, Qwen 3.8 27B |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ 이메일 가입</sub> | 🎁 No automatic sign-up credit; $10 per referral (both sides)<br>⌛ 일회성 | GLM 5.3, Kimi K3, Qwen3.8 27B, Llama 3.3 70B Instruct |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ 이메일 가입</sub> | 🎁 1M tokens (+60 min audio transcription), all serverless models<br>⌛ 일회성 | GPT-OSS 120B, Whisper Large v3, Voxtral Small 24B, Holo2 30B A3B |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ 이메일 가입</sub> | 🎁 ~1M tokens per model, 90 days (Singapore; newer models only since Oct 29, 2026)<br>⌛ One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ 이메일 가입</sub> | 🎁 $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify)<br>⌛ 3개월 | See provider |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ 이메일 가입</sub> | 🎁 Trial credits at onboarding (amount not published)<br>⌛ 일회성 | GLM-5.1, Gemma 4 31B, GLM 5.2, GLM 5.3 Flash |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ 이메일 가입</sub> | 🎁 No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per sec…<br>⌛ 일회성<br><sub>[자세히 →](https://free-llm.com/provider/cerebrium)</sub> | See provider |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 카드 불필요</sub> | 🎁 $5<br>⌛ 일회성 | Grok 4.7, grok-4.6, grok-4.3, grok-build-0.1 |
| **[IteraCompute](https://free-llm.com/provider/iteracompute)**<br><sub>✉️ 이메일 가입</sub> | 🎁 30M tokens/month on Qwen3.8-27B (promotion, no card)<br>⌛ Until Nov 24, 2026 00:00 PT | Qwen3.8 27B, Auto |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ 이메일 가입</sub> | — | GLM-5.3 Flash, MiniMax M2.7, DeepSeek V4 Flash 0731 |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 카드 불필요</sub> | 🎁 30-day trial, 1M tokens/day, no card<br>⌛ 30일 | GPT-OSS 120B, Qwen3.8 27B, Gemma 4 31B, GLM-5.2 |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 카드 불필요</sub> | 🎁 1M free tokens for new users<br>⌛ 일회성 | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M2.7 |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 카드 불필요</sub> | 🎁 $5 welcome credit after CLI login<br>⌛ 일회성 | Vectoree Auto (router) |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 전화 인증</sub> | 🎁 INR 100 free credits on signup<br>⌛ One-time; credits do not expire (per third-party list) | Sarvam 105B, Sarvam 105B Conversations |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ 이메일 가입</sub> | 🎁 $2 free voucher on signup ($4 with an invite code, per third-party list)<br>⌛ 일회성 | Kimi K2.7 Code |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 카드 불필요</sub> | 🎁 100 free credits on sign-up (~$1, at $0.01/credit)<br>⌛ One-time, then pay-as-you-go | Qwen3.8 27B, Gemma 4 26B A4B IT, Qwen3.5 0.8B, DiffusionGemma 26B A4B |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 카드 필요</sub> | 🎁 1M free tokens per language model, once per account per model<br>⌛ 90 days after claim (intl promo page; docs say 1 year); campaign ends 2026-12-31" - DeepSeek-V…<br><sub>[자세히 →](https://free-llm.com/provider/tencent-tokenhub)</sub> | See provider |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ 이메일 가입</sub> | 🎁 Free-tier quota access, no billing account<br>⌛ Up to 90 days for new Google Cloud users | Gemini 3.1 Pro Preview, Gemini 3 Flash Preview, Gemini 2.5 Pro, Gemini 2.5 Flash |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 카드 불필요</sub> | 🎁 Free tokens on an auto-generated key (amount not stated on page)<br>⌛ Keys do not expire | Jina Embeddings v5 Text Small, Jina Embeddings v5 Text Nano, Jina Embeddings v5 Omni Small, Jina Embeddings v3 |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ 이메일 가입</sub> | 🎁 First 200M tokens free per model (voyage-4 family, rerank-2.5); 50M on domain models<br>⌛ One-time per account per model | Voyage 4 Large, Voyage 4, Voyage 4 Lite, Voyage Code 3 |
| **[Inferaft](https://free-llm.com/provider/inferaft)**<br><sub>🟢 카드 불필요</sub> | — | glm-5.3-flash |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ 이메일 가입</sub> | — | DeepSeek V4.1 Flash, GPT-6.1 Sol, Claude Opus 5.5, Gemini 3.8 Flash |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 카드 불필요</sub> | 🎁 100M tokens<br>⌛ One-time (new accounts) | Mercury 3, Mercury 2.5, Mercury 2 |
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
| 제공업체 · 가입 조건 · API 키 | OpenAI 호환 Base URL |
|:---|:---|
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://openrouter.ai/)</sub> | `https://openrouter.ai/api/v1` |
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://aistudio.google.com/)</sub> | `https://generativelanguage.googleapis.com/v1beta/openai` |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://cohere.com/)</sub> | `https://api.cohere.ai/compatibility/v1` |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://console.groq.com/)</sub> | `https://api.groq.com/openai/v1` |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://dash.cloudflare.com/)</sub> | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1` |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://kilo.ai/gateway)</sub> | `https://ai-gateway.kilo.ai/api/v1` |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://freeinference.org)</sub> | `https://freeinference.org/v1` |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://aihorde.net)</sub> | `https://oai.aihorde.net/v1` |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://requesty.ai/)</sub> | `https://router.requesty.ai/v1` |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://www.aionlabs.ai/pricing/)</sub> | `https://api.aionlabs.ai/v1` |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://grokified.com)</sub> | `https://api.grokified.com/v1` |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://api.airforce/)</sub> | `https://api.airforce/v1` |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://anyapi.ai)</sub> | `https://api.anyapi.ai/v1` |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://inferbase.ai)</sub> | `https://api.inferbase.ai/v1` |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://opentyphoon.ai)</sub> | `https://api.opentyphoon.ai/v1` |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://regolo.ai)</sub> | `https://api.regolo.ai/v1` |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://gonkarouter.io)</sub> | `https://api.gonkarouter.io/v1` |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://aiapi-pro.com)</sub> | `https://aiapi-pro.com/v1` |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://vectoree.ai)</sub> | `https://vectoree.ai/api/v1` |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://docs.vlm.run/gateway/rate-limits)</sub> | `https://gateway.vlm.run/v1/openai` |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://docs.meganova.ai/tiers)</sub> | `https://api.meganova.ai/v1` |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://jina.ai/embeddings/)</sub> | `https://api.jina.ai/v1` |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://freemodel.online/)</sub> | `https://freemodel.online/v1 (OpenAI-compatible) · https://freemodel.online/api/gateway (Anthropic-compatible)` |
| **[Inferaft](https://free-llm.com/provider/inferaft)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://inferaft.com/)</sub> | `https://inferaft.com/v1` |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://www.runcrate.ai/inference/free)</sub> | `https://api.runcrate.ai/v1` |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://pollinations.ai)</sub> | `https://gen.pollinations.ai/v1` |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 카드 불필요 · [🔑&nbsp;키](https://www.inceptionlabs.ai/)</sub> | `https://api.inceptionlabs.ai/v1` |
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://replicate.com/)</sub> | <sub>자체 API 전용 — [설정 가이드](https://free-llm.com/provider/replicate)</sub> |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://fireworks.ai/)</sub> | `https://api.fireworks.ai/inference/v1` |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://novita.ai/)</sub> | `https://api.novita.ai/v3/openai` |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://console.scaleway.com/generative-api/models)</sub> | `https://api.scaleway.ai/v1` |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://bailian.console.alibabacloud.com/)</sub> | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://console.upstage.ai/)</sub> | `https://api.upstage.ai/v1` |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://z.ai/)</sub> | `https://api.z.ai/api/paas/v4` |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://endpoints.ai.cloud.ovh.net/)</sub> | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://friendli.ai/)</sub> | `https://inference.friendli.ai/v1` |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://cheapllm.shop/)</sub> | `https://cheapllm.shop/v1` |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://www.cerebrium.ai/)</sub> | <sub>자체 API 전용 — [설정 가이드](https://free-llm.com/provider/cerebrium)</sub> |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://vercel.com/ai-gateway)</sub> | `https://ai-gateway.vercel.sh/v1` |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://routeway.ai/)</sub> | `https://api.routeway.ai/v1` |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://tokenharbor.ai)</sub> | `https://tokenharbor.ai/v1` |
| **[IteraCompute](https://free-llm.com/provider/iteracompute)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://iteracompute.com/free/)</sub> | `https://api.iteracompute.com/v1` |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://bazaarlink.ai/free)</sub> | `https://api.bazaarlink.ai/v1` |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://inference.dahl.global/)</sub> | `https://inference.dahl.global/v1` |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://zro.moonmath.ai)</sub> | `https://zro.moonmath.ai/v1` |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://docs.sea-lion.ai/guides/inferencing/api)</sub> | `https://api.sea-lion.ai/v1` |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://aihubmix.com)</sub> | `https://aihubmix.com/v1` |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://llm.kiwi/pricing)</sub> | `https://api.llm.kiwi/v1` |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://agnes-ai.com)</sub> | `https://apihub.agnes-ai.com/v1` |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://www.arliai.com/pricing)</sub> | `https://api.arliai.com/v1` |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://www.hpc-ai.com/model-apis)</sub> | `https://api.hpc-ai.com/inference/v1` |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://docs.bytez.com/model-api/docs/billing)</sub> | `https://api.bytez.com/models/v2/openai/v1` |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://docs.mixlayer.com/credits-and-limits)</sub> | `https://models.mixlayer.ai/v1` |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://simplellm.eu/docs/)</sub> | `https://api.simplellm.eu/v1` |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview)</sub> | <sub>자체 API 전용 — [설정 가이드](https://free-llm.com/provider/vertex-ai-express)</sub> |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://docs.voyageai.com/docs/pricing)</sub> | `https://api.voyageai.com/v1` |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://llmtr.com/en/terms)</sub> | `https://llmtr.com/v1` |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://www.merkium.nl/)</sub> | `https://chat.merkium.nl/api/v1` |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://synap402.com/)</sub> | `https://synap402.com/v1` |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://developer.amd.com.cn/radeon/tokenfactory)</sub> | `https://developer.amd.com.cn/radeon/api/v1` |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://hiapi.ai/)</sub> | `https://api.hiapi.ai/v1` |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ 이메일 가입 · [🔑&nbsp;키](https://kiosapi.id/pricing)</sub> | `https://api.kiosapi.id/v1` |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 전화 인증 · [🔑&nbsp;키](https://build.nvidia.com/explore/discover)</sub> | `https://integrate.api.nvidia.com/v1` |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 전화 인증 · [🔑&nbsp;키](https://app.hyperbolic.xyz/)</sub> | `https://api.hyperbolic.ai/inference/v1` |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 전화 인증 · [🔑&nbsp;키](https://modelscope.cn)</sub> | `https://api-inference.modelscope.cn/v1` |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 전화 인증 · [🔑&nbsp;키](https://gonkabroker.com)</sub> | `https://proxy.gonkabroker.com/v1` |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 전화 인증 · [🔑&nbsp;키](https://cloud.siliconflow.cn/models)</sub> | `https://api.siliconflow.cn/v1` |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 전화 인증 · [🔑&nbsp;키](https://www.sarvam.ai/api-pricing)</sub> | `https://api.sarvam.ai/v1` |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 전화 인증 · [🔑&nbsp;키](https://www.xfyun.cn/doc/spark/HTTP调用文档.html)</sub> | `https://spark-api-open.xf-yun.com/v1` |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 전화 인증 · [🔑&nbsp;키](https://docs.bigmodel.cn/cn/guide/start/model-overview)</sub> | `https://open.bigmodel.cn/api/paas/v4` |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 전화 인증 · [🔑&nbsp;키](https://moark.com/docs/FAQ)</sub> | `https://api.moark.com/v1` |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 전화 인증 · [🔑&nbsp;키](https://www.sensenova.cn/token-plan)</sub> | `https://token.sensenova.cn/v1` |
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 카드 필요 · [🔑&nbsp;키](https://cerebras.ai/inference)</sub> | `https://api.cerebras.ai/v1` |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 카드 필요 · [🔑&nbsp;키](https://portal.nousresearch.com)</sub> | `https://inference-api.nousresearch.com/v1` |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 카드 필요 · [🔑&nbsp;키](https://experiments.hetzner.com/inference)</sub> | `https://inference.hetzner.com/api/v1` |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 카드 필요 · [🔑&nbsp;키](https://www.experientiallabs.ai/pricing)</sub> | `https://api.experientiallabs.ai/v1` |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 카드 필요 · [🔑&nbsp;키](https://www.tencentcloud.com/act/pro/tokenhub)</sub> | `https://tokenhub-intl.tencentmaas.com/v1` |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 카드 필요 · [🔑&nbsp;키](https://www.ibm.com/products/watsonx-ai/pricing)</sub> | <sub>자체 API 전용 — [설정 가이드](https://free-llm.com/provider/ibm-watsonx)</sub> |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 카드 필요 · [🔑&nbsp;키](https://docs.sailresearch.com/pricing)</sub> | `https://api.sailresearch.com/v1` |
<!--TABLE:QUICKREF:END-->

---

## 가이드 및 튜토리얼

[free-llm.com/guides](https://free-llm.com/guides/) 에서 확인하세요:

- **[2026년 최고의 무료 LLM API](https://free-llm.com/guides/best-free-llm-apis-2026)** — 주요 선택지 비교
- **[Gemini vs ChatGPT (무료 요금제)](https://free-llm.com/guides/gemini-vs-chatgpt-free)** — $0로 실제 무엇을 쓸 수 있는지
- **[OpenRouter 사용법](https://free-llm.com/guides/how-to-use-openrouter)** — 코드가 포함된 설정 가이드
- **[OpenRouter 대안](https://free-llm.com/guides/openrouter-alternatives)** — 시도해볼 만한 다른 애그리게이터
- **[Ollama로 로컬 LLM 시작하기](https://free-llm.com/guides/local-llm-ollama-guide)** — 5분 안에 시작
- **[궁극의 무료 LLM API 가이드](https://free-llm.com/guides/ultimate-free-llm-api-guide)** — 가장 자세한 심층 분석
- **[코딩용 최고의 무료 LLM](https://free-llm.com/guides/best-free-llm-for-coding)** — 무료 코딩 모델 + Claude Code / Codex / Cursor 설정
- **[Claude Code 무료로 쓰기](https://free-llm.com/guides/claude-code-free)** — 무료 모델로 Claude Code를 실행하는 단계별 안내
- **[무료 LLM 폴백 시스템](https://free-llm.com/guides/free-llm-fallback-system)** — 여러 제공업체를 연결해 속도 제한을 피하기
- **[월간 리포트: 2026년 11월](https://free-llm.com/guides/free-llm-apis-november-2026-what-changed)** — 새 무료 제공업체, 서비스 종료, 모델 변경

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
**제공업체별 (71개):** [Agnes AI](code-examples/agnes-ai) · [AI Horde (OpenAI-compatible front)](code-examples/ai-horde) · [AIHubMix (free models)](code-examples/aihubmix) · [Aion Labs](code-examples/aion-labs) · [AnyAPI](code-examples/anyapi) · [Api.Airforce](code-examples/api-airforce) · [Arli AI](code-examples/arli-ai) · [BazaarLink](code-examples/bazaarlink) · [Bytez](code-examples/bytez) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Dahl Inference](code-examples/dahl-inference) · [Experiential Labs](code-examples/experiential-labs) · [Fireworks AI](code-examples/fireworks-ai) · [FreeInference](code-examples/freeinference) · [Friendli AI](code-examples/friendli-ai) · [Gonka Broker](code-examples/gonka-broker) · [GonkaRouter](code-examples/gonkarouter) · [Google AI Studio](code-examples/google-ai-studio) · [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](code-examples/vertex-ai-express) · [Grokified](code-examples/grokified) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [HPC-AI Model APIs](code-examples/hpc-ai) · [Hyperbolic](code-examples/hyperbolic) · [IBM watsonx.ai (Lite plan)](code-examples/ibm-watsonx) · [iFlytek Spark Lite](code-examples/iflytek-spark) · [Inception Labs](code-examples/inception-labs) · [Inferbase](code-examples/inferbase) · [IteraCompute](code-examples/iteracompute) · [Jina AI (Embeddings / Reader API)](code-examples/jina-ai) · [Kilo AI Gateway](code-examples/kilo-gateway) · [Kiosapi.id](code-examples/kiosapi) · [LLM.kiwi](code-examples/llm-kiwi) · [LLMTR](code-examples/llmtr) · [MegaNova AI](code-examples/meganova) · [Mixlayer](code-examples/mixlayer) · [Moark (Gitee AI)](code-examples/moark) · [ModelScope](code-examples/modelscope) · [Nous Portal](code-examples/nous-portal) · [NovAI](code-examples/novai) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OpenTyphoon (Typhoon API)](code-examples/opentyphoon) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Regolo.ai](code-examples/regolo-ai) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Routeway](code-examples/routeway) · [Sail Research](code-examples/sail-research) · [Sarvam AI](code-examples/sarvam-ai) · [Scaleway Generative APIs](code-examples/scaleway) · [SEA-LION API](code-examples/sea-lion) · [SenseNova (SenseTime)](code-examples/sensenova) · [SiliconFlow](code-examples/siliconflow) · [SimpleLLM](code-examples/simplellm) · [Tencent Cloud TokenHub](code-examples/tencent-tokenhub) · [Token Harbor](code-examples/token-harbor) · [Upstage](code-examples/upstage) · [Vectoree](code-examples/vectoree) · [Vercel AI Gateway](code-examples/vercel-ai-gateway) · [VLM Run Gateway](code-examples/vlm-run) · [Voyage AI (embeddings & rerankers)](code-examples/voyage-ai) · [Z.AI (GLM)](code-examples/z-ai) · [Zhipu BigModel (China)](code-examples/zhipu-bigmodel) · [Zro (MoonMath)](code-examples/zro)
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
├── CODE_OF_CONDUCT.md         ← 커뮤니티 행동 강령
├── SECURITY.md                ← 취약점 신고 방법
├── SUPPORT.md                 ← 도움 받는 방법
├── CHANGELOG.md               ← Router 릴리스 노트
├── router/                    ← Free-LLM Router (소스, 테스트, 문서)
├── package.json               ← Router npm 패키지
├── Dockerfile                 ← Docker로 Router 실행
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
- ⚡ **Free-LLM Router**: [free-llm.com/router](https://free-llm.com/router) · [문서](router/README.md) · [릴리스 노트](CHANGELOG.md)
- 📰 **디렉터리 변경 내역**: [free-llm.com/changelog](https://free-llm.com/changelog)
- ➕ **제공업체 제출**: [free-llm.com/submit](https://free-llm.com/submit)

## 커뮤니티 및 지원

- 💬 **질문과 아이디어**: [GitHub Discussions](https://github.com/nejib1/Free-LLM/discussions)
- 🐛 **버그 및 데이터 수정**: [issue 열기](https://github.com/nejib1/Free-LLM/issues/new/choose) — 어떤 양식을 쓸지는 [SUPPORT.md](SUPPORT.md) 참고
- 🔒 **보안**: 비공개로 신고해 주세요. [SECURITY.md](SECURITY.md) 참고
- 🤝 **행동 강령**: [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

---

## License

MIT — 자세한 내용은 [LICENSE](LICENSE) 를 참고하세요.

---

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-11-23<!--LASTSYNC:END--></sub></p>
