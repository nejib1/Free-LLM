# Claude Code — Free LLM API Config

Point Claude Code at any free OpenAI-compatible backend in 30 seconds.

## How It Works

Claude Code reads `ANTHROPIC_BASE_URL` and `ANTHROPIC_AUTH_TOKEN` from the environment. When you set them to a free provider, Claude Code routes API calls through that backend instead of Anthropic's paid API.

## Quick Config

### Groq (fastest inference, no credit card)

```bash
export ANTHROPIC_BASE_URL="https://api.groq.com/openai/v1"
export ANTHROPIC_AUTH_TOKEN="gsk_your_groq_api_key"
```

Get your key at [console.groq.com/keys](https://console.groq.com/keys). Recommended model: `llama-3.3-70b-versatile`.

### NVIDIA NIM (no daily token cap, phone verification)

```bash
export ANTHROPIC_BASE_URL="https://integrate.api.nvidia.com/v1"
export ANTHROPIC_AUTH_TOKEN="nvapi-your_nvidia_key"
```

Get your key at [build.nvidia.com](https://build.nvidia.com/settings/api-keys). Recommended model: `meta/llama-3.3-70b-instruct`, `deepseek-ai/deepseek-r1`.

### OpenRouter (29+ free models, single key, no credit card)

```bash
export ANTHROPIC_BASE_URL="https://openrouter.ai/api/v1"
export ANTHROPIC_AUTH_TOKEN="sk-or-v1-your_openrouter_key"
```

Get your key at [openrouter.ai/keys](https://openrouter.ai/keys). Recommended model: `deepseek/deepseek-v4-flash:free`.

### Mistral (La Plateforme)

```bash
export ANTHROPIC_BASE_URL="https://api.mistral.ai/v1"
export ANTHROPIC_AUTH_TOKEN="your_mistral_key"
```

Get your key at [console.mistral.ai/api-keys](https://console.mistral.ai/api-keys). Recommended model: `codestral-latest` for coding tasks.

## Persistent Config

Add to your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
# Free LLM API backend for Claude Code
export ANTHROPIC_BASE_URL="https://api.groq.com/openai/v1"
export ANTHROPIC_AUTH_TOKEN="gsk_your_key_here"
```

## Caveats

- Claude Code expects tool/capability support that not all free backends implement well. If you hit errors, try a more capable model (Llama 3.3 70B+ or DeepSeek R1).
- The "Claude" model name shown in Claude Code is cosmetic — you're actually using whichever model you configure.
- Free tiers have rate limits. Groq: 14,400 requests/day. NVIDIA NIM: 40 RPM. OpenRouter: 50 requests/day (free tier, up to 1,000 with a one-time $10 topup).

## More Providers

See the full [Provider Directory](../README.md#provider-directory) and [Quick Reference](../README.md#quick-reference--base-urls--api-keys) in the main README for all 33 free providers, or browse [free-llm.com](https://free-llm.com).
