# Damascus - Code Examples

> Part of **[Free-LLM](https://free-llm.com)** — Open Directory of Free AI & LLM APIs

## About

An open-source CLI coding agent for local & open-source LLMs. Fold many cheap model passes through a deterministic 3-stage verifier (parser → contract → sandbox build/test) to produce verified, frontier-grade code from modest models.

**Official Website:** [https://github.com/NomaDamas/damascus](https://github.com/NomaDamas/damascus)

**Full Details:** [https://free-llm.com/api/damascus](https://free-llm.com/api/damascus)

## How Damascus Uses Free-LLM

Damascus is provider-agnostic — any OpenAI-compatible `/chat/completions` endpoint works. This lets you wire the *free* providers from the [Free-LLM Provider Directory](../../README.md#provider-directory) straight into your `damascus.toml` and get verified, sandboxed code at $0.

Every free provider in Free-LLM exposes an OpenAI-compatible endpoint, so each one below can back the four model roles (`planner`, `drafter`, `judge`, `repairer`).

## Available Examples

This directory contains ready-to-use code examples:

- **Config** - `damascus.toml` — a working config wired to free providers
- **Setup helper** - `python.py` — writes `damascus.toml` for your chosen free provider
- **Install** - `curl.sh` — installs the Damascus binary from source
- **Run** - `run.sh` — runs a task with a free backend

## Usage

1. Install Damascus (see `curl.sh` or the [install guide](../damascus.md))
2. Get a free API key from any provider in the [Quick Reference](../../README.md#quick-reference--base-urls--api-keys) (Groq, Google AI Studio, OpenRouter, Mistral, NVIDIA NIM, Cerebras…)
3. Point `damascus.toml` at that `base_url` + key (template in `damascus.toml`)
4. Run `damascus run "<task>"` — Damascus plans, generates, verifies, and keeps only what passes

## More Information

For rate limits, pricing details, and setup instructions, visit:
[https://free-llm.com/api/damascus](https://free-llm.com/api/damascus)

---

*Generated automatically from [Free-LLM](https://free-llm.com) database*