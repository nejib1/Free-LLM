# Claude Code — Free LLM API Config

Run Claude Code against a free LLM backend through a local translation proxy.

## How It Works

Claude Code speaks the **Anthropic Messages API**: it sends `POST {ANTHROPIC_BASE_URL}/v1/messages` with Anthropic-format tool calls and streaming events. Most free providers (Groq, NVIDIA NIM, OpenRouter, Mistral, ...) expose the **OpenAI Chat Completions** format (`/v1/chat/completions`) instead.

Pointing `ANTHROPIC_BASE_URL` straight at an OpenAI-compatible endpoint does **not** work — the variable changes where requests go, not their format, so you'll get 404s or schema errors. You need either:

1. a **translation proxy** that accepts Anthropic-format requests and forwards them to an OpenAI-compatible backend, or
2. a provider that publishes a native **Anthropic-compatible endpoint**.

You also need `ANTHROPIC_MODEL`; otherwise Claude Code sends Claude model IDs, which other providers reject.

## Option 1 — Translation Proxy (any OpenAI-compatible provider)

This example uses [LiteLLM](https://github.com/BerriAI/litellm). [claude-code-router](https://github.com/musistudio/claude-code-router) works similarly. Check the proxy's GitHub for security advisories and install a pinned release.

### Groq (fastest inference, no credit card)

```bash
pip install 'litellm[proxy]'
export GROQ_API_KEY="gsk_your_groq_api_key"
litellm --model groq/llama-3.3-70b-versatile --port 4000
```

Then, in another shell:

```bash
export ANTHROPIC_BASE_URL="http://localhost:4000"
export ANTHROPIC_AUTH_TOKEN="anything"   # the proxy holds the real key
export ANTHROPIC_MODEL="groq/llama-3.3-70b-versatile"
claude
```

Get your key at [console.groq.com/keys](https://console.groq.com/keys).

### Other providers

Swap the proxy's key variable and model; the Claude Code side stays the same (with `ANTHROPIC_MODEL` matching the `--model` value).

| Provider | Key variable | `--model` example | Get a key |
|---|---|---|---|
| NVIDIA NIM | `NVIDIA_NIM_API_KEY` | `nvidia_nim/meta/llama-3.3-70b-instruct` | [build.nvidia.com](https://build.nvidia.com/settings/api-keys) |
| OpenRouter | `OPENROUTER_API_KEY` | `openrouter/<model-id>:free` | [openrouter.ai/keys](https://openrouter.ai/keys) |
| Mistral | `MISTRAL_API_KEY` | `mistral/codestral-latest` | [console.mistral.ai/api-keys](https://console.mistral.ai/api-keys) |

See LiteLLM's provider docs for exact model prefixes.

## Option 2 — Native Anthropic-Compatible Endpoint

Some providers (e.g. DeepSeek, Moonshot/Kimi, Z.ai/GLM) publish a separate endpoint that speaks the Messages API, so no proxy is needed. Use the Anthropic endpoint from the provider's own docs — **not** its OpenAI `/v1` URL:

```bash
export ANTHROPIC_BASE_URL="<provider's Anthropic-compatible endpoint>"
export ANTHROPIC_AUTH_TOKEN="your_provider_key"
export ANTHROPIC_MODEL="<provider model id>"
```

## Windows (PowerShell)

Replace `export NAME="value"` with:

```powershell
$env:ANTHROPIC_BASE_URL = "http://localhost:4000"
```

## Persistent Config

Add to your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
# Free LLM backend for Claude Code (via local proxy)
export ANTHROPIC_BASE_URL="http://localhost:4000"
export ANTHROPIC_AUTH_TOKEN="anything"
export ANTHROPIC_MODEL="groq/llama-3.3-70b-versatile"
```

## Caveats

- Claude Code relies on a long system prompt and heavy tool use. Many open models handle this poorly even through a proxy; expect more failed edits and loops than with Claude. Larger models (70B+) do better.
- The "Claude" name shown in Claude Code is cosmetic — you're using whichever model you configure.
- Free tiers have rate limits, and agentic sessions use many requests. Check each provider's current limits in the [Provider Directory](../README.md#provider-directory).

## More Providers

See the full [Provider Directory](../README.md#provider-directory) and [Quick Reference](../README.md#quick-reference--base-urls--api-keys) in the main README for all free providers, or browse [free-llm.com](https://free-llm.com).
