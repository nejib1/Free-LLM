<p align="center">
  <h1 align="center">Free-LLM — 免费 AI 与 LLM API 开放目录</h1>
  <p align="center"><strong>来自 33 个提供商的 130+ 免费 LLM 模型</strong> — 几秒钟内发现、对比并配置免费模型，另有 9 款本地/自托管工具供无限私密使用。</p>
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
- ✅ **即用代码** — [`code-examples/`](code-examples/) 中包含全部 33 个提供商的 Python / JavaScript / curl 代码片段，还有针对 Claude Code、Cursor、Codex 的专属配置
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

其他所有提供商的即用代码片段见下方 [Code Examples](#code-examples)，都在 [`code-examples/`](code-examples/) 目录中。

---

## Provider Directory

### ⚡ 永久免费额度

持续免费访问，限速但永不过期。

| 提供商 | 需要信用卡？ | 速率限制 | 每日限额 | 每月限额 | 主要模型 |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | 否 | 5–30 RPM（因模型而异） | 9,000 RPD (Flash) / 25 RPD (Pro) | 完全免费 | Gemini 3.1 Pro Preview, 3.6 Flash, 3.5 Flash, 3.5 Flash-Lite |
| [Groq](https://console.groq.com/) | 否 | 30 RPM | 14,400 RPD | 永久免费 | Llama 3.3 70B, Qwen3.6 27B, GPT-OSS 120B/20B, Kimi K2, Whisper |
| [Cerebras](https://inference.cerebras.ai/) | 否 | 30 RPM | 每天 100 万 tokens | 永久免费 | GPT-OSS 120B, GLM-4.7, Gemma 4 31B |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | 否 | 300 次/小时 | 视负载而定 | 永久免费（限速） | Llama 3.2 11B, Qwen 2.5 72B, Gemma 2 9B, Flux.1 |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 否 | 因模型而异 | 每天 10,000 neurons | 每月约 30 万 neurons | Llama 3.1 8B, Mistral 7B, Qwen 1.5 7B, DeepSeek Coder 6.7B, Phi-2 |
| [Cohere](https://cohere.com/) | 否 | 20 RPM | — | 每月 1,000 次请求 | Command A+, Command A Reasoning, Command A, Command R+, Command R |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 需手机验证 | 1 次/秒 | — | 免费（"Experiment" 套餐） | Mistral Large 3, Mistral Medium 3.5, Codestral, Mistral Small |
| [Inference.net](https://inference.net/) | 否 | 30 RPM（合理使用） | 合理使用范围内 | 列出的模型免费 | DeepSeek-R1, Llama 3.1 8B/70B |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 需注册 | 2 RPM（匿名）/ 400 RPM（已认证） | 未公布 | 测试阶段 | Qwen3-32B, Qwen3.6-27B, 20+ 开源模型 |
| [Chutes.ai](https://chutes.ai/) | 需注册 | 视社区算力而定 | 视可用性而定 | 无硬性上限 | DeepSeek-R1, Llama 3.1 70B, Qwen 2.5 72B |
| [Coze](https://www.coze.com/) | 需注册 | 因模型而异 | 按 token 计算的每日限额 | 每日重置 | GPT-4o（通过 Coze）, Gemini 1.5 Pro（通过 Coze） |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 需手机验证 | 40 RPM | — | — | Llama 4 Scout, DeepSeek-R1, 多款开源模型 |
| [Z.AI (GLM)](https://z.ai/) | 需注册 | 约 1 次/秒（Flash 档） | 约每天 1,000 次请求（Flash 档） | 免费档持续提供 | GLM-4.5-Flash, GLM-4.7-Flash |

### 💰 可续期额度

定期续期的免费额度，没有一次性到期问题。

| 提供商 | 需要信用卡？ | 速率限制 | 免费额度 | 主要模型 |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 否 | 20 RPM | 每天 50 次请求（一次性充值 $10 后可达 1,000 次） | DeepSeek V4 Flash, Llama 4 Maverick/Scout, GPT-OSS 120B, Gemini 2.0（29+ 免费模型） |
| [GitHub Models](https://github.com/marketplace/models) | 否 | 10 RPM（高阶模型） | 50 RPD（高阶）/ 150 RPD（mini 档） | GPT-5 Chat, GPT-5 Mini, Llama 4 Scout/Maverick, Phi-4, Mistral Medium |
| [Grok / xAI](https://console.x.ai/) | 需注册 | 视额度而定（免费档较低） | 一次性 $25 注册赠金（可选 $150/月，需同意数据共享） | Grok 4.5, Grok 4.3 |
| [Venice.ai](https://venice.ai/) ⚠️ *完整 API 访问需要 Pro 订阅* | 需注册 | 10 RPM（免费档） | 每日使用量有限，每日重置 | Llama 3.1 405B, Dolphin Mixtral, Stable Diffusion 3 |

### 🎁 一次性试用额度

注册后获得一次性额度，用完为止。

| 提供商 | 需要信用卡？ | 额度 | 有效期 | 主要模型 |
|:---|:---:|:---|:---|:---|
| [Together.AI](https://together.ai/) ⚠️ *免费研究模型需先充值最低 $5* | 需注册 | 免费研究模型 | 永久免费（研究用途） | Apriel 1.6/1.5 15B Thinker |
| [DeepSeek](https://platform.deepseek.com/) | 需注册 | 500 万 tokens | 30 天 | DeepSeek-V4 Flash（对话 + 推理模式） |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | 需注册 | $5 额度 | 一次性 | Llama 3.3 70B, DeepSeek-V3.1 |
| [Cerebrium](https://www.cerebrium.ai/) | 需注册 | $30 额度 | 一次性 | 可部署任意模型（Serverless GPU 平台，非共享端点） |
| [AI21 Labs](https://docs.ai21.com/) | 需注册 | $10 额度 | 3 个月 | Jamba Large, Jamba Mini |
| [Fireworks AI](https://fireworks.ai/) | 需注册 | $1 额度 | 一次性试用 | 多款开源模型 |
| [Friendli AI](https://friendli.ai/) | 需注册 | 注册即送试用额度 | 一次性 | 主流开源模型 |
| [Hyperbolic](https://app.hyperbolic.xyz/) | 需注册 | $1 额度 | 一次性试用 | Llama 3.1 405B, DeepSeek V3 |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | 需注册 | 试用额度 | 一次性试用 | DeepSeek-R1, 多款开源模型 |
| [Novita AI](https://novita.ai/) | 需注册 | $0.50 额度 | 90 天 | Llama, Mistral |
| [Replicate](https://replicate.com/) | 需注册 | 少量试用额度 | — | 1000+ 模型（LLM、图像、音频） |
| [Upstage](https://console.upstage.ai/) | 需注册 | $10 额度 | 3 个月 | Solar Mini, Solar Pro 3 |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | 需注册 | 每个模型 100 万入 + 100 万出 tokens（仅限国际/新加坡账号） | 90 天 | Qwen3.7-Max, Qwen-Plus, Qwen-Flash, Qwen3-Coder-Plus |
| [Scaleway](https://console.scaleway.com/generative-api/models) | 需注册 | 100 万免费 tokens | 一次性试用 | Mistral, Llama, Qwen（欧盟托管） |
| [Requesty](https://requesty.ai/) | 需注册 | 每月免费额度 | 每月续期 | 多提供商路由 |

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

| 提供商 | Base URL | 获取密钥 |
|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | `https://generativelanguage.googleapis.com/v1beta` | [获取密钥 →](https://aistudio.google.com/app/apikey) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [获取密钥 →](https://console.groq.com/keys) |
| [Cerebras](https://inference.cerebras.ai/) | `https://api.cerebras.ai/v1` | [获取密钥 →](https://cloud.cerebras.ai/) |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | `https://router.huggingface.co/v1` | [获取密钥 →](https://huggingface.co/settings/tokens) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [获取密钥 →](https://dash.cloudflare.com/profile/api-tokens) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [获取密钥 →](https://dashboard.cohere.com/api-keys) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [获取密钥 →](https://console.mistral.ai/api-keys) |
| [Inference.net](https://inference.net/) | `https://api.inference.net/v1` | [获取密钥 →](https://inference.net/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [获取密钥 →](https://endpoints.ai.cloud.ovh.net/) |
| [Chutes.ai](https://chutes.ai/) | `https://api.chutes.ai/v1` | [获取密钥 →](https://chutes.ai/) |
| [Coze](https://www.coze.com/) | `https://api.coze.com/v1` | [获取密钥 →](https://www.coze.com/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [获取密钥 →](https://build.nvidia.com/settings/api-keys) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [获取密钥 →](https://z.ai/) |
| [OpenRouter](https://openrouter.ai/) | `https://openrouter.ai/api/v1` | [获取密钥 →](https://openrouter.ai/keys) |
| [GitHub Models](https://github.com/marketplace/models) | `https://models.inference.ai.azure.com` | [获取密钥 →](https://github.com/marketplace/models) |
| [Grok / xAI](https://console.x.ai/) | `https://api.x.ai/v1` | [获取密钥 →](https://console.x.ai/) |
| [Venice.ai](https://venice.ai/) | `https://api.venice.ai/api/v1` | [获取密钥 →](https://venice.ai/) |
| [Together.AI](https://together.ai/) | `https://api.together.xyz/v1` | [获取密钥 →](https://together.ai/) |
| [DeepSeek](https://platform.deepseek.com/) | `https://api.deepseek.com/v1` | [获取密钥 →](https://platform.deepseek.com/api_keys) |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | `https://api.sambanova.ai/v1` | [获取密钥 →](https://cloud.sambanova.ai/apis) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [获取密钥 →](https://www.cerebrium.ai/) |
| [AI21 Labs](https://docs.ai21.com/) | `https://api.ai21.com/studio/v1` | [获取密钥 →](https://studio.ai21.com/account/api-key) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [获取密钥 →](https://fireworks.ai/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [获取密钥 →](https://friendli.ai/) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.xyz/v1` | [获取密钥 →](https://app.hyperbolic.xyz/) |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | `https://api.tokenfactory.nebius.com/v1` | [获取密钥 →](https://studio.nebius.com/settings/api-keys) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [获取密钥 →](https://novita.ai/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [获取密钥 →](https://replicate.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [获取密钥 →](https://console.upstage.ai/) |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [获取密钥 →](https://bailian.console.alibabacloud.com/) |
| [Scaleway](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [获取密钥 →](https://console.scaleway.com/generative-api/models) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [获取密钥 →](https://requesty.ai/) |

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

**按编程助手分类：** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md)

**按提供商分类（33 个）：** [AI21 Labs](code-examples/ai21-labs) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Chutes.ai](code-examples/chutes-ai) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [DeepInfra](code-examples/deepinfra) · [DeepSeek](code-examples/deepseek) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [GitHub Models](code-examples/github-models) · [Google AI Studio](code-examples/google-ai-studio) · [Grok / xAI](code-examples/grok-xai) · [Groq](code-examples/groq-cloud) · [Hugging Face Inference](code-examples/huggingface-inference) · [Hyperbolic](code-examples/hyperbolic) · [Inference.net](code-examples/inference-net) · [Mistral AI](code-examples/mistral-ai) · [Nebius](code-examples/nebius) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Qwen / Alibaba](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [SambaNova](code-examples/sambanova) · [Scaleway](code-examples/scaleway) · [Together.AI](code-examples/together-ai) · [Upstage](code-examples/upstage) · [Venice.ai](code-examples/venice-ai) · [Z.AI (GLM)](code-examples/z-ai)

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

## License

MIT — 详见 [LICENSE](LICENSE)。
