<p align="center">
  <h1 align="center">Free-LLM — Open Directory of Free AI &amp; LLM APIs</h1>
<!--STATS:START-->
  <p align="center"><strong>120+ free LLM models from 41 providers</strong> — find, compare &amp; configure free models in seconds, plus 9 local/self-hosted tools for unlimited private use.</p>
<!--STATS:END-->
</p>

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><strong>🌐 Live at free-llm.com</strong></a> —
  <a href="https://free-llm.com/compare" target="_blank" rel="noopener">Compare providers</a> ·
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener">Submit a provider</a> ·
  <a href="https://free-llm.com/guides" target="_blank" rel="noopener">Guides</a> ·
  <a href="https://free-llm.com/hall-of-fame" target="_blank" rel="noopener">Hall of Fame</a>
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

## Why This Exists

Finding a free LLM API shouldn't mean hunting through a dozen changelogs, signing up for five platforms just to compare rate limits, or guessing which provider still has a free tier this month.

This repo — backed by the live directory at **[free-llm.com](https://free-llm.com)** — is a structured, community-maintained reference covering every provider that lets you use LLMs at zero cost.

- ✅ **Community-maintained** — votes, submissions, and edit suggestions from real users, moderated before publishing
- ✅ **Credit card transparency** — every provider below is labeled with whether it needs a card, phone verification, or nothing at all
- ✅ **Ready-to-run code** — Python/JavaScript/curl snippets for all 33 providers in [`code-examples/`](code-examples/), plus per-tool configs for Claude Code, Cursor, and Codex
- ✅ **Side-by-side comparison** — [free-llm.com/compare](https://free-llm.com/compare) puts two providers head-to-head on limits, models, and pricing

---

## How to Use — 3 Steps

1. **Pick a provider** — see the [Provider Directory](#provider-directory) below. New to this? Start with **Groq** (no credit card, 30 RPM / 14,400 requests per day, free forever).
2. **Get your API key** — every row links straight to the provider's key page in [Quick Reference](#quick-reference--base-urls--api-keys). Most only need an email address.
3. **Plug it in** — copy the base URL + a model ID from the tables below into the snippets in [Quick Start](#quick-start--use-any-free-api-in-30-seconds).

Full details, live status, and community notes for each provider live on its page at **free-llm.com/provider/&lt;slug&gt;** (e.g. [free-llm.com/provider/groq](https://free-llm.com/provider/groq)).

---

## Quick Start — Use Any Free API in 30 Seconds

Most providers below expose an **OpenAI-compatible endpoint**. Any tool that accepts a `baseURL` + `apiKey` works — just swap the two.

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # free, no credit card
    api_key="GROQ_API_KEY",                      # get at console.groq.com/keys
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
# Groq free tier: 30 RPM, 14,400 requests/day — generous for personal use
```

### Coding assistants

Point your AI coding tool at a free backend instead of a paid one:

- **Claude Code** — set `ANTHROPIC_BASE_URL` + `ANTHROPIC_AUTH_TOKEN`. See [`code-examples/claude-code.md`](code-examples/claude-code.md)
- **Cursor** — Settings → Models → Add Model. See [`code-examples/cursor.md`](code-examples/cursor.md)
- **Codex CLI** — set `OPENAI_BASE_URL` + `OPENAI_API_KEY`. See [`code-examples/codex.md`](code-examples/codex.md)

Every other provider has a ready-to-copy snippet in [`code-examples/`](code-examples/) — see [Code Examples](#code-examples) below.

---

## Provider Directory

### ⚡ Permanent Free Tiers

Ongoing free access with rate-limited quotas that never expire.

<!--TABLE:PERMANENT:START-->
| Provider | Credit Card? | Rate Limit | Daily Limit | Monthly Limit | Key Models |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | No | 5-30 RPM (varies by model) | 9000 RPD (Flash) / 25 RPD (3.1 Pro) | Free of charge | Gemini 3.1 Pro, Gemini 3.1 Flash, Gemini 3.0 Flash, Gemini 3.0 Flash-Lite |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | Phone verification | 1 request/second | - | Free | Mistral 7B, Mixtral 8x7B, Mistral Small, Mistral Nemo |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | No | 300 Requests / hour | Capped by monthly credit, not a flat request count | $0.10/month in free routing credits (PRO: $2/month) | Llama 3.2 11B Vision, Llama 3.1 8B Instruct, Qwen 2.5 72B Instruct, Gemma 2 9B Instruct |
| [Cohere](https://cohere.com/) | No | 20 requests/minute | - | 1,000 requests/month | Command R+ (08-2024), Command R (08-2024), Command R7B (12-2024), Command A (111B) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | Phone verification | 40 requests/minute | - | - | See provider |
| [Groq](https://console.groq.com/) | No | 30 RPM, 14.4k RPD | 14,400 Requests/Day | Free Forever | Qwen3.6 27B, MiniMax M2.7, Whisper Large v3, Whisper Large v3 Turbo |
| [Coze](https://www.coze.com/) | Registration | Varies by model | Token-based daily limits | Resets daily | GPT-4o (via Coze), Gemini 1.5 Pro (via Coze) |
| [Z.AI (GLM)](https://z.ai/) | Registration | ~1 request/second (Flash models) | ~1,000 requests/day (Flash tier) | Free tier ongoing, subject to change | GLM-4.5-Flash, GLM-4.7-Flash |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | No | Varies by model | 10,000 neurons/day | ~300,000 neurons/month | Llama 3.1 8B Instruct, Llama 3.2 3B Instruct, Mistral 7B Instruct v0.2, Qwen 1.5 7B Chat |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | Registration | 2 RPM (Anonymous) / 400 RPM (Auth) | Unspecified | Beta Access | Qwen3Guard-Gen-0.6B (Beta), Qwen3Guard-Gen-8B (Beta), stable-diffusion-xl-base-v10, nvr-tts-es-es |
| [Ollama Cloud](https://ollama.com/cloud) | No | Light usage tier, 1 concurrent model | Session limit resets every few hours | Weekly usage limit resets every 7 days | GPT-OSS 120B (Cloud), GPT-OSS 20B (Cloud), Qwen3.5 (Cloud), DeepSeek V4 Flash (Cloud) |
| [Nous Portal](https://portal.nousresearch.com) | No | Not fully published — verify on portal.nousresearch.com | Not published | Free tier: $0/month, no credit card | Hermes 4 |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | No | 3M input / 60K output tokens per 60s | 500M input / 5M output tokens per 24h | Free during experimental phase, no billing system yet | Qwen3.6 35B A3B |
| [LLM7.io](https://llm7.io) | No | 30 RPM (no signup) / 120 RPM (free email token) | Up to 5M tokens/day (rolling 24h, with free token) | Free, no billing | DeepSeek-R1, Qwen 2.5 |
| [Pollinations.ai](https://pollinations.ai) | No | ~1 request/15s (anonymous) — higher with a free API key | Fair use | Free, no billing system | OpenAI GPT-class (via Pollinations), Mistral-class (via Pollinations) |
| [SiliconFlow](https://siliconflow.com/pricing) | Phone verification | Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/models | Not fully published — verify on docs.siliconflow.cn | Free models available after identity verification | See provider |
| [ModelScope](https://modelscope.cn) | Phone verification | 500 requests/day per model | 2,000 requests/day total | Free, no billing | See provider |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | No | Not published — verify on aionlabs.ai/pricing | Daily token allowance (exact quota undisclosed) | Free, no billing | See provider |
| [Inference.net](https://inference.net/) | No | 30 RPM (fair use) | Fair use policy | Fair use policy | DeepSeek-R1, Llama 3.1 8B Instruct, Llama 3.1 70B Instruct |
<!--TABLE:PERMANENT:END-->

### 💰 Renewable Credits

Free access that renews periodically, no one-time expiry.

<!--TABLE:RENEWABLE:START-->
| Provider | Credit Card? | Rate Limit | Free Offer | Key Models |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | No | 20 requests/minute | 50 requests/day (up to 1000 with $10 topup) | Google: Gemini 2.0 Flash (free), Google: Gemini 2.0 Pro (free), Meta: Llama 3.3 70B Instruct (free), NVIDIA: Llama 3.1 Nemotron 70B (free) |
| [Venice.ai](https://venice.ai/) | Registration | 10 RPM (free tier) | Limited daily usage | Llama 3.1 405B, Dolphin Mixtral, Stable Diffusion 3 |
| [Requesty](https://requesty.ai/) | No | 60 RPM | 200 requests/day (free models) | See provider |
| [Grok (xAI)](https://console.x.ai/) | Registration | Varies (low for free tier) | $25 one-time signup credit | Grok-2, Grok-2 Mini, Grok-2 Vision |
<!--TABLE:RENEWABLE:END-->

### 🎁 One-Time Trial Credits

Sign up and receive credits to use until depleted.

<!--TABLE:TRIAL:START-->
| Provider | Credit Card? | Credit Amount | Expiry | Key Models |
|:---|:---:|:---|:---|:---|
| [Together.AI](https://together.ai/) ⚠️ *free research models need a $5 minimum deposit* | Registration | — | — | PrismML Ternary Bonsai 27B (Free) |
| [Replicate](https://replicate.com/) | Registration | Small trial credit | One-time | See provider |
| [Fireworks AI](https://fireworks.ai/) | Registration | $1 | One-time | See provider |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | Registration | $5 | 3 months | See provider |
| [Hyperbolic](https://app.hyperbolic.xyz/) | Registration | $1 | One-time | See provider |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | Registration | $1 (requires a bank card on file) | One-time | See provider |
| [Cerebras](https://cerebras.ai/inference) | Registration | $5 | 30 days | Llama 3.1 8B (Fast), Llama 3.1 70B (Fast), Llama 4 Scout (Fast), Qwen3 32B (Fast) |
| [Novita AI](https://novita.ai/) | Registration | $0.50 | One-time | See provider |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | Registration | 1M tokens | One-time | See provider |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | Registration | 1M tokens/model | One-time per model | See provider |
| [AI21 Labs](https://docs.ai21.com/) | Registration | $10 | 3 months | Jamba Large, Jamba Mini |
| [Upstage](https://console.upstage.ai/) | Registration | $10 | 3 months | See provider |
| [DeepSeek](https://platform.deepseek.com/) | Registration | 5M tokens | 30 days | See provider |
| [Cerebrium](https://www.cerebrium.ai/) | Registration | $30 | One-time | See provider |
| [DeepInfra](https://deepinfra.com/) | Registration | $5 | One-time (90 days expiry) | See provider |
| [Friendli AI](https://friendli.ai/) | Registration | $10 | One-time | See provider |
| [Nscale](https://www.nscale.com/product/inference) | No | $5 | One-time | See provider |
<!--TABLE:TRIAL:END-->

### 🖥️ Local / Self-Hosted (Unlimited, Private, Free Forever)

| Tool | Type | Highlights |
|:---|:---|:---|
| [Ollama](https://ollama.com/) | CLI + API | 100+ models, GPU acceleration, OpenAI-compatible endpoint |
| [LM Studio](https://lmstudio.ai/) | Desktop GUI | Any GGUF model, built-in model browser, offline |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ engine | Runs any GGUF, minimal dependencies |
| [GPT4All](https://gpt4all.io/) | Desktop app | CPU-only, no GPU required, open source |
| [Jan.ai](https://jan.ai/) | Desktop app | Privacy-focused, 100% offline ChatGPT alternative |
| [KoboldCpp](https://github.com/LostRuins/koboldcpp) | Single executable | Optimized for creative writing, GGUF |
| [llamafile](https://github.com/Mozilla-Ocho/llamafile) | Single executable | Multi-platform, combines llama.cpp + Cosmopolitan Libc |
| [Text Generation WebUI](https://github.com/oobabooga/text-generation-webui) | Gradio UI | Highly customizable, advanced local experimentation |
| [BentoML](https://www.bentoml.com/) | Inference platform | Deploy any AI/ML model anywhere, production-grade |

---

## Quick Reference — Base URLs & API Keys

<!--TABLE:QUICKREF:START-->
| Provider | Base URL | Get API Key |
|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | `https://openrouter.ai/api/v1` | [Get Key →](https://openrouter.ai/) |
| [Google AI Studio](https://aistudio.google.com/) | `https://generativelanguage.googleapis.com/v1beta` | [Get Key →](https://aistudio.google.com/) |
| [Together.AI](https://together.ai/) | `https://api.together.xyz/v1` | [Get Key →](https://together.ai/) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [Get Key →](https://console.mistral.ai/) |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | `https://router.huggingface.co/v1` | [Get Key →](https://huggingface.co/inference-api/serverless) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [Get Key →](https://cohere.com/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [Get Key →](https://replicate.com/) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [Get Key →](https://fireworks.ai/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [Get Key →](https://build.nvidia.com/explore/discover) |
| [Venice.ai](https://venice.ai/) | `https://api.venice.ai/api/v1` | [Get Key →](https://venice.ai/) |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | `https://api.sambanova.ai/v1` | [Get Key →](https://cloud.sambanova.ai/) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.xyz/v1` | [Get Key →](https://app.hyperbolic.xyz/) |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | `https://api.tokenfactory.nebius.com/v1` | [Get Key →](https://tokenfactory.nebius.com/) |
| [Cerebras](https://cerebras.ai/inference) | `https://api.cerebras.ai/v1` | [Get Key →](https://cerebras.ai/inference) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [Get Key →](https://novita.ai/) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [Get Key →](https://console.groq.com/) |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [Get Key →](https://console.scaleway.com/generative-api/models) |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [Get Key →](https://bailian.console.alibabacloud.com/) |
| [AI21 Labs](https://docs.ai21.com/) | `https://api.ai21.com/studio/v1` | [Get Key →](https://docs.ai21.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [Get Key →](https://console.upstage.ai/) |
| [DeepSeek](https://platform.deepseek.com/) | `https://api.deepseek.com/v1` | [Get Key →](https://platform.deepseek.com/) |
| [Coze](https://www.coze.com/) | `https://api.coze.com/v1` | [Get Key →](https://www.coze.com/) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [Get Key →](https://z.ai/) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [Get Key →](https://dash.cloudflare.com/) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [Get Key →](https://requesty.ai/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [Get Key →](https://endpoints.ai.cloud.ovh.net/) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [Get Key →](https://www.cerebrium.ai/) |
| [DeepInfra](https://deepinfra.com/) | `https://api.deepinfra.com/v1/openai` | [Get Key →](https://deepinfra.com/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [Get Key →](https://friendli.ai/) |
| [Ollama Cloud](https://ollama.com/cloud) | `https://ollama.com/v1` | [Get Key →](https://ollama.com/cloud) |
| [Nous Portal](https://portal.nousresearch.com) | `https://inference-api.nousresearch.com/v1` | [Get Key →](https://portal.nousresearch.com) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | `https://inference.hetzner.com/api/v1` | [Get Key →](https://experiments.hetzner.com/inference) |
| [LLM7.io](https://llm7.io) | `https://api.llm7.io/v1` | [Get Key →](https://llm7.io) |
| [Pollinations.ai](https://pollinations.ai) | `https://text.pollinations.ai` | [Get Key →](https://pollinations.ai) |
| [SiliconFlow](https://siliconflow.com/pricing) | `https://api.siliconflow.com/v1` | [Get Key →](https://siliconflow.com/pricing) |
| [ModelScope](https://modelscope.cn) | `https://api-inference.modelscope.cn/v1` | [Get Key →](https://modelscope.cn) |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | `https://api.aionlabs.ai/v1` | [Get Key →](https://www.aionlabs.ai/pricing/) |
| [Nscale](https://www.nscale.com/product/inference) | `https://inference.api.nscale.com/v1` | [Get Key →](https://www.nscale.com/product/inference) |
| [Inference.net](https://inference.net/) | `https://api.inference.net/v1` | [Get Key →](https://inference.net/) |
| [Grok (xAI)](https://console.x.ai/) | `https://api.x.ai/v1` | [Get Key →](https://console.x.ai/) |
<!--TABLE:QUICKREF:END-->

---

## Guides & Tutorials

Published at [free-llm.com/guides](https://free-llm.com/guides/):

- **Best Free LLM APIs in 2026** — side-by-side comparison of top picks
- **Gemini vs ChatGPT (Free Tier)** — what you actually get for $0
- **How to Use OpenRouter** — setup walkthrough with code
- **OpenRouter Alternatives** — other aggregators worth trying
- **Local LLMs with Ollama** — get started in under 5 minutes
- **Ultimate Free LLM API Guide** — the comprehensive deep-dive

---

## Community Features

Free-LLM is **community-driven**. The website at [free-llm.com](https://free-llm.com) lets visitors:

- **Vote** on providers to surface the most useful ones
- **Submit** new providers and models
- **Propose edits** to existing provider data (admin-reviewed)
- **Report** models that have gone from free to paid
- **Earn recognition** on the [Hall of Fame](https://free-llm.com/hall-of-fame) leaderboard

Data syncs back to this repository.

---

## Code Examples

The [`code-examples/`](code-examples/) directory has ready-to-run Python, JavaScript, and curl snippets — just add your API key.

**By coding assistant:** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md)

<!--CODEEX:PROVIDERS:START-->
**By provider (40):** [AI21 Labs](code-examples/ai21-labs) · [Aion Labs](code-examples/aion-labs) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [DeepInfra](code-examples/deepinfra) · [DeepSeek](code-examples/deepseek) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [Google AI Studio](code-examples/google-ai-studio) · [Grok (xAI)](code-examples/grok-xai) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [Hugging Face Inference](code-examples/huggingface-inference) · [Hyperbolic](code-examples/hyperbolic) · [Inference.net](code-examples/inference-net) · [LLM7.io](code-examples/llm7-io) · [Mistral (La Plateforme)](code-examples/mistral-ai) · [ModelScope](code-examples/modelscope) · [Nebius (Token Factory)](code-examples/nebius) · [Nous Portal](code-examples/nous-portal) · [Novita AI](code-examples/novita-ai) · [Nscale](code-examples/nscale) · [NVIDIA NIM](code-examples/nvidia-nim) · [Ollama Cloud](code-examples/ollama-cloud) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [SambaNova Cloud](code-examples/sambanova) · [Scaleway Generative APIs](code-examples/scaleway) · [SiliconFlow](code-examples/siliconflow) · [Together.AI](code-examples/together-ai) · [Upstage](code-examples/upstage) · [Venice.ai](code-examples/venice-ai) · [Z.AI (GLM)](code-examples/z-ai)
<!--CODEEX:PROVIDERS:END-->

**Local / Self-Hosted:** [BentoML](code-examples/bentoml) · [GPT4All](code-examples/gpt4all) · [Jan.ai](code-examples/jan-ai) · [KoboldCpp](code-examples/koboldcpp) · [llama.cpp](code-examples/llama-cpp) · [llamafile](code-examples/llamafile) · [LM Studio](code-examples/lm-studio) · [Ollama](code-examples/ollama) · [Text Gen WebUI](code-examples/text-generation-webui)

---

## Repository Structure

```
Free-LLM/
├── README.md                 ← You are here (English)
├── README.zh-CN.md            ← 简体中文
├── README.zh-TW.md            ← 繁體中文
├── README.ja.md               ← 日本語
├── README.ko.md                ← 한국어
├── CONTRIBUTING.md            ← Contribution guidelines
├── code-examples/             ← Ready-to-use snippets (per-provider + per-tool)
├── .github/                   ← Issue/PR templates
└── LICENSE                    ← MIT
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. Quick version:

1. **Add a provider** — use the [submit form](https://free-llm.com/submit) on the website, or open an [issue](https://github.com/nejib1/Free-LLM/issues/new/choose)/PR here.
2. **Fix inaccurate data** — rate limits change, providers graduate or shut down. PRs welcome.
3. **Add a config snippet** — have a working config for a tool we don't cover? Add it to [`code-examples/`](code-examples/).
4. **Vote & discuss** — help the community surface the best options at [free-llm.com](https://free-llm.com).

### Criteria for inclusion

A provider belongs in this list if:
1. It explicitly offers a **free tier** (not just a trial credit with no free-forever option) — see [Provider Directory](#provider-directory) for how we split permanent tiers from one-time credits
2. The API is **publicly accessible** (no waitlist, closed beta, or reverse-engineering)
3. For trial credits: clearly labeled and the free-forever alternative (if any) is called out

---

## Links

- 🌐 **Live site**: [free-llm.com](https://free-llm.com) — directory, voting, submissions
- 🆚 **Compare providers**: [free-llm.com/compare](https://free-llm.com/compare)
- 📚 **Guides**: [free-llm.com/guides](https://free-llm.com/guides/)
- 🏆 **Hall of Fame**: [free-llm.com/hall-of-fame](https://free-llm.com/hall-of-fame)
- ➕ **Submit a provider**: [free-llm.com/submit](https://free-llm.com/submit)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-08-21<!--LASTSYNC:END--></sub></p>
