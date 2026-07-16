# Free-LLM — Open Directory of Free AI & LLM APIs

**Stop paying for AI.** This project indexes every provider that lets you use large language models at zero cost — whether through permanent free tiers, trial credits, or local execution on your own hardware.

---

## Why This Exists

The LLM landscape changes weekly. New providers launch free tiers, others sunset theirs, rate limits shift overnight. Keeping track manually is painful. Free-LLM solves this by maintaining a **single source of truth** covering 46+ providers, continuously updated by the community.

---

## Complete Provider Quota Reference

> Detailed information for each provider — including models, pricing, code examples, and setup steps — is available at [free-llm.com](https://free-llm.com).

### ⚡ Permanent Free Tiers (No Credit Card Required)

These providers offer ongoing free access with rate-limited quotas that never expire.

| Provider | Rate Limit | Daily Limit | Token Limit | Monthly Limit | Key Models |
|:---|:---|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | 15–30 RPM | 1,500 RPD (Flash) / 50 RPD (Pro) | 1M TPM (Flash) / 32K TPM (Pro) | Free of charge | Gemini 3 Pro, Gemini 3 Flash, Gemini 3.1 Flash-Lite, 2.0 Flash, 1.5 Pro |
| [Groq](https://console.groq.com/) | 30 RPM | 14,400 RPD | 40K TPM (varies) | Free forever | Llama 4 Maverick/Scout, Llama 3.3 70B, Qwen3 32B, GPT-OSS 120B/20B, Kimi K2, Whisper |
| [Cerebras](https://inference.cerebras.ai/) | 30 RPM | 1,000,000 tokens/day | 60K–100K TPM | Free forever | Llama 4 Scout, Qwen3 32B, Llama 3.1 8B, Llama 3.1 70B |
| [HuggingFace Inference](https://huggingface.co/inference-api/serverless) | 300 req/hour | Dependent on load | Max context of model | Free forever (rate-limited) | Llama 3.2 11B, Qwen 2.5 72B, Gemma 2 9B, Flux.1 |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | Varies by model | 10,000 neurons/day | Included in neuron budget | ~300K neurons/month | Llama 3.1 8B, Mistral 7B, Qwen 1.5 7B, DeepSeek Coder 6.7B, Phi-2 |
| [Cohere](https://cohere.com/) | 20 RPM | — | — | 1,000 req/month | Command A (111B), Command A+, Command R+, Command R, Aya Expanse |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 1 req/s | — | Rate-limited, exact TPM not published | Free (Experiment plan) | Mistral Large, Mistral Medium 3.5, Codestral, Mistral Small, Mistral Nemo |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 2 RPM (anon) / 400 RPM (auth) | Unspecified | Unspecified | Beta access | Qwen3Guard 0.6B/8B, Stable Diffusion XL, TTS models |
| [Chutes.ai](https://chutes.ai/) | Varies (community) | Subject to availability | Free (community-powered) | No hard cap | DeepSeek-R1, Llama 3.1 70B, Qwen 2.5 72B |
| [Inference.net](https://inference.net/) | Varies | Fair use | Free for listed models | Fair use policy | DeepSeek-R1, Llama 3.1 8B/70B |
| [Kluster.ai](https://kluster.ai/) | Batch-based (async) | Generous batch quotas | Free for batch API | Subject to fair use | Llama 3.1 405B, DeepSeek-R1, Qwen 2.5 72B |
| [Glhf.chat](https://glhf.chat/) | Standard | Generous for personal use | Free tier included | Unlimited for free models | Llama 3.1 70B, Mixtral 8x7B, Phi-3 Mini |
| [Coze](https://www.coze.com/) | Varies by model | Token-based daily limits | Free daily tokens | Resets daily | GPT-4o (via Coze), Gemini 1.5 Pro (via Coze) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 40 RPM | — | — | — | Llama 4 Scout, DeepSeek-R1, various open-source models (phone verification required) |
| [Z.AI (GLM)](https://z.ai/) | ~1 req/s | ~1,000 RPD (Flash tier) | Varies by model | Free (Flash tier) | GLM-4.5-Flash, GLM-4.7-Flash |

### 💰 Renewable Credits

These providers give you credits that renew periodically.

| Provider | Rate Limit | Free Offer | Token Limit | Monthly Limit | Key Models |
|:---|:---|:---|:---|:---|:---|
| [Grok / xAI](https://console.x.ai/) | Varies (low for free tier) | Credit-based | $25 one-time signup credit (+$150/mo opt-in w/ data sharing) | One-time + optional monthly | Grok 4, Grok 4.1 Fast (2M context), Grok-2 |
| [OpenRouter](https://openrouter.ai/) | 20 RPM | 50 RPD (up to 1K w/ $10 topup) | Shared quota | — | DeepSeek V4 Flash, Llama 4 Maverick/Scout, GPT-OSS 120B, Gemini 2.0 (29+ free models) |
| [GitHub Models](https://github.com/marketplace/models) | 10 RPM (high-tier) | 50 RPD (high-tier) / 150 RPD (mini-tier) | 8K in / 4K out per request | — | GPT-5 Chat, GPT-5 Mini, Llama 4 Scout/Maverick, Phi-4, Mistral Large |
| [Venice.ai](https://venice.ai/) | Daily limits for free tier | Basic usage allowed | Limits without Pro | Resets daily | Llama 3.1 405B, Dolphin Mixtral, Stable Diffusion 3 |

### 🎁 One-Time Trial Credits

Sign up and receive credits to use until depleted.

| Provider | Rate Limit | Credit Amount | Token Equivalent | Expiry | Key Models |
|:---|:---|:---|:---|:---|:---|
| [Together.AI](https://together.ai/) | Subject to availability | Free research models | Free (Apriel series) | Free forever (research) | Apriel 1.6/1.5 15B Thinker |
| [DeepSeek](https://platform.deepseek.com/) | Standard | 5M free tokens | 5,000,000 tokens | 30 days | DeepSeek-V4 Pro, DeepSeek-V4 Flash, DeepSeek-R1 |
| [DeepInfra](https://deepinfra.com/) | 60 RPM | $5 credit | ~5M tokens (varies) | One-time | 40+ open-source models |
| [SambaNova](https://cloud.sambanova.ai/) | Varies by model | $5 credit | ~30M Llama 8B tokens | One-time | Llama 3.1 405B/70B/8B, Qwen 2.5 72B |
| [Cerebrium](https://www.cerebrium.ai/) | Pay-per-second | $30 credit | Credit-based | One-time | Any deployable model |
| [AI21 Labs](https://docs.ai21.com/) | Standard | $10 credit | Credit-based | 3 months | Jamba models |
| [Fireworks AI](https://fireworks.ai/) | Shared | $1 credit | One-time credit | One-time trial | Various open-source models |
| [Friendli AI](https://friendli.ai/) | Standard | $10 credit | Varies by model | One-time | Popular open-source models |
| [Lepton AI](https://www.lepton.ai/) | Varies | $10 credit | Credit-based | One-time trial | Llama, Mistral, Stable Diffusion |
| [Hyperbolic](https://app.hyperbolic.xyz/) | Standard | $1 credit | Credit-based | One-time trial | Llama 3.1 405B, DeepSeek V3 |
| [Nebius](https://studio.nebius.com/) | Standard | $1 credit | Credit-based | One-time trial | Various open-source models |
| [Novita AI](https://novita.ai/) | Standard | $0.50 credit | Credit-based | One-time trial | Llama, Mistral |
| [Replicate](https://replicate.com/) | Varies | Small trial credit | Credit-based | One-time trial | 1000+ models (LLMs, image, audio) |
| [Upstage](https://console.upstage.ai/) | Standard | $10 credit | Credit-based | 3 months | Solar Pro LLM |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | Standard | 1M tokens/model (trial) | 1M tokens per model | One-time per model | Qwen3-Max, Qwen3-Plus, Qwen3-Coder-Plus, Qwen-Max/Plus/Turbo |
| [Scaleway](https://console.scaleway.com/generative-api/models) | Standard | 1M free tokens (trial) | 1M tokens | One-time trial | Mistral, Llama, Qwen (EU-hosted) |
| [Yi AI](https://www.01.ai/) | Standard | Initial trial credits | Credit-based | One-time trial | Yi-Large (200K context) |
| [Requesty](https://requesty.ai/) | Standard | Free monthly credits | Free monthly credits | Free tier included | Multi-provider routing |

### 🖥️ Local / Self-Hosted (Unlimited & Private)

Run on your own hardware — zero cost, zero rate limits, complete privacy.

| Tool | Rate Limit | Daily Limit | Token Limit | Monthly Limit | Highlights |
|:---|:---|:---|:---|:---|:---|
| [Ollama](https://ollama.com/) | Hardware limited | Unlimited | Unlimited | Free | CLI-first, 100+ models, GPU accel, OpenAI-compatible API |
| [LM Studio](https://lmstudio.ai/) | Hardware limited | Unlimited | Unlimited | Free | Desktop GUI, any GGUF model, built-in model browser |
| [GPT4All](https://gpt4all.io/) | Hardware dependent | Unlimited | Unlimited | Free open source | CPU-only chatbot, no GPU required |
| [llama.cpp](https://github.com/ggerganov/llama.cpp) | Hardware dependent | Unlimited | Unlimited | Free open source | C/C++ engine, any GGUF model |
| [Jan.ai](https://jan.ai/) | Hardware dependent | Unlimited | Unlimited | Free forever (open source) | Privacy-focused ChatGPT alternative, 100% offline |
| [KoboldCpp](https://github.com/LostRuins/koboldcpp) | Hardware dependent | Unlimited | Unlimited | Free open source | Single-file GGUF engine for creative writing |
| [llamafile](https://github.com/Mozilla-Ocho/llamafile) | Hardware dependent | Unlimited | Unlimited | Free open source | Single executable, runs anywhere (Mozilla) |
| [Text Gen WebUI](https://github.com/oobabooga/text-generation-webui) | Hardware dependent | Unlimited | Unlimited | Free open source | Gradio interface for advanced local experimentation |
| [BentoML](https://www.bentoml.com/) | Hardware dependent | Unlimited | Unlimited | Free open source | Inference platform for deploying models anywhere |

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
- **Earn recognition** on the [Hall of Fame](https://free-llm.com/hall-of-fame) leaderboard

Data syncs back to this repository automatically.

---

## Quick Start — Use Any Free API in 30 Seconds

```python
# Works with Groq, Cerebras, Grok, Together, DeepSeek, SambaNova...
# Just swap the base_url and api_key.

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.groq.com/openai/v1"  # or any OpenAI-compatible endpoint
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "What makes LPU inference fast?"}]
)

print(response.choices[0].message.content)
```

Most providers listed here support the **OpenAI SDK** — meaning you can switch between them by changing two lines.

---

## Code Examples

The [`code-examples/`](code-examples/) directory has ready-to-run Python, JavaScript, and curl snippets for 20 providers — just add your API key:

[BentoML](code-examples/bentoml) · [Cerebras](code-examples/cerebras) · [Chutes.ai](code-examples/chutes-ai) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [GitHub Models](code-examples/github-models) · [Glhf.chat](code-examples/glhf-chat) · [Google AI Studio](code-examples/google-ai-studio) · [Grok / xAI](code-examples/grok-xai) · [Groq](code-examples/groq-cloud) · [HuggingFace Inference](code-examples/huggingface-inference) · [Inference.net](code-examples/inference-net) · [Kluster.ai](code-examples/kluster-ai) · [Mistral AI](code-examples/mistral-ai) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Requesty](code-examples/requesty) · [Together.AI](code-examples/together-ai) · [Venice.ai](code-examples/venice-ai)

---

## Contributing

1. **Add a provider** — use the [submit form](https://free-llm.com/submit) on the website or open a PR.
3. **Vote & discuss** — help the community surface the best options at [free-llm.com](https://free-llm.com).

---

## License

MIT — see [LICENSE](LICENSE) for details.
