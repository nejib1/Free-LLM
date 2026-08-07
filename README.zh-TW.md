<p align="center">
  <h1 align="center">Free-LLM — 免費 AI 與 LLM API 開放目錄</h1>
  <p align="center"><strong>來自 33 個提供商的 130+ 個免費 LLM 模型</strong> — 幾秒鐘內發現、比較並設定免費模型，另有 9 款本機/自架工具可無限私密使用。</p>
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

| 提供商 | 需要信用卡？ | 速率限制 | 每日額度 | 每月額度 | 主要模型 |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | 否 | 5–30 RPM（依模型而異） | 9,000 RPD (Flash) / 25 RPD (Pro) | 完全免費 | Gemini 3.1 Pro Preview, 3.6 Flash, 3.5 Flash, 3.5 Flash-Lite |
| [Groq](https://console.groq.com/) | 否 | 30 RPM | 14,400 RPD | 永久免費 | Llama 3.3 70B, Qwen3.6 27B, GPT-OSS 120B/20B, Kimi K2, Whisper |
| [Cerebras](https://inference.cerebras.ai/) | 否 | 30 RPM | 每天 100 萬 tokens | 永久免費 | GPT-OSS 120B, GLM-4.7, Gemma 4 31B |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | 否 | 300 次/小時 | 視伺服器負載而定 | 永久免費（限速） | Llama 3.2 11B, Qwen 2.5 72B, Gemma 2 9B, Flux.1 |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 否 | 依模型而異 | 每天 10,000 neurons | 每月約 30 萬 neurons | Llama 3.1 8B, Mistral 7B, Qwen 1.5 7B, DeepSeek Coder 6.7B, Phi-2 |
| [Cohere](https://cohere.com/) | 否 | 20 RPM | — | 每月 1,000 次請求 | Command A+, Command A Reasoning, Command A, Command R+, Command R |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 需電話驗證 | 1 次/秒 | — | 免費（"Experiment" 方案） | Mistral Large 3, Mistral Medium 3.5, Codestral, Mistral Small |
| [Inference.net](https://inference.net/) | 否 | 30 RPM（合理使用） | 合理使用範圍內 | 列出的模型免費 | DeepSeek-R1, Llama 3.1 8B/70B |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 需註冊 | 2 RPM（匿名）/ 400 RPM（已驗證） | 未公布 | 測試階段 | Qwen3-32B, Qwen3.6-27B, 20+ 開源模型 |
| [Chutes.ai](https://chutes.ai/) | 需註冊 | 視社群算力而定 | 視可用性而定 | 無硬性上限 | DeepSeek-R1, Llama 3.1 70B, Qwen 2.5 72B |
| [Coze](https://www.coze.com/) | 需註冊 | 依模型而異 | 依 token 計算的每日額度 | 每日重置 | GPT-4o（透過 Coze）, Gemini 1.5 Pro（透過 Coze） |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 需電話驗證 | 40 RPM | — | — | Llama 4 Scout, DeepSeek-R1, 多款開源模型 |
| [Z.AI (GLM)](https://z.ai/) | 需註冊 | 約 1 次/秒（Flash 檔位） | 約每天 1,000 次請求（Flash 檔位） | 免費方案持續提供 | GLM-4.5-Flash, GLM-4.7-Flash |

### 💰 可續期額度

定期續期的免費額度，沒有一次性到期問題。

| 提供商 | 需要信用卡？ | 速率限制 | 免費額度 | 主要模型 |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 否 | 20 RPM | 每天 50 次請求（一次性加值 $10 後可達 1,000 次） | DeepSeek V4 Flash, Llama 4 Maverick/Scout, GPT-OSS 120B, Gemini 2.0（29+ 免費模型） |
| [GitHub Models](https://github.com/marketplace/models) | 否 | 10 RPM（高階模型） | 50 RPD（高階）/ 150 RPD（mini 檔位） | GPT-5 Chat, GPT-5 Mini, Llama 4 Scout/Maverick, Phi-4, Mistral Medium |
| [Grok / xAI](https://console.x.ai/) | 需註冊 | 視額度而定（免費檔位較低） | 一次性 $25 註冊贈金（可選 $150/月，需同意資料共享） | Grok 4.5, Grok 4.3 |
| [Venice.ai](https://venice.ai/) ⚠️ *完整 API 存取需要 Pro 訂閱* | 需註冊 | 10 RPM（免費檔位） | 每日使用量有限，每日重置 | Llama 3.1 405B, Dolphin Mixtral, Stable Diffusion 3 |

### 🎁 一次性試用額度

註冊後獲得一次性額度，用完為止。

| 提供商 | 需要信用卡？ | 額度 | 有效期 | 主要模型 |
|:---|:---:|:---|:---|:---|
| [Together.AI](https://together.ai/) ⚠️ *免費研究模型需先加值最低 $5* | 需註冊 | 免費研究模型 | 永久免費（研究用途） | Apriel 1.6/1.5 15B Thinker |
| [DeepSeek](https://platform.deepseek.com/) | 需註冊 | 500 萬 tokens | 30 天 | DeepSeek-V4 Flash（對話 + 推理模式） |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | 需註冊 | $5 額度 | 一次性 | Llama 3.3 70B, DeepSeek-V3.1 |
| [Cerebrium](https://www.cerebrium.ai/) | 需註冊 | $30 額度 | 一次性 | 可部署任意模型（Serverless GPU 平台，非共用端點） |
| [AI21 Labs](https://docs.ai21.com/) | 需註冊 | $10 額度 | 3 個月 | Jamba Large, Jamba Mini |
| [Fireworks AI](https://fireworks.ai/) | 需註冊 | $1 額度 | 一次性試用 | 多款開源模型 |
| [Friendli AI](https://friendli.ai/) | 需註冊 | 註冊即送試用額度 | 一次性 | 主流開源模型 |
| [Hyperbolic](https://app.hyperbolic.xyz/) | 需註冊 | $1 額度 | 一次性試用 | Llama 3.1 405B, DeepSeek V3 |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | 需註冊 | 試用額度 | 一次性試用 | DeepSeek-R1, 多款開源模型 |
| [Novita AI](https://novita.ai/) | 需註冊 | $0.50 額度 | 90 天 | Llama, Mistral |
| [Replicate](https://replicate.com/) | 需註冊 | 少量試用額度 | — | 1000+ 模型（LLM、圖像、音訊） |
| [Upstage](https://console.upstage.ai/) | 需註冊 | $10 額度 | 3 個月 | Solar Mini, Solar Pro 3 |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | 需註冊 | 每個模型 100 萬入 + 100 萬出 tokens（僅限國際/新加坡帳號） | 90 天 | Qwen3.7-Max, Qwen-Plus, Qwen-Flash, Qwen3-Coder-Plus |
| [Scaleway](https://console.scaleway.com/generative-api/models) | 需註冊 | 100 萬免費 tokens | 一次性試用 | Mistral, Llama, Qwen（歐盟託管） |
| [Requesty](https://requesty.ai/) | 需註冊 | 每月免費額度 | 每月續期 | 多提供商路由 |

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

| 提供商 | Base URL | 取得金鑰 |
|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | `https://generativelanguage.googleapis.com/v1beta` | [取得金鑰 →](https://aistudio.google.com/app/apikey) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [取得金鑰 →](https://console.groq.com/keys) |
| [Cerebras](https://inference.cerebras.ai/) | `https://api.cerebras.ai/v1` | [取得金鑰 →](https://cloud.cerebras.ai/) |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | `https://router.huggingface.co/v1` | [取得金鑰 →](https://huggingface.co/settings/tokens) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [取得金鑰 →](https://dash.cloudflare.com/profile/api-tokens) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [取得金鑰 →](https://dashboard.cohere.com/api-keys) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [取得金鑰 →](https://console.mistral.ai/api-keys) |
| [Inference.net](https://inference.net/) | `https://api.inference.net/v1` | [取得金鑰 →](https://inference.net/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [取得金鑰 →](https://endpoints.ai.cloud.ovh.net/) |
| [Chutes.ai](https://chutes.ai/) | `https://api.chutes.ai/v1` | [取得金鑰 →](https://chutes.ai/) |
| [Coze](https://www.coze.com/) | `https://api.coze.com/v1` | [取得金鑰 →](https://www.coze.com/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [取得金鑰 →](https://build.nvidia.com/settings/api-keys) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [取得金鑰 →](https://z.ai/) |
| [OpenRouter](https://openrouter.ai/) | `https://openrouter.ai/api/v1` | [取得金鑰 →](https://openrouter.ai/keys) |
| [GitHub Models](https://github.com/marketplace/models) | `https://models.inference.ai.azure.com` | [取得金鑰 →](https://github.com/marketplace/models) |
| [Grok / xAI](https://console.x.ai/) | `https://api.x.ai/v1` | [取得金鑰 →](https://console.x.ai/) |
| [Venice.ai](https://venice.ai/) | `https://api.venice.ai/api/v1` | [取得金鑰 →](https://venice.ai/) |
| [Together.AI](https://together.ai/) | `https://api.together.xyz/v1` | [取得金鑰 →](https://together.ai/) |
| [DeepSeek](https://platform.deepseek.com/) | `https://api.deepseek.com/v1` | [取得金鑰 →](https://platform.deepseek.com/api_keys) |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | `https://api.sambanova.ai/v1` | [取得金鑰 →](https://cloud.sambanova.ai/apis) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [取得金鑰 →](https://www.cerebrium.ai/) |
| [AI21 Labs](https://docs.ai21.com/) | `https://api.ai21.com/studio/v1` | [取得金鑰 →](https://studio.ai21.com/account/api-key) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [取得金鑰 →](https://fireworks.ai/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [取得金鑰 →](https://friendli.ai/) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.xyz/v1` | [取得金鑰 →](https://app.hyperbolic.xyz/) |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | `https://api.tokenfactory.nebius.com/v1` | [取得金鑰 →](https://studio.nebius.com/settings/api-keys) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [取得金鑰 →](https://novita.ai/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [取得金鑰 →](https://replicate.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [取得金鑰 →](https://console.upstage.ai/) |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [取得金鑰 →](https://bailian.console.alibabacloud.com/) |
| [Scaleway](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [取得金鑰 →](https://console.scaleway.com/generative-api/models) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [取得金鑰 →](https://requesty.ai/) |

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
