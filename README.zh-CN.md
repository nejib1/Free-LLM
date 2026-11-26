<h1 align="center">Free-LLM — 所有免费 LLM API，一处查齐</h1>
<!--STATS:START-->
  <p align="center"><strong>来自 78 个提供商的 450+ 免费 LLM 模型</strong> — 几秒钟内发现、对比并配置免费模型，另有 9 款本地/自托管工具供无限私密使用。</p>
<!--STATS:END-->

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><strong>🌐 在线目录：free-llm.com</strong></a> ·
  <a href="https://free-llm.com/models" target="_blank" rel="noopener">免费模型</a> ·
  <a href="https://free-llm.com/compare" target="_blank" rel="noopener">对比</a> ·
  <a href="https://free-llm.com/guides" target="_blank" rel="noopener">指南</a> ·
  <a href="https://free-llm.com/changelog" target="_blank" rel="noopener">更新日志</a> ·
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener">提交提供商</a>
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

免费 LLM API 每周都在变化：模型下线、免费额度开始要求绑卡、试用悄悄结束。本仓库把这些变化全部记录下来。下面的每张表格都**每晚根据 [free-llm.com](https://free-llm.com) 的数据库自动重建**，每个提供商都对照其官方价格页、文档或公开模型列表核实过。你在这里看到的，就是今天真正可用的。

- 🔎 **查找**：哪些提供商免费、免费哪些模型、限制是多少
- 💳 **看清门槛**：每一项都标明是否需要信用卡、手机号、邮箱，或什么都不需要
- ⚡ **直接上手**：Base URL、每个提供商的可运行代码，以及 Claude Code、Codex、Cursor、OpenCode 的配置
- 🔁 **不再碰壁**：[Free-LLM Router](#-free-llm-router把许多小额免费套餐合成一个大的) 把你所有的免费密钥汇聚到一个地址

<details>
<summary><strong>目录</strong></summary>

- [🚀 从这里开始：当前最佳免费选择](#-从这里开始当前最佳免费选择)
- [🧠 提供商最多的免费模型](#-提供商最多的免费模型)
- [📰 最近更新](#-最近更新)
- [⚡ Free-LLM Router：把许多小额免费套餐合成一个大的](#-free-llm-router把许多小额免费套餐合成一个大的)
- [快速开始：30 秒发出第一个请求](#快速开始30-秒发出第一个请求)
- [用免费模型驱动编程助手](#用免费模型驱动编程助手)
- [提供商目录](#提供商目录)
- [速查表：Base URL 与 API Key](#速查表base-url-与-api-key)
- [我们如何保证准确](#我们如何保证准确)
- [常见问题](#常见问题)
- [指南](#指南)
- [代码示例](#代码示例)
- [参与贡献](#参与贡献)
- [链接与支持](#链接与支持)

</details>

---

## 🚀 从这里开始：当前最佳免费选择

不知道从哪里开始？每种常见需求给出一个好选择。各行来自实时数据：如果某个提供商不再免费，下一次夜间同步时会自动换成次优选项。

<!--TOPPICKS:START-->
| 你的需求 | 推荐 | 免费额度 | 免费模型 |
|:---|:---|:---|:---|
| 综合最佳（长上下文、图像） | **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 无需绑卡</sub> | ⏱️ Varies by model (per-model limits are now shown only inside AI Studio)<br>📅 Varies by model (shown in AI Studio). Free: Gemini 4 Hydrogen, Gemini…<br><sub>[详情 →](https://free-llm.com/provider/google-ai-studio)</sub> | Gemini 3.8 Flash, Gemini 3 Flash Preview, Gemini 3.1 Flash-Lite |
| 响应最快 | **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 30 RPM; 8K TPM on most chat models (varies by model)<br>📅 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by m…<br><sub>[详情 →](https://free-llm.com/provider/groq-cloud)</sub> | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B |
| 一个密钥用众多免费模型 | **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 20 requests/minute<br>📅 50 requests/day (up to 1000 with $10 topup) | Gemma 4 31B IT, Gemma 4 26B A4B IT, Nemotron 3.5 Super VL |
| 大型开源模型（GLM、Mistral Large、Nemotron） | **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 手机验证</sub> | ⏱️ ~40 RPM (varies per model, not published) | GLM-5.3 Flash, Gemma 4 31B IT, Nemotron 3.5 Super VL |
| 无需注册直接试用 | **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 200 requests/hour per IP on free models (anonymous use allowed)<br>📅 Default free models only | Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B, Nemotron 3.5 Lightning |
| Claude Code（原生 Anthropic 接口） | **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ ~1 request/second (Flash models)<br>📅 ~1,000 requests/day (Flash tier) | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| 一个免费套餐覆盖文本、图像和语音 | **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 因模型而异<br>📅 每天 10,000 neurons | Qwen3.8 27B, GLM 4.7 Flash, GPT OSS 120B |
| 欧盟境内托管 | **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-…<br><sub>[详情 →](https://free-llm.com/provider/ovh-ai)</sub> | Qwen3.8 27B, GPT OSS 120B, Gemma 4 26B A4B |
| 无限且私密（在你的电脑上运行） | **[Ollama](https://free-llm.com/provider/ollama)**<br><sub>🟢 无需绑卡</sub> | 无限制：取决于你的硬件 | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B |
<!--TOPPICKS:END-->

**注册要求图例：** 🟢 无需绑卡 · ✉️ 邮箱注册 · 📱 手机验证 · 💳 需绑卡（通常不扣费）

---

## 🧠 提供商最多的免费模型

同一个开源模型往往在多个提供商处都免费。如果其中一家限流或下架了该模型，换一家即可。🟢 = 该提供商无需绑卡。

<!--TOPMODELS:START-->
| 模型 | 免费提供商数 | 推荐入口 | 上下文 |
|:---|:---|:---|:---|
| **[GLM-5.3 Flash](https://free-llm.com/free-models/glm-5.3-flash)** | 12 家 | [FreeInference](https://free-llm.com/provider/freeinference) 🟢 · [Pollinations.ai](https://free-llm.com/provider/pollinations-ai) 🟢 · [NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)<br><sub>[全部 12 家 →](https://free-llm.com/free-models/glm-5.3-flash)</sub> | 1M |
| **[Qwen3.8 27B](https://free-llm.com/free-models/qwen3.8-27b)** | 12 家 | [Groq](https://free-llm.com/provider/groq-cloud) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)<br><sub>[全部 12 家 →](https://free-llm.com/free-models/qwen3.8-27b)</sub> | 131K |
| **[GLM 4.7 Flash](https://free-llm.com/free-models/glm-4.7-flash)** | 10 家 | [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [Inferbase](https://free-llm.com/provider/inferbase) 🟢 · [NovAI](https://free-llm.com/provider/novai) 🟢<br><sub>[全部 10 家 →](https://free-llm.com/free-models/glm-4.7-flash)</sub> | 200K |
| **[GPT-OSS 120B](https://free-llm.com/free-models/gpt-oss-120b)** | 10 家 | [Groq](https://free-llm.com/provider/groq-cloud) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [Inferbase](https://free-llm.com/provider/inferbase) 🟢<br><sub>[全部 10 家 →](https://free-llm.com/free-models/gpt-oss-120b)</sub> | 131K |
| **[Gemma 4 31B IT](https://free-llm.com/free-models/gemma-4-31b)** | 10 家 | [OpenRouter](https://free-llm.com/provider/openrouter) 🟢 · [Google AI Studio](https://free-llm.com/provider/google-ai-studio) 🟢 · [Requesty](https://free-llm.com/provider/requesty) 🟢<br><sub>[全部 10 家 →](https://free-llm.com/free-models/gemma-4-31b)</sub> | 262K |
| **[DeepSeek V4.1 Flash](https://free-llm.com/free-models/deepseek-v4.1-flash)** | 7 家 | [ModelScope](https://free-llm.com/provider/modelscope) · [Token Harbor](https://free-llm.com/provider/token-harbor) · [Zro (MoonMath)](https://free-llm.com/provider/zro)<br><sub>[全部 7 家 →](https://free-llm.com/free-models/deepseek-v4.1-flash)</sub> | 1M |
| **[Gemma 4 26B A4B IT](https://free-llm.com/free-models/gemma-4-26b)** | 7 家 | [OpenRouter](https://free-llm.com/provider/openrouter) 🟢 · [Google AI Studio](https://free-llm.com/provider/google-ai-studio) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢<br><sub>[全部 7 家 →](https://free-llm.com/free-models/gemma-4-26b)</sub> | 262K |
| **[DeepSeek V4 Flash 0731](https://free-llm.com/free-models/deepseek-v4-flash-0731)** | 6 家 | [ModelScope](https://free-llm.com/provider/modelscope) · [Gonka Broker](https://free-llm.com/provider/gonka-broker) · [BazaarLink](https://free-llm.com/provider/bazaarlink)<br><sub>[全部 6 家 →](https://free-llm.com/free-models/deepseek-v4-flash-0731)</sub> | — |
| **[GLM 5.3](https://free-llm.com/free-models/glm-5.3)** | 6 家 | [LLMTR](https://free-llm.com/provider/llmtr) · [Fireworks AI](https://free-llm.com/provider/fireworks-ai) · [Novita AI](https://free-llm.com/provider/novita-ai)<br><sub>[全部 6 家 →](https://free-llm.com/free-models/glm-5.3)</sub> | 512K |
| **[Llama 3.3 70B Instruct](https://free-llm.com/free-models/llama-3.3-70b)** | 6 家 | [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [OVH AI Endpoints](https://free-llm.com/provider/ovh-ai) · [Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)<br><sub>[全部 6 家 →](https://free-llm.com/free-models/llama-3.3-70b)</sub> | 24K |
| **[DeepSeek V4 Flash](https://free-llm.com/free-models/deepseek-v4-flash)** | 5 家 | [FreeInference](https://free-llm.com/provider/freeinference) 🟢 · [Inferbase](https://free-llm.com/provider/inferbase) 🟢 · [Pollinations.ai](https://free-llm.com/provider/pollinations-ai) 🟢<br><sub>[全部 5 家 →](https://free-llm.com/free-models/deepseek-v4-flash)</sub> | 1M |
| **[GPT-OSS 20B](https://free-llm.com/free-models/gpt-oss-20b)** | 5 家 | [Groq](https://free-llm.com/provider/groq-cloud) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [Api.Airforce](https://free-llm.com/provider/api-airforce) 🟢<br><sub>[全部 5 家 →](https://free-llm.com/free-models/gpt-oss-20b)</sub> | 131K |
<!--TOPMODELS:END-->

**→ 全部免费模型，可按名称、上下文和视觉能力搜索：[free-llm.com/models](https://free-llm.com/models)**

---

## 📰 最近更新

<!--WHATSNEW:START-->
- `2026-11-26` ⛔ **[Inferaft](https://free-llm.com/provider/inferaft)** — 免费额度已结束
- `2026-11-26` 🆕 **[Plugsky](https://free-llm.com/provider/plugsky)** — 新增免费服务商
- `2026-11-25` ⛔ **[IteraCompute](https://free-llm.com/provider/iteracompute)** — 免费额度已结束
- `2026-11-23` ➖ **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)** — 不再免费: Dots3-Note Preview, Cohere North Mini Code
- `2026-11-23` ➖ **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)** — 不再免费: Gemini 2.5 Flash-Lite, Gemini 2.5 Flash
- `2026-11-23` ➖ **[Api.Airforce](https://free-llm.com/provider/api-airforce)** — 不再免费: GLM-4.7 Flash
- `2026-11-23` ➖ **[Routeway](https://free-llm.com/provider/routeway)** — 不再免费: DeepSeek V4.1 Flash (free)
- `2026-11-21` ⛔ **[LLM7.io](https://free-llm.com/provider/llm7-io)** — 免费额度已结束
- `2026-11-21` ⛔ **[Mistral (La Plateforme)](https://free-llm.com/provider/mistral-ai)** — 免费额度已结束
- `2026-11-21` ⛔ **[Ollama Cloud](https://free-llm.com/provider/ollama-cloud)** — 免费额度已结束
- `2026-11-21` 🆕 **[HiAPI](https://free-llm.com/provider/hiapi)** — 新增免费服务商
- `2026-11-21` 🆕 **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)** — 新增免费服务商

**→ 完整记录: [FREE-TIER-CHANGELOG.md](FREE-TIER-CHANGELOG.md) · [free-llm.com/changelog](https://free-llm.com/changelog) · [RSS](https://free-llm.com/changelog-feed)**
<!--WHATSNEW:END-->

---

## ⚡ Free-LLM Router：把许多小额免费套餐合成一个大的

上面每个提供商都只给一个*小*的免费套餐，各有各的密钥和限制。Router 把它们叠加起来：你的应用或编程代理只需连接你电脑上的**一个** OpenAI / Anthropic 兼容地址，每个请求都会发往此刻可用的免费模型。某家繁忙或额度用完时，下一家立即接上。

```bash
npm install -g github:nejib1/Free-LLM   # 安装 `free-llm` 命令
free-llm                                # 引导式设置，然后打开 http://localhost:4000
free-llm setup claude                   # 让 Claude Code 使用免费模型（也支持 codex、opencode、aider）
```

<p align="center"><a href="router/README.md"><img src="router/docs/dashboard.png" width="760" alt="Free-LLM Router dashboard"></a></p>

- **一个地址，所有免费密钥**：支持 OpenAI、Anthropic Messages、Codex Responses、Ollama 和 MCP 接口
- **自动更新**：提供商列表当天跟随 free-llm.com 更新，失效的套餐会自动移除
- **本地且私密**：在你的电脑上运行，密钥加密保存，只发送给对应的提供商；无需账号、无遥测、零依赖

**→ [工作原理](router/README.md)** · [free-llm.com/router](https://free-llm.com/router) · [版本说明](CHANGELOG.md)

---

## 快速开始：30 秒发出第一个请求

大多数提供商都提供 **OpenAI 兼容接口**，所以任何接受 Base URL 和 API Key 的 SDK 或工具都能用：替换这两个值即可，代码不用改。示例使用 Groq（无需绑卡，约每分钟 30 次、每天 1,000 次请求），请先[获取密钥](https://console.groq.com/keys)。

<details open>
<summary><strong>Python</strong></summary>

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key="YOUR_GROQ_API_KEY",
)

reply = client.chat.completions.create(
    model="openai/gpt-oss-120b",
    messages=[{"role": "user", "content": "用一句话解释什么是速率限制。"}],
)
print(reply.choices[0].message.content)
```
</details>

<details>
<summary><strong>JavaScript / TypeScript</strong></summary>

```js
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

const reply = await client.chat.completions.create({
  model: "openai/gpt-oss-120b",
  messages: [{ role: "user", content: "用一句话解释什么是速率限制。" }],
});
console.log(reply.choices[0].message.content);
```
</details>

<details>
<summary><strong>curl</strong></summary>

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model": "openai/gpt-oss-120b", "messages": [{"role": "user", "content": "Hello!"}]}'
```
</details>

**更换提供商** = 修改 `base_url`、密钥和模型 ID，三者都在[速查表](#速查表base-url-与-api-key)和各提供商页面上。收到 HTTP `429` 表示达到了免费上限：等待时间窗口重置，或切换到其他提供商（[指南](https://free-llm.com/guides/free-llm-fallback-system)），或交给 [Router](#-free-llm-router把许多小额免费套餐合成一个大的) 自动处理。

---

## 用免费模型驱动编程助手

| 工具 | 方法 | 指南 |
|:---|:---|:---|
| **Claude Code** | 需要 Anthropic Messages API：使用有原生 Anthropic 接口的提供商（OpenRouter、Z.AI、FreeInference、本地 Ollama）、LiteLLM 代理，或 `free-llm setup claude` | [`claude-code.md`](code-examples/claude-code.md) |
| **Codex CLI** | 在 `~/.codex/config.toml` 中添加提供商，并设置 `wire_api = "chat"` | [`codex.md`](code-examples/codex.md) |
| **Cursor** | Settings → Models → 覆盖 OpenAI Base URL，添加模型 ID | [`cursor.md`](code-examples/cursor.md) |
| **OpenCode** | 使用 `/connect`，或为每个提供商设置环境变量 | [`opencode.md`](code-examples/opencode.md) |

代理会话会连续发送大量请求，每分钟 20–30 次的套餐很快就会被限流。请选择速度快的提供商（Groq、NVIDIA NIM），用 Router 分摊负载，或运行本地模型。

---

## 提供商目录

免费访问分为三类，因为它们随时间的变化方式完全不同。每个提供商名称都链接到 free-llm.com 上的页面，包含全部免费模型、准确限制、设置步骤和社区备注。

### ⚡ 永久免费额度

持续可用的免费访问，有速率限制；额度不会用完，而是定期重置。

<!--TABLE:PERMANENT:START-->
| 提供商 · 注册要求 | 免费额度与限制 | 主要模型 |
|:---|:---|:---|
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 无需绑卡</sub> | ⏱️ Varies by model (per-model limits are now shown only inside AI Studio)<br>📅 Varies by model (shown in AI Studio). Free: Gemini 4 Hydrogen, Gemini 3.x Flash / Flash-Lite a…<br>🗓️ 完全免费<br><sub>[详情 →](https://free-llm.com/provider/google-ai-studio)</sub> | Gemini 3.8 Flash, Gemini 3 Flash Preview, Gemini 3.1 Flash-Lite, Gemini 3.5 Flash-Lite |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 30 RPM; 8K TPM on most chat models (varies by model)<br>📅 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model)<br>🗓️ Free Forever | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B, Whisper Large v3 |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 手机验证</sub> | ⏱️ ~40 RPM (varies per model, not published) | GLM-5.3 Flash, Gemma 4 31B IT, Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 因模型而异<br>📅 每天 10,000 neurons<br>🗓️ ~300,000 neurons/month | Qwen3.8 27B, GLM 4.7 Flash, GPT OSS 120B, Gemma 4 26B A4B |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 20 requests/minute<br>📅 1,000 API calls/month (trial key)<br>🗓️ 1,000 API calls/month (trial key, non-commercial) | Command A (111B), Command A Vision, Command A Reasoning, Command R+ (08-2024) |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ ~1 request/second (Flash models)<br>📅 ~1,000 requests/day (Flash tier)<br>🗓️ Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 200 requests/hour per IP on free models (anonymous use allowed)<br>📅 Default free models only<br>🗓️ Free plan, no expiry | Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B, Nemotron 3.5 Lightning, Glyph Cluster (stealth) |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go)<br>🗓️ Beta Access | Qwen3.8 27B, GPT OSS 120B, Gemma 4 26B A4B, Llama 3.3 70B Instruct |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 手机验证</sub> | ⏱️ Concurrency limited dynamically according to platform load<br>📅 Counted in Magicubes: about 0.5, 1 or 2 per call depending on model size<br>🗓️ Free, no billing | Qwen3.8 27B, GLM-4.7 Flash, DeepSeek V4.1 Flash (1017), DeepSeek V4.1 Flash |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 无需绑卡</sub> | ⏱️ Not published ("generous quota"; HTTP 429 when rate-limited)<br>📅 No published daily cap | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M3, Qwen3.6 35B A3B |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 手机验证</sub> | ⏱️ Fixed limits on free models, shown in the console after login<br>📅 Not published on the public site<br>🗓️ Free models available after identity verification | Qwen3.5 4B, GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 手机验证</sub> | ⏱️ Low concurrency on free Flash models (GLM-4.7-Flash reported at 1 concurrent request) | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4-Flash-250414, GLM-4.6V-Flash (vision) |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 无需绑卡</sub> | ⏱️ Queue-based; anonymous requests have the lowest priority, registered users earn kudos for prio…<br>📅 No fixed cap (volunteer capacity)<br><sub>[详情 →](https://free-llm.com/provider/ai-horde)</sub> | L3 8B Stheno v3.2, Gemma 4 E4B IT, Qwen3 4B, Llama 3.2 1B Instruct |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 5 requests/min before the first top-up<br>📅 Free Flash models with no daily cap published; $2 welcome credit for paid models | GLM-4.7 Flash, GLM-4.6V Flash, GLM-4.1V Thinking Flash, CogView-3 Flash |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 无需绑卡</sub> | ⏱️ API key required (anonymous access removed); no card<br>📅 Free usage paid from Quest Pollen earned in the dashboard<br>🗓️ Free usage is paid from Quest Pollen earned in the dashboard | GLM 5.3 Flash, GPT-OSS 20B, DeepSeek V4 Flash, Mistral Large 3 |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 无需绑卡</sub> | ⏱️ Not published (daily credit allowance)<br>📅 Daily free credit allowance (amount not published by Aion Labs)<br>🗓️ Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 1 RPM<br>📅 1,000 requests/day<br>🗓️ Free plan, $0/month | GPT-OSS 20B, Kimi K2.7 Code, Llama Instant |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 30 requests/day on the free plan; effective upstream rate limits also apply<br>📅 30 requests/day<br>🗓️ 800 rounds/month | fm-v1-lite (free tier alias, default model), fm-v1-standard (paid, Standard plan only), fm-v1-pro (paid, Pro plan only) |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 5 requests/second, 200 RPM (text models); 20 RPM for OCR<br>📅 No daily cap published | Typhoon 2.5 30B A3B Instruct, Typhoon OCR 1.5 |
| **[Plugsky](https://free-llm.com/provider/plugsky)**<br><sub>🟢 无需绑卡</sub> | ⏱️ 30 RPM<br>📅 500 requests/day (about 100/day for accounts created from 2 Nov 2026)<br>🗓️ Free plan, no card, 2 API keys | plugsky-micro, plugsky-lite |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ Baseline rate limits (figures not published) | MiniMax M3, Auto router, Nemotron 3 Ultra, Nemotron 3 Super |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ 10 requests/minute per user (increase on request: sealion@aisingapore.org) | Qwen SEA-LION v4.5 27B Instruct, Llama SEA-LION v3.5 70B Reasoning, SEA-Guard (safety), SEA-LION Embedding 600M |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ About 30 RPM per account (video 2 RPM), per third-party listings | Agnes 3.0 Flash, Agnes 2.5 Flash, Agnes Image 2.1 Flash (image) |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ 30 requests per minute per API key, enforced as one request every 2 seconds (429 with Retry-Af…<br>📅 None published<br>🗓️ None published<br><sub>[详情 →](https://free-llm.com/provider/merkium)</sub> | Ganymede 1.1 (now Neptune), Pluto 1.2 Pro (now Ceres), Pluto 1.2 Flash (now Ceres) |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ 5 RPM on :free models<br>📅 200 requests/day<br>🗓️ Starter plan free, shared queue | MiniMax M3.1 Flash (free), Muse Glimmer 30B |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ 1 request at a time; max 12K context tokens<br>📅 Limited trial uses per model (about 5 requests per 2 days, per third-party list) | Qwen3.5 27B Derestricted |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ 邮箱注册</sub> | ⏱️ Per-organization, per-model RPM/TPM (values shown in console only) | Qwen3.5 4B (free) |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 手机验证</sub> | ⏱️ Not published on the HTTP doc<br>📅 Not published (Lite is free) | Spark Lite |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 手机验证</sub> | 📅 Not published (\"限时放量\" during public beta) | SenseNova 6.8 Flash Lite |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 需绑卡</sub> | ⏱️ Standard rate limits (figures not published)<br>📅 Free models only (no monthly credit)<br>🗓️ Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 ch…<br><sub>[详情 →](https://free-llm.com/provider/nous-portal)</sub> | StepFun Step 3.7 Flash, Upstage Solar Mini 4, Qwen4 Max, LongCat 2.5 |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 需绑卡</sub> | ⏱️ 10 requests, 4M input / 100K output tokens per 60s (per API key)<br>📅 No daily cap published (free while the API is experimental); a Hetzner account with billing de…<br>🗓️ Free until the experiment ends on 8 December 2026<br><sub>[详情 →](https://free-llm.com/provider/hetzner-inference)</sub> | Qwen3.8 27B, Qwen3.6 35B A3B |
<!--TABLE:PERMANENT:END-->

### 💰 可续期额度

按天或按月自动补充的免费额度（积分、token 或 neurons）。

<!--TABLE:RENEWABLE:START-->
| 提供商 · 注册要求 | 免费额度与限制 | 主要模型 |
|:---|:---|:---|
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 无需绑卡</sub> | 🎁 50 requests/day (up to 1000 with $10 topup)<br>⏱️ 20 requests/minute | Gemma 4 31B IT, Gemma 4 26B A4B IT, Nemotron 3.5 Super VL, Recursive Flint v1.0 (free) |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ 邮箱注册</sub> | 🎁 $5/month<br>⏱️ Lower per-model limits than the paid tier (429 on excess) | GLM-4.7 Flash, GPT-OSS 120B, Llama 3.3 70B, Nemotron 3.5 Lightning (free) |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 无需绑卡</sub> | 🎁 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models<br>⏱️ 20 RPM on free models (60 RPM for paying orgs) | Gemma 4 31B IT, Nemotron 3.5 Lightning 30B A3B, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 无需绑卡</sub> | 🎁 Tier 1: 50-500 free-model requests/day (varies by model)<br>⏱️ Tier 1 (free): 20-200 RPM | GLM 4.7 Flash (needs $1 top-up per third-party list), Mistral Small 3.2 24B, L3 8B Stheno v3.2, Manta Pro 1.0 |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 无需绑卡</sub> | 🎁 $0.50 of managed model usage per day; 5,000 requests per month<br>⏱️ 100 managed requests per day | GPT-OSS 120B, Gemma 4 31B IT, GLM-4.7 Flash, DeepSeek V4 Flash |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 无需绑卡</sub> | 🎁 See provider<br>⏱️ See provider | GLM 5.3 Flash (zai-org/GLM-5.3-Flash), gpt-oss 120B (openai/gpt-oss-120b), DeepSeek V4.1 Flash (deepseek-ai/DeepSeek-V4.1-Flash), GLM 5.3 (zai-org/GLM-5.3) |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 无需绑卡</sub> | 🎁 100K ANY tokens per day, free models only<br>⏱️ Limited API calls on the Free plan (exact RPM not published) | See provider |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Per-model daily allowance (e.g. 200K tokens/day on dated previews)<br>⏱️ Not published; lower allowance in an account's first 24h | Qwen3.8 27B (free), Gemma 4 31B, DeepSeek V4.1 Flash, GLM-5.3 |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ 邮箱注册</sub> | 🎁 100 requests/day and 1M tokens/day per account (500 RPD on some, e.g. glm-4.7-flash-free, codi…<br>⏱️ 5 RPM per account on most *-free routes<br><sub>[详情 →](https://free-llm.com/provider/aihubmix)</sub> | Gemma 4 31B IT (free), GLM 4.7 Flash (free), Nemotron 3 Ultra 550B A55B (free), Coding GLM 5.3 (free) |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Daily cap in points (pts), per account; resets 00:00 UTC+8<br>⏱️ 20 RPM per account, 30 RPM per API key, 120 RPM per IP, 8 concurrent requests per key | GLM-5.3-Flash, Qwen3.8-27B, Gemma-4-31B-IT, DeepSeek-V4.1-Flash |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ 邮箱注册</sub> | 🎁 50 requests/day per account shared across free models, reset 07:00 WIB<br>⏱️ 5 requests/minute (free models) | GLM 4.7 Flash, Gemma 4 26B, Llama 3.1 8B, Qwen3 30B |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ 邮箱注册</sub> | 🎁 60 weighted units/day (120 with credit), resets 00:00 UTC<br>⏱️ 10 RPM (20 RPM with any credit), 2 concurrent requests | DeepSeek V4 Flash 0731 (free), Nemotron 3.5 Lightning (free), Glyph Cluster (stealth), Qwen3.7 Flash |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Free-model hourly/daily request and token allowances (values per account, not published)<br>⏱️ Account-specific (read via GET /v1/rate-limit) | Llama 3.1 8B Free, Gemma E4B Free, Mistral 7B (tier free, $0), Kode 14B (tier free, $0) |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Free allowance, resets on a rolling 7-day period<br>⏱️ 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Resets every day (Flash models only)<br>⏱️ Daily usage allowance (amount not published) | GLM-5.3 Flash, DeepSeek V4.1 Flash |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ 邮箱注册</sub> | 🎁 See provider<br>⏱️ No per-key RPM/TPM cap; one request at a time per account | DeepSeek V4.1 Flash 1017 |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ 邮箱注册</sub> | 🎁 50 requests/day (first 7 days), then 10 requests/day<br>⏱️ 10 requests/minute per key | qwen3-coder-30b |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ 邮箱注册</sub> | 🎁 $1 free credits, refreshed every 4 weeks<br>⏱️ 1 concurrent request (open models); 10 requests/second (closed models) | See provider |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 手机验证</sub> | 🎁 Monthly free token grant after SMS verification (does not accumulate)<br>⏱️ Network limits (see docs.gonkabroker.com Limits & Quotas) | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 手机验证</sub> | 🎁 100 free calls/day per user (free experience access token) | GLM 5.3 Flash, Qwen3.8 27B, DeepSeek V4 Flash 0731 |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 需绑卡</sub> | 🎁 $5 free credits every month (payment method attached)<br>⏱️ Not published for Free plan (most relaxed on flex window) | GLM 5.3 Flash, Gemma 4 31B IT, GLM 5.3, Kimi K3 |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 需绑卡</sub> | 🎁 300,000 tokens/month + 20 CUH/month<br>⏱️ About 2 requests/second (Lite) | GPT-OSS 120B, Llama 3.3 70B Instruct, Mistral Small 3.1 24B, Granite 4 H Small |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 需绑卡</sub> | 🎁 1M input+output tokens/day shared across free core models, reset 00:00 UTC<br>⏱️ 10 RPM and 250K TPM per free core model | DeepSeek V4.1 Flash 1017, GPT-6 Luna, Clef Flash (decision endpoint, free promo) |
<!--TABLE:RENEWABLE:END-->

### 🎁 一次性试用额度

注册时一次性发放的额度，用完即止。适合在付费前试用大模型。

<!--TABLE:TRIAL:START-->
| 提供商 · 注册要求 | 免费额度 | 主要模型 |
|:---|:---|:---|
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 需绑卡</sub> | 🎁 $5 after adding a verified payment method (expires after 30 days)<br>⌛ 30 天 | GPT OSS 120B, Qwen 3.8 27B |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ 邮箱注册</sub> | 🎁 1M tokens (+60 min audio transcription), all serverless models<br>⌛ 一次性 | Qwen3.8 27B, GPT-OSS 120B, DeepSeek V4.1 Flash (1017), Gemma 4 26B A4B IT |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1)<br>⌛ 一次性 | GLM 5.3 Flash, GPT-OSS 120B, DeepSeek V4.1 Flash, GLM 5.3 |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ 邮箱注册</sub> | 🎁 ~1M tokens per model, 90 days (Singapore; newer models only since Oct 29, 2026)<br>⌛ One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ 邮箱注册</sub> | 🎁 No automatic sign-up credit; $10 per referral (both sides)<br>⌛ 一次性 | Qwen3.8 27B, GLM 5.3, Llama 3.3 70B Instruct, Kimi K3 |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 手机验证</sub> | 🎁 $1 after phone verification (Free Tier)<br>⌛ 一次性 | Qwen3.8 27B, GLM-5.3 Flash, DeepSeek V4.1 Flash, DeepSeek V4 Flash 0731 |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 无需绑卡</sub> | 🎁 30-day trial, 1M tokens/day, no card<br>⌛ 30 天 | Qwen3.8 27B, GPT-OSS 120B, Gemma 4 31B, GLM-5.2 |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 无需绑卡</sub> | 🎁 Free tokens on an auto-generated key (amount not stated on page)<br>⌛ Keys do not expire | Jina Embeddings v5 Text Small, Jina Embeddings v5 Text Nano, Jina Embeddings v5 Omni Small, Jina Embeddings v3 |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 无需绑卡</sub> | 🎁 100 free credits on sign-up (~$1, at $0.01/credit)<br>⌛ One-time, then pay-as-you-go | Qwen3.8 27B, Gemma 4 26B A4B IT, Qwen3.5 0.8B, DiffusionGemma 26B A4B |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 无需绑卡</sub> | 🎁 $5<br>⌛ 一次性 | Grok 4.7, grok-4.6, grok-4.3, grok-build-0.1 |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 无需绑卡</sub> | 🎁 1M free tokens for new users<br>⌛ 一次性 | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M2.7 |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 无需绑卡</sub> | 🎁 100M tokens<br>⌛ One-time (new accounts) | Mercury 3, Mercury 2.5, Mercury 2 |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 无需绑卡</sub> | 🎁 $5 welcome credit after CLI login<br>⌛ 一次性 | Vectoree Auto (router) |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ 邮箱注册</sub> | — | DeepSeek V4.1 Flash, GLM 5.3, GPT-6.1 Sol, Claude Opus 5.5 |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ 邮箱注册</sub> | 🎁 First 200M tokens free per model (voyage-4 family, rerank-2.5); 50M on domain models<br>⌛ One-time per account per model | Voyage 4 Large, Voyage 4, Voyage 4 Lite, Voyage Code 3 |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Trial credits at onboarding (amount not published)<br>⌛ 一次性 | GLM 5.3 Flash, Gemma 4 31B, GLM 5.3, GLM 5.2 |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Free-tier quota access, no billing account<br>⌛ Up to 90 days for new Google Cloud users | Gemini 3.1 Pro Preview, Gemini 3 Flash Preview, Gemini 2.5 Pro, Gemini 2.5 Flash |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ 邮箱注册</sub> | — | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ 邮箱注册</sub> | 🎁 $2 free voucher on signup ($4 with an invite code, per third-party list)<br>⌛ 一次性 | Kimi K2.7 Code |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ 邮箱注册</sub> | 🎁 No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per sec…<br>⌛ 一次性<br><sub>[详情 →](https://free-llm.com/provider/cerebrium)</sub> | See provider |
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ 邮箱注册</sub> | 🎁 Limited free runs on select models<br>⌛ 一次性 | See provider |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ 邮箱注册</sub> | 🎁 $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify)<br>⌛ 3 个月 | See provider |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 手机验证</sub> | 🎁 INR 100 free credits on signup<br>⌛ One-time; credits do not expire (per third-party list) | Sarvam 105B, Sarvam 105B Conversations |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 需绑卡</sub> | 🎁 1M free tokens per language model, once per account per model<br>⌛ 90 days after claim (intl promo page; docs say 1 year); campaign ends 2026-12-31" - DeepSeek-V…<br><sub>[详情 →](https://free-llm.com/provider/tencent-tokenhub)</sub> | See provider |
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

## 速查表：Base URL 与 API Key

当前所有免费的托管提供商，附可直接填入 OpenAI 兼容客户端的 Base URL 和创建密钥的链接。注册最简单的排在前面。

<!--TABLE:QUICKREF:START-->
| 提供商 · 注册要求 · API Key | OpenAI 兼容 Base URL |
|:---|:---|
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://aistudio.google.com/)</sub> | `https://generativelanguage.googleapis.com/v1beta/openai` |
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://openrouter.ai/)</sub> | `https://openrouter.ai/api/v1` |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://console.groq.com/)</sub> | `https://api.groq.com/openai/v1` |
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://cerebras.ai/inference)</sub> | `https://api.cerebras.ai/v1` |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://build.nvidia.com/explore/discover)</sub> | `https://integrate.api.nvidia.com/v1` |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://dash.cloudflare.com/)</sub> | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1` |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://cohere.com/)</sub> | `https://api.cohere.ai/compatibility/v1` |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://z.ai/)</sub> | `https://api.z.ai/api/paas/v4` |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://kilo.ai/gateway)</sub> | `https://ai-gateway.kilo.ai/api/v1` |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://console.scaleway.com/generative-api/models)</sub> | `https://api.scaleway.ai/v1` |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://endpoints.ai.cloud.ovh.net/)</sub> | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://vercel.com/ai-gateway)</sub> | `https://ai-gateway.vercel.sh/v1` |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://fireworks.ai/)</sub> | `https://api.fireworks.ai/inference/v1` |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://bailian.console.alibabacloud.com/)</sub> | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://modelscope.cn)</sub> | `https://api-inference.modelscope.cn/v1` |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://requesty.ai/)</sub> | `https://router.requesty.ai/v1` |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://freeinference.org)</sub> | `https://freeinference.org/v1` |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://novita.ai/)</sub> | `https://api.novita.ai/v3/openai` |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://www.siliconflow.cn/pricing)</sub> | `https://api.siliconflow.cn/v1` |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://app.hyperbolic.xyz/)</sub> | `https://api.hyperbolic.ai/inference/v1` |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://docs.bigmodel.cn/cn/guide/start/model-overview)</sub> | `https://open.bigmodel.cn/api/paas/v4` |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://docs.meganova.ai/tiers)</sub> | `https://api.meganova.ai/v1` |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://inferbase.ai)</sub> | `https://api.inferbase.ai/v1` |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://regolo.ai)</sub> | `https://api.regolo.ai/v1` |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://aihorde.net)</sub> | `https://oai.aihorde.net/v1` |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://jina.ai/embeddings/)</sub> | `https://api.jina.ai/v1` |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://aiapi-pro.com)</sub> | `https://aiapi-pro.com/v1` |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://pollinations.ai)</sub> | `https://gen.pollinations.ai/v1` |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://www.runcrate.ai/inference/free)</sub> | `https://api.runcrate.ai/v1` |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://docs.vlm.run/gateway/rate-limits)</sub> | `https://gateway.vlm.run/v1/openai` |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://grokified.com)</sub> | `https://api.grokified.com/v1` |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://www.aionlabs.ai/pricing/)</sub> | `https://api.aionlabs.ai/v1` |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://api.airforce/)</sub> | `https://api.airforce/v1` |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://freemodel.online/)</sub> | `https://freemodel.online/v1 (OpenAI-compatible) · https://freemodel.online/api/gateway (Anthropic-compatible)` |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://gonkarouter.io)</sub> | `https://api.gonkarouter.io/v1` |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://www.inceptionlabs.ai/)</sub> | `https://api.inceptionlabs.ai/v1` |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://opentyphoon.ai)</sub> | `https://api.opentyphoon.ai/v1` |
| **[Plugsky](https://free-llm.com/provider/plugsky)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://plugsky.com/)</sub> | `https://api.plugsky.com/v1` |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://vectoree.ai)</sub> | `https://vectoree.ai/api/v1` |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 无需绑卡 · [🔑&nbsp;密钥](https://anyapi.ai)</sub> | `https://api.anyapi.ai/v1` |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://llmtr.com/en/terms)</sub> | `https://llmtr.com/v1` |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://aihubmix.com)</sub> | `https://aihubmix.com/v1` |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://developer.amd.com.cn/radeon/tokenfactory)</sub> | `https://developer.amd.com.cn/radeon/api/v1` |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://hiapi.ai/)</sub> | `https://api.hiapi.ai/v1` |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://docs.voyageai.com/docs/pricing)</sub> | `https://api.voyageai.com/v1` |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://friendli.ai/)</sub> | `https://inference.friendli.ai/v1` |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview)</sub> | <sub>仅原生 API — [接入说明](https://free-llm.com/provider/vertex-ai-express)</sub> |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://kiosapi.id/pricing)</sub> | `https://api.kiosapi.id/v1` |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://llm.kiwi/pricing)</sub> | `https://api.llm.kiwi/v1` |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://bazaarlink.ai/free)</sub> | `https://api.bazaarlink.ai/v1` |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://docs.sea-lion.ai/guides/inferencing/api)</sub> | `https://api.sea-lion.ai/v1` |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://simplellm.eu/docs/)</sub> | `https://api.simplellm.eu/v1` |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://agnes-ai.com)</sub> | `https://apihub.agnes-ai.com/v1` |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://inference.dahl.global/)</sub> | `https://inference.dahl.global/v1` |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://www.merkium.nl/)</sub> | `https://chat.merkium.nl/api/v1` |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://tokenharbor.ai)</sub> | `https://tokenharbor.ai/v1` |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://routeway.ai/)</sub> | `https://api.routeway.ai/v1` |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://zro.moonmath.ai)</sub> | `https://zro.moonmath.ai/v1` |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://www.arliai.com/pricing)</sub> | `https://api.arliai.com/v1` |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://cheapllm.shop/)</sub> | `https://cheapllm.shop/v1` |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://www.hpc-ai.com/model-apis)</sub> | `https://api.hpc-ai.com/inference/v1` |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://docs.mixlayer.com/credits-and-limits)</sub> | `https://models.mixlayer.ai/v1` |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://synap402.com/)</sub> | `https://synap402.com/v1` |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://docs.bytez.com/model-api/docs/billing)</sub> | `https://api.bytez.com/models/v2/openai/v1` |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://www.cerebrium.ai/)</sub> | <sub>仅原生 API — [接入说明](https://free-llm.com/provider/cerebrium)</sub> |
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://replicate.com/)</sub> | <sub>仅原生 API — [接入说明](https://free-llm.com/provider/replicate)</sub> |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ 邮箱注册 · [🔑&nbsp;密钥](https://console.upstage.ai/)</sub> | `https://api.upstage.ai/v1` |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://gonkabroker.com)</sub> | `https://proxy.gonkabroker.com/v1` |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://moark.com/docs/FAQ)</sub> | `https://api.moark.com/v1` |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://www.sarvam.ai/api-pricing)</sub> | `https://api.sarvam.ai/v1` |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://www.xfyun.cn/doc/spark/HTTP调用文档.html)</sub> | `https://spark-api-open.xf-yun.com/v1` |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 手机验证 · [🔑&nbsp;密钥](https://www.sensenova.cn/token-plan)</sub> | `https://token.sensenova.cn/v1` |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://docs.sailresearch.com/pricing)</sub> | `https://api.sailresearch.com/v1` |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://www.ibm.com/products/watsonx-ai/pricing)</sub> | <sub>仅原生 API — [接入说明](https://free-llm.com/provider/ibm-watsonx)</sub> |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://portal.nousresearch.com)</sub> | `https://inference-api.nousresearch.com/v1` |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://www.experientiallabs.ai/pricing)</sub> | `https://api.experientiallabs.ai/v1` |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://experiments.hetzner.com/inference)</sub> | `https://inference.hetzner.com/api/v1` |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 需绑卡 · [🔑&nbsp;密钥](https://www.tencentcloud.com/act/pro/tokenhub)</sub> | `https://tokenhub-intl.tencentmaas.com/v1` |
<!--TABLE:QUICKREF:END-->

---

## 我们如何保证准确

- **只认官方来源。** 每一项上线前，都会在提供商自己的价格页、文档或公开的 `/v1/models` 列表上核实免费额度。第三方列表和博客文章不算数。
- **每晚重建。** 本 README 中的表格、[免费额度变更日志](FREE-TIER-CHANGELOG.md)和 Router 的目录快照每天都根据 free-llm.com 数据库重新生成。手动修改表格会被覆盖，更正要改数据本身。
- **不会悄悄消失。** 当某个模型或提供商不再免费时，会被标记并连同日期记录在[更新日志](https://free-llm.com/changelog)（[RSS](https://free-llm.com/changelog-feed)）中，而不是直接删除。
- **读者让它保持诚实。** 许多变更来自注意到免费额度结束的用户。如果你发现了，请附上官方页面链接[提交更正](https://github.com/nejib1/Free-LLM/issues/new/choose)，或使用提供商页面上的报告按钮。
- **不收录密钥池。** 转售或共享其他公司模型访问权的服务（"免费 Claude/GPT 密钥"）一律不收录。

---

## 常见问题

<details>
<summary><strong>这些 API 真的免费吗？</strong></summary>

是的，但有限制。这里的"免费"指不付费也能真正调用 API：有速率限制的免费层、可续期额度，或注册赠送的一次性额度。没有一个是无限的，每个提供商的限制都已列出。只有 Ollama 等本地工具才是真正无限的，因为它们运行在你自己的硬件上。
</details>

<details>
<summary><strong>需要信用卡吗？</strong></summary>

大多数提供商都不需要。每一项都标注了 🟢 无需绑卡、✉️ 邮箱注册、📱 手机验证或 💳 需绑卡。有时即使不扣费，也需要绑卡才能开通免费额度，这类提供商都有明确标注。
</details>

<details>
<summary><strong>应该从哪个开始？</strong></summary>

对大多数人来说：[Google AI Studio](https://free-llm.com/provider/google-ai-studio)（Gemini、长上下文、图像）、[Groq](https://free-llm.com/provider/groq-cloud)（速度）和 [OpenRouter](https://free-llm.com/provider/openrouter)（一个密钥用众多免费模型）。三者都无需绑卡。其他需求请看[从这里开始](#-从这里开始当前最佳免费选择)。
</details>

<details>
<summary><strong>免费额度可以用于生产环境或商业用途吗？</strong></summary>

取决于提供商。有些免费层明确仅限评估或非商业用途（例如 Cohere 的试用密钥），部分网关上的免费模型可能会用你的提示词做训练。在此基础上开发前请阅读提供商条款，并准备好备选方案：免费额度可能随时变更。
</details>

<details>
<summary><strong>我的提示词是私密的吗？</strong></summary>

不一定。部分免费模型（尤其是聚合平台上的）可能会记录输入或用于训练。请查看提供商的数据政策，不要向免费接口发送机密或个人数据；重视隐私时请使用本地模型。
</details>

<details>
<summary><strong>达到上限会怎样？</strong></summary>

API 会返回 HTTP `429 Too Many Requests`，直到时间窗口重置（按分钟、按天或按月，因提供商而异）。使用退避重试、切换到提供同一模型的其他提供商，或使用 [Free-LLM Router](#-free-llm-router把许多小额免费套餐合成一个大的)，都能让服务继续运行。
</details>

<details>
<summary><strong>有机器可读的版本吗？</strong></summary>

有：[free-llm.com/catalog.json](https://free-llm.com/catalog.json) 列出了所有免费提供商和模型，包含 Base URL 和限制。Router 使用的就是它，你也可以用。
</details>

---

## 指南

[free-llm.com/guides](https://free-llm.com/guides/) 上的深度指南（英文），使用同一份数据保持更新：

| 入门 | 编程 | 进阶 |
|:---|:---|:---|
| [2026 年最佳免费 LLM API](https://free-llm.com/guides/best-free-llm-apis-2026) | [免费使用 Claude Code](https://free-llm.com/guides/claude-code-free) | [永不触发限流：回退链](https://free-llm.com/guides/free-llm-fallback-system) |
| [免费 LLM API 终极指南](https://free-llm.com/guides/ultimate-free-llm-api-guide) | [最适合编程的免费 LLM](https://free-llm.com/guides/best-free-llm-for-coding) | [OpenRouter 替代方案](https://free-llm.com/guides/openrouter-alternatives) |
| [Gemini 与 ChatGPT 免费层对比](https://free-llm.com/guides/gemini-vs-chatgpt-free) | [如何使用 OpenRouter](https://free-llm.com/guides/how-to-use-openrouter) | [用 Ollama 运行本地 LLM](https://free-llm.com/guides/local-llm-ollama-guide) |

📰 月度报告：[2026 年 11 月的变化](https://free-llm.com/guides/free-llm-apis-november-2026-what-changed)

---

## 代码示例

[`code-examples/`](code-examples/) 为每个提供商准备了一个文件夹，内含 `python.py`、`javascript.js`、`curl.sh` 和列出免费模型的 README；填入密钥即可运行。

**按编程助手：** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md) · [OpenCode](code-examples/opencode.md)

<!--CODEEX:PROVIDERS:START-->
**按提供商分类（70 个）：** [Agnes AI](code-examples/agnes-ai) · [AI Horde (OpenAI-compatible front)](code-examples/ai-horde) · [AIHubMix (free models)](code-examples/aihubmix) · [Aion Labs](code-examples/aion-labs) · [AnyAPI](code-examples/anyapi) · [Api.Airforce](code-examples/api-airforce) · [Arli AI](code-examples/arli-ai) · [BazaarLink](code-examples/bazaarlink) · [Bytez](code-examples/bytez) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Dahl Inference](code-examples/dahl-inference) · [Experiential Labs](code-examples/experiential-labs) · [Fireworks AI](code-examples/fireworks-ai) · [FreeInference](code-examples/freeinference) · [Friendli AI](code-examples/friendli-ai) · [Gonka Broker](code-examples/gonka-broker) · [GonkaRouter](code-examples/gonkarouter) · [Google AI Studio](code-examples/google-ai-studio) · [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](code-examples/vertex-ai-express) · [Grokified](code-examples/grokified) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [HPC-AI Model APIs](code-examples/hpc-ai) · [Hyperbolic](code-examples/hyperbolic) · [IBM watsonx.ai (Lite plan)](code-examples/ibm-watsonx) · [iFlytek Spark Lite](code-examples/iflytek-spark) · [Inception Labs](code-examples/inception-labs) · [Inferbase](code-examples/inferbase) · [Jina AI (Embeddings / Reader API)](code-examples/jina-ai) · [Kilo AI Gateway](code-examples/kilo-gateway) · [Kiosapi.id](code-examples/kiosapi) · [LLM.kiwi](code-examples/llm-kiwi) · [LLMTR](code-examples/llmtr) · [MegaNova AI](code-examples/meganova) · [Mixlayer](code-examples/mixlayer) · [Moark (Gitee AI)](code-examples/moark) · [ModelScope](code-examples/modelscope) · [Nous Portal](code-examples/nous-portal) · [NovAI](code-examples/novai) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OpenTyphoon (Typhoon API)](code-examples/opentyphoon) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Regolo.ai](code-examples/regolo-ai) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Routeway](code-examples/routeway) · [Sail Research](code-examples/sail-research) · [Sarvam AI](code-examples/sarvam-ai) · [Scaleway Generative APIs](code-examples/scaleway) · [SEA-LION API](code-examples/sea-lion) · [SenseNova (SenseTime)](code-examples/sensenova) · [SiliconFlow](code-examples/siliconflow) · [SimpleLLM](code-examples/simplellm) · [Tencent Cloud TokenHub](code-examples/tencent-tokenhub) · [Token Harbor](code-examples/token-harbor) · [Upstage](code-examples/upstage) · [Vectoree](code-examples/vectoree) · [Vercel AI Gateway](code-examples/vercel-ai-gateway) · [VLM Run Gateway](code-examples/vlm-run) · [Voyage AI (embeddings & rerankers)](code-examples/voyage-ai) · [Z.AI (GLM)](code-examples/z-ai) · [Zhipu BigModel (China)](code-examples/zhipu-bigmodel) · [Zro (MoonMath)](code-examples/zro)
<!--CODEEX:PROVIDERS:END-->

**本地 / 自托管：** [BentoML](code-examples/bentoml) · [GPT4All](code-examples/gpt4all) · [Jan.ai](code-examples/jan-ai) · [KoboldCpp](code-examples/koboldcpp) · [llama.cpp](code-examples/llama-cpp) · [llamafile](code-examples/llamafile) · [LM Studio](code-examples/lm-studio) · [Ollama](code-examples/ollama) · [Text Gen WebUI](code-examples/text-generation-webui)

<details>
<summary><strong>仓库结构</strong></summary>

```
Free-LLM/
├── README.md                  ← English
├── README.zh-CN.md            ← 简体中文（当前）
├── README.zh-TW.md            ← 繁體中文
├── README.ja.md               ← 日本語
├── README.ko.md               ← 한국어
├── FREE-TIER-CHANGELOG.md     ← 按日期记录每次免费额度的开始与结束
├── code-examples/             ← 可直接运行的代码，按提供商和编程工具分类
├── router/                    ← Free-LLM Router（源码、测试、文档）
├── package.json · Dockerfile  ← 安装或运行 Router
├── CHANGELOG.md               ← Router 版本说明
├── CONTRIBUTING.md · CODE_OF_CONDUCT.md · SECURITY.md · SUPPORT.md
└── LICENSE                    ← MIT
```
</details>

---

## 参与贡献

最有价值的贡献是更正：免费额度的变化速度，任何人都无法独自跟上。

1. **发现错误或过时信息？** 附上提供商官方页面链接，[提交数据更正](https://github.com/nejib1/Free-LLM/issues/new/choose)。请不要在 PR 中修改表格：表格每晚重新生成，更改必须落到数据里。
2. **缺少某个提供商？** 使用[提交表单](https://free-llm.com/submit)或 "Add a provider" issue 表单。欢迎服务商提交自己的服务，只需说明身份。
3. **有我们尚未覆盖的工具配置？** 欢迎向 [`code-examples/`](code-examples/) 和 Router 提交 PR，详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

**收录标准：** 真实的免费 API 访问（免费层、可续期额度或明确标注的试用额度），公开可用（无候补名单或封闭测试），由提供商自己运营（不收录转售或共享的密钥），并经官方页面核实。

---

## 链接与支持

- 🌐 [free-llm.com](https://free-llm.com) · 🧠 [免费模型](https://free-llm.com/models) · 🆚 [对比](https://free-llm.com/compare) · 📚 [指南](https://free-llm.com/guides/) · 📰 [更新日志](https://free-llm.com/changelog)（[RSS](https://free-llm.com/changelog-feed)）
- 🧩 [JSON 目录](https://free-llm.com/catalog.json) · ⚡ [Router](https://free-llm.com/router) · ➕ [提交提供商](https://free-llm.com/submit) · 🏆 [名人堂](https://free-llm.com/hall-of-fame)
- 💬 问题与想法：[GitHub Discussions](https://github.com/nejib1/Free-LLM/discussions) · 🐛 问题与更正：[issues](https://github.com/nejib1/Free-LLM/issues/new/choose)（[用哪个表单？](SUPPORT.md)） · 🔒 安全问题：[SECURITY.md](SECURITY.md) · 🤝 [行为准则](CODE_OF_CONDUCT.md)

如果这份列表为你节省了时间，点一个 ⭐ 能帮助更多人找到它。

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

**许可证：** MIT，见 [LICENSE](LICENSE)。

---

<p align="center"><sub>表格根据在线目录自动重建 — 最后更新：<!--LASTSYNC:START-->2026-11-26<!--LASTSYNC:END--></sub></p>
