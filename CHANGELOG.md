# Changelog

All notable changes to **Free-LLM Router** are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and the router follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Changes to the provider directory (new providers, ended free tiers, models added
or removed) are not listed here: see the live [directory changelog](https://free-llm.com/changelog)
and the monthly [`data-YYYY.MM` releases](https://github.com/nejib1/Free-LLM/releases).

## [Unreleased]

### Added

- `--json` for `free-llm status`, `free-llm models` and `free-llm providers`: the same information as JSON on stdout, for scripts, status bars and CI checks (#43, thanks @tridev-tej).

## [1.0.3] - 2026-11-24

### Added

- `CHANGELOG.md`, `SECURITY.md`, `SUPPORT.md` and a code of conduct.

### Fixed

- `auto:reasoning` now recognizes MiniMax-M3.1-Flash across its catalog IDs (#40, thanks @octo-patch). Always-thinking models without a keyword in their id now go in one `ALWAYS_THINKING` list.

### Documentation

- A requested model or `provider/model` is a preference: with `fallback_to_auto` on (the default) another free model may answer. Thanks to the Open Agent API test in discussion #39.

## [1.0.2] - 2026-11-23

### Changed
- No more "guest mode" promise: the last provider that answered without an account has ended its free tier, so the router now says clearly that it needs at least one free key (start banner, dashboard, guided setup, `doctor`). Guest access still switches itself on if the catalog lists a no-account provider again.
- `free-llm keys add` no longer keeps a key the provider refuses (use `--force` to keep it anyway), and an unknown provider name gets a "did you mean" instead of the usage line.
- `free-llm service` without `install` / `uninstall` prints its usage instead of installing.
- Provider examples in the dashboard and docs follow the current catalog.

### Fixed
- The CLI crashed with `EPIPE` when its output was piped into a command that stops early (`free-llm providers | head`).
- Dashboard: the Models and Activity tables no longer overflow on a phone.
- `free-llm update` reported a custom catalog address as "GitHub mirror".
- `free-llm keys` showed short keys in full; "1 models" is now "1 model".

## [1.0.1] - 2026-11-18

### Security

- API keys are now locked to their provider's address. The first time a key is used it is pinned to that provider's domain (for example `api.groq.com`). If the catalog ever pointed that provider somewhere else, the router refuses to send the key and shows a warning (`free-llm doctor` explains how to clear it).

### Added

- Privacy information where a key is requested: in the guided setup, next to every key field in the dashboard ("sent only to api.groq.com") and in a new "Is it safe?" section of the router README.
- A test covering key pinning.

## [1.0.0] - 2026-11-18

First public release.

### Added

- One local endpoint, compatible with the OpenAI Chat Completions and Responses APIs, the Anthropic Messages API, the Ollama API, embeddings, and an MCP server.
- Live catalog of free providers and models from free-llm.com, refreshed automatically, with a bundled snapshot as offline fallback.
- Instant failover on rate limits, daily quotas, errors, timeouts and empty answers; reads `Retry-After` and rate-limit headers; rotates several keys per provider.
- Routing profiles: `auto`, `auto:coding`, `auto:fast`, `auto:smart`, `auto:long`, `auto:vision`, `auto:reasoning`, `auto:spread` and `auto:fusion`.
- Guest mode: works with zero keys to try it out.
- One-command setup for coding agents: `free-llm setup claude` (also `codex`, `opencode`, `aider`), with a backup of the previous configuration.
- Compatibility fixes for weaker free models: tool calls written as text are recovered, `<think>` blocks hidden, unsupported parameters retried.
- Web dashboard (keys, models, playground, live activity, settings) and CLI (`free-llm help`, `free-llm doctor`).
- Keys stored on the user's computer, encrypted with AES-256-GCM. No account, no telemetry.
- Installers for macOS/Linux (`install.sh`) and Windows (`install.ps1`), `npx`/`npm` install from GitHub, and a Dockerfile.
- Zero runtime dependencies, Node.js 18+.

[Unreleased]: https://github.com/nejib1/Free-LLM/compare/router-v1.0.3...HEAD
[1.0.3]: https://github.com/nejib1/Free-LLM/compare/router-v1.0.2...router-v1.0.3
[1.0.2]: https://github.com/nejib1/Free-LLM/compare/router-v1.0.1...router-v1.0.2
[1.0.1]: https://github.com/nejib1/Free-LLM/compare/router-v1.0.0...router-v1.0.1
[1.0.0]: https://github.com/nejib1/Free-LLM/releases/tag/router-v1.0.0
