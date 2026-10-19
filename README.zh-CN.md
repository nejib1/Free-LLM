<p align="center">
  <h1 align="center">Free-LLM — 免费 AI 与 LLM API 开放目录</h1>
<!--STATS:START-->
  <p align="center"><strong>来自 47 个提供商的 210+ 免费 LLM 模型</strong> — 几秒钟内发现、对比并配置免费模型，另有 9 款本地/自托管工具供无限私密使用。</p>
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
- ✅ **即用代码** — [`code-examples/`](code-examples/) 中包含全部 33 个提供商的 Python / JavaScript / curl 代码片段，还有针对 Claude Code、Cursor、Codex 和 OpenCode 的专属配置
- ✅ **并排对比** — [free-llm.com/compare](https://free-llm.com/compare) 可将两个提供商的限制、模型和定价直接对比

---

## 三步上手

1. **选一个提供商** — 见下方 [Provider Directory](#provider-directory)。新手推荐从 **Groq** 开始（免信用卡，30 RPM / 每天 14,400 次请求，永久免费）。
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
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
# Groq 免费额度：30 RPM，每天 14,400 次请求 — 个人使用完全够用
```

### 编程助手（Coding Assistants）

让你的 AI 编程工具接入免费后端，而不是付费 API：

- **Claude Code** — 设置 `ANTHROPIC_BASE_URL` + `ANTHROPIC_AUTH_TOKEN`，见 [`code-examples/claude-code.md`](code-examples/claude-code.md)
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
| [Google AI Studio](https://aistudio.google.com/) | 否 | 5-30 RPM (varies by model) | Varies by model (Flash / Flash-Lite only; Pro models are paid) | 完全免费 | Gemini 3.1 Flash-Lite, Gemini 3.5 Flash-Lite, Gemini 3.6 Flash, Gemini 3.8 Flash |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 需手机验证 | 1 request/second | - | Free | Codestral 2508, Ministral 3 8B, Ministral 3 14B, Mistral Large 3 |
| [Cohere](https://cohere.com/) | 否 | 20 requests/minute | 1,000 API calls/month (trial key) | 1,000 API calls/month (trial key, non-commercial) | North Mini Code, Command A Reasoning, Command R+ (08-2024), Command R (08-2024) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 需手机验证 | ~40 RPM (varies per model, not published) | - | - | Nemotron 3 Ultra 550B A55B, Nemotron 3.5 Lightning 30B A3B, DeepSeek V4 Pro (0813), Kimi K3 |
| [Groq](https://console.groq.com/) | 否 | 30 RPM; 8K TPM on most chat models (varies by model) | 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model) | Free Forever | Qwen3.8 27B, MiniMax M2.7, Whisper Large v3, Whisper Large v3 Turbo |
| [Z.AI (GLM)](https://z.ai/) | 需注册 | ~1 request/second (Flash models) | ~1,000 requests/day (Flash tier) | Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| [Coze](https://www.coze.com/) | 需注册 | 因模型而异 | 按 token 计算的每日限额 | 每日重置 | GPT-4o (via Coze), Gemini 1.5 Pro (via Coze) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 需注册 | 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go) | 未公布 | Beta Access | Llama 3.3 70B Instruct, GPT OSS 20B, GPT OSS 120B, Qwen3.5 9B |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 否 | 因模型而异 | 每天 10,000 neurons | ~300,000 neurons/month | GLM 4.7 Flash, Mistral Small 3.1 24B, Qwen3 30B A3B, Gemma 4 26B A4B |
| [Nous Portal](https://portal.nousresearch.com) | 否 | Standard rate limits (figures not published) | Free models only (no monthly credit) | Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 charge) is required to get a key - verify | Poolside Laguna S 2.1, StepFun Step 3.7 Flash, Upstage Solar Mini 4, Meituan LongCat 2.0 |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | 否 | 10 requests, 4M input / 100K output tokens per 60s (per API key) | No daily cap published (free while the API is experimental) | Free during experimental phase, no billing system yet | Qwen3.6 35B A3B |
| [Pollinations.ai](https://pollinations.ai) | 否 | API key required (anonymous access removed); no card | Free usage paid from Quest Pollen earned in the dashboard | Free, no billing system | GPT-OSS 20B, Mistral Large 3, Kimi K2.6, GLM 5.3 Flash |
| [ModelScope](https://modelscope.cn) | 需手机验证 | 500 requests/day per model | 2,000 requests/day total | Free, no billing | See provider |
| [Ollama Cloud](https://ollama.com/cloud) | 否 | 1 concurrent request; starter models only | Monthly starter allowance (resets monthly from sign-up date) | Weekly usage limit resets every 7 days | Gemma 4, DeepSeek V4.1 Flash, GPT-OSS 120B (Cloud), GPT-OSS 20B (Cloud) |
| [SiliconFlow](https://siliconflow.com/pricing) | 需手机验证 | Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/models | Not fully published — verify on docs.siliconflow.cn | Free models available after identity verification | GLM-4 9B 0414, DeepSeek R1 0528 Qwen3 8B, Qwen3.5 4B, GLM 5.3 Flash |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | 否 | 15 RPM, 20K TPM (free tier) | 20,000 tokens/day (daily credit allowance, no card) | Free, no billing | See provider |
| [Kilo AI Gateway](https://kilo.ai/gateway) | 否 | 200 requests/hour per IP on free models (anonymous use allowed) | Default free models only | Free plan, no expiry | inclusionAI Ling 3.1 Flash, Cohere North Mini Code, Thinking Machines Inkling Small, Nemotron 3.5 Lightning |
| [Api.Airforce](https://api.airforce/) | 否 | 1 RPM | 1,000 requests/day | Free plan, $0/month | See provider |
| [Routeway](https://routeway.ai/) | 需注册 | 5 RPM on :free models | 200 requests/day | Starter plan free, shared queue | Muse Glimmer 30B, MiniMax M2.7, DeepSeek V4 Flash, Step 3.7 Flash |
| [LLM7.io](https://llm7.io) | 否 | 1 req/s, 60/min, 250/hour (free token from dash.llm7.io) | 100,000 tokens per 24h (free token; may be reduced without notice) | Free, no billing | Nemotron 3 Nano 30B, GLM 5.3 Flash, Mistral Nemo Instruct 2407, Codestral Latest |
<!--TABLE:PERMANENT:END-->

### 💰 可续期额度

定期续期的免费额度，没有一次性到期问题。

<!--TABLE:RENEWABLE:START-->
| 提供商 | 需要信用卡？ | 速率限制 | 免费额度 | 主要模型 |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 否 | 20 requests/minute | 50 requests/day (up to 1000 with $10 topup) | Liquid LFM 2.5 2.6B, Nemotron 3 Nano Omni 30B A3B Reasoning, Gemma 4 26B A4B IT, Gemma 4 31B IT |
| [Token Harbor](https://tokenharbor.ai) | 需注册 | Not published | Free allowance, resets on a rolling 7-day period | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| [Requesty](https://requesty.ai/) | 否 | Concurrency-limited (no RPM cap published) | 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models | Mistral Leanstral 1.5, Meta Muse Glimmer 30B, inclusionAI Ling 3.1 Flash, Gemma 4 31B IT |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | 需注册 | Rate limited per model (lower than paid tier) | Monthly free credit (~$5, verify) | See provider |
| [Onomeo](https://onomeo.com) | 需注册 | 12 requests/minute per key | 30 free-model calls every 5 hours per account | Auto (best free model), DeepSeek V4 Flash, DeepSeek V4 Pro, GLM 5.3 Flash |
<!--TABLE:RENEWABLE:END-->

### 🎁 一次性试用额度

注册后获得一次性额度，用完为止。

<!--TABLE:TRIAL:START-->
| 提供商 | 需要信用卡？ | 额度 | 有效期 | 主要模型 |
|:---|:---:|:---|:---|:---|
| [Replicate](https://replicate.com/) | 需注册 | Limited free runs on select models | 一次性 | See provider |
| [Fireworks AI](https://fireworks.ai/) | 需注册 | $1 | 一次性 | GLM 5.3, DeepSeek V4.1 Flash, Kimi K3 |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | 需注册 | $1 trial credit, valid 30 days (bank card required) | 一次性 | Qwen3 235B A22B Instruct 2507, GLM 5.3, GPT OSS 120B, Qwen3.8 27B |
| [Cerebras](https://cerebras.ai/inference) | 需注册 | $5 after adding a verified payment method (expires after 30 days) | 30 天 | Qwen 3.8 27B, GPT OSS 120B |
| [Novita AI](https://novita.ai/) | 需注册 | No automatic sign-up credit; $10 per referral (both sides) | 一次性 | GLM 5.3, Kimi K3, DeepSeek V4.1 Flash, Qwen3.8 27B |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | 需注册 | 1M tokens | 一次性 | Gemma 4 26B A4B IT, GPT-OSS 120B, Qwen3.6 35B A3B, DeepSeek V4 Flash (0731) |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | 需注册 | 1M tokens/model | One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| [AI21 Labs](https://docs.ai21.com/) | 需注册 | $10 (valid 7 days, no card) | 3 个月 | Jamba Large, Jamba Mini |
| [Upstage](https://console.upstage.ai/) | 需注册 | $10 | 3 个月 | See provider |
| [Cerebrium](https://www.cerebrium.ai/) | 需注册 | $30 | 一次性 | See provider |
| [Nscale](https://www.nscale.com/product/inference) | 否 | Minimum $5 top-up to start (no sign-up credit) | 一次性 | See provider |
| [Friendli AI](https://friendli.ai/) | 需注册 | Trial credits at onboarding (amount not published) | 一次性 | DeepSeek V3.2, Gemma 4 31B, GLM 5.2, GLM 5.3 Flash |
| [Grokified](https://grokified.com) | 否 | $5 | 一次性 | grok-4.6, grok-4.3, grok-build-0.1 |
<!--TABLE:TRIAL:END-->

### 🖥️ 本地 / 自托管（无限、私密、永久免费）

| 工具 | 类型 | 亮点 |
|:---|:---|:---|
| [Ollama](https://ollama.com/) | CLI + API | 100+ 模型，支持 GPU 加速，OpenAI 兼容接口 |
| [LM Studio](https://lmstudio.ai/) | 桌面 GUI | 支持任意 GGUF 模型，内置模型浏览器，可离线使用 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ 引擎 | 运行任意 GGUF 模型，依赖极少 |
| [GPT4All](https://gpt4all.io/) | 桌面应用 | 纯 CPU 运行，无需 GPU，开源 |
| [Jan.ai](https://jan.ai/) | 桌面应用 | 注重隐私，100% 离线的 ChatGPT 替代品 |
| [KoboldCpp](https://github.com/LostRuins/koboldcpp) | 单文件可执行程序 | 针对创意写作优化，支持 GGUF |
| [llamafile](https://github.com/Mozilla-Ocho/llamafile) | 单文件可执行程序 | 跨平台，llama.cpp + Cosmopolitan Libc 结合体 |
| [Text Generation WebUI](https://github.com/oobabooga/text-generation-webui) | Gradio 界面 | 高度可定制，适合高级本地实验 |
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
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | `https://api.tokenfactory.nebius.com/v1` | [获取密钥 →](https://tokenfactory.nebius.com/) |
| [Cerebras](https://cerebras.ai/inference) | `https://api.cerebras.ai/v1` | [获取密钥 →](https://cerebras.ai/inference) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [获取密钥 →](https://console.groq.com/) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [获取密钥 →](https://novita.ai/) |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [获取密钥 →](https://console.scaleway.com/generative-api/models) |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [获取密钥 →](https://bailian.console.alibabacloud.com/) |
| [AI21 Labs](https://docs.ai21.com/) | `https://api.ai21.com/studio/v1` | [获取密钥 →](https://docs.ai21.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [获取密钥 →](https://console.upstage.ai/) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [获取密钥 →](https://z.ai/) |
| [Coze](https://www.coze.com/) | `https://api.coze.com/v1` | [获取密钥 →](https://www.coze.com/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [获取密钥 →](https://endpoints.ai.cloud.ovh.net/) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [获取密钥 →](https://dash.cloudflare.com/) |
| [Nous Portal](https://portal.nousresearch.com) | `https://inference-api.nousresearch.com/v1` | [获取密钥 →](https://portal.nousresearch.com) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | `https://inference.hetzner.com/api/v1` | [获取密钥 →](https://experiments.hetzner.com/inference) |
| [Pollinations.ai](https://pollinations.ai) | `https://text.pollinations.ai` | [获取密钥 →](https://pollinations.ai) |
| [ModelScope](https://modelscope.cn) | `https://api-inference.modelscope.cn/v1` | [获取密钥 →](https://modelscope.cn) |
| [Token Harbor](https://tokenharbor.ai) | `https://tokenharbor.ai/v1` | [获取密钥 →](https://tokenharbor.ai) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [获取密钥 →](https://www.cerebrium.ai/) |
| [Ollama Cloud](https://ollama.com/cloud) | `https://ollama.com/v1` | [获取密钥 →](https://ollama.com/cloud) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [获取密钥 →](https://requesty.ai/) |
| [SiliconFlow](https://siliconflow.com/pricing) | `https://api.siliconflow.com/v1` | [获取密钥 →](https://siliconflow.com/pricing) |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | `https://api.aionlabs.ai/v1` | [获取密钥 →](https://www.aionlabs.ai/pricing/) |
| [Nscale](https://www.nscale.com/product/inference) | `https://inference.api.nscale.com/v1` | [获取密钥 →](https://www.nscale.com/product/inference) |
| [Kilo AI Gateway](https://kilo.ai/gateway) | `https://api.kilo.ai/api/gateway` | [获取密钥 →](https://kilo.ai/gateway) |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | `https://ai-gateway.vercel.sh/v1` | [获取密钥 →](https://vercel.com/ai-gateway) |
| [Api.Airforce](https://api.airforce/) | `https://api.airforce/v1` | [获取密钥 →](https://api.airforce/) |
| [Routeway](https://routeway.ai/) | `https://api.routeway.ai/v1` | [获取密钥 →](https://routeway.ai/) |
| [Onomeo](https://onomeo.com) | `https://onomeo.com/v1` | [获取密钥 →](https://onomeo.com) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [获取密钥 →](https://friendli.ai/) |
| [Grokified](https://grokified.com) | `https://api.grokified.com/v1` | [获取密钥 →](https://grokified.com) |
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
**按提供商分类（31 个）：** [AI21 Labs](code-examples/ai21-labs) · [Aion Labs](code-examples/aion-labs) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [Google AI Studio](code-examples/google-ai-studio) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [LLM7.io](code-examples/llm7-io) · [Mistral (La Plateforme)](code-examples/mistral-ai) · [ModelScope](code-examples/modelscope) · [Nebius (Token Factory)](code-examples/nebius) · [Nous Portal](code-examples/nous-portal) · [Novita AI](code-examples/novita-ai) · [Nscale](code-examples/nscale) · [NVIDIA NIM](code-examples/nvidia-nim) · [Ollama Cloud](code-examples/ollama-cloud) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Scaleway Generative APIs](code-examples/scaleway) · [SiliconFlow](code-examples/siliconflow) · [Upstage](code-examples/upstage) · [Z.AI (GLM)](code-examples/z-ai)
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

---

## Links

- 🌐 **官网**：[free-llm.com](https://free-llm.com) — 目录、投票、提交
- 🆚 **对比提供商**：[free-llm.com/compare](https://free-llm.com/compare)
- 📚 **使用指南**：[free-llm.com/guides](https://free-llm.com/guides/)
- 🏆 **荣誉榜**：[free-llm.com/hall-of-fame](https://free-llm.com/hall-of-fame)
- ➕ **提交提供商**：[free-llm.com/submit](https://free-llm.com/submit)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

---

## License

MIT — 详见 [LICENSE](LICENSE)。

---

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-10-19<!--LASTSYNC:END--></sub></p>
