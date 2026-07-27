# Free-LLM — Open Directory of Free AI & LLM APIs

**Stop paying for AI.** This project indexes every provider that lets you use large language models at zero cost — whether through permanent free tiers, trial credits, or local execution on your own hardware.

---

## Why This Exists

The LLM landscape changes weekly. New providers launch free tiers, others sunset theirs, rate limits shift overnight. Keeping track manually is painful. Free-LLM solves this by maintaining a **single source of truth** covering 43+ providers, continuously updated by the community.

---

## Complete Provider Quota Reference

> Detailed information for each provider — including models, pricing, code examples, and setup steps — is available at [free-llm.com](https://free-llm.com).

### ⚡ Permanent Free Tiers (No Credit Card Required)

These providers offer ongoing free access with rate-limited quotas that never expire.

| Provider | Rate Limit | Daily Limit | Token Limit | Monthly Limit | Key Models |
|:---|:---|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | 15–30 RPM | 1,500 RPD (Flash) / 50 RPD (Pro) | 1M TPM (Flash) / 32K TPM (Pro) | Free of charge | Gemini 3.1 Pro Preview, Gemini 3.6 Flash, 3.5 Flash, 3.5 Flash-Lite, 2.5 Pro |
| [Groq](https://console.groq.com/) | 30 RPM | 14,400 RPD | 40K TPM (varies) | Free forever | Llama 3.3 70B, Qwen3.6 27B, GPT-OSS 120B/20B, Kimi K2, Whisper |
| [Cerebras](https://inference.cerebras.ai/) | 5 RPM | 1M tokens/day | 30K TPM / 1M TPH | Free forever | GPT-OSS 120B, GLM-4.7, Gemma 4 31B |
| [HuggingFace Inference](https://huggingface.co/inference-api/serverless) | 300 req/hour | Dependent on load | Max context of model | Free forever (rate-limited) | Llama 3.2 11B, Qwen 2.5 72B, Gemma 2 9B, Flux.1 |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | Varies by model | 10,000 neurons/day | Included in neuron budget | ~300K neurons/month | Llama 3.1 8B, Mistral 7B, Qwen 1.5 7B, DeepSeek Coder 6.7B, Phi-2 |
| [Cohere](https://cohere.com/) | 20 RPM | — | — | 1,000 req/month | Command A+, Command A Reasoning, Command A, Command R+, Command R |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 1 req/s | — | Rate-limited, exact TPM not published | Free (Experiment plan) | Mistral Large 3, Mistral Medium 3.5, Codestral, Mistral Small |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 2 RPM (anon) / 400 RPM (auth) | Unspecified | Unspecified | Beta access | Qwen3-32B, Qwen3.6-27B, 20+ open-weight models |
| [Chutes.ai](https://chutes.ai/) | Varies (community) | Subject to availability | Free (community-powered) | No hard cap | DeepSeek-R1, Llama 3.1 70B, Qwen 2.5 72B |
| [Inference.net](https://inference.net/) | Varies | Fair use | Free for listed models | Fair use policy | DeepSeek-R1, Llama 3.1 8B/70B |
| [Glhf.chat](https://glhf.chat/) | Standard | Generous for personal use | Free tier included | Unlimited for free models | Llama 3.1 70B, Mixtral 8x7B, Phi-3 Mini |
| [Coze](https://www.coze.com/) | Varies by model | Token-based daily limits | Free daily tokens | Resets daily | GPT-4o (via Coze), Gemini 1.5 Pro (via Coze) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 40 RPM | — | — | — | Llama 4 Scout, DeepSeek-R1, various open-source models (phone verification required) |
| [Z.AI (GLM)](https://z.ai/) | ~1 req/s | ~1,000 RPD (Flash tier) | Varies by model | Free (Flash tier) | GLM-4.5-Flash, GLM-4.7-Flash |

### 💰 Renewable Credits

These providers give you credits that renew periodically.

| Provider | Rate Limit | Free Offer | Token Limit | Monthly Limit | Key Models |
|:---|:---|:---|:---|:---|:---|
| [Grok / xAI](https://console.x.ai/) | Varies (low for free tier) | Credit-based | $25 one-time signup credit (+$150/mo opt-in w/ data sharing) | One-time + optional monthly | Grok 4.5, Grok 4.3 |
| [OpenRouter](https://openrouter.ai/) | 20 RPM | 50 RPD (up to 1K w/ $10 topup) | Shared quota | — | DeepSeek V4 Flash, Llama 4 Maverick/Scout, GPT-OSS 120B, Gemini 2.0 (29+ free models) |
| [GitHub Models](https://github.com/marketplace/models) | 10 RPM (high-tier) | 50 RPD (high-tier) / 150 RPD (mini-tier) | 8K in / 4K out per request | — | GPT-5 Chat, GPT-5 Mini, Llama 4 Scout/Maverick, Phi-4, Mistral Medium |
| [Venice.ai](https://venice.ai/) | Requires Pro subscription | API access bundled with Pro plan | Limits without Pro | Resets daily | Llama 3.1 405B, Dolphin Mixtral, Stable Diffusion 3 |

### 🎁 One-Time Trial Credits

Sign up and receive credits to use until depleted.

| Provider | Rate Limit | Credit Amount | Token Equivalent | Expiry | Key Models |
|:---|:---|:---|:---|:---|:---|
| [Together.AI](https://together.ai/) | Subject to availability | Free research models | Free (Apriel series) | Free forever (research) | Apriel 1.6/1.5 15B Thinker |
| [DeepSeek](https://platform.deepseek.com/) | Standard | 5M free tokens | 5,000,000 tokens | 30 days | DeepSeek-V4 Flash (chat + reasoning modes) |
| [DeepInfra](https://deepinfra.com/) | 60 RPM | $5 credit | ~5M tokens (varies) | One-time | 40+ open-source models |
| [SambaNova](https://cloud.sambanova.ai/) | Varies by model | $5 credit | ~30M Llama 8B tokens | One-time | Llama 3.3 70B, DeepSeek-V3.1 |
| [Cerebrium](https://www.cerebrium.ai/) | Pay-per-second | $30 credit | Credit-based | One-time | Deploy any model (serverless GPU platform, not a shared endpoint) |
| [AI21 Labs](https://docs.ai21.com/) | Standard | $10 credit | Credit-based | 3 months | Jamba Large, Jamba Mini |
| [Fireworks AI](https://fireworks.ai/) | Shared | $1 credit | One-time credit | One-time trial | Various open-source models |
| [Friendli AI](https://friendli.ai/) | Standard | Trial credits at onboarding | Varies by model | One-time | Popular open-source models |
| [Hyperbolic](https://app.hyperbolic.xyz/) | Standard | $1 credit | Credit-based | One-time trial | Llama 3.1 405B, DeepSeek V3 |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | Standard | Trial credit | Credit-based | One-time trial | DeepSeek-R1, various open-source models |
| [Novita AI](https://novita.ai/) | Standard | Sandbox credit (promo, verify current amount) | Credit-based | 90 days | Llama, Mistral |
| [Replicate](https://replicate.com/) | Pay-per-second (prediction API) | No confirmed standing free credit | Credit-based | — | 1000+ models (LLMs, image, audio) |
| [Upstage](https://console.upstage.ai/) | Standard | Trial credit (verify current promo) | Credit-based | 3 months | Solar Mini, Solar Pro 3 |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | Standard | 1M in + 1M out tokens (Intl/Singapore accounts only) | 1M tokens per model | 90 days | Qwen3.7-Max, Qwen-Plus, Qwen-Flash, Qwen3-Coder-Plus |
| [Scaleway](https://console.scaleway.com/generative-api/models) | Standard | 1M free tokens (trial) | 1M tokens | One-time trial | Mistral, Llama, Qwen (EU-hosted) |
| [Requesty](https://requesty.ai/) | Standard | Free monthly credits | Free monthly credits | Free tier included | Multi-provider routing |

### 🖥️ Local / Self-Hosted (Unlimited & Private)

Run on your own hardware — zero cost, zero rate limits, complete privacy.

| Tool | Rate Limit | Daily Limit | Token Limit | Monthly Limit | Highlights |
|:---|:---|:---|:---|:---|:---|
| [Ollama](https://ollama.com/) | Hardware limited | Unlimited | Unlimited | Free | CLI-first, 100+ models, GPU accel, OpenAI-compatible API |
| [LM Studio](https://lmstudio.ai/) | Hardware limited | Unlimited | Unlimited | Free | Desktop GUI, any GGUF model, built-in model browser |
| [GPT4All](https://gpt4all.io/) | Hardware dependent | Unlimited | Unlimited | Free open source | CPU-only chatbot, no GPU required |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | Hardware dependent | Unlimited | Unlimited | Free open source | C/C++ engine, any GGUF model |
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

The [`code-examples/`](code-examples/) directory has ready-to-run Python, JavaScript, and curl snippets for 43 providers — just add your API key:

**Cloud APIs:** [AI21 Labs](code-examples/ai21-labs) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Chutes.ai](code-examples/chutes-ai) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [DeepInfra](code-examples/deepinfra) · [DeepSeek](code-examples/deepseek) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [GitHub Models](code-examples/github-models) · [Glhf.chat](code-examples/glhf-chat) · [Google AI Studio](code-examples/google-ai-studio) · [Grok / xAI](code-examples/grok-xai) · [Groq](code-examples/groq-cloud) · [HuggingFace Inference](code-examples/huggingface-inference) · [Hyperbolic](code-examples/hyperbolic) · [Inference.net](code-examples/inference-net) · [Mistral AI](code-examples/mistral-ai) · [Nebius](code-examples/nebius) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Qwen / Alibaba](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [SambaNova](code-examples/sambanova) · [Scaleway](code-examples/scaleway) · [Together.AI](code-examples/together-ai) · [Upstage](code-examples/upstage) · [Venice.ai](code-examples/venice-ai) · [Z.AI (GLM)](code-examples/z-ai)

**Local / Self-Hosted:** [BentoML](code-examples/bentoml) · [GPT4All](code-examples/gpt4all) · [Jan.ai](code-examples/jan-ai) · [KoboldCpp](code-examples/koboldcpp) · [llama.cpp](code-examples/llama-cpp) · [llamafile](code-examples/llamafile) · [LM Studio](code-examples/lm-studio) · [Ollama](code-examples/ollama) · [Text Gen WebUI](code-examples/text-generation-webui)

---

## Contributing

1. **Add a provider** — use the [submit form](https://free-llm.com/submit) on the website or open a PR.
2. **Vote & discuss** — help the community surface the best options at [free-llm.com](https://free-llm.com).

---

## License

MIT — see [LICENSE](LICENSE) for details.
