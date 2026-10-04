# OpenCode — Free LLM API Config

> Last verified: October 2026. Free-tier models change often — check the provider pages on [free-llm.com](https://free-llm.com) before relying on a specific model.

Point OpenCode at any free OpenAI-compatible backend in 30 seconds.

## How It Works

OpenCode supports multiple LLM providers through environment variables or the `/connect` command. When you configure a free provider, OpenCode routes API calls through that backend instead of paid options.

## Quick Config

### Groq (fast inference, no credit card)

```bash
export GROQ_API_KEY="gsk_your_groq_api_key"
```

Get your key at [console.groq.com/keys](https://console.groq.com/keys). Recommended model: `openai/gpt-oss-120b` (`llama-3.3-70b-versatile` was retired from Groq's free tier on August 16, 2026).

### Google AI Studio (free tier, generous limits)

```bash
export GOOGLE_API_KEY="your_google_ai_studio_key"
```

Get your key at [aistudio.google.com](https://aistudio.google.com/). Recommended model: `gemini-3.8-flash` (Gemini 2.0 was shut down on June 1, 2026; Pro models are no longer on the free tier).

### OpenRouter (~14 free models, single key, no credit card)

```bash
export OPENROUTER_API_KEY="sk-or-v1-your_openrouter_key"
```

Get your key at [openrouter.ai/keys](https://openrouter.ai/keys). Recommended model: `nvidia/nemotron-3-ultra-550b-a55b:free` (the free catalog rotates quickly — see the [official free models list](https://openrouter.ai/collections/free-models)). Some free models may use your prompts for training.

### Mistral (La Plateforme)

```bash
export MISTRAL_API_KEY="your_mistral_key"
```

Get your key at [console.mistral.ai/api-keys](https://console.mistral.ai/api-keys). Recommended model: `codestral-latest` for coding tasks (`open-mistral-nemo` was retired on July 31, 2026).

### Cerebras (very fast inference, $5 trial credit)

```bash
export CEREBRAS_API_KEY="your_cerebras_key"
```

Get your key at [cerebras.ai/inference](https://cerebras.ai/inference). Recommended model: `gpt-oss-120b` (`llama-3.3-70b` is deprecated). Since August 2026 a verified payment method is required to activate the $5 trial credit (valid 30 days).

## Using /connect Command

OpenCode has a built-in `/connect` command that simplifies provider setup:

1. Run `/connect` in the OpenCode TUI
2. Select your provider (opencode, groq, google, etc.)
3. Follow the prompts to enter your API key
4. Start coding with free models!

## Persistent Config

Add to your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
# Free LLM API backend for OpenCode
export GROQ_API_KEY="gsk_your_key_here"
# OR
export GOOGLE_API_KEY="your_key_here"
# OR
export OPENROUTER_API_KEY="sk-or-v1-your_key_here"
```

## OpenCode vs Other Coding Assistants

| Feature | OpenCode | Claude Code | Cursor | Codex CLI |
|---------|----------|-------------|--------|-----------|
| Open Source | ✅ | ❌ | ❌ | ❌ |
| Free Models | ✅ (via providers) | ❌ | ❌ | ❌ |
| Terminal + Desktop + IDE | ✅ | Terminal only | Desktop only | Terminal only |
| GitHub Copilot Support | ✅ | ❌ | ❌ | ❌ |
| ChatGPT Plus/Pro Support | ✅ | ❌ | ❌ | ❌ |
| Multi-session | ✅ | ❌ | ❌ | ❌ |
| Share Links | ✅ | ❌ | ❌ | ❌ |

## Recommended Free Setup

For the best free experience with OpenCode:

1. **Get a Groq API key** (fastest, no credit card required)
2. **Install OpenCode**: `curl -fsSL https://opencode.ai/install | bash`
3. **Configure**: Run `/connect`, select groq, paste your key
4. **Start coding**: OpenCode will use GPT OSS 120B for free

## Caveats

- Free tiers have rate limits. Groq: ~1,000 requests/day on `gpt-oss-120b`. OpenRouter: 50 requests/day (1,000 with $10 of lifetime credits).
- OpenCode works best with models that support tool use well (GPT OSS 120B, Qwen3.8 27B, Nemotron 3 Ultra).
- The `/connect` command makes setup easier than manual environment variables.

## More Providers

See the full [Provider Directory](../README.md#provider-directory) and [Quick Reference](../README.md#quick-reference--base-urls--api-keys) in the main README for all 55+ providers, or browse [free-llm.com](https://free-llm.com).