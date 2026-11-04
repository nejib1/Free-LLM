# Contributing to Free-LLM

Thanks for helping. This repository mirrors the live directory at [free-llm.com](https://free-llm.com), and it's only useful if the data is right. Free tiers change every week, so a short, sourced correction is often worth more than a big PR.

## Read this first: the README tables are generated

Every provider table in `README.md` and the translated READMEs (Permanent Free Tiers, Renewable Credits, One-Time Trial Credits, Quick Reference) is **regenerated every night from the live database** that powers free-llm.com. The parts between `<!--TABLE:...:START-->` and `<!--TABLE:...:END-->` markers are overwritten on the next sync.

So a PR that edits a table row will be lost the next morning, even if we agree with it. To change a provider, open an issue (or use the website). We check the facts, update the database, and the README follows on its own.

PRs are welcome for everything outside the tables: wording, translations, new code examples, tool configs and fixes to `code-examples/`.

## Ways to contribute

### 1. Suggest a new provider

Use the [submit form](https://free-llm.com/submit) or the **"Add a provider"** issue template. Please include:

- The official pricing or limits page that shows the free tier (a link, not a screenshot from a third-party list)
- Whether sign-up needs a credit card, a phone number or just an email
- The API base URL and whether it's OpenAI-compatible
- 3 to 8 model IDs that are actually free, exactly as the API expects them
- If you work for the provider, say so. Vendor submissions are fine, we just verify them like any other.

### 2. Fix inaccurate data

Rate limits move, models are retired, free tiers end. Use the **"Correct provider data"** issue template, or the **Propose an edit** / **Report an issue** buttons on the provider's page at free-llm.com. A link to the official page that shows the change is the fastest way to get it fixed.

### 3. Report a model that's no longer free

Use the report button next to the model on free-llm.com, or open a "Correct provider data" issue with the model ID and the error message you got.

### 4. Add or fix a code example

`code-examples/<provider-slug>/` holds `python.py`, `javascript.js` and `curl.sh` for each provider, and `code-examples/*.md` holds configs for coding tools (Claude Code, Cursor, Codex, OpenCode). PRs here are merged directly. Please:

- Use a model ID that is free on that provider today
- Read the key from an environment variable or a clear placeholder (`YOUR_..._KEY`), never a real key
- Test it once before opening the PR

## What we list (and what we don't)

We list:

- **Permanent free tiers**: rate-limited access that doesn't expire
- **Renewable credits**: a free allowance that resets daily, weekly or monthly
- **One-time trial credits**: clearly labelled as such, with the card requirement shown
- **Local tools** that run open models on your own machine

We don't list:

- Services that resell, pool or share API keys from other companies (for example "free Claude/GPT" key pools)
- Reverse-engineered or unofficial access to someone else's API
- Paid-only services with no free tier and no trial credit
- Waitlists and closed betas
- Free plans that are really a few requests to push a subscription (we may list them as trials if the terms are clear)

When a provider drops its free tier we don't delete it. It moves to "no longer free" on the website so old links keep working and you can see what changed.

## How we verify

Every addition and correction is checked against the provider's own pricing page, documentation or public model list (`/v1/models`) before it goes live. If something can't be confirmed, we either leave it out or say "not published" on the page instead of guessing.

## Pull request checklist

1. Fork the repository and create a branch: `git checkout -b fix-groq-example`
2. Keep the change focused (one provider or one topic per PR)
3. Don't edit the generated table sections in the READMEs
4. Fill in the PR template and link your sources

## Translations

The README exists in English, 简体中文, 繁體中文, 日本語 and 한국어. Fixes to the translated text outside the tables are very welcome, including from native speakers who find something awkward.

Thank you for helping keep this list accurate.
