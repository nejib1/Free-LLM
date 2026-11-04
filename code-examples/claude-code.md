# Claude Code with free LLM APIs

Claude Code can run on free models, but there's one catch that most guides get wrong: **Claude Code speaks the Anthropic Messages API (`/v1/messages`), not the OpenAI Chat Completions API.** If you point `ANTHROPIC_BASE_URL` at an OpenAI-style URL such as `https://api.groq.com/openai/v1`, you'll get 404s or schema errors.

So there are two ways to do it:

1. **Use a provider that has a native Anthropic-compatible endpoint.** Two environment variables and you're done.
2. **Put a small translation proxy in front of an OpenAI-only provider** (Groq, Cerebras, NVIDIA NIM, Mistral, Gemini, Cloudflare…). LiteLLM or claude-code-router do the conversion.

Always set `ANTHROPIC_MODEL` too. Otherwise Claude Code sends its own model names (`claude-sonnet-…`), which other providers don't know.

> Last checked: November 4, 2026. Free tiers change often, so check the live directory at [free-llm.com](https://free-llm.com) before you rely on one.

---

## Option 1: providers with a native Anthropic endpoint

| Provider | `ANTHROPIC_BASE_URL` | Free? | Good free model to start with |
|:---|:---|:---|:---|
| [OpenRouter](https://free-llm.com/provider/openrouter) | `https://openrouter.ai/api` | `:free` models, 50 requests/day (1,000/day after a one-time $10 top-up) | `nvidia/nemotron-3-ultra-550b-a55b:free`, `cohere/north-mini-code:free` |
| [Z.AI (GLM)](https://free-llm.com/provider/z-ai) | `https://api.z.ai/api/anthropic` | GLM Flash models are free | `glm-4.7-flash` |
| [FreeInference](https://free-llm.com/provider/freeinference) (Harvard SEAS) | `https://freeinference.org/anthropic` | Free for research/open source, no card | `glm-5.3-flash`, `deepseek-v4-flash` |
| [Ollama](https://free-llm.com/provider/ollama) (local) | `http://localhost:11434` | Free, runs on your machine | `qwen3.8`, `gpt-oss:20b`, `flint:40b` |
| [LM Studio](https://free-llm.com/provider/lm-studio) (local) | `http://localhost:1234` | Free, runs on your machine | any loaded model |
| [Ollama Cloud](https://free-llm.com/provider/ollama-cloud) | `https://ollama.com` | Pay-as-you-go; `beam:cloud` is the only free model | `beam:cloud` |

Paid options with native endpoints, for reference: DeepSeek (`https://api.deepseek.com/anthropic`), MiniMax (`https://api.minimax.io/anthropic`), Alibaba Model Studio (per-workspace `/apps/anthropic` URL).

### OpenRouter

```bash
export ANTHROPIC_BASE_URL="https://openrouter.ai/api"
export ANTHROPIC_AUTH_TOKEN="sk-or-v1-your_openrouter_key"
export ANTHROPIC_API_KEY=""            # must be empty so Claude Code uses the token above
export ANTHROPIC_MODEL="nvidia/nemotron-3-ultra-550b-a55b:free"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="nvidia/nemotron-3.5-lightning:free"
claude
```

Get a key at [openrouter.ai/keys](https://openrouter.ai/keys). Free models rotate; see the current list on [free-llm.com/provider/openrouter](https://free-llm.com/provider/openrouter).

### Z.AI (GLM Flash, free)

```bash
export ANTHROPIC_BASE_URL="https://api.z.ai/api/anthropic"
export ANTHROPIC_AUTH_TOKEN="your_zai_key"
export ANTHROPIC_MODEL="glm-4.7-flash"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="glm-4.5-flash"
export API_TIMEOUT_MS=3000000
claude
```

### FreeInference (no card, research use)

```bash
export ANTHROPIC_BASE_URL="https://freeinference.org/anthropic"
export ANTHROPIC_AUTH_TOKEN="hyi-your_freeinference_key"
export ANTHROPIC_MODEL="glm-5.3-flash"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="glm-5.3-flash"
claude
```

### Ollama (fully local, free)

```bash
ollama pull qwen3.8            # or gpt-oss:20b, flint:40b, gemma4
export ANTHROPIC_BASE_URL="http://localhost:11434"
export ANTHROPIC_AUTH_TOKEN="ollama"
export ANTHROPIC_API_KEY=""
export ANTHROPIC_MODEL="qwen3.8"
claude
```

Recent Ollama versions can also do it in one step: `ollama launch claude`.

---

## Option 2: OpenAI-only providers through a proxy

Groq, Cerebras, NVIDIA NIM, Mistral, Google AI Studio (OpenAI endpoint), Cloudflare, Scaleway, OVH and most gateways only accept OpenAI-format requests. A local proxy translates Claude Code's requests.

### With LiteLLM (example: Groq, free, no card)

```bash
cat > litellm.yaml <<'EOF'
model_list:
  - model_name: "gpt-oss-120b"
    litellm_params:
      model: "openai/openai/gpt-oss-120b"
      api_base: "https://api.groq.com/openai/v1"
      api_key: "os.environ/GROQ_API_KEY"
EOF

export GROQ_API_KEY="gsk_your_groq_key"
uvx --from 'litellm[proxy]' litellm --config litellm.yaml --port 4000 &

export ANTHROPIC_BASE_URL="http://localhost:4000"
export ANTHROPIC_AUTH_TOKEN="sk-local"
export ANTHROPIC_MODEL="gpt-oss-120b"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="gpt-oss-120b"
claude
```

`model:` is `openai/` + the provider's own model id. Swap `api_base` and the id for any provider:

| Provider | `api_base` | Free model id |
|:---|:---|:---|
| Groq | `https://api.groq.com/openai/v1` | `openai/gpt-oss-120b`, `qwen/qwen3.8-27b` |
| Cerebras | `https://api.cerebras.ai/v1` | `gpt-oss-120b`, `qwen-3.8-27b` (needs a card for the $5 credit) |
| NVIDIA NIM | `https://integrate.api.nvidia.com/v1` | `z-ai/glm-5.3-flash`, `moonshotai/kimi-k2.6`, `mistralai/mistral-large-4-1t-a52b` |
| Mistral | `https://api.mistral.ai/v1` | `codestral-latest`, `mistral-small-latest` |
| Google AI Studio | `https://generativelanguage.googleapis.com/v1beta/openai` | `gemini-3.8-flash` |
| Kilo Gateway | `https://ai-gateway.kilo.ai/api/v1` | `cohere/north-mini-code:free` |

### With claude-code-router

```bash
npm install -g @musistudio/claude-code-router
ccr ui      # add your provider (base URL, key, model) in the web UI
```

The router then serves Claude Code on `http://127.0.0.1:3456`. See the [project README](https://github.com/musistudio/claude-code-router) for its config file format.

---

## Tips

- **Tool calling matters.** Claude Code relies heavily on tools. Models that handle tools well on free tiers: GPT-OSS 120B, GLM-5.3 Flash, Kimi K2.6 / K2.7 Code, Qwen3.8 27B, Cohere North Mini Code, Nemotron 3 Ultra.
- **Rate limits hit fast.** An agent session can send dozens of requests a minute. A provider with 20-30 RPM will throttle; use Groq, NVIDIA NIM or a local model for long sessions.
- **Avoid "free Claude" key pools.** Services that offer free or 80%-off Claude/GPT through shared accounts break the providers' terms and can leak your code.
- **Generate a config for any provider** at [free-llm.com/setup](https://free-llm.com/setup). It picks the native endpoint when there is one and the proxy config otherwise.
