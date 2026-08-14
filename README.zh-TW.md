<p align="center">
  <h1 align="center">Free-LLM — 免費 AI 與 LLM API 開放目錄</h1>
<!--STATS:START-->
  <p align="center"><strong>來自 34 個提供商的 110+ 個免費 LLM 模型</strong> — 幾秒鐘內發現、比較並設定免費模型，另有 9 款本機/自架工具可無限私密使用。</p>
<!--STATS:END-->
</p>

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><strong>🌐 前往 free-llm.com</strong></a> —
  <a href="https://free-llm.com/compare" target="_blank" rel="noopener">比較提供商</a> ·
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener">提交新提供商</a> ·
  <a href="https://free-llm.com/guides" target="_blank" rel="noopener">使用指南</a> ·
  <a href="https://free-llm.com/hall-of-fame" target="_blank" rel="noopener">榮譽榜</a>
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

## 為什麼需要這個專案

找一個免費 LLM API，不應該要翻遍十幾個更新紀錄、為了比較速率限制去註冊五個不同平台，或是猜測哪個提供商這個月還有免費額度。

這個儲存庫依託 **[free-llm.com](https://free-llm.com)** 的線上目錄，是一份結構化、由社群維護的參考資料，涵蓋所有可以免費使用 LLM 的提供商。

- ✅ **社群維護** — 真實使用者的投票、提交與編輯建議，發布前經過審核
- ✅ **信用卡透明** — 下方每個提供商都清楚標註是否需要信用卡、電話驗證，或完全不需要
- ✅ **即用程式碼** — [`code-examples/`](code-examples/) 中包含全部 33 個提供商的 Python / JavaScript / curl 範例，還有針對 Claude Code、Cursor、Codex 的專屬設定
- ✅ **並排比較** — [free-llm.com/compare](https://free-llm.com/compare) 可將兩個提供商的限制、模型與價格直接比較

---

## 三步驟上手

1. **選一個提供商** — 見下方 [Provider Directory](#provider-directory)。新手建議從 **Groq** 開始（免信用卡，30 RPM / 每天 14,400 次請求，永久免費）。
2. **取得 API Key** — [Quick Reference](#quick-reference--base-urls--api-keys) 中每一列都直接連到該提供商的金鑰取得頁面，大多只需一個電子郵件。
3. **接上程式碼** — 把下方表格中的 base URL + 模型 ID 複製到 [Quick Start](#quick-start--use-any-free-api-in-30-seconds) 的範例程式碼中。

每個提供商的完整詳情、即時狀態與社群備註都在其 free-llm.com 頁面：**free-llm.com/provider/&lt;slug&gt;**（例如 [free-llm.com/provider/groq](https://free-llm.com/provider/groq)）。

---

## Quick Start — 30 秒接上免費 API

下方大多數提供商都提供 **OpenAI 相容介面**。任何接受 `baseURL` + `apiKey` 的工具都能直接使用 — 換掉這兩項即可。

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # 免費，無需信用卡
    api_key="GROQ_API_KEY",                      # 於 console.groq.com/keys 取得
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
# Groq 免費額度：30 RPM，每天 14,400 次請求 — 個人使用綽綽有餘
```

### 程式設計助手（Coding Assistants）

讓你的 AI 程式設計工具接上免費後端，而不是付費 API：

- **Claude Code** — 設定 `ANTHROPIC_BASE_URL` + `ANTHROPIC_AUTH_TOKEN`，見 [`code-examples/claude-code.md`](code-examples/claude-code.md)
- **Cursor** — Settings → Models → Add Model，見 [`code-examples/cursor.md`](code-examples/cursor.md)
- **Codex CLI** — 設定 `OPENAI_BASE_URL` + `OPENAI_API_KEY`，見 [`code-examples/codex.md`](code-examples/codex.md)

其他所有提供商的即用範例見下方 [Code Examples](#code-examples)，都在 [`code-examples/`](code-examples/) 目錄中。

---

## Provider Directory

### ⚡ 永久免費額度

持續免費使用，限速但永不過期。

<!--TABLE:PERMANENT:START-->
| 提供商 | 需要信用卡？ | 速率限制 | 每日額度 | 每月額度 | 主要模型 |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | 否 | 5-30 RPM (varies by model) | 9000 RPD (Flash) / 25 RPD (3.1 Pro) | 完全免費 | Gemini 3.1 Pro, Gemini 3.1 Flash, Gemini 3.0 Flash, Gemini 3.0 Flash-Lite |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 需電話驗證 | 1 request/second | - | Free | Mistral 7B, Mixtral 8x7B, Mistral Small, Mistral Nemo |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | 否 | 300 Requests / hour | Capped by monthly credit, not a flat request count | $0.10/month in free routing credits (PRO: $2/month) | Llama 3.2 11B Vision, Llama 3.1 8B Instruct, Qwen 2.5 72B Instruct, Gemma 2 9B Instruct |
| [Cohere](https://cohere.com/) | 否 | 20 requests/minute | - | 1,000 requests/month | Command R+ (08-2024), Command R (08-2024), Command R7B (12-2024), Command A (111B) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 需電話驗證 | 40 requests/minute | - | - | See provider |
| [Cerebras](https://cerebras.ai/inference) | 否 | 30 RPM | 1,000,000 Tokens / Day | Free Forever | Llama 3.1 8B (Fast), Llama 3.1 70B (Fast), Llama 4 Scout (Fast), Qwen3 32B (Fast) |
| [Groq](https://console.groq.com/) | 否 | 30 RPM, 14.4k RPD | 14,400 Requests/Day | Free Forever | Qwen3.6 27B, MiniMax M2.7, Llama 3.1 8B, Llama 3.3 70B |
| [Coze](https://www.coze.com/) | 需註冊 | 依模型而異 | 依 token 計算的每日額度 | 每日重置 | GPT-4o (via Coze), Gemini 1.5 Pro (via Coze) |
| [Z.AI (GLM)](https://z.ai/) | 需註冊 | ~1 request/second (Flash models) | ~1,000 requests/day (Flash tier) | Free tier ongoing, subject to change | GLM-4.5-Flash, GLM-4.7-Flash |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 否 | 依模型而異 | 每天 10,000 neurons | ~300,000 neurons/month | Llama 3.1 8B Instruct, Llama 3.2 3B Instruct, Mistral 7B Instruct v0.2, Qwen 1.5 7B Chat |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 需註冊 | 2 RPM (Anonymous) / 400 RPM (Auth) | 未公布 | Beta Access | Qwen3Guard-Gen-0.6B (Beta), Qwen3Guard-Gen-8B (Beta), stable-diffusion-xl-base-v10, nvr-tts-es-es |
| [Ollama Cloud](https://ollama.com/cloud) | 否 | Light usage tier, 1 concurrent model | Session limit resets every few hours | Weekly usage limit resets every 7 days | GPT-OSS 120B (Cloud), GPT-OSS 20B (Cloud), Qwen3.5 (Cloud), DeepSeek V4 Flash (Cloud) |
| [Nous Portal](https://portal.nousresearch.com) | 否 | Not fully published — verify on portal.nousresearch.com | Not published | Free tier: $0/month, no credit card | Hermes 4 |
| [Inference.net](https://inference.net/) | 否 | 30 RPM（合理使用） | Fair use policy | Fair use policy | DeepSeek-R1, Llama 3.1 8B Instruct, Llama 3.1 70B Instruct |
<!--TABLE:PERMANENT:END-->

### 💰 可續期額度

定期續期的免費額度，沒有一次性到期問題。

<!--TABLE:RENEWABLE:START-->
| 提供商 | 需要信用卡？ | 速率限制 | 免費額度 | 主要模型 |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 否 | 20 requests/minute | 50 requests/day (up to 1000 with $10 topup) | Google: Gemini 2.0 Flash (free), Google: Gemini 2.0 Pro (free), Meta: Llama 3.3 70B Instruct (free), NVIDIA: Llama 3.1 Nemotron 70B (free) |
| [Venice.ai](https://venice.ai/) ⚠️ *完整 API 存取需要 Pro 訂閱* | 需註冊 | 10 RPM（免費檔位） | Limited daily usage | Llama 3.1 405B, Dolphin Mixtral, Stable Diffusion 3 |
| [Grok (xAI)](https://console.x.ai/) | 需註冊 | 視額度而定（免費檔位較低） | $25 one-time signup credit | Grok-2, Grok-2 Mini, Grok-2 Vision |
<!--TABLE:RENEWABLE:END-->

### 🎁 一次性試用額度

註冊後獲得一次性額度，用完為止。

<!--TABLE:TRIAL:START-->
| 提供商 | 需要信用卡？ | 額度 | 有效期 | 主要模型 |
|:---|:---:|:---|:---|:---|
| [Together.AI](https://together.ai/) ⚠️ *免費研究模型需先加值最低 $5* | 需註冊 | — | — | PrismML Ternary Bonsai 27B (Free) |
| [Replicate](https://replicate.com/) | 需註冊 | 少量試用額度 | 一次性 | See provider |
| [Fireworks AI](https://fireworks.ai/) | 需註冊 | $1 | 一次性 | See provider |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | 需註冊 | $5 | 一次性 | See provider |
| [Hyperbolic](https://app.hyperbolic.xyz/) | 需註冊 | $1 | 一次性 | See provider |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | 需註冊 | $1 (requires a bank card on file) | 一次性 | See provider |
| [Novita AI](https://novita.ai/) | 需註冊 | $0.50 | 一次性 | See provider |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | 需註冊 | 1M tokens | 一次性 | See provider |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | 需註冊 | 1M tokens/model | One-time per model | See provider |
| [AI21 Labs](https://docs.ai21.com/) | 需註冊 | $10 | 3 個月 | Jamba Large, Jamba Mini |
| [Upstage](https://console.upstage.ai/) | 需註冊 | $10 | 3 個月 | See provider |
| [DeepSeek](https://platform.deepseek.com/) | 需註冊 | 5M tokens | 30 天 | See provider |
| [Requesty](https://requesty.ai/) | 需註冊 | 每月免費額度 | Renewing monthly | See provider |
| [Cerebrium](https://www.cerebrium.ai/) | 需註冊 | $30 | 一次性 | See provider |
| [DeepInfra](https://deepinfra.com/) | 需註冊 | $5 | One-time (90 days expiry) | See provider |
| [Friendli AI](https://friendli.ai/) | 需註冊 | $10 | 一次性 | See provider |
<!--TABLE:TRIAL:END-->

### 🖥️ 本機 / 自架（無限、私密、永久免費）

| 工具 | 類型 | 亮點 |
|:---|:---|:---|
| [Ollama](https://ollama.com/) | CLI + API | 100+ 模型，支援 GPU 加速，OpenAI 相容介面 |
| [LM Studio](https://lmstudio.ai/) | 桌面 GUI | 支援任意 GGUF 模型，內建模型瀏覽器，可離線使用 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ 引擎 | 執行任意 GGUF 模型，相依性極少 |
| [GPT4All](https://gpt4all.io/) | 桌面應用程式 | 純 CPU 執行，不需 GPU，開源 |
| [Jan.ai](https://jan.ai/) | 桌面應用程式 | 注重隱私，100% 離線的 ChatGPT 替代品 |
| [KoboldCpp](https://github.com/LostRuins/koboldcpp) | 單一執行檔 | 針對創意寫作最佳化，支援 GGUF |
| [llamafile](https://github.com/Mozilla-Ocho/llamafile) | 單一執行檔 | 跨平台，結合 llama.cpp 與 Cosmopolitan Libc |
| [Text Generation WebUI](https://github.com/oobabooga/text-generation-webui) | Gradio 介面 | 高度可自訂，適合進階本機實驗 |
| [BentoML](https://www.bentoml.com/) | 推論平台 | 可在任意環境部署任意 AI/ML 模型，正式環境等級 |

---

## Quick Reference — Base URL 與 API Key

<!--TABLE:QUICKREF:START-->
| 提供商 | Base URL | 取得金鑰 |
|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | `https://openrouter.ai/api/v1` | [取得金鑰 →](https://openrouter.ai/) |
| [Google AI Studio](https://aistudio.google.com/) | `https://generativelanguage.googleapis.com/v1beta` | [取得金鑰 →](https://aistudio.google.com/) |
| [Together.AI](https://together.ai/) | `https://api.together.xyz/v1` | [取得金鑰 →](https://together.ai/) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [取得金鑰 →](https://console.mistral.ai/) |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | `https://router.huggingface.co/v1` | [取得金鑰 →](https://huggingface.co/inference-api/serverless) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [取得金鑰 →](https://cohere.com/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [取得金鑰 →](https://replicate.com/) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [取得金鑰 →](https://fireworks.ai/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [取得金鑰 →](https://build.nvidia.com/explore/discover) |
| [Venice.ai](https://venice.ai/) | `https://api.venice.ai/api/v1` | [取得金鑰 →](https://venice.ai/) |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | `https://api.sambanova.ai/v1` | [取得金鑰 →](https://cloud.sambanova.ai/) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.xyz/v1` | [取得金鑰 →](https://app.hyperbolic.xyz/) |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | `https://api.tokenfactory.nebius.com/v1` | [取得金鑰 →](https://tokenfactory.nebius.com/) |
| [Cerebras](https://cerebras.ai/inference) | `https://api.cerebras.ai/v1` | [取得金鑰 →](https://cerebras.ai/inference) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [取得金鑰 →](https://novita.ai/) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [取得金鑰 →](https://console.groq.com/) |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [取得金鑰 →](https://console.scaleway.com/generative-api/models) |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [取得金鑰 →](https://bailian.console.alibabacloud.com/) |
| [AI21 Labs](https://docs.ai21.com/) | `https://api.ai21.com/studio/v1` | [取得金鑰 →](https://docs.ai21.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [取得金鑰 →](https://console.upstage.ai/) |
| [DeepSeek](https://platform.deepseek.com/) | `https://api.deepseek.com/v1` | [取得金鑰 →](https://platform.deepseek.com/) |
| [Coze](https://www.coze.com/) | `https://api.coze.com/v1` | [取得金鑰 →](https://www.coze.com/) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [取得金鑰 →](https://z.ai/) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [取得金鑰 →](https://dash.cloudflare.com/) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [取得金鑰 →](https://requesty.ai/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [取得金鑰 →](https://endpoints.ai.cloud.ovh.net/) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [取得金鑰 →](https://www.cerebrium.ai/) |
| [DeepInfra](https://deepinfra.com/) | `https://api.deepinfra.com/v1/openai` | [取得金鑰 →](https://deepinfra.com/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [取得金鑰 →](https://friendli.ai/) |
| [Ollama Cloud](https://ollama.com/cloud) | `https://ollama.com/v1` | [取得金鑰 →](https://ollama.com/cloud) |
| [Nous Portal](https://portal.nousresearch.com) | `https://inference-api.nousresearch.com/v1` | [取得金鑰 →](https://portal.nousresearch.com) |
| [Inference.net](https://inference.net/) | `https://api.inference.net/v1` | [取得金鑰 →](https://inference.net/) |
| [Grok (xAI)](https://console.x.ai/) | `https://api.x.ai/v1` | [取得金鑰 →](https://console.x.ai/) |
<!--TABLE:QUICKREF:END-->

---

## 使用指南

發布於 [free-llm.com/guides](https://free-llm.com/guides/)：

- **2026 年最佳免費 LLM API** — 主流選擇的橫向比較
- **Gemini vs ChatGPT（免費版）** — $0 究竟能用到什麼
- **如何使用 OpenRouter** — 附程式碼的設定教學
- **OpenRouter 替代方案** — 其他值得嘗試的整合平台
- **用 Ollama 跑本機模型** — 5 分鐘內上手
- **終極免費 LLM API 指南** — 最完整的深度解析

---

## 社群功能

Free-LLM 是**社群驅動**的專案。造訪 [free-llm.com](https://free-llm.com) 可以：

- **投票** 支持最有用的提供商
- **提交** 新的提供商與模型
- **提議編輯** 現有提供商資料（管理員審核）
- **檢舉** 已經從免費變成付費的模型
- 在 [榮譽榜](https://free-llm.com/hall-of-fame) 上獲得肯定

資料會同步回本儲存庫。

---

## Code Examples

[`code-examples/`](code-examples/) 目錄中有可直接執行的 Python、JavaScript 與 curl 範例 — 填入你的 API Key 即可使用。

**依程式設計助手分類：** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md)

**依提供商分類（33 個）：** [AI21 Labs](code-examples/ai21-labs) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Chutes.ai](code-examples/chutes-ai) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [DeepInfra](code-examples/deepinfra) · [DeepSeek](code-examples/deepseek) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [GitHub Models](code-examples/github-models) · [Google AI Studio](code-examples/google-ai-studio) · [Grok / xAI](code-examples/grok-xai) · [Groq](code-examples/groq-cloud) · [Hugging Face Inference](code-examples/huggingface-inference) · [Hyperbolic](code-examples/hyperbolic) · [Inference.net](code-examples/inference-net) · [Mistral AI](code-examples/mistral-ai) · [Nebius](code-examples/nebius) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Qwen / Alibaba](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [SambaNova](code-examples/sambanova) · [Scaleway](code-examples/scaleway) · [Together.AI](code-examples/together-ai) · [Upstage](code-examples/upstage) · [Venice.ai](code-examples/venice-ai) · [Z.AI (GLM)](code-examples/z-ai)

**本機 / 自架：** [BentoML](code-examples/bentoml) · [GPT4All](code-examples/gpt4all) · [Jan.ai](code-examples/jan-ai) · [KoboldCpp](code-examples/koboldcpp) · [llama.cpp](code-examples/llama-cpp) · [llamafile](code-examples/llamafile) · [LM Studio](code-examples/lm-studio) · [Ollama](code-examples/ollama) · [Text Gen WebUI](code-examples/text-generation-webui)

---

## 儲存庫結構

```
Free-LLM/
├── README.md                 ← 目前檔案（英文）
├── README.zh-CN.md            ← 简体中文
├── README.zh-TW.md            ← 繁體中文
├── README.ja.md               ← 日本語
├── README.ko.md                ← 한국어
├── CONTRIBUTING.md            ← 貢獻指南
├── code-examples/             ← 即用程式碼片段（依提供商 + 依工具）
├── .github/                   ← Issue / PR 範本
└── LICENSE                    ← MIT
```

---

## 貢獻指南

完整指南見 [CONTRIBUTING.md](CONTRIBUTING.md)。簡要流程：

1. **新增提供商** — 使用網站上的 [提交表單](https://free-llm.com/submit)，或在此儲存庫開 [issue](https://github.com/nejib1/Free-LLM/issues/new/choose) / PR。
2. **修正錯誤資料** — 速率限制會變動，提供商可能轉為付費或下線。歡迎提交 PR。
3. **新增程式碼範例** — 有其他工具（程式設計助手、聊天介面、SDK）的可用設定？歡迎加入 [`code-examples/`](code-examples/)。
4. **投票與討論** — 在 [free-llm.com](https://free-llm.com) 幫助社群發掘最佳選擇。

### 收錄標準

一個提供商要被收錄，需要符合：
1. 明確提供**真正的免費額度**（而不只是沒有免費選項的付費試用）— 詳細分類見 [Provider Directory](#provider-directory)
2. API 必須**公開可存取**（不需排隊等候、非封閉測試、不需逆向工程）
3. 如果是試用額度，需清楚標註，並說明是否有永久免費的替代方案

---

## Links

- 🌐 **官方網站**：[free-llm.com](https://free-llm.com) — 目錄、投票、提交
- 🆚 **比較提供商**：[free-llm.com/compare](https://free-llm.com/compare)
- 📚 **使用指南**：[free-llm.com/guides](https://free-llm.com/guides/)
- 🏆 **榮譽榜**：[free-llm.com/hall-of-fame](https://free-llm.com/hall-of-fame)
- ➕ **提交提供商**：[free-llm.com/submit](https://free-llm.com/submit)

## License

MIT — 詳見 [LICENSE](LICENSE)。

---

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-08-14<!--LASTSYNC:END--></sub></p>
