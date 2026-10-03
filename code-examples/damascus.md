# Damascus — Free LLM API Config

Free-LLM routes any free OpenAI-compatible backend into **Damascus** — an open-source CLI coding agent that folds cheap model passes through an objective verifier into verified, frontier-grade code. Use the free tiers below and never pay for a token.

## How It Works

Damascus reads a `damascus.toml` config that maps four model roles (`planner`, `drafter`, `judge`, `repairer`) to any OpenAI-compatible `base_url` + key. Every provider in the [Free-LLM Provider Directory](../README.md#provider-directory) exposes such an endpoint — so pick any free tier, drop it in, and Damascus plans → generates → **verifies** (syntax → contract → sandbox build/test) → keeps only what passes.

## Quick Config

### Groq (fastest inference, no credit card, 14,400 req/day)

```toml
[providers.groq]
base_url = "https://api.groq.com/openai/v1"
api_key_env = "GROQ_API_KEY"

[models]
planner  = "groq/qwen/qwen3.6-27b"
drafter  = "groq/qwen/qwen3.6-27b"
judge    = "groq/qwen/qwen3.6-27b"
repairer = "groq/qwen/qwen3.6-27b"
```

Get your key at [console.groq.com/keys](https://console.groq.com/keys), then:

```bash
export GROQ_API_KEY="gsk_your_key"
damascus doctor --probe        # one tiny live call per role — confirms the wiring
damascus run "implement the is_prime function in src/lib.rs so the tests pass"
```

### OpenRouter (single key, many free models)

```toml
[providers.openrouter]
base_url = "https://openrouter.ai/api/v1"
api_key_env = "OPENROUTER_API_KEY"

[models]
planner  = "openrouter/deepseek/deepseek-v4-flash:free"
drafter  = "openrouter/deepseek/deepseek-v4-flash:free"
judge    = "openrouter/deepseek/deepseek-v4-flash:free"
repairer = "openrouter/deepseek/deepseek-v4-flash:free"
```

### Google AI Studio (Gemini, generous free tier, no credit card)

```toml
[providers.google]
base_url = "https://generativelanguage.googleapis.com/v1beta/openai"
api_key_env = "GEMINI_API_KEY"

[models]
planner  = "google/gemini-2.0-flash"
drafter  = "google/gemini-2.0-flash"
judge    = "google/gemini-2.0-flash"
repairer = "google/gemini-2.0-flash"
```

Get your key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey).

### NVIDIA NIM (no daily token cap, phone verification)

```toml
[providers.nvidia]
base_url = "https://integrate.api.nvidia.com/v1"
api_key_env = "NVIDIA_API_KEY"

[models]
planner  = "nvidia/deepseek-ai/deepseek-r1"
drafter  = "nvidia/deepseek-ai/deepseek-r1"
judge    = "nvidia/deepseek-ai/deepseek-r1"
repairer = "nvidia/deepseek-ai/deepseek-r1"
```

Get your key at [build.nvidia.com/settings/api-keys](https://build.nvidia.com/settings/api-keys).

### Local (Ollama/llama.cpp/vLLM — private, unlimited, free forever)

```toml
[providers.local]
base_url = "http://localhost:11434/v1"   # Ollama default; no key needed

[models]
planner  = "local/gemma4:e4b"
drafter  = "local/qwen2.5-coder:7b"
judge    = "local/gemma4:e4b"
repairer = "local/qwen2.5-coder:7b"
```

## Persistent Config & Verification Gates

Add the objective gates so Damascus only keeps changes that *provably* pass your stack:

```toml
[verify]
build = "cargo build"             # or npm run build / pip install -e .
test  = "cargo test"              # or npm test / pytest
lint  = "cargo clippy -- -D warnings"
timeout_secs = 600

[scaling]
candidates = 8                    # best-of-N; raise to 16/32 for hard tasks
repair_rounds = 2                 # reflexion retries on failure
```

`[providers]`, `[models]`, `[scaling]`, and `[verify]` all live in one `damascus.toml` (see the full template in [`damascus/damascus.toml`](damascus/damascus.toml)).

## Caveats

- Damascus is built around **fast, cheap, high-throughput** models — it shines with 7B–120B open models on the free tiers above; per-call weakness is absorbed by best-of-N + the deterministic verifier.
- Free tiers have rate limits — Groq: 14,400 req/day, 30 RPM; OpenRouter: 50 req/day (free tier); Google AI Studio: 5–30 RPM (model-dependent).
- `cargo install` needs Rust ≥ 1.80; see [`damascus/curl.sh`](damascus/curl.sh) for the install script.

## More Providers

See the full [Provider Directory](../README.md#provider-directory) and [Quick Reference](../README.md#quick-reference--base-urls--api-keys) in the main README for all 40+ free providers (Mistral, Cerebras, DeepInfra, SambaNova, Together, Z.AI, SiliconFlow…), or browse [free-llm.com](https://free-llm.com). Every one can back Damascus the same way.