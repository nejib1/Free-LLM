# Cursor — Free LLM API Config

Add a free model as a custom OpenAI-compatible model in Cursor.

## How It Works

Cursor lets you add custom models under **Settings → Models → Add Model**, as long as the provider exposes an OpenAI-compatible `/chat/completions` endpoint.

## Quick Config

1. Open **Settings → Models**
2. Click **Add Model**
3. Fill in:

```
Model name: llama-3.3-70b-versatile
Base URL:   https://api.groq.com/openai/v1
API key:    your-groq-key          # get at console.groq.com/keys
```

4. Disable "OpenAI API Key" verification if Cursor asks — it only applies to official OpenAI models.

### Other free providers that work the same way

| Provider | Base URL | Get Key | Credit Card? |
|---|---|---|---|
| Groq | `https://api.groq.com/openai/v1` | [console.groq.com/keys](https://console.groq.com/keys) | No |
| NVIDIA NIM | `https://integrate.api.nvidia.com/v1` | [build.nvidia.com](https://build.nvidia.com/settings/api-keys) | Phone verification |
| OpenRouter | `https://openrouter.ai/api/v1` | [openrouter.ai/keys](https://openrouter.ai/keys) | No |
| Cerebras | `https://api.cerebras.ai/v1` | [cloud.cerebras.ai](https://cloud.cerebras.ai/) | No |
| Mistral (La Plateforme) | `https://api.mistral.ai/v1` | [console.mistral.ai/api-keys](https://console.mistral.ai/api-keys) | Phone verification |

## Caveats

- Cursor's Tab/Composer features are tuned for specific models and may work best with the officially supported ones — free models work great for chat and inline edits, results vary for agentic multi-file edits.
- Rate limits apply per provider — see the [Provider Directory](../README.md#provider-directory) for details.

## More Providers

See the full [Provider Directory](../README.md#provider-directory) and [Quick Reference](../README.md#quick-reference--base-urls--api-keys) in the main README for all 33 free providers, or browse [free-llm.com](https://free-llm.com).
