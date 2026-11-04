# Cursor with free LLM APIs

Add a free model to Cursor as a custom OpenAI-compatible model.

> Last checked: November 4, 2026. Free tiers change often, so check [free-llm.com](https://free-llm.com) before relying on one.

## How it works

Cursor lets you add your own models under **Settings → Models**, as long as the provider exposes an OpenAI-compatible `/chat/completions` endpoint. You override the OpenAI base URL and add the model name.

## Quick config (Groq example)

1. Open **Settings → Models**
2. Under **API Keys**, enable **Override OpenAI Base URL** and enter `https://api.groq.com/openai/v1`
3. Paste your Groq key in the OpenAI API key field (get one at [console.groq.com/keys](https://console.groq.com/keys), no card)
4. Click **Add model** and type `openai/gpt-oss-120b`
5. Turn off the built-in models you don't want so Cursor doesn't send their names to Groq

## Other free providers that work the same way

| Provider | Base URL | Model to add | Card? |
|:---|:---|:---|:---|
| Groq | `https://api.groq.com/openai/v1` | `openai/gpt-oss-120b`, `qwen/qwen3.8-27b` | No |
| OpenRouter | `https://openrouter.ai/api/v1` | `nvidia/nemotron-3-ultra-550b-a55b:free`, `cohere/north-mini-code:free` | No |
| NVIDIA NIM | `https://integrate.api.nvidia.com/v1` | `moonshotai/kimi-k2.6`, `z-ai/glm-5.3-flash` | Phone verification |
| Mistral | `https://api.mistral.ai/v1` | `codestral-latest`, `mistral-small-latest` | Phone verification |
| Google AI Studio | `https://generativelanguage.googleapis.com/v1beta/openai` | `gemini-3.8-flash` | No |
| Kilo Gateway | `https://ai-gateway.kilo.ai/api/v1` | `nvidia/nemotron-3.5-lightning:free` | No |
| Cerebras | `https://api.cerebras.ai/v1` | `gpt-oss-120b` | Card required for the $5 credit |

## Caveats

- Only one custom base URL can be active at a time, because it replaces the OpenAI one.
- Tab completion and some agent features use Cursor's own models and don't go through your key. Custom models work well for chat and inline edits; results vary for long multi-file agent runs.
- Rate limits apply per provider. See each provider's page on [free-llm.com](https://free-llm.com).

## More providers

See the [Provider Directory](../README.md#provider-directory) and the [Quick Reference](../README.md#quick-reference--base-urls--api-keys) in the main README, or generate a config at [free-llm.com/setup](https://free-llm.com/setup).
