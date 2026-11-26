<h1 align="center">Free-LLM — 所有免費 LLM API，一次查齊</h1>
<!--STATS:START-->
  <p align="center"><strong>來自 78 個提供商的 450+ 個免費 LLM 模型</strong> — 幾秒鐘內發現、比較並設定免費模型，另有 9 款本機/自架工具可無限私密使用。</p>
<!--STATS:END-->

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><strong>🌐 線上目錄：free-llm.com</strong></a> ·
  <a href="https://free-llm.com/models" target="_blank" rel="noopener">免費模型</a> ·
  <a href="https://free-llm.com/compare" target="_blank" rel="noopener">比較</a> ·
  <a href="https://free-llm.com/guides" target="_blank" rel="noopener">指南</a> ·
  <a href="https://free-llm.com/changelog" target="_blank" rel="noopener">更新紀錄</a> ·
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

免費 LLM API 每週都在變：模型下架、免費方案開始要求綁卡、試用悄悄結束。本儲存庫把這些變化全部記錄下來。下面的每張表格都**每晚依據 [free-llm.com](https://free-llm.com) 的資料庫自動重建**，每個提供商都對照其官方價格頁、文件或公開模型清單核實過。你在這裡看到的，就是今天真正能用的。

- 🔎 **查找**：哪些提供商免費、免費哪些模型、限制是多少
- 💳 **看清門檻**：每一項都標明是否需要信用卡、手機號碼、電子信箱，或什麼都不需要
- ⚡ **直接上手**：Base URL、每個提供商的可執行程式碼，以及 Claude Code、Codex、Cursor、OpenCode 的設定
- 🔁 **不再碰壁**：[Free-LLM Router](#-free-llm-router把許多小額免費方案合成一個大的) 把你所有的免費金鑰匯集到一個位址

<details>
<summary><strong>目錄</strong></summary>

- [🚀 從這裡開始：目前最佳免費選擇](#-從這裡開始目前最佳免費選擇)
- [🧠 提供商最多的免費模型](#-提供商最多的免費模型)
- [📰 最近更新](#-最近更新)
- [⚡ Free-LLM Router：把許多小額免費方案合成一個大的](#-free-llm-router把許多小額免費方案合成一個大的)
- [快速開始：30 秒送出第一個請求](#快速開始30-秒送出第一個請求)
- [用免費模型驅動程式設計助手](#用免費模型驅動程式設計助手)
- [提供商目錄](#提供商目錄)
- [速查表：Base URL 與 API Key](#速查表base-url-與-api-key)
- [我們如何確保正確](#我們如何確保正確)
- [常見問題](#常見問題)
- [指南](#指南)
- [程式碼範例](#程式碼範例)
- [參與貢獻](#參與貢獻)
- [連結與支援](#連結與支援)

</details>

---

## 🚀 從這裡開始：目前最佳免費選擇

不知道從哪裡開始？每種常見需求提供一個好選擇。各列來自即時資料：如果某個提供商不再免費，下一次夜間同步時會自動換成次佳選項。

<!--TOPPICKS:START-->
| 你的需求 | 推薦 | 免費額度 | 免費模型 |
|:---|:---|:---|:---|
| 綜合最佳（長上下文、圖像） | **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 免綁卡</sub> | ⏱️ Varies by model (per-model limits are now shown only inside AI Studio)<br>📅 Varies by model (shown in AI Studio). Free: Gemini 4 Hydrogen, Gemini…<br><sub>[詳情 →](https://free-llm.com/provider/google-ai-studio)</sub> | Gemini 3.8 Flash, Gemini 3 Flash Preview, Gemini 3.1 Flash-Lite |
| 回應最快 | **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 免綁卡</sub> | ⏱️ 30 RPM; 8K TPM on most chat models (varies by model)<br>📅 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by m…<br><sub>[詳情 →](https://free-llm.com/provider/groq-cloud)</sub> | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B |
| 一把金鑰用眾多免費模型 | **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 免綁卡</sub> | ⏱️ 20 requests/minute<br>📅 50 requests/day (up to 1000 with $10 topup) | Gemma 4 31B IT, Gemma 4 26B A4B IT, Nemotron 3.5 Super VL |
| 大型開源模型（GLM、Mistral Large、Nemotron） | **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 手機驗證</sub> | ⏱️ ~40 RPM (varies per model, not published) | GLM-5.3 Flash, Gemma 4 31B IT, Nemotron 3.5 Super VL |
| 免註冊直接試用 | **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 免綁卡</sub> | ⏱️ 200 requests/hour per IP on free models (anonymous use allowed)<br>📅 Default free models only | Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B, Nemotron 3.5 Lightning |
| Claude Code（原生 Anthropic 端點） | **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ 信箱註冊</sub> | ⏱️ ~1 request/second (Flash models)<br>📅 ~1,000 requests/day (Flash tier) | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| 一個免費方案涵蓋文字、圖像與語音 | **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 免綁卡</sub> | ⏱️ 依模型而異<br>📅 每天 10,000 neurons | Qwen3.8 27B, GLM 4.7 Flash, GPT OSS 120B |
| 歐盟境內託管 | **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ 信箱註冊</sub> | ⏱️ 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-…<br><sub>[詳情 →](https://free-llm.com/provider/ovh-ai)</sub> | Qwen3.8 27B, GPT OSS 120B, Gemma 4 26B A4B |
| 無限且私密（在你的電腦上執行） | **[Ollama](https://free-llm.com/provider/ollama)**<br><sub>🟢 免綁卡</sub> | 無限制：取決於你的硬體 | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B |
<!--TOPPICKS:END-->

**註冊要求圖例：** 🟢 免綁卡 · ✉️ 信箱註冊 · 📱 手機驗證 · 💳 需綁卡（通常不扣款）

---

## 🧠 提供商最多的免費模型

同一個開源模型往往在多個提供商都免費。如果其中一家限流或下架了該模型，換一家即可。🟢 = 該提供商免綁卡。

<!--TOPMODELS:START-->
| 模型 | 免費提供商數 | 推薦入口 | 上下文 |
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

**→ 全部免費模型，可依名稱、上下文長度與視覺能力搜尋：[free-llm.com/models](https://free-llm.com/models)**

---

## 📰 最近更新

<!--WHATSNEW:START-->
- `2026-11-26` ⛔ **[Inferaft](https://free-llm.com/provider/inferaft)** — 免費額度已結束
- `2026-11-26` 🆕 **[Plugsky](https://free-llm.com/provider/plugsky)** — 新增免費服務商
- `2026-11-25` ⛔ **[IteraCompute](https://free-llm.com/provider/iteracompute)** — 免費額度已結束
- `2026-11-23` ➖ **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)** — 不再免費: Dots3-Note Preview, Cohere North Mini Code
- `2026-11-23` ➖ **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)** — 不再免費: Gemini 2.5 Flash-Lite, Gemini 2.5 Flash
- `2026-11-23` ➖ **[Api.Airforce](https://free-llm.com/provider/api-airforce)** — 不再免費: GLM-4.7 Flash
- `2026-11-23` ➖ **[Routeway](https://free-llm.com/provider/routeway)** — 不再免費: DeepSeek V4.1 Flash (free)
- `2026-11-21` ⛔ **[LLM7.io](https://free-llm.com/provider/llm7-io)** — 免費額度已結束
- `2026-11-21` ⛔ **[Mistral (La Plateforme)](https://free-llm.com/provider/mistral-ai)** — 免費額度已結束
- `2026-11-21` ⛔ **[Ollama Cloud](https://free-llm.com/provider/ollama-cloud)** — 免費額度已結束
- `2026-11-21` 🆕 **[HiAPI](https://free-llm.com/provider/hiapi)** — 新增免費服務商
- `2026-11-21` 🆕 **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)** — 新增免費服務商

**→ 完整記錄: [FREE-TIER-CHANGELOG.md](FREE-TIER-CHANGELOG.md) · [free-llm.com/changelog](https://free-llm.com/changelog) · [RSS](https://free-llm.com/changelog-feed)**
<!--WHATSNEW:END-->

---

## ⚡ Free-LLM Router：把許多小額免費方案合成一個大的

上面每個提供商都只給一個*小*的免費方案，各有各的金鑰與限制。Router 把它們疊加起來：你的應用程式或程式設計代理只需連到你電腦上的**一個** OpenAI / Anthropic 相容位址，每個請求都會送往此刻可用的免費模型。某家忙碌或額度用完時，下一家立即接手。

```bash
npm install -g github:nejib1/Free-LLM   # 安裝 `free-llm` 指令
free-llm                                # 引導式設定，接著開啟 http://localhost:4000
free-llm setup claude                   # 讓 Claude Code 使用免費模型（也支援 codex、opencode、aider）
```

<p align="center"><a href="router/README.md"><img src="router/docs/dashboard.png" width="760" alt="Free-LLM Router dashboard"></a></p>

- **一個位址，所有免費金鑰**：支援 OpenAI、Anthropic Messages、Codex Responses、Ollama 與 MCP 介面
- **自動更新**：提供商清單當天跟隨 free-llm.com 更新，失效的方案會自動移除
- **本機且私密**：在你的電腦上執行，金鑰加密儲存，只傳送給對應的提供商；不需帳號、無遙測、零相依套件

**→ [運作原理](router/README.md)** · [free-llm.com/router](https://free-llm.com/router) · [版本說明](CHANGELOG.md)

---

## 快速開始：30 秒送出第一個請求

大多數提供商都提供 **OpenAI 相容端點**，所以任何接受 Base URL 與 API Key 的 SDK 或工具都能用：替換這兩個值即可，程式碼不必改。範例使用 Groq（免綁卡，約每分鐘 30 次、每天 1,000 次請求），請先[取得金鑰](https://console.groq.com/keys)。

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
    messages=[{"role": "user", "content": "用一句話解釋什麼是速率限制。"}],
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
  messages: [{ role: "user", content: "用一句話解釋什麼是速率限制。" }],
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

**更換提供商** = 修改 `base_url`、金鑰與模型 ID，三者都在[速查表](#速查表base-url-與-api-key)與各提供商頁面上。收到 HTTP `429` 代表達到免費上限：等待時間視窗重置，或切換到其他提供商（[指南](https://free-llm.com/guides/free-llm-fallback-system)），或交給 [Router](#-free-llm-router把許多小額免費方案合成一個大的) 自動處理。

---

## 用免費模型驅動程式設計助手

| 工具 | 方法 | 指南 |
|:---|:---|:---|
| **Claude Code** | 需要 Anthropic Messages API：使用有原生 Anthropic 端點的提供商（OpenRouter、Z.AI、FreeInference、本機 Ollama）、LiteLLM 代理，或 `free-llm setup claude` | [`claude-code.md`](code-examples/claude-code.md) |
| **Codex CLI** | 在 `~/.codex/config.toml` 中新增提供商，並設定 `wire_api = "chat"` | [`codex.md`](code-examples/codex.md) |
| **Cursor** | Settings → Models → 覆寫 OpenAI Base URL，新增模型 ID | [`cursor.md`](code-examples/cursor.md) |
| **OpenCode** | 使用 `/connect`，或為每個提供商設定環境變數 | [`opencode.md`](code-examples/opencode.md) |

代理工作階段會連續送出大量請求，每分鐘 20–30 次的方案很快就會被限流。請選擇速度快的提供商（Groq、NVIDIA NIM），用 Router 分散負載，或執行本機模型。

---

## 提供商目錄

免費存取分為三類，因為它們隨時間變化的方式完全不同。每個提供商名稱都連到 free-llm.com 上的頁面，內含全部免費模型、確切限制、設定步驟與社群備註。

### ⚡ 永久免費額度

持續可用的免費存取，有速率限制；額度不會用完，而是定期重置。

<!--TABLE:PERMANENT:START-->
| 提供商 · 註冊要求 | 免費額度與限制 | 主要模型 |
|:---|:---|:---|
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 免綁卡</sub> | ⏱️ Varies by model (per-model limits are now shown only inside AI Studio)<br>📅 Varies by model (shown in AI Studio). Free: Gemini 4 Hydrogen, Gemini 3.x Flash / Flash-Lite a…<br>🗓️ 完全免費<br><sub>[詳情 →](https://free-llm.com/provider/google-ai-studio)</sub> | Gemini 3.8 Flash, Gemini 3 Flash Preview, Gemini 3.1 Flash-Lite, Gemini 3.5 Flash-Lite |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 免綁卡</sub> | ⏱️ 30 RPM; 8K TPM on most chat models (varies by model)<br>📅 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model)<br>🗓️ Free Forever | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B, Whisper Large v3 |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 手機驗證</sub> | ⏱️ ~40 RPM (varies per model, not published) | GLM-5.3 Flash, Gemma 4 31B IT, Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 免綁卡</sub> | ⏱️ 依模型而異<br>📅 每天 10,000 neurons<br>🗓️ ~300,000 neurons/month | Qwen3.8 27B, GLM 4.7 Flash, GPT OSS 120B, Gemma 4 26B A4B |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 免綁卡</sub> | ⏱️ 20 requests/minute<br>📅 1,000 API calls/month (trial key)<br>🗓️ 1,000 API calls/month (trial key, non-commercial) | Command A (111B), Command A Vision, Command A Reasoning, Command R+ (08-2024) |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ 信箱註冊</sub> | ⏱️ ~1 request/second (Flash models)<br>📅 ~1,000 requests/day (Flash tier)<br>🗓️ Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 免綁卡</sub> | ⏱️ 200 requests/hour per IP on free models (anonymous use allowed)<br>📅 Default free models only<br>🗓️ Free plan, no expiry | Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B, Nemotron 3.5 Lightning, Glyph Cluster (stealth) |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ 信箱註冊</sub> | ⏱️ 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go)<br>🗓️ Beta Access | Qwen3.8 27B, GPT OSS 120B, Gemma 4 26B A4B, Llama 3.3 70B Instruct |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 手機驗證</sub> | ⏱️ Concurrency limited dynamically according to platform load<br>📅 Counted in Magicubes: about 0.5, 1 or 2 per call depending on model size<br>🗓️ Free, no billing | Qwen3.8 27B, GLM-4.7 Flash, DeepSeek V4.1 Flash (1017), DeepSeek V4.1 Flash |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 免綁卡</sub> | ⏱️ Not published ("generous quota"; HTTP 429 when rate-limited)<br>📅 No published daily cap | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M3, Qwen3.6 35B A3B |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 手機驗證</sub> | ⏱️ Fixed limits on free models, shown in the console after login<br>📅 Not published on the public site<br>🗓️ Free models available after identity verification | Qwen3.5 4B, GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 手機驗證</sub> | ⏱️ Low concurrency on free Flash models (GLM-4.7-Flash reported at 1 concurrent request) | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4-Flash-250414, GLM-4.6V-Flash (vision) |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 免綁卡</sub> | ⏱️ Queue-based; anonymous requests have the lowest priority, registered users earn kudos for prio…<br>📅 No fixed cap (volunteer capacity)<br><sub>[詳情 →](https://free-llm.com/provider/ai-horde)</sub> | L3 8B Stheno v3.2, Gemma 4 E4B IT, Qwen3 4B, Llama 3.2 1B Instruct |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 免綁卡</sub> | ⏱️ 5 requests/min before the first top-up<br>📅 Free Flash models with no daily cap published; $2 welcome credit for paid models | GLM-4.7 Flash, GLM-4.6V Flash, GLM-4.1V Thinking Flash, CogView-3 Flash |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 免綁卡</sub> | ⏱️ API key required (anonymous access removed); no card<br>📅 Free usage paid from Quest Pollen earned in the dashboard<br>🗓️ Free usage is paid from Quest Pollen earned in the dashboard | GLM 5.3 Flash, GPT-OSS 20B, DeepSeek V4 Flash, Mistral Large 3 |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 免綁卡</sub> | ⏱️ Not published (daily credit allowance)<br>📅 Daily free credit allowance (amount not published by Aion Labs)<br>🗓️ Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 免綁卡</sub> | ⏱️ 1 RPM<br>📅 1,000 requests/day<br>🗓️ Free plan, $0/month | GPT-OSS 20B, Kimi K2.7 Code, Llama Instant |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 免綁卡</sub> | ⏱️ 30 requests/day on the free plan; effective upstream rate limits also apply<br>📅 30 requests/day<br>🗓️ 800 rounds/month | fm-v1-lite (free tier alias, default model), fm-v1-standard (paid, Standard plan only), fm-v1-pro (paid, Pro plan only) |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 免綁卡</sub> | ⏱️ 5 requests/second, 200 RPM (text models); 20 RPM for OCR<br>📅 No daily cap published | Typhoon 2.5 30B A3B Instruct, Typhoon OCR 1.5 |
| **[Plugsky](https://free-llm.com/provider/plugsky)**<br><sub>🟢 免綁卡</sub> | ⏱️ 30 RPM<br>📅 500 requests/day (about 100/day for accounts created from 2 Nov 2026)<br>🗓️ Free plan, no card, 2 API keys | plugsky-micro, plugsky-lite |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ 信箱註冊</sub> | ⏱️ Baseline rate limits (figures not published) | MiniMax M3, Auto router, Nemotron 3 Ultra, Nemotron 3 Super |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ 信箱註冊</sub> | ⏱️ 10 requests/minute per user (increase on request: sealion@aisingapore.org) | Qwen SEA-LION v4.5 27B Instruct, Llama SEA-LION v3.5 70B Reasoning, SEA-Guard (safety), SEA-LION Embedding 600M |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ 信箱註冊</sub> | ⏱️ About 30 RPM per account (video 2 RPM), per third-party listings | Agnes 3.0 Flash, Agnes 2.5 Flash, Agnes Image 2.1 Flash (image) |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ 信箱註冊</sub> | ⏱️ 30 requests per minute per API key, enforced as one request every 2 seconds (429 with Retry-Af…<br>📅 None published<br>🗓️ None published<br><sub>[詳情 →](https://free-llm.com/provider/merkium)</sub> | Ganymede 1.1 (now Neptune), Pluto 1.2 Pro (now Ceres), Pluto 1.2 Flash (now Ceres) |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ 信箱註冊</sub> | ⏱️ 5 RPM on :free models<br>📅 200 requests/day<br>🗓️ Starter plan free, shared queue | MiniMax M3.1 Flash (free), Muse Glimmer 30B |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ 信箱註冊</sub> | ⏱️ 1 request at a time; max 12K context tokens<br>📅 Limited trial uses per model (about 5 requests per 2 days, per third-party list) | Qwen3.5 27B Derestricted |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ 信箱註冊</sub> | ⏱️ Per-organization, per-model RPM/TPM (values shown in console only) | Qwen3.5 4B (free) |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 手機驗證</sub> | ⏱️ Not published on the HTTP doc<br>📅 Not published (Lite is free) | Spark Lite |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 手機驗證</sub> | 📅 Not published (\"限时放量\" during public beta) | SenseNova 6.8 Flash Lite |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 需綁卡</sub> | ⏱️ Standard rate limits (figures not published)<br>📅 Free models only (no monthly credit)<br>🗓️ Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 ch…<br><sub>[詳情 →](https://free-llm.com/provider/nous-portal)</sub> | StepFun Step 3.7 Flash, Upstage Solar Mini 4, Qwen4 Max, LongCat 2.5 |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 需綁卡</sub> | ⏱️ 10 requests, 4M input / 100K output tokens per 60s (per API key)<br>📅 No daily cap published (free while the API is experimental); a Hetzner account with billing de…<br>🗓️ Free until the experiment ends on 8 December 2026<br><sub>[詳情 →](https://free-llm.com/provider/hetzner-inference)</sub> | Qwen3.8 27B, Qwen3.6 35B A3B |
<!--TABLE:PERMANENT:END-->

### 💰 可續期額度

每天或每月自動補充的免費額度（點數、token 或 neurons）。

<!--TABLE:RENEWABLE:START-->
| 提供商 · 註冊要求 | 免費額度與限制 | 主要模型 |
|:---|:---|:---|
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 免綁卡</sub> | 🎁 50 requests/day (up to 1000 with $10 topup)<br>⏱️ 20 requests/minute | Gemma 4 31B IT, Gemma 4 26B A4B IT, Nemotron 3.5 Super VL, Recursive Flint v1.0 (free) |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ 信箱註冊</sub> | 🎁 $5/month<br>⏱️ Lower per-model limits than the paid tier (429 on excess) | GLM-4.7 Flash, GPT-OSS 120B, Llama 3.3 70B, Nemotron 3.5 Lightning (free) |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 免綁卡</sub> | 🎁 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models<br>⏱️ 20 RPM on free models (60 RPM for paying orgs) | Gemma 4 31B IT, Nemotron 3.5 Lightning 30B A3B, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 免綁卡</sub> | 🎁 Tier 1: 50-500 free-model requests/day (varies by model)<br>⏱️ Tier 1 (free): 20-200 RPM | GLM 4.7 Flash (needs $1 top-up per third-party list), Mistral Small 3.2 24B, L3 8B Stheno v3.2, Manta Pro 1.0 |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 免綁卡</sub> | 🎁 $0.50 of managed model usage per day; 5,000 requests per month<br>⏱️ 100 managed requests per day | GPT-OSS 120B, Gemma 4 31B IT, GLM-4.7 Flash, DeepSeek V4 Flash |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 免綁卡</sub> | 🎁 See provider<br>⏱️ See provider | GLM 5.3 Flash (zai-org/GLM-5.3-Flash), gpt-oss 120B (openai/gpt-oss-120b), DeepSeek V4.1 Flash (deepseek-ai/DeepSeek-V4.1-Flash), GLM 5.3 (zai-org/GLM-5.3) |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 免綁卡</sub> | 🎁 100K ANY tokens per day, free models only<br>⏱️ Limited API calls on the Free plan (exact RPM not published) | See provider |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ 信箱註冊</sub> | 🎁 Per-model daily allowance (e.g. 200K tokens/day on dated previews)<br>⏱️ Not published; lower allowance in an account's first 24h | Qwen3.8 27B (free), Gemma 4 31B, DeepSeek V4.1 Flash, GLM-5.3 |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ 信箱註冊</sub> | 🎁 100 requests/day and 1M tokens/day per account (500 RPD on some, e.g. glm-4.7-flash-free, codi…<br>⏱️ 5 RPM per account on most *-free routes<br><sub>[詳情 →](https://free-llm.com/provider/aihubmix)</sub> | Gemma 4 31B IT (free), GLM 4.7 Flash (free), Nemotron 3 Ultra 550B A55B (free), Coding GLM 5.3 (free) |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ 信箱註冊</sub> | 🎁 Daily cap in points (pts), per account; resets 00:00 UTC+8<br>⏱️ 20 RPM per account, 30 RPM per API key, 120 RPM per IP, 8 concurrent requests per key | GLM-5.3-Flash, Qwen3.8-27B, Gemma-4-31B-IT, DeepSeek-V4.1-Flash |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ 信箱註冊</sub> | 🎁 50 requests/day per account shared across free models, reset 07:00 WIB<br>⏱️ 5 requests/minute (free models) | GLM 4.7 Flash, Gemma 4 26B, Llama 3.1 8B, Qwen3 30B |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ 信箱註冊</sub> | 🎁 60 weighted units/day (120 with credit), resets 00:00 UTC<br>⏱️ 10 RPM (20 RPM with any credit), 2 concurrent requests | DeepSeek V4 Flash 0731 (free), Nemotron 3.5 Lightning (free), Glyph Cluster (stealth), Qwen3.7 Flash |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ 信箱註冊</sub> | 🎁 Free-model hourly/daily request and token allowances (values per account, not published)<br>⏱️ Account-specific (read via GET /v1/rate-limit) | Llama 3.1 8B Free, Gemma E4B Free, Mistral 7B (tier free, $0), Kode 14B (tier free, $0) |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ 信箱註冊</sub> | 🎁 Free allowance, resets on a rolling 7-day period<br>⏱️ 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ 信箱註冊</sub> | 🎁 Resets every day (Flash models only)<br>⏱️ Daily usage allowance (amount not published) | GLM-5.3 Flash, DeepSeek V4.1 Flash |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ 信箱註冊</sub> | 🎁 See provider<br>⏱️ No per-key RPM/TPM cap; one request at a time per account | DeepSeek V4.1 Flash 1017 |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ 信箱註冊</sub> | 🎁 50 requests/day (first 7 days), then 10 requests/day<br>⏱️ 10 requests/minute per key | qwen3-coder-30b |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ 信箱註冊</sub> | 🎁 $1 free credits, refreshed every 4 weeks<br>⏱️ 1 concurrent request (open models); 10 requests/second (closed models) | See provider |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 手機驗證</sub> | 🎁 Monthly free token grant after SMS verification (does not accumulate)<br>⏱️ Network limits (see docs.gonkabroker.com Limits & Quotas) | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 手機驗證</sub> | 🎁 100 free calls/day per user (free experience access token) | GLM 5.3 Flash, Qwen3.8 27B, DeepSeek V4 Flash 0731 |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 需綁卡</sub> | 🎁 $5 free credits every month (payment method attached)<br>⏱️ Not published for Free plan (most relaxed on flex window) | GLM 5.3 Flash, Gemma 4 31B IT, GLM 5.3, Kimi K3 |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 需綁卡</sub> | 🎁 300,000 tokens/month + 20 CUH/month<br>⏱️ About 2 requests/second (Lite) | GPT-OSS 120B, Llama 3.3 70B Instruct, Mistral Small 3.1 24B, Granite 4 H Small |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 需綁卡</sub> | 🎁 1M input+output tokens/day shared across free core models, reset 00:00 UTC<br>⏱️ 10 RPM and 250K TPM per free core model | DeepSeek V4.1 Flash 1017, GPT-6 Luna, Clef Flash (decision endpoint, free promo) |
<!--TABLE:RENEWABLE:END-->

### 🎁 一次性試用額度

註冊時一次性發放的額度，用完即止。適合在付費前試用大型模型。

<!--TABLE:TRIAL:START-->
| 提供商 · 註冊要求 | 免費額度 | 主要模型 |
|:---|:---|:---|
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 需綁卡</sub> | 🎁 $5 after adding a verified payment method (expires after 30 days)<br>⌛ 30 天 | GPT OSS 120B, Qwen 3.8 27B |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ 信箱註冊</sub> | 🎁 1M tokens (+60 min audio transcription), all serverless models<br>⌛ 一次性 | Qwen3.8 27B, GPT-OSS 120B, DeepSeek V4.1 Flash (1017), Gemma 4 26B A4B IT |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ 信箱註冊</sub> | 🎁 Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1)<br>⌛ 一次性 | GLM 5.3 Flash, GPT-OSS 120B, DeepSeek V4.1 Flash, GLM 5.3 |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ 信箱註冊</sub> | 🎁 ~1M tokens per model, 90 days (Singapore; newer models only since Oct 29, 2026)<br>⌛ One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ 信箱註冊</sub> | 🎁 No automatic sign-up credit; $10 per referral (both sides)<br>⌛ 一次性 | Qwen3.8 27B, GLM 5.3, Llama 3.3 70B Instruct, Kimi K3 |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 手機驗證</sub> | 🎁 $1 after phone verification (Free Tier)<br>⌛ 一次性 | Qwen3.8 27B, GLM-5.3 Flash, DeepSeek V4.1 Flash, DeepSeek V4 Flash 0731 |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 免綁卡</sub> | 🎁 30-day trial, 1M tokens/day, no card<br>⌛ 30 天 | Qwen3.8 27B, GPT-OSS 120B, Gemma 4 31B, GLM-5.2 |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 免綁卡</sub> | 🎁 Free tokens on an auto-generated key (amount not stated on page)<br>⌛ Keys do not expire | Jina Embeddings v5 Text Small, Jina Embeddings v5 Text Nano, Jina Embeddings v5 Omni Small, Jina Embeddings v3 |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 免綁卡</sub> | 🎁 100 free credits on sign-up (~$1, at $0.01/credit)<br>⌛ One-time, then pay-as-you-go | Qwen3.8 27B, Gemma 4 26B A4B IT, Qwen3.5 0.8B, DiffusionGemma 26B A4B |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 免綁卡</sub> | 🎁 $5<br>⌛ 一次性 | Grok 4.7, grok-4.6, grok-4.3, grok-build-0.1 |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 免綁卡</sub> | 🎁 1M free tokens for new users<br>⌛ 一次性 | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M2.7 |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 免綁卡</sub> | 🎁 100M tokens<br>⌛ One-time (new accounts) | Mercury 3, Mercury 2.5, Mercury 2 |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 免綁卡</sub> | 🎁 $5 welcome credit after CLI login<br>⌛ 一次性 | Vectoree Auto (router) |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ 信箱註冊</sub> | — | DeepSeek V4.1 Flash, GLM 5.3, GPT-6.1 Sol, Claude Opus 5.5 |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ 信箱註冊</sub> | 🎁 First 200M tokens free per model (voyage-4 family, rerank-2.5); 50M on domain models<br>⌛ One-time per account per model | Voyage 4 Large, Voyage 4, Voyage 4 Lite, Voyage Code 3 |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ 信箱註冊</sub> | 🎁 Trial credits at onboarding (amount not published)<br>⌛ 一次性 | GLM 5.3 Flash, Gemma 4 31B, GLM 5.3, GLM 5.2 |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ 信箱註冊</sub> | 🎁 Free-tier quota access, no billing account<br>⌛ Up to 90 days for new Google Cloud users | Gemini 3.1 Pro Preview, Gemini 3 Flash Preview, Gemini 2.5 Pro, Gemini 2.5 Flash |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ 信箱註冊</sub> | — | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ 信箱註冊</sub> | 🎁 $2 free voucher on signup ($4 with an invite code, per third-party list)<br>⌛ 一次性 | Kimi K2.7 Code |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ 信箱註冊</sub> | 🎁 No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per sec…<br>⌛ 一次性<br><sub>[詳情 →](https://free-llm.com/provider/cerebrium)</sub> | See provider |
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ 信箱註冊</sub> | 🎁 Limited free runs on select models<br>⌛ 一次性 | See provider |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ 信箱註冊</sub> | 🎁 $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify)<br>⌛ 3 個月 | See provider |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 手機驗證</sub> | 🎁 INR 100 free credits on signup<br>⌛ One-time; credits do not expire (per third-party list) | Sarvam 105B, Sarvam 105B Conversations |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 需綁卡</sub> | 🎁 1M free tokens per language model, once per account per model<br>⌛ 90 days after claim (intl promo page; docs say 1 year); campaign ends 2026-12-31" - DeepSeek-V…<br><sub>[詳情 →](https://free-llm.com/provider/tencent-tokenhub)</sub> | See provider |
<!--TABLE:TRIAL:END-->

### 🖥️ 本機 / 自架（無限、私密、永久免費）

| 工具 | 類型 | 亮點 |
|:---|:---|:---|
| [Ollama](https://ollama.com/) | CLI + API | 100+ 模型，支援 GPU 加速，OpenAI 相容介面 |
| [LM Studio](https://lmstudio.ai/) | 桌面 GUI | 支援任意 GGUF 模型，內建模型瀏覽器，可離線使用 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ 引擎 | 執行任意 GGUF 模型，相依性極少 |
| [GPT4All](https://gpt4all.io/) | 桌面應用程式 | 純 CPU 執行，不需 GPU，開源（自 2025 年 2 月起未再發布新版） |
| [Jan.ai](https://jan.ai/) | 桌面應用程式 | 注重隱私，100% 離線的 ChatGPT 替代品 |
| [KoboldCpp](https://github.com/LostRuins/koboldcpp) | 單一執行檔 | 針對創意寫作最佳化，支援 GGUF |
| [llamafile](https://github.com/mozilla-ai/llamafile) | 單一執行檔 | 跨平台，結合 llama.cpp 與 Cosmopolitan Libc |
| [Text Generation WebUI](https://github.com/oobabooga/textgen) | Gradio 介面 | 高度可自訂，適合進階本機實驗 |
| [BentoML](https://www.bentoml.com/) | 推論平台 | 可在任意環境部署任意 AI/ML 模型，正式環境等級 |

---

## 速查表：Base URL 與 API Key

目前所有免費的託管提供商，附可直接填入 OpenAI 相容用戶端的 Base URL 與建立金鑰的連結。註冊最簡單的排在前面。

<!--TABLE:QUICKREF:START-->
| 提供商 · 註冊要求 · API Key | OpenAI 相容 Base URL |
|:---|:---|
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://aistudio.google.com/)</sub> | `https://generativelanguage.googleapis.com/v1beta/openai` |
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://openrouter.ai/)</sub> | `https://openrouter.ai/api/v1` |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://console.groq.com/)</sub> | `https://api.groq.com/openai/v1` |
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 需綁卡 · [🔑&nbsp;金鑰](https://cerebras.ai/inference)</sub> | `https://api.cerebras.ai/v1` |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 手機驗證 · [🔑&nbsp;金鑰](https://build.nvidia.com/explore/discover)</sub> | `https://integrate.api.nvidia.com/v1` |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://dash.cloudflare.com/)</sub> | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1` |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://cohere.com/)</sub> | `https://api.cohere.ai/compatibility/v1` |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://z.ai/)</sub> | `https://api.z.ai/api/paas/v4` |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://kilo.ai/gateway)</sub> | `https://ai-gateway.kilo.ai/api/v1` |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://console.scaleway.com/generative-api/models)</sub> | `https://api.scaleway.ai/v1` |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://endpoints.ai.cloud.ovh.net/)</sub> | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://vercel.com/ai-gateway)</sub> | `https://ai-gateway.vercel.sh/v1` |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://fireworks.ai/)</sub> | `https://api.fireworks.ai/inference/v1` |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://bailian.console.alibabacloud.com/)</sub> | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 手機驗證 · [🔑&nbsp;金鑰](https://modelscope.cn)</sub> | `https://api-inference.modelscope.cn/v1` |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://requesty.ai/)</sub> | `https://router.requesty.ai/v1` |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://freeinference.org)</sub> | `https://freeinference.org/v1` |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://novita.ai/)</sub> | `https://api.novita.ai/v3/openai` |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 手機驗證 · [🔑&nbsp;金鑰](https://www.siliconflow.cn/pricing)</sub> | `https://api.siliconflow.cn/v1` |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 手機驗證 · [🔑&nbsp;金鑰](https://app.hyperbolic.xyz/)</sub> | `https://api.hyperbolic.ai/inference/v1` |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 手機驗證 · [🔑&nbsp;金鑰](https://docs.bigmodel.cn/cn/guide/start/model-overview)</sub> | `https://open.bigmodel.cn/api/paas/v4` |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://docs.meganova.ai/tiers)</sub> | `https://api.meganova.ai/v1` |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://inferbase.ai)</sub> | `https://api.inferbase.ai/v1` |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://regolo.ai)</sub> | `https://api.regolo.ai/v1` |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://aihorde.net)</sub> | `https://oai.aihorde.net/v1` |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://jina.ai/embeddings/)</sub> | `https://api.jina.ai/v1` |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://aiapi-pro.com)</sub> | `https://aiapi-pro.com/v1` |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://pollinations.ai)</sub> | `https://gen.pollinations.ai/v1` |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://www.runcrate.ai/inference/free)</sub> | `https://api.runcrate.ai/v1` |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://docs.vlm.run/gateway/rate-limits)</sub> | `https://gateway.vlm.run/v1/openai` |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://grokified.com)</sub> | `https://api.grokified.com/v1` |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://www.aionlabs.ai/pricing/)</sub> | `https://api.aionlabs.ai/v1` |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://api.airforce/)</sub> | `https://api.airforce/v1` |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://freemodel.online/)</sub> | `https://freemodel.online/v1 (OpenAI-compatible) · https://freemodel.online/api/gateway (Anthropic-compatible)` |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://gonkarouter.io)</sub> | `https://api.gonkarouter.io/v1` |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://www.inceptionlabs.ai/)</sub> | `https://api.inceptionlabs.ai/v1` |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://opentyphoon.ai)</sub> | `https://api.opentyphoon.ai/v1` |
| **[Plugsky](https://free-llm.com/provider/plugsky)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://plugsky.com/)</sub> | `https://api.plugsky.com/v1` |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://vectoree.ai)</sub> | `https://vectoree.ai/api/v1` |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 免綁卡 · [🔑&nbsp;金鑰](https://anyapi.ai)</sub> | `https://api.anyapi.ai/v1` |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://llmtr.com/en/terms)</sub> | `https://llmtr.com/v1` |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://aihubmix.com)</sub> | `https://aihubmix.com/v1` |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://developer.amd.com.cn/radeon/tokenfactory)</sub> | `https://developer.amd.com.cn/radeon/api/v1` |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://hiapi.ai/)</sub> | `https://api.hiapi.ai/v1` |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://docs.voyageai.com/docs/pricing)</sub> | `https://api.voyageai.com/v1` |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://friendli.ai/)</sub> | `https://inference.friendli.ai/v1` |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview)</sub> | <sub>僅原生 API — [接入說明](https://free-llm.com/provider/vertex-ai-express)</sub> |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://kiosapi.id/pricing)</sub> | `https://api.kiosapi.id/v1` |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://llm.kiwi/pricing)</sub> | `https://api.llm.kiwi/v1` |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://bazaarlink.ai/free)</sub> | `https://api.bazaarlink.ai/v1` |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://docs.sea-lion.ai/guides/inferencing/api)</sub> | `https://api.sea-lion.ai/v1` |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://simplellm.eu/docs/)</sub> | `https://api.simplellm.eu/v1` |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://agnes-ai.com)</sub> | `https://apihub.agnes-ai.com/v1` |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://inference.dahl.global/)</sub> | `https://inference.dahl.global/v1` |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://www.merkium.nl/)</sub> | `https://chat.merkium.nl/api/v1` |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://tokenharbor.ai)</sub> | `https://tokenharbor.ai/v1` |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://routeway.ai/)</sub> | `https://api.routeway.ai/v1` |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://zro.moonmath.ai)</sub> | `https://zro.moonmath.ai/v1` |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://www.arliai.com/pricing)</sub> | `https://api.arliai.com/v1` |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://cheapllm.shop/)</sub> | `https://cheapllm.shop/v1` |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://www.hpc-ai.com/model-apis)</sub> | `https://api.hpc-ai.com/inference/v1` |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://docs.mixlayer.com/credits-and-limits)</sub> | `https://models.mixlayer.ai/v1` |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://synap402.com/)</sub> | `https://synap402.com/v1` |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://docs.bytez.com/model-api/docs/billing)</sub> | `https://api.bytez.com/models/v2/openai/v1` |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://www.cerebrium.ai/)</sub> | <sub>僅原生 API — [接入說明](https://free-llm.com/provider/cerebrium)</sub> |
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://replicate.com/)</sub> | <sub>僅原生 API — [接入說明](https://free-llm.com/provider/replicate)</sub> |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ 信箱註冊 · [🔑&nbsp;金鑰](https://console.upstage.ai/)</sub> | `https://api.upstage.ai/v1` |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 手機驗證 · [🔑&nbsp;金鑰](https://gonkabroker.com)</sub> | `https://proxy.gonkabroker.com/v1` |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 手機驗證 · [🔑&nbsp;金鑰](https://moark.com/docs/FAQ)</sub> | `https://api.moark.com/v1` |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 手機驗證 · [🔑&nbsp;金鑰](https://www.sarvam.ai/api-pricing)</sub> | `https://api.sarvam.ai/v1` |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 手機驗證 · [🔑&nbsp;金鑰](https://www.xfyun.cn/doc/spark/HTTP调用文档.html)</sub> | `https://spark-api-open.xf-yun.com/v1` |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 手機驗證 · [🔑&nbsp;金鑰](https://www.sensenova.cn/token-plan)</sub> | `https://token.sensenova.cn/v1` |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 需綁卡 · [🔑&nbsp;金鑰](https://docs.sailresearch.com/pricing)</sub> | `https://api.sailresearch.com/v1` |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 需綁卡 · [🔑&nbsp;金鑰](https://www.ibm.com/products/watsonx-ai/pricing)</sub> | <sub>僅原生 API — [接入說明](https://free-llm.com/provider/ibm-watsonx)</sub> |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 需綁卡 · [🔑&nbsp;金鑰](https://portal.nousresearch.com)</sub> | `https://inference-api.nousresearch.com/v1` |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 需綁卡 · [🔑&nbsp;金鑰](https://www.experientiallabs.ai/pricing)</sub> | `https://api.experientiallabs.ai/v1` |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 需綁卡 · [🔑&nbsp;金鑰](https://experiments.hetzner.com/inference)</sub> | `https://inference.hetzner.com/api/v1` |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 需綁卡 · [🔑&nbsp;金鑰](https://www.tencentcloud.com/act/pro/tokenhub)</sub> | `https://tokenhub-intl.tencentmaas.com/v1` |
<!--TABLE:QUICKREF:END-->

---

## 我們如何確保正確

- **只認官方來源。** 每一項上線前，都會在提供商自己的價格頁、文件或公開的 `/v1/models` 清單上核實免費額度。第三方清單與部落格文章不算數。
- **每晚重建。** 本 README 中的表格、[免費額度變更紀錄](FREE-TIER-CHANGELOG.md)與 Router 的目錄快照每天都依據 free-llm.com 資料庫重新產生。手動修改表格會被覆蓋，更正要改資料本身。
- **不會悄悄消失。** 當某個模型或提供商不再免費時，會被標記並連同日期記錄在[更新紀錄](https://free-llm.com/changelog)（[RSS](https://free-llm.com/changelog-feed)）中，而不是直接刪除。
- **讀者讓它保持誠實。** 許多變更來自注意到免費額度結束的使用者。如果你發現了，請附上官方頁面連結[提交更正](https://github.com/nejib1/Free-LLM/issues/new/choose)，或使用提供商頁面上的回報按鈕。
- **不收錄金鑰池。** 轉售或共用其他公司模型存取權的服務（「免費 Claude/GPT 金鑰」）一律不收錄。

---

## 常見問題

<details>
<summary><strong>這些 API 真的免費嗎？</strong></summary>

是的，但有限制。這裡的「免費」指不付費也能真正呼叫 API：有速率限制的免費方案、可續期額度，或註冊贈送的一次性額度。沒有一個是無限的，每個提供商的限制都已列出。只有 Ollama 等本機工具才是真正無限的，因為它們在你自己的硬體上執行。
</details>

<details>
<summary><strong>需要信用卡嗎？</strong></summary>

大多數提供商都不需要。每一項都標示了 🟢 免綁卡、✉️ 信箱註冊、📱 手機驗證或 💳 需綁卡。有時即使不扣款，也需要綁卡才能開通免費額度，這類提供商都有明確標示。
</details>

<details>
<summary><strong>應該從哪個開始？</strong></summary>

對大多數人來說：[Google AI Studio](https://free-llm.com/provider/google-ai-studio)（Gemini、長上下文、圖像）、[Groq](https://free-llm.com/provider/groq-cloud)（速度）和 [OpenRouter](https://free-llm.com/provider/openrouter)（一把金鑰用眾多免費模型）。三者都免綁卡。其他需求請看[從這裡開始](#-從這裡開始目前最佳免費選擇)。
</details>

<details>
<summary><strong>免費額度可以用於正式環境或商業用途嗎？</strong></summary>

取決於提供商。有些免費方案明確僅限評估或非商業用途（例如 Cohere 的試用金鑰），部分閘道上的免費模型可能會用你的提示詞做訓練。在此基礎上開發前請閱讀提供商條款，並準備好備援方案：免費額度可能隨時變更。
</details>

<details>
<summary><strong>我的提示詞是私密的嗎？</strong></summary>

不一定。部分免費模型（尤其是聚合平台上的）可能會記錄輸入或用於訓練。請查看提供商的資料政策，不要向免費端點傳送機密或個人資料；重視隱私時請使用本機模型。
</details>

<details>
<summary><strong>達到上限會怎樣？</strong></summary>

API 會回傳 HTTP `429 Too Many Requests`，直到時間視窗重置（依提供商按分鐘、按天或按月）。使用退避重試、切換到提供同一模型的其他提供商，或使用 [Free-LLM Router](#-free-llm-router把許多小額免費方案合成一個大的)，都能讓服務持續運作。
</details>

<details>
<summary><strong>有機器可讀的版本嗎？</strong></summary>

有：[free-llm.com/catalog.json](https://free-llm.com/catalog.json) 列出了所有免費提供商與模型，包含 Base URL 與限制。Router 使用的就是它，你也可以用。
</details>

---

## 指南

[free-llm.com/guides](https://free-llm.com/guides/) 上的深度指南（英文），使用同一份資料保持更新：

| 入門 | 程式設計 | 進階 |
|:---|:---|:---|
| [2026 年最佳免費 LLM API](https://free-llm.com/guides/best-free-llm-apis-2026) | [免費使用 Claude Code](https://free-llm.com/guides/claude-code-free) | [永不觸發限流：備援鏈](https://free-llm.com/guides/free-llm-fallback-system) |
| [免費 LLM API 終極指南](https://free-llm.com/guides/ultimate-free-llm-api-guide) | [最適合程式設計的免費 LLM](https://free-llm.com/guides/best-free-llm-for-coding) | [OpenRouter 替代方案](https://free-llm.com/guides/openrouter-alternatives) |
| [Gemini 與 ChatGPT 免費方案比較](https://free-llm.com/guides/gemini-vs-chatgpt-free) | [如何使用 OpenRouter](https://free-llm.com/guides/how-to-use-openrouter) | [用 Ollama 執行本機 LLM](https://free-llm.com/guides/local-llm-ollama-guide) |

📰 月報：[2026 年 11 月的變化](https://free-llm.com/guides/free-llm-apis-november-2026-what-changed)

---

## 程式碼範例

[`code-examples/`](code-examples/) 為每個提供商準備了一個資料夾，內含 `python.py`、`javascript.js`、`curl.sh` 與列出免費模型的 README；填入金鑰即可執行。

**依程式設計助手：** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md) · [OpenCode](code-examples/opencode.md)

<!--CODEEX:PROVIDERS:START-->
**依提供商分類（70 個）：** [Agnes AI](code-examples/agnes-ai) · [AI Horde (OpenAI-compatible front)](code-examples/ai-horde) · [AIHubMix (free models)](code-examples/aihubmix) · [Aion Labs](code-examples/aion-labs) · [AnyAPI](code-examples/anyapi) · [Api.Airforce](code-examples/api-airforce) · [Arli AI](code-examples/arli-ai) · [BazaarLink](code-examples/bazaarlink) · [Bytez](code-examples/bytez) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Dahl Inference](code-examples/dahl-inference) · [Experiential Labs](code-examples/experiential-labs) · [Fireworks AI](code-examples/fireworks-ai) · [FreeInference](code-examples/freeinference) · [Friendli AI](code-examples/friendli-ai) · [Gonka Broker](code-examples/gonka-broker) · [GonkaRouter](code-examples/gonkarouter) · [Google AI Studio](code-examples/google-ai-studio) · [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](code-examples/vertex-ai-express) · [Grokified](code-examples/grokified) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [HPC-AI Model APIs](code-examples/hpc-ai) · [Hyperbolic](code-examples/hyperbolic) · [IBM watsonx.ai (Lite plan)](code-examples/ibm-watsonx) · [iFlytek Spark Lite](code-examples/iflytek-spark) · [Inception Labs](code-examples/inception-labs) · [Inferbase](code-examples/inferbase) · [Jina AI (Embeddings / Reader API)](code-examples/jina-ai) · [Kilo AI Gateway](code-examples/kilo-gateway) · [Kiosapi.id](code-examples/kiosapi) · [LLM.kiwi](code-examples/llm-kiwi) · [LLMTR](code-examples/llmtr) · [MegaNova AI](code-examples/meganova) · [Mixlayer](code-examples/mixlayer) · [Moark (Gitee AI)](code-examples/moark) · [ModelScope](code-examples/modelscope) · [Nous Portal](code-examples/nous-portal) · [NovAI](code-examples/novai) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OpenTyphoon (Typhoon API)](code-examples/opentyphoon) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Regolo.ai](code-examples/regolo-ai) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Routeway](code-examples/routeway) · [Sail Research](code-examples/sail-research) · [Sarvam AI](code-examples/sarvam-ai) · [Scaleway Generative APIs](code-examples/scaleway) · [SEA-LION API](code-examples/sea-lion) · [SenseNova (SenseTime)](code-examples/sensenova) · [SiliconFlow](code-examples/siliconflow) · [SimpleLLM](code-examples/simplellm) · [Tencent Cloud TokenHub](code-examples/tencent-tokenhub) · [Token Harbor](code-examples/token-harbor) · [Upstage](code-examples/upstage) · [Vectoree](code-examples/vectoree) · [Vercel AI Gateway](code-examples/vercel-ai-gateway) · [VLM Run Gateway](code-examples/vlm-run) · [Voyage AI (embeddings & rerankers)](code-examples/voyage-ai) · [Z.AI (GLM)](code-examples/z-ai) · [Zhipu BigModel (China)](code-examples/zhipu-bigmodel) · [Zro (MoonMath)](code-examples/zro)
<!--CODEEX:PROVIDERS:END-->

**本機 / 自架：** [BentoML](code-examples/bentoml) · [GPT4All](code-examples/gpt4all) · [Jan.ai](code-examples/jan-ai) · [KoboldCpp](code-examples/koboldcpp) · [llama.cpp](code-examples/llama-cpp) · [llamafile](code-examples/llamafile) · [LM Studio](code-examples/lm-studio) · [Ollama](code-examples/ollama) · [Text Gen WebUI](code-examples/text-generation-webui)

<details>
<summary><strong>儲存庫結構</strong></summary>

```
Free-LLM/
├── README.md                  ← English
├── README.zh-CN.md            ← 简体中文
├── README.zh-TW.md            ← 繁體中文（目前）
├── README.ja.md               ← 日本語
├── README.ko.md               ← 한국어
├── FREE-TIER-CHANGELOG.md     ← 依日期記錄每次免費額度的開始與結束
├── code-examples/             ← 可直接執行的程式碼，依提供商與程式設計工具分類
├── router/                    ← Free-LLM Router（原始碼、測試、文件）
├── package.json · Dockerfile  ← 安裝或執行 Router
├── CHANGELOG.md               ← Router 版本說明
├── CONTRIBUTING.md · CODE_OF_CONDUCT.md · SECURITY.md · SUPPORT.md
└── LICENSE                    ← MIT
```
</details>

---

## 參與貢獻

最有價值的貢獻是更正：免費額度的變化速度，任何人都無法獨自跟上。

1. **發現錯誤或過時資訊？** 附上提供商官方頁面連結，[提交資料更正](https://github.com/nejib1/Free-LLM/issues/new/choose)。請不要在 PR 中修改表格：表格每晚重新產生，更改必須落到資料裡。
2. **缺少某個提供商？** 使用[提交表單](https://free-llm.com/submit)或「Add a provider」issue 表單。歡迎服務商提交自己的服務，只需說明身分。
3. **有我們尚未涵蓋的工具設定？** 歡迎向 [`code-examples/`](code-examples/) 與 Router 提交 PR，詳見 [CONTRIBUTING.md](CONTRIBUTING.md)。

**收錄標準：** 真實的免費 API 存取（免費方案、可續期額度或明確標示的試用額度），公開可用（無候補名單或封閉測試），由提供商自己營運（不收錄轉售或共用的金鑰），並經官方頁面核實。

---

## 連結與支援

- 🌐 [free-llm.com](https://free-llm.com) · 🧠 [免費模型](https://free-llm.com/models) · 🆚 [比較](https://free-llm.com/compare) · 📚 [指南](https://free-llm.com/guides/) · 📰 [更新紀錄](https://free-llm.com/changelog)（[RSS](https://free-llm.com/changelog-feed)）
- 🧩 [JSON 目錄](https://free-llm.com/catalog.json) · ⚡ [Router](https://free-llm.com/router) · ➕ [提交提供商](https://free-llm.com/submit) · 🏆 [名人堂](https://free-llm.com/hall-of-fame)
- 💬 問題與想法：[GitHub Discussions](https://github.com/nejib1/Free-LLM/discussions) · 🐛 錯誤與更正：[issues](https://github.com/nejib1/Free-LLM/issues/new/choose)（[該用哪個表單？](SUPPORT.md)） · 🔒 資安問題：[SECURITY.md](SECURITY.md) · 🤝 [行為準則](CODE_OF_CONDUCT.md)

如果這份清單幫你省了時間，按一個 ⭐ 能幫助更多人找到它。

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

**授權：** MIT，見 [LICENSE](LICENSE)。

---

<p align="center"><sub>表格依線上目錄自動重建 — 最後更新：<!--LASTSYNC:START-->2026-11-26<!--LASTSYNC:END--></sub></p>
