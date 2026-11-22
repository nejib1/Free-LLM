# Changelog

All notable changes to **Free-LLM Router** are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and the router follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Changes to the provider directory (new providers, ended free tiers, models added
or removed) are not listed here: see the live [directory changelog](https://free-llm.com/changelog)
and the monthly [`data-YYYY.MM` releases](https://github.com/nejib1/Free-LLM/releases).

## [Unreleased]

### Added

- Continuous integration: the router test suite runs on Node.js 18, 20 and 22 for every push and pull request.
- `CHANGELOG.md`, `SECURITY.md`, `SUPPORT.md` and a code of conduct.

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

[Unreleased]: https://github.com/nejib1/Free-LLM/compare/router-v1.0.1...HEAD
[1.0.1]: https://github.com/nejib1/Free-LLM/compare/router-v1.0.0...router-v1.0.1
[1.0.0]: https://github.com/nejib1/Free-LLM/releases/tag/router-v1.0.0
