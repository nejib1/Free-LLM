# Replicate - Code Examples

> Part of **[Free-LLM](https://free-llm.com)** — Open Directory of Free AI & LLM APIs

## About

Replicate is a general-purpose model-hosting marketplace (any Docker/Cog-packaged model — LLMs, image, audio, video). Unlike most providers in this list, it does **not** expose an OpenAI-compatible `/chat/completions` endpoint — it uses an async **prediction** API instead. Adding the `Prefer: wait` header (shown below) makes the call block and return synchronously rather than requiring you to poll a prediction ID.

Replicate is pay-per-second with no confirmed standing free credit as of writing — check [replicate.com/pricing](https://replicate.com/pricing) for the current signup offer before assuming a free allotment.

**Official Website:** [https://replicate.com/](https://replicate.com/)

**Full Details:** [https://free-llm.com/api/replicate](https://free-llm.com/api/replicate)

## Available Examples

This directory contains ready-to-use code examples in multiple languages:

- **Curl** - `curl.sh`
- **Javascript** - `javascript.js`
- **Python** - `python.py`

## Usage

1. Get your API token from [https://replicate.com/account/api-tokens](https://replicate.com/account/api-tokens)
2. Replace `YOUR_API_TOKEN` in the code examples
3. Run the example in your preferred language — note the model+version naming (`owner/model`) changes as new model generations ship, double-check [replicate.com/collections/language-models](https://replicate.com/collections/language-models) for the current one

## More Information

For rate limits, pricing details, and setup instructions, visit:
[https://free-llm.com/api/replicate](https://free-llm.com/api/replicate)

---

*Generated automatically from [Free-LLM](https://free-llm.com) database*
