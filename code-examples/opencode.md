# OpenCode — Free LLM API Config

Point OpenCode at any free OpenAI-compatible backend in 30 seconds.

## How It Works

OpenCode supports multiple LLM providers through environment variables or the `/connect` command. When you configure a free provider, OpenCode routes API calls through that backend instead of paid options.

## Quick Config

### Groq (fastest inference, no credit card)

```bash
export GROQ_API_KEY="gsk_your_groq_api_key"
```

Get your key at [console.groq.com/keys](https://console.groq.com/keys). Recommended model: `llama-3.3-70b-versatile`.

### Google AI Studio (free tier, generous limits)

```bash
export GOOGLE_API_KEY="your_google_ai_studio_key"
```

Get your key at [aistudio.google.com](https://aistudio.google.com/). Recommended model: `gemini-3.1-flash`.

### OpenRouter (29+ free models, single key, no credit card)

```bash
export OPENROUTER_API_KEY="sk-or-v1-your_openrouter_key"
```

Get your key at [openrouter.ai/keys](https://openrouter.ai/keys). Recommended model: `deepseek/deepseek-v4-flash:free`.

### Mistral (La Plateforme)

```bash
export MISTRAL_API_KEY="your_mistral_key"
```

Get your key at [console.mistral.ai/api-keys](https://console.mistral.ai/api-keys). Recommended model: `codestral-latest` for coding tasks.

### Cerebras (fast inference, no credit card)

```bash
export CEREBRAS_API_KEY="your_cerebras_key"
```

Get your key at [cerebras.ai/inference](https://cerebras.ai/inference). Recommended model: `llama-3.3-70b`.

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
4. **Start coding**: OpenCode will use Llama 3.3 70B for free

## Caveats

- Free tiers have rate limits. Groq: 14,400 requests/day. OpenRouter: 50 requests/day.
- OpenCode works best with models that support tool use well (Llama 3.3 70B+, DeepSeek R1).
- The `/connect` command makes setup easier than manual environment variables.

## More Providers

See the full [Provider Directory](../README.md#provider-directory) and [Quick Reference](../README.md#quick-reference--base-urls--api-keys) in the main README for all 33 free providers, or browse [free-llm.com](https://free-llm.com).