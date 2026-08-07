# Codex CLI — Free LLM API Config

Point Codex CLI at any free OpenAI-compatible backend.

## How It Works

Codex CLI reads `OPENAI_BASE_URL` and `OPENAI_API_KEY` from the environment (or `~/.codex/config.toml`). Point them at a free provider and pass `--model` (or set it in the config).

## Quick Config

### Groq (fastest inference, no credit card)

```bash
export OPENAI_BASE_URL="https://api.groq.com/openai/v1"
export OPENAI_API_KEY="your-groq-key"          # get at console.groq.com/keys
codex --model "llama-3.3-70b-versatile"
```

### OpenRouter (29+ free models, single key)

```bash
export OPENAI_BASE_URL="https://openrouter.ai/api/v1"
export OPENAI_API_KEY="sk-or-v1-your-key"      # get at openrouter.ai/keys
codex --model "deepseek/deepseek-v4-flash:free"
```

### NVIDIA NIM (no daily token cap, phone verification)

```bash
export OPENAI_BASE_URL="https://integrate.api.nvidia.com/v1"
export OPENAI_API_KEY="nvapi-your-key"         # get at build.nvidia.com
codex --model "deepseek-ai/deepseek-r1"
```

## Persistent Config (`~/.codex/config.toml`)

```toml
[model_providers.groq]
name = "Groq"
base_url = "https://api.groq.com/openai/v1"
env_key = "OPENAI_API_KEY"

model_provider = "groq"
model = "llama-3.3-70b-versatile"
```

## Caveats

- Free tiers have rate limits — Groq: 14,400 requests/day, NVIDIA NIM: 40 RPM, OpenRouter: 50 requests/day (free tier).
- Some free models are weaker at long agentic tool-use chains than GPT-5-class models — prefer larger models (70B+) for multi-step coding tasks.

## More Providers

See the full [Provider Directory](../README.md#provider-directory) and [Quick Reference](../README.md#quick-reference--base-urls--api-keys) in the main README for all 33 free providers, or browse [free-llm.com](https://free-llm.com).
