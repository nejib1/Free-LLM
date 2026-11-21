<p align="center">
  <h1 align="center">Free-LLM — 免费 AI 与 LLM API 开放目录</h1>
<!--STATS:START-->
  <p align="center"><strong>来自 94 个提供商的 460+ 免费 LLM 模型</strong> — 几秒钟内发现、对比并配置免费模型，另有 9 款本地/自托管工具供无限私密使用。</p>
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

## ⚡ 新功能：Free-LLM Router —— 把所有免费 API 汇聚到一个地址

**原理：** 下面每个提供商都只给一个*小额*免费套餐，各有各的密钥和限额。路由器把它们叠加起来：你的应用（Claude Code、Codex、Cursor 或你自己的代码）只需连接**一个**兼容 OpenAI/Anthropic 的地址，路由器总会把请求发给当前可用的免费模型——某个提供商繁忙或额度用完时**立即**切换到下一个。

**最大优势：** 许多小额免费套餐合在一起，就像一个永不掉线的大额免费套餐；提供商列表每天从 free-llm.com 自动同步，对所有人免费。

```bash
npm install -g github:nejib1/Free-LLM   # 安装 `free-llm` 命令
free-llm                                # 引导式设置，然后打开 http://localhost:4000
free-llm setup claude                   # Claude Code 改用免费模型（也支持 codex、opencode、aider）
```

<p align="center"><a href="router/README.md"><img src="router/docs/dashboard.png" width="760" alt="Free-LLM Router dashboard"></a></p>

无需密钥即可试用（访客模式）· 编程助手一键配置 · 支持 OpenAI、Anthropic、Codex Responses、Ollama 与 MCP 接口 · 零依赖 · 密钥加密保存在你自己的电脑上。

🔒 **100% 本地、完全私密：** 路由器运行在你自己的电脑上，API 密钥从不离开本机（加密保存），每个密钥只会发送给它自己的提供商——无需账号、无遥测、完全开源。

**→ [了解工作原理](router/README.md)** · [free-llm.com/router](https://free-llm.com/router)

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
| 提供商 · 注册要求 | 免费额度与限制 | 主要模型 |
|:---|:---|:---|
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 无需绑卡</sub> | ⏱️ Varies by model (per-model limits are now shown only inside AI Studio)<br>📅 Varies by model. Free: Gemini 3.x Flash / Flash-Lite and Gemini 2.5 Pro/Flash (2.5 redirect to…<br>🗓️ 完全免费<br><sub>[详情 →](https://free-llm.com/provider/google-ai-studio)</sub> | Gemini 3.8 Flash, Gemma 4 26B A4B IT, Gemma 4 31B IT, Gemini 3 Flash Preview |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 20 requests/minute<br>📅 1,000 API calls/month (trial key)<br>🗓️ 1,000 API calls/month (trial key, non-commercial) | Command A (111B), Command A Translate, Command A Vision, North Mini Code |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 手机验证</sub> | ⏱️ ~40 RPM (varies per model, not published) | GLM-5.3 Flash, Riva Translate 4B v2, Cosmos Reason 2 8B, Muse Glimmer 30B |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 30 RPM; 8K TPM on most chat models (varies by model)<br>📅 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model)<br>🗓️ Free Forever | GPT-OSS 120B, Qwen3.8 27B, Whisper Large v3, Whisper Large v3 Turbo |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ ~1 request/second (Flash models)<br>📅 ~1,000 requests/day (Flash tier)<br>🗓️ Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go)<br>🗓️ Beta Access | GPT OSS 120B, BGE-M3 (embeddings), Whisper Large v3 Turbo, Qwen2.5 VL 72B Instruct |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 因模型而异<br>📅 每天 10,000 neurons<br>🗓️ ~300,000 neurons/month | FLUX.2 Dev (image), Whisper Large v3 Turbo, EuroLLM 9B, Apertus v1.5 8B |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 需绑卡</sub> | ⏱️ 10 requests, 4M input / 100K output tokens per 60s (per API key)<br>📅 No daily cap published (free while the API is experimental); a Hetzner account with billing de…<br>🗓️ Free during experimental phase, no billing system yet<br><sub>[详情 →](https://free-llm.com/provider/hetzner-inference)</sub> | Qwen3.8 27B, Qwen3.6 35B A3B |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 200 requests/hour per IP on free models (anonymous use allowed)<br>📅 Default free models only<br>🗓️ Free plan, no expiry | Nemotron 3.5 Lightning, Nemotron 3 Nano Omni Reasoning, Dots3-Note Preview, Reflection Beam 1.0 |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 需绑卡</sub> | ⏱️ Standard rate limits (figures not published)<br>📅 Free models only (no monthly credit)<br>🗓️ Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 ch…<br><sub>[详情 →](https://free-llm.com/provider/nous-portal)</sub> | StepFun Step 3.7 Flash, Upstage Solar Mini 4, Qwen4 Max, LongCat 2.5 |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 手机验证</sub> | ⏱️ 500 requests/day per model<br>📅 2,000 requests/day total<br>🗓️ Free, no billing | Qwen3.8 27B, Nex N2.5 Pro, LongCat Flash Lite, ERNIE 4.5 300B A47B |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 无需绑卡</sub> | ⏱️ Not published ("generous quota"; HTTP 429 when rate-limited)<br>📅 No published daily cap | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M3, Qwen3.6 35B A3B |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 手机验证</sub> | ⏱️ Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/mod…<br>📅 Not fully published — verify on docs.siliconflow.cn<br>🗓️ Free models available after identity verification<br><sub>[详情 →](https://free-llm.com/provider/siliconflow)</sub> | GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B, GLM-4 9B 0414 |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 无需绑卡</sub> | ⏱️ Not published (daily credit allowance)<br>📅 Daily free credit allowance (amount not published by Aion Labs)<br>🗓️ Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 1 RPM<br>📅 1,000 requests/day<br>🗓️ Free plan, $0/month | GPT-OSS 20B, GLM-4.7 Flash, Kimi K2.7 Code, Llama Instant |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ 5 RPM on :free models<br>📅 200 requests/day<br>🗓️ Starter plan free, shared queue | DeepSeek V4.1 Flash (free), MiniMax M3.1 Flash (free), Muse Glimmer 30B |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 5 requests/second, 200 RPM (text models); 20 RPM for OCR<br>📅 No daily cap published | Typhoon 2.5 30B A3B Instruct, Typhoon OCR 1.5 |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 5 requests/min before the first top-up<br>📅 Free Flash models with no daily cap published; $2 welcome credit for paid models | GLM-4.7 Flash, GLM-4.6V Flash, GLM-4.1V Thinking Flash, CogView-3 Flash |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ 10 requests/minute per user (increase on request: sealion@aisingapore.org) | Qwen SEA-LION v4.5 27B Instruct, Llama SEA-LION v3.5 70B Reasoning, SEA-Guard (safety), SEA-LION Embedding 600M |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ Baseline rate limits (figures not published) | Auto router, MiniMax M3, Nemotron 3 Ultra, Nemotron 3 Super |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ About 30 RPM per account (video 2 RPM), per third-party listings | Agnes 3.0 Flash, Agnes 2.5 Flash, Agnes Image 2.1 Flash (image) |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 无需绑卡</sub> | ⏱️ Queue-based; anonymous requests have the lowest priority, registered users earn kudos for prio…<br>📅 No fixed cap (volunteer capacity)<br><sub>[详情 →](https://free-llm.com/provider/ai-horde)</sub> | Gemma 4 E4B IT, Qwen3 4B, Llama 3.2 1B Instruct, L3 8B Stheno v3.2 |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ 1 request at a time; max 12K context tokens<br>📅 Limited trial uses per model (about 5 requests per 2 days, per third-party list) | Qwen3.5 27B Derestricted |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 手机验证</sub> | ⏱️ Not published on the HTTP doc<br>📅 Not published (Lite is free) | Spark Lite |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 手机验证</sub> | ⏱️ Low concurrency on free Flash models (GLM-4.7-Flash reported at 1 concurrent request) | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4-Flash-250414, GLM-4.6V-Flash (vision) |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ Per-organization, per-model RPM/TPM (values shown in console only) | Qwen3.5 4B (free) |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 手机验证</sub> | 📅 Not published (\"限时放量\" during public beta) | SenseNova 6.8 Flash Lite |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 30 requests/day on the free plan; effective upstream rate limits also apply<br>📅 30 requests/day<br>🗓️ 800 rounds/month | fm-v1-lite (free tier alias, default model), fm-v1-standard (paid, Standard plan only), fm-v1-pro (paid, Pro plan only) |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ 30 requests per minute per API key, enforced as one request every 2 seconds (429 with Retry-Af…<br>📅 None published<br>🗓️ None published<br><sub>[详情 →](https://free-llm.com/provider/merkium)</sub> | Ganymede 1.1 (now Neptune), Pluto 1.2 Pro (now Ceres), Pluto 1.2 Flash (now Ceres) |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 无需绑卡</sub> | ⏱️ API key required (anonymous access removed); no card<br>📅 Free usage paid from Quest Pollen earned in the dashboard<br>🗓️ Free, no billing system | GPT-OSS 20B, Mistral Large 3, Kimi K2.6, GLM 5.3 Flash |
<!--TABLE:PERMANENT:END-->

### 💰 可续期额度

定期续期的免费额度，没有一次性到期问题。

<!--TABLE:RENEWABLE:START-->
| 提供商 · 注册要求 | 免费额度与限制 | 主要模型 |
|:---|:---|:---|
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 无需绑卡</sub> | 🎁 50 requests/day (up to 1000 with $10 topup)<br>⏱️ 20 requests/minute | Gemma 4 31B IT, NVIDIA Nemotron 3 Ultra, Recursive Flint v1.0 (free), Nemotron 3.5 Super VL |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 手机验证</sub> | 🎁 Monthly free token grant after SMS verification (does not accumulate)<br>⏱️ Network limits (see docs.gonkabroker.com Limits & Quotas) | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 需绑卡</sub> | 🎁 1M input+output tokens/day shared across free core models, reset 00:00 UTC<br>⏱️ 10 RPM and 250K TPM per free core model | GPT-6 Luna, DeepSeek V4.1 Flash 1017, Clef Flash (decision endpoint, free promo) |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 无需绑卡</sub> | 🎁 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models<br>⏱️ 20 RPM on free models (60 RPM for paying orgs) | Gemma 4 31B IT, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B, Mistral Leanstral 1.5 |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ 邮箱注册</sub> | 🎁 $5/month<br>⏱️ Lower per-model limits than the paid tier (429 on excess) | Nemotron 3.5 Lightning (free), Llama 3.3 70B, MiniMax M3.1 Flash, GLM-4.7 Flash |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Free allowance, resets on a rolling 7-day period<br>⏱️ 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ 邮箱注册</sub> | 🎁 60 weighted units/day (120 with credit), resets 00:00 UTC<br>⏱️ 10 RPM (20 RPM with any credit), 2 concurrent requests | Qwen3.7 Flash, Nemotron 3.5 Lightning (free), DeepSeek V4 Flash 0731 (free), Glyph Cluster (stealth) |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 无需绑卡</sub> | 🎁 100K ANY tokens per day, free models only<br>⏱️ Limited API calls on the Free plan (exact RPM not published) | See provider |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Resets every day (Flash models only)<br>⏱️ Daily usage allowance (amount not published) | GLM-5.3 Flash, DeepSeek V4.1 Flash |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 无需绑卡</sub> | 🎁 $0.50 of managed model usage per day; 5,000 requests per month<br>⏱️ 100 managed requests per day | GPT-OSS 120B, DeepSeek V4 Flash, Qwen3.6 27B, Gemma 4 31B IT |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ 邮箱注册</sub> | 🎁 100 requests/day and 1M tokens/day per account (500 RPD on some, e.g. glm-4.7-flash-free, codi…<br>⏱️ 5 RPM per account on most *-free routes<br><sub>[详情 →](https://free-llm.com/provider/aihubmix)</sub> | Coding GLM 5.3 (free), Coding GLM 5.3 Flash (free), Coding Kimi K3 (free), Coding MiniMax M3 (free) |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 需绑卡</sub> | 🎁 300,000 tokens/month + 20 CUH/month<br>⏱️ About 2 requests/second (Lite) | Granite 4 H Small, Llama 3.3 70B Instruct, Llama 4 Maverick, GPT-OSS 120B |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ 邮箱注册</sub> | 🎁 $1 free credits, refreshed every 4 weeks<br>⏱️ 1 concurrent request (open models); 10 requests/second (closed models) | See provider |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 手机验证</sub> | 🎁 100 free calls/day per user (free experience access token) | DeepSeek V4 Flash 0731, GLM 5.3 Flash, Qwen3.8 27B |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 无需绑卡</sub> | 🎁 Tier 1: 50-500 free-model requests/day (varies by model)<br>⏱️ Tier 1 (free): 20-200 RPM | Manta Pro 1.0, Manta Flash 1.0, Manta Mini 1.0, Mistral Small 3.2 24B |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Free-model hourly/daily request and token allowances (values per account, not published)<br>⏱️ Account-specific (read via GET /v1/rate-limit) | Llama 3.1 8B Free, Gemma E4B Free, Mistral 7B (tier free, $0), Kode 14B (tier free, $0) |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 需绑卡</sub> | 🎁 $5 free credits every month (payment method attached)<br>⏱️ Not published for Free plan (most relaxed on flex window) | Kimi K3, GLM 5.3, GLM 5.3 Flash, DeepSeek V4.1 Flash 1017 |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Per-model daily allowance (e.g. 200K tokens/day on dated previews)<br>⏱️ Not published; lower allowance in an account's first 24h | Nemotron 3 Ultra 550B, Nemotron 3.5 Super VL (free), Qwen3.8 27B (free), GPT-OSS Safeguard 20B |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ 邮箱注册</sub> | 🎁 50 requests/day per account shared across free models, reset 07:00 WIB<br>⏱️ 5 requests/minute (free models) | GLM 4.7 Flash, Qwen3 30B, Gemma 4 26B, Llama 3.1 8B |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ 邮箱注册</sub> | 🎁 See provider<br>⏱️ No per-key RPM/TPM cap; one request at a time per account | DeepSeek V4.1 Flash 1017 |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ 邮箱注册</sub> | 🎁 50 requests/day (first 7 days), then 10 requests/day<br>⏱️ 10 requests/minute per key | qwen3-coder-30b |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 无需绑卡</sub> | 🎁 See provider<br>⏱️ See provider | DeepSeek V4.1 Flash (deepseek-ai/DeepSeek-V4.1-Flash), GLM 5.3 Flash (zai-org/GLM-5.3-Flash), GLM 5.3 (zai-org/GLM-5.3), gpt-oss 120B (openai/gpt-oss-120b) |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Daily cap in points (pts), per account; resets 00:00 UTC+8<br>⏱️ 20 RPM per account, 30 RPM per API key, 120 RPM per IP, 8 concurrent requests per key | GLM-5.3-Flash, MiMo-V2.6-Flash, Qwen3.8-Flash-Next, DeepSeek-V4.1-Flash |
<!--TABLE:RENEWABLE:END-->

### 🎁 一次性试用额度

注册后获得一次性额度，用完为止。

<!--TABLE:TRIAL:START-->
| 提供商 · 注册要求 | 免费额度 | 主要模型 |
|:---|:---|:---|
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Limited free runs on select models<br>⌛ 一次性 | See provider |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1)<br>⌛ 一次性 | Nemotron 3.5 Lightning 30B A3B, MiniMax M3, GPT-OSS 120B, GLM 5.3 Flash |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 手机验证</sub> | 🎁 $1 after phone verification (Free Tier)<br>⌛ 一次性 | DeepSeek V4 Flash 0731, Qwen3.8 27B, MiMo V2.6 Flash, GLM-5.3 Flash |
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 需绑卡</sub> | 🎁 $5 after adding a verified payment method (expires after 30 days)<br>⌛ 30 天 | GPT OSS 120B, Qwen 3.8 27B |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ 邮箱注册</sub> | 🎁 No automatic sign-up credit; $10 per referral (both sides)<br>⌛ 一次性 | GLM 5.3, Kimi K3, Qwen3.8 27B, Llama 3.3 70B Instruct |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ 邮箱注册</sub> | 🎁 1M tokens (+60 min audio transcription), all serverless models<br>⌛ 一次性 | GPT-OSS 120B, Whisper Large v3, Voxtral Small 24B, Holo2 30B A3B |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ 邮箱注册</sub> | 🎁 ~1M tokens per model, 90 days (Singapore; newer models only since Oct 29, 2026)<br>⌛ One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ 邮箱注册</sub> | 🎁 $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify)<br>⌛ 3 个月 | See provider |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Trial credits at onboarding (amount not published)<br>⌛ 一次性 | GLM-5.1, Gemma 4 31B, GLM 5.2, GLM 5.3 Flash |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ 邮箱注册</sub> | 🎁 No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per sec…<br>⌛ 一次性<br><sub>[详情 →](https://free-llm.com/provider/cerebrium)</sub> | See provider |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 无需绑卡</sub> | 🎁 $5<br>⌛ 一次性 | Grok 4.7, grok-4.6, grok-4.3, grok-build-0.1 |
| **[IteraCompute](https://free-llm.com/provider/iteracompute)**<br><sub>✉️ 邮箱注册</sub> | 🎁 30M tokens/month on Qwen3.8-27B (promotion, no card)<br>⌛ Until Nov 24, 2026 00:00 PT | Qwen3.8 27B, Auto |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ 邮箱注册</sub> | — | GLM-5.3 Flash, MiniMax M2.7, DeepSeek V4 Flash 0731 |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 无需绑卡</sub> | 🎁 30-day trial, 1M tokens/day, no card<br>⌛ 30 天 | GPT-OSS 120B, Qwen3.8 27B, Gemma 4 31B, GLM-5.2 |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 无需绑卡</sub> | 🎁 1M free tokens for new users<br>⌛ 一次性 | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M2.7 |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 无需绑卡</sub> | 🎁 $5 welcome credit after CLI login<br>⌛ 一次性 | Vectoree Auto (router) |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 手机验证</sub> | 🎁 INR 100 free credits on signup<br>⌛ One-time; credits do not expire (per third-party list) | Sarvam 105B, Sarvam 105B Conversations |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ 邮箱注册</sub> | 🎁 $2 free voucher on signup ($4 with an invite code, per third-party list)<br>⌛ 一次性 | Kimi K2.7 Code |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 无需绑卡</sub> | 🎁 100 free credits on sign-up (~$1, at $0.01/credit)<br>⌛ One-time, then pay-as-you-go | Qwen3.8 27B, Gemma 4 26B A4B IT, Qwen3.5 0.8B, DiffusionGemma 26B A4B |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 需绑卡</sub> | 🎁 1M free tokens per language model, once per account per model<br>⌛ 90 days after claim (intl promo page; docs say 1 year); campaign ends 2026-12-31" - DeepSeek-V…<br><sub>[详情 →](https://free-llm.com/provider/tencent-tokenhub)</sub> | See provider |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Free-tier quota access, no billing account<br>⌛ Up to 90 days for new Google Cloud users | Gemini 3.1 Pro Preview, Gemini 3 Flash Preview, Gemini 2.5 Pro, Gemini 2.5 Flash |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 无需绑卡</sub> | 🎁 Free tokens on an auto-generated key (amount not stated on page)<br>⌛ Keys do not expire | Jina Embeddings v5 Text Small, Jina Embeddings v5 Text Nano, Jina Embeddings v5 Omni Small, Jina Embeddings v3 |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ 邮箱注册</sub> | 🎁 First 200M tokens free per model (voyage-4 family, rerank-2.5); 50M on domain models<br>⌛ One-time per account per model | Voyage 4 Large, Voyage 4, Voyage 4 Lite, Voyage Code 3 |
| **[Inferaft](https://free-llm.com/provider/inferaft)**<br><sub>🟢 无需绑卡</sub> | — | glm-5.3-flash |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ 邮箱注册</sub> | — | DeepSeek V4.1 Flash, GPT-6.1 Sol, Claude Opus 5.5, Gemini 3.8 Flash |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 无需绑卡</sub> | 🎁 100M tokens<br>⌛ One-time (new accounts) | Mercury 3, Mercury 2.5, Mercury 2 |
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
| 提供商 · 注册要求 · API Key | OpenAI 兼容 Base URL |
|:---|:---|
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://openrouter.ai/)</sub> | `https://openrouter.ai/api/v1` |
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://aistudio.google.com/)</sub> | `https://generativelanguage.googleapis.com/v1beta/openai` |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://cohere.com/)</sub> | `https://api.cohere.ai/compatibility/v1` |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://console.groq.com/)</sub> | `https://api.groq.com/openai/v1` |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://dash.cloudflare.com/)</sub> | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1` |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://kilo.ai/gateway)</sub> | `https://ai-gateway.kilo.ai/api/v1` |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://freeinference.org)</sub> | `https://freeinference.org/v1` |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://requesty.ai/)</sub> | `https://router.requesty.ai/v1` |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://www.aionlabs.ai/pricing/)</sub> | `https://api.aionlabs.ai/v1` |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://grokified.com)</sub> | `https://api.grokified.com/v1` |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://api.airforce/)</sub> | `https://api.airforce/v1` |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://anyapi.ai)</sub> | `https://api.anyapi.ai/v1` |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://inferbase.ai)</sub> | `https://api.inferbase.ai/v1` |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://opentyphoon.ai)</sub> | `https://api.opentyphoon.ai/v1` |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://regolo.ai)</sub> | `https://api.regolo.ai/v1` |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://gonkarouter.io)</sub> | `https://api.gonkarouter.io/v1` |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://aiapi-pro.com)</sub> | `https://aiapi-pro.com/v1` |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://vectoree.ai)</sub> | `https://vectoree.ai/api/v1` |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://aihorde.net)</sub> | `https://oai.aihorde.net/v1` |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://docs.vlm.run/gateway/rate-limits)</sub> | `https://gateway.vlm.run/v1/openai` |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://docs.meganova.ai/tiers)</sub> | `https://api.meganova.ai/v1` |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://jina.ai/embeddings/)</sub> | `https://api.jina.ai/v1` |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://freemodel.online/)</sub> | `https://freemodel.online/v1 (OpenAI-compatible) · https://freemodel.online/api/gateway (Anthropic-compatible)` |
| **[Inferaft](https://free-llm.com/provider/inferaft)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://inferaft.com/)</sub> | `https://inferaft.com/v1` |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://www.runcrate.ai/inference/free)</sub> | `https://api.runcrate.ai/v1` |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://pollinations.ai)</sub> | `https://gen.pollinations.ai/v1` |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://www.inceptionlabs.ai/)</sub> | `https://api.inceptionlabs.ai/v1` |
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://replicate.com/)</sub> | <sub>仅原生 API — [接入说明](https://free-llm.com/provider/replicate)</sub> |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://fireworks.ai/)</sub> | `https://api.fireworks.ai/inference/v1` |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://novita.ai/)</sub> | `https://api.novita.ai/v3/openai` |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://console.scaleway.com/generative-api/models)</sub> | `https://api.scaleway.ai/v1` |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://bailian.console.alibabacloud.com/)</sub> | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://console.upstage.ai/)</sub> | `https://api.upstage.ai/v1` |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://z.ai/)</sub> | `https://api.z.ai/api/paas/v4` |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://endpoints.ai.cloud.ovh.net/)</sub> | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://friendli.ai/)</sub> | `https://inference.friendli.ai/v1` |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://www.cerebrium.ai/)</sub> | <sub>仅原生 API — [接入说明](https://free-llm.com/provider/cerebrium)</sub> |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://vercel.com/ai-gateway)</sub> | `https://ai-gateway.vercel.sh/v1` |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://routeway.ai/)</sub> | `https://api.routeway.ai/v1` |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://tokenharbor.ai)</sub> | `https://tokenharbor.ai/v1` |
| **[IteraCompute](https://free-llm.com/provider/iteracompute)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://iteracompute.com/free/)</sub> | `https://api.iteracompute.com/v1` |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://bazaarlink.ai/free)</sub> | `https://api.bazaarlink.ai/v1` |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://inference.dahl.global/)</sub> | `https://inference.dahl.global/v1` |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://zro.moonmath.ai)</sub> | `https://zro.moonmath.ai/v1` |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://docs.sea-lion.ai/guides/inferencing/api)</sub> | `https://api.sea-lion.ai/v1` |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://aihubmix.com)</sub> | `https://aihubmix.com/v1` |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://llm.kiwi/pricing)</sub> | `https://api.llm.kiwi/v1` |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://agnes-ai.com)</sub> | `https://apihub.agnes-ai.com/v1` |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://www.arliai.com/pricing)</sub> | `https://api.arliai.com/v1` |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://www.hpc-ai.com/model-apis)</sub> | `https://api.hpc-ai.com/inference/v1` |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://docs.bytez.com/model-api/docs/billing)</sub> | `https://api.bytez.com/models/v2/openai/v1` |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://docs.mixlayer.com/credits-and-limits)</sub> | `https://models.mixlayer.ai/v1` |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://simplellm.eu/docs/)</sub> | `https://api.simplellm.eu/v1` |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview)</sub> | <sub>仅原生 API — [接入说明](https://free-llm.com/provider/vertex-ai-express)</sub> |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://docs.voyageai.com/docs/pricing)</sub> | `https://api.voyageai.com/v1` |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://llmtr.com/en/terms)</sub> | `https://llmtr.com/v1` |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://kiosapi.id/pricing)</sub> | `https://api.kiosapi.id/v1` |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://www.merkium.nl/)</sub> | `https://chat.merkium.nl/api/v1` |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://cheapllm.shop/)</sub> | `https://cheapllm.shop/v1` |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://synap402.com/)</sub> | `https://synap402.com/v1` |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://developer.amd.com.cn/radeon/tokenfactory)</sub> | `https://developer.amd.com.cn/radeon/api/v1` |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://hiapi.ai/)</sub> | `https://api.hiapi.ai/v1` |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://build.nvidia.com/explore/discover)</sub> | `https://integrate.api.nvidia.com/v1` |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://app.hyperbolic.xyz/)</sub> | `https://api.hyperbolic.ai/inference/v1` |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://modelscope.cn)</sub> | `https://api-inference.modelscope.cn/v1` |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://gonkabroker.com)</sub> | `https://proxy.gonkabroker.com/v1` |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://cloud.siliconflow.cn/models)</sub> | `https://api.siliconflow.cn/v1` |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://www.sarvam.ai/api-pricing)</sub> | `https://api.sarvam.ai/v1` |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://www.xfyun.cn/doc/spark/HTTP调用文档.html)</sub> | `https://spark-api-open.xf-yun.com/v1` |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://docs.bigmodel.cn/cn/guide/start/model-overview)</sub> | `https://open.bigmodel.cn/api/paas/v4` |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://moark.com/docs/FAQ)</sub> | `https://api.moark.com/v1` |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://www.sensenova.cn/token-plan)</sub> | `https://token.sensenova.cn/v1` |
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://cerebras.ai/inference)</sub> | `https://api.cerebras.ai/v1` |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://experiments.hetzner.com/inference)</sub> | `https://inference.hetzner.com/api/v1` |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://portal.nousresearch.com)</sub> | `https://inference-api.nousresearch.com/v1` |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://www.experientiallabs.ai/pricing)</sub> | `https://api.experientiallabs.ai/v1` |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://www.tencentcloud.com/act/pro/tokenhub)</sub> | `https://tokenhub-intl.tencentmaas.com/v1` |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://www.ibm.com/products/watsonx-ai/pricing)</sub> | <sub>仅原生 API — [接入说明](https://free-llm.com/provider/ibm-watsonx)</sub> |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://docs.sailresearch.com/pricing)</sub> | `https://api.sailresearch.com/v1` |
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
**按提供商分类（71 个）：** [Agnes AI](code-examples/agnes-ai) · [AI Horde (OpenAI-compatible front)](code-examples/ai-horde) · [AIHubMix (free models)](code-examples/aihubmix) · [Aion Labs](code-examples/aion-labs) · [AnyAPI](code-examples/anyapi) · [Api.Airforce](code-examples/api-airforce) · [Arli AI](code-examples/arli-ai) · [BazaarLink](code-examples/bazaarlink) · [Bytez](code-examples/bytez) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Dahl Inference](code-examples/dahl-inference) · [Experiential Labs](code-examples/experiential-labs) · [Fireworks AI](code-examples/fireworks-ai) · [FreeInference](code-examples/freeinference) · [Friendli AI](code-examples/friendli-ai) · [Gonka Broker](code-examples/gonka-broker) · [GonkaRouter](code-examples/gonkarouter) · [Google AI Studio](code-examples/google-ai-studio) · [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](code-examples/vertex-ai-express) · [Grokified](code-examples/grokified) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [HPC-AI Model APIs](code-examples/hpc-ai) · [Hyperbolic](code-examples/hyperbolic) · [IBM watsonx.ai (Lite plan)](code-examples/ibm-watsonx) · [iFlytek Spark Lite](code-examples/iflytek-spark) · [Inception Labs](code-examples/inception-labs) · [Inferbase](code-examples/inferbase) · [IteraCompute](code-examples/iteracompute) · [Jina AI (Embeddings / Reader API)](code-examples/jina-ai) · [Kilo AI Gateway](code-examples/kilo-gateway) · [Kiosapi.id](code-examples/kiosapi) · [LLM.kiwi](code-examples/llm-kiwi) · [LLMTR](code-examples/llmtr) · [MegaNova AI](code-examples/meganova) · [Mixlayer](code-examples/mixlayer) · [Moark (Gitee AI)](code-examples/moark) · [ModelScope](code-examples/modelscope) · [Nous Portal](code-examples/nous-portal) · [NovAI](code-examples/novai) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OpenTyphoon (Typhoon API)](code-examples/opentyphoon) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Regolo.ai](code-examples/regolo-ai) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Routeway](code-examples/routeway) · [Sail Research](code-examples/sail-research) · [Sarvam AI](code-examples/sarvam-ai) · [Scaleway Generative APIs](code-examples/scaleway) · [SEA-LION API](code-examples/sea-lion) · [SenseNova (SenseTime)](code-examples/sensenova) · [SiliconFlow](code-examples/siliconflow) · [SimpleLLM](code-examples/simplellm) · [Tencent Cloud TokenHub](code-examples/tencent-tokenhub) · [Token Harbor](code-examples/token-harbor) · [Upstage](code-examples/upstage) · [Vectoree](code-examples/vectoree) · [Vercel AI Gateway](code-examples/vercel-ai-gateway) · [VLM Run Gateway](code-examples/vlm-run) · [Voyage AI (embeddings & rerankers)](code-examples/voyage-ai) · [Z.AI (GLM)](code-examples/z-ai) · [Zhipu BigModel (China)](code-examples/zhipu-bigmodel) · [Zro (MoonMath)](code-examples/zro)
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

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-11-21<!--LASTSYNC:END--></sub></p>
