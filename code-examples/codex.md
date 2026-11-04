# Codex CLI with free LLM APIs

Point OpenAI's Codex CLI at a free OpenAI-compatible backend.

> Last checked: November 4, 2026. Free tiers change often, so check [free-llm.com](https://free-llm.com) before relying on one.

## How it works

Codex CLI talks to OpenAI by default. You can register any OpenAI-compatible provider in `~/.codex/config.toml` and select it with `model_provider`. Most free providers only implement the Chat Completions API, so set `wire_api = "chat"` for them.

## Persistent config (`~/.codex/config.toml`)

```toml
model_provider = "groq"
model = "openai/gpt-oss-120b"

[model_providers.groq]
name = "Groq"
base_url = "https://api.groq.com/openai/v1"
env_key = "GROQ_API_KEY"
wire_api = "chat"

[model_providers.openrouter]
name = "OpenRouter"
base_url = "https://openrouter.ai/api/v1"
env_key = "OPENROUTER_API_KEY"
wire_api = "chat"

[model_providers.nvidia]
name = "NVIDIA NIM"
base_url = "https://integrate.api.nvidia.com/v1"
env_key = "NVIDIA_API_KEY"
wire_api = "chat"

[model_providers.mistral]
name = "Mistral"
base_url = "https://api.mistral.ai/v1"
env_key = "MISTRAL_API_KEY"
wire_api = "chat"
```

Then export the key and run Codex, switching provider and model on the command line when you like:

```bash
export GROQ_API_KEY="gsk_your_groq_key"            # console.groq.com/keys, no card
codex

export OPENROUTER_API_KEY="sk-or-v1-your_key"      # openrouter.ai/keys, no card
codex -c model_provider=openrouter -m "nvidia/nemotron-3-ultra-550b-a55b:free"

export NVIDIA_API_KEY="nvapi-your_key"             # build.nvidia.com
codex -c model_provider=nvidia -m "moonshotai/kimi-k2.6"

export MISTRAL_API_KEY="your_mistral_key"          # console.mistral.ai, free Experiment plan
codex -c model_provider=mistral -m "codestral-latest"
```

## Good free models for Codex

| Provider | Model id | Why |
|:---|:---|:---|
| Groq | `openai/gpt-oss-120b` | Very fast, good tool calling, 1,000 requests/day |
| Groq / Cerebras | `qwen/qwen3.8-27b` / `qwen-3.8-27b` | Strong coder for its size |
| NVIDIA NIM | `moonshotai/kimi-k2.6`, `z-ai/glm-5.3-flash`, `mistralai/mistral-large-4-1t-a52b` | Large models on free trial endpoints |
| OpenRouter | `nvidia/nemotron-3-ultra-550b-a55b:free`, `cohere/north-mini-code:free`, `recursive/flint-v1.0:free` | Free, 1M-token context on Nemotron |
| Mistral | `codestral-latest` | Built for code, fill-in-the-middle |
| Cloudflare | `@cf/moonshotai/kimi-k2.7-code` | Coding model, 10,000 free neurons/day (needs the account-specific URL) |

## Caveats

- Free tiers have rate limits: Groq about 30 RPM and 1,000 requests/day on GPT-OSS, OpenRouter 50 requests/day (1,000 after a $10 top-up), NVIDIA NIM roughly 40 RPM.
- Agent sessions send many requests. If you keep hitting 429 errors, switch provider or use a local model with [Ollama](https://free-llm.com/provider/ollama) (`base_url = "http://localhost:11434/v1"`).
- Generate a ready-made config for any provider at [free-llm.com/setup](https://free-llm.com/setup).

## More providers

See the [Provider Directory](../README.md#provider-directory) and the [Quick Reference](../README.md#quick-reference--base-urls--api-keys) in the main README, or browse [free-llm.com](https://free-llm.com).
