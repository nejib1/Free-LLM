# Cerebrium - Code Examples

> Part of **[Free-LLM](https://free-llm.com)** — Open Directory of Free AI & LLM APIs

## About

Cerebrium is a **serverless GPU deployment platform** (comparable to Modal or Banana), not a shared hosted-model endpoint like most other providers in this list. There's no pre-existing "sign up, get a key, curl a free model" flow — instead, you deploy your own inference container (Cerebrium provides ready-made templates, e.g. vLLM serving an OpenAI-compatible API), and Cerebrium then exposes that deployment at its own unique URL.

New accounts get a one-time $30 credit to cover the pay-per-second compute cost of running your deployment.

**Official Website:** [https://www.cerebrium.ai/](https://www.cerebrium.ai/)

**Full Details:** [https://free-llm.com/api/cerebrium](https://free-llm.com/api/cerebrium)

## Available Examples

This directory shows the **deploy-then-call** workflow instead of a single API call:

- **Curl** - `curl.sh` — calling an already-deployed endpoint
- **Javascript** - `javascript.js` — calling an already-deployed endpoint
- **Python** - `python.py` — calling an already-deployed endpoint
- **cerebrium.toml** - minimal deployment config to stand up a vLLM OpenAI-compatible endpoint

## Usage

1. Install the CLI: `pip install cerebrium` and run `cerebrium login`
2. Deploy the included vLLM template: `cerebrium deploy` (uses `cerebrium.toml` in this folder)
3. Cerebrium prints your deployment's unique base URL and a JWT — plug both into the examples below
4. Replace `YOUR_DEPLOYMENT_URL` and `YOUR_PROJECT_JWT` in the code examples

## More Information

For rate limits, pricing details, and setup instructions, visit:
[https://free-llm.com/api/cerebrium](https://free-llm.com/api/cerebrium)

---

*Generated automatically from [Free-LLM](https://free-llm.com) database*
