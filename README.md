<p align="center">
  <h1 align="center">Free-LLM — Open Directory of Free AI &amp; LLM APIs</h1>
  <p align="center"><strong>130+ free LLM models from 33 providers</strong> — find, compare &amp; configure free models in seconds, plus 9 local/self-hosted tools for unlimited private use.</p>
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

| Provider | Credit Card? | Rate Limit | Daily Limit | Monthly Limit | Key Models |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | No | 5–30 RPM (varies by model) | 9,000 RPD (Flash) / 25 RPD (Pro) | Free of charge | Gemini 3.1 Pro Preview, 3.6 Flash, 3.5 Flash, 3.5 Flash-Lite |
| [Groq](https://console.groq.com/) | No | 30 RPM | 14,400 RPD | Free forever | Llama 3.3 70B, Qwen3.6 27B, GPT-OSS 120B/20B, Kimi K2, Whisper |
| [Cerebras](https://inference.cerebras.ai/) | No | 30 RPM | 1M tokens/day | Free forever | GPT-OSS 120B, GLM-4.7, Gemma 4 31B |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | No | 300 req/hour | Dependent on load | Free forever (rate-limited) | Llama 3.2 11B, Qwen 2.5 72B, Gemma 2 9B, Flux.1 |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | No | Varies by model | 10,000 neurons/day | ~300K neurons/month | Llama 3.1 8B, Mistral 7B, Qwen 1.5 7B, DeepSeek Coder 6.7B, Phi-2 |
| [Cohere](https://cohere.com/) | No | 20 RPM | — | 1,000 req/month | Command A+, Command A Reasoning, Command A, Command R+, Command R |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | Phone verification | 1 req/second | — | Free ("Experiment" plan) | Mistral Large 3, Mistral Medium 3.5, Codestral, Mistral Small |
| [Inference.net](https://inference.net/) | No | 30 RPM (fair use) | Fair use | Free for listed models | DeepSeek-R1, Llama 3.1 8B/70B |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | Registration | 2 RPM (anon) / 400 RPM (auth) | Unspecified | Beta access | Qwen3-32B, Qwen3.6-27B, 20+ open-weight models |
| [Chutes.ai](https://chutes.ai/) | Registration | Varies (community) | Subject to availability | No hard cap | DeepSeek-R1, Llama 3.1 70B, Qwen 2.5 72B |
| [Coze](https://www.coze.com/) | Registration | Varies by model | Token-based daily limits | Resets daily | GPT-4o (via Coze), Gemini 1.5 Pro (via Coze) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | Phone verification | 40 RPM | — | — | Llama 4 Scout, DeepSeek-R1, various open-source models |
| [Z.AI (GLM)](https://z.ai/) | Registration | ~1 req/second (Flash tier) | ~1,000 RPD (Flash tier) | Free tier ongoing | GLM-4.5-Flash, GLM-4.7-Flash |

### 💰 Renewable Credits

Free access that renews periodically, no one-time expiry.

| Provider | Credit Card? | Rate Limit | Free Offer | Key Models |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | No | 20 RPM | 50 RPD (up to 1,000 with $10 one-time topup) | DeepSeek V4 Flash, Llama 4 Maverick/Scout, GPT-OSS 120B, Gemini 2.0 (29+ free models) |
| [GitHub Models](https://github.com/marketplace/models) | No | 10 RPM (high-tier) | 50 RPD (high-tier) / 150 RPD (mini-tier) | GPT-5 Chat, GPT-5 Mini, Llama 4 Scout/Maverick, Phi-4, Mistral Medium |
| [Grok / xAI](https://console.x.ai/) | Registration | Varies (low for free tier) | $25 one-time signup credit (+$150/mo opt-in w/ data sharing) | Grok 4.5, Grok 4.3 |
| [Venice.ai](https://venice.ai/) ⚠️ *full API access requires a Pro subscription* | Registration | 10 RPM (free tier) | Limited daily usage, resets daily | Llama 3.1 405B, Dolphin Mixtral, Stable Diffusion 3 |

### 🎁 One-Time Trial Credits

Sign up and receive credits to use until depleted.

| Provider | Credit Card? | Credit Amount | Expiry | Key Models |
|:---|:---:|:---|:---|:---|
| [Together.AI](https://together.ai/) ⚠️ *free research models need a $5 minimum deposit* | Registration | Free research models | Free forever (research) | Apriel 1.6/1.5 15B Thinker |
| [DeepSeek](https://platform.deepseek.com/) | Registration | 5,000,000 tokens | 30 days | DeepSeek-V4 Flash (chat + reasoning modes) |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | Registration | $5 credit | One-time | Llama 3.3 70B, DeepSeek-V3.1 |
| [Cerebrium](https://www.cerebrium.ai/) | Registration | $30 credit | One-time | Deploy any model (serverless GPU platform, not a shared endpoint) |
| [AI21 Labs](https://docs.ai21.com/) | Registration | $10 credit | 3 months | Jamba Large, Jamba Mini |
| [Fireworks AI](https://fireworks.ai/) | Registration | $1 credit | One-time trial | Various open-source models |
| [Friendli AI](https://friendli.ai/) | Registration | Trial credits at onboarding | One-time | Popular open-source models |
| [Hyperbolic](https://app.hyperbolic.xyz/) | Registration | $1 credit | One-time trial | Llama 3.1 405B, DeepSeek V3 |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | Registration | Trial credit | One-time trial | DeepSeek-R1, various open-source models |
| [Novita AI](https://novita.ai/) | Registration | $0.50 credit | 90 days | Llama, Mistral |
| [Replicate](https://replicate.com/) | Registration | Small trial credit | — | 1000+ models (LLMs, image, audio) |
| [Upstage](https://console.upstage.ai/) | Registration | $10 credit | 3 months | Solar Mini, Solar Pro 3 |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | Registration | 1M in + 1M out tokens per model (Intl/Singapore accounts only) | 90 days | Qwen3.7-Max, Qwen-Plus, Qwen-Flash, Qwen3-Coder-Plus |
| [Scaleway](https://console.scaleway.com/generative-api/models) | Registration | 1M free tokens | One-time trial | Mistral, Llama, Qwen (EU-hosted) |
| [Requesty](https://requesty.ai/) | Registration | Free monthly credits | Renews monthly | Multi-provider routing |

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

| Provider | Base URL | Get API Key |
|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | `https://generativelanguage.googleapis.com/v1beta` | [Get Key →](https://aistudio.google.com/app/apikey) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [Get Key →](https://console.groq.com/keys) |
| [Cerebras](https://inference.cerebras.ai/) | `https://api.cerebras.ai/v1` | [Get Key →](https://cloud.cerebras.ai/) |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | `https://router.huggingface.co/v1` | [Get Key →](https://huggingface.co/settings/tokens) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [Get Key →](https://dash.cloudflare.com/profile/api-tokens) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [Get Key →](https://dashboard.cohere.com/api-keys) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [Get Key →](https://console.mistral.ai/api-keys) |
| [Inference.net](https://inference.net/) | `https://api.inference.net/v1` | [Get Key →](https://inference.net/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [Get Key →](https://endpoints.ai.cloud.ovh.net/) |
| [Chutes.ai](https://chutes.ai/) | `https://api.chutes.ai/v1` | [Get Key →](https://chutes.ai/) |
| [Coze](https://www.coze.com/) | `https://api.coze.com/v1` | [Get Key →](https://www.coze.com/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [Get Key →](https://build.nvidia.com/settings/api-keys) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [Get Key →](https://z.ai/) |
| [OpenRouter](https://openrouter.ai/) | `https://openrouter.ai/api/v1` | [Get Key →](https://openrouter.ai/keys) |
| [GitHub Models](https://github.com/marketplace/models) | `https://models.inference.ai.azure.com` | [Get Key →](https://github.com/marketplace/models) |
| [Grok / xAI](https://console.x.ai/) | `https://api.x.ai/v1` | [Get Key →](https://console.x.ai/) |
| [Venice.ai](https://venice.ai/) | `https://api.venice.ai/api/v1` | [Get Key →](https://venice.ai/) |
| [Together.AI](https://together.ai/) | `https://api.together.xyz/v1` | [Get Key →](https://together.ai/) |
| [DeepSeek](https://platform.deepseek.com/) | `https://api.deepseek.com/v1` | [Get Key →](https://platform.deepseek.com/api_keys) |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | `https://api.sambanova.ai/v1` | [Get Key →](https://cloud.sambanova.ai/apis) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [Get Key →](https://www.cerebrium.ai/) |
| [AI21 Labs](https://docs.ai21.com/) | `https://api.ai21.com/studio/v1` | [Get Key →](https://studio.ai21.com/account/api-key) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [Get Key →](https://fireworks.ai/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [Get Key →](https://friendli.ai/) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.xyz/v1` | [Get Key →](https://app.hyperbolic.xyz/) |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | `https://api.tokenfactory.nebius.com/v1` | [Get Key →](https://studio.nebius.com/settings/api-keys) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [Get Key →](https://novita.ai/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [Get Key →](https://replicate.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [Get Key →](https://console.upstage.ai/) |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [Get Key →](https://bailian.console.alibabacloud.com/) |
| [Scaleway](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [Get Key →](https://console.scaleway.com/generative-api/models) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [Get Key →](https://requesty.ai/) |

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

**By provider (33):** [AI21 Labs](code-examples/ai21-labs) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Chutes.ai](code-examples/chutes-ai) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [DeepInfra](code-examples/deepinfra) · [DeepSeek](code-examples/deepseek) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [GitHub Models](code-examples/github-models) · [Google AI Studio](code-examples/google-ai-studio) · [Grok / xAI](code-examples/grok-xai) · [Groq](code-examples/groq-cloud) · [Hugging Face Inference](code-examples/huggingface-inference) · [Hyperbolic](code-examples/hyperbolic) · [Inference.net](code-examples/inference-net) · [Mistral AI](code-examples/mistral-ai) · [Nebius](code-examples/nebius) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Qwen / Alibaba](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [SambaNova](code-examples/sambanova) · [Scaleway](code-examples/scaleway) · [Together.AI](code-examples/together-ai) · [Upstage](code-examples/upstage) · [Venice.ai](code-examples/venice-ai) · [Z.AI (GLM)](code-examples/z-ai)

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

## License

MIT — see [LICENSE](LICENSE) for details.
