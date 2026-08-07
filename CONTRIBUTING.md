# Contributing to Free-LLM

Thanks for considering a contribution! This repository backs the live directory at [free-llm.com](https://free-llm.com), and stays useful only if the data is accurate.

## Ways to Contribute

### 1. Add a Missing Provider

The fastest way: use the [submit form](https://free-llm.com/submit) on the website — it's reviewed by a human before publishing. You can also open a PR here or an [issue](https://github.com/nejib1/Free-LLM/issues/new/choose).

**Guidelines for a good submission:**
- The provider must offer a **genuine free tier** — not just a paid trial with no free-forever option.
- The API must be **publicly accessible** (no waitlist, closed beta, or reverse-engineering required).
- If it's a one-time trial credit rather than a permanent free tier, say so clearly.
- No purely promotional submissions for paid-only services.

### 2. Fix Inaccurate Data

Rate limits change, providers graduate from free to paid, endpoints move. If you spot something stale:
- Use the **"Propose an edit"** feature on the provider's page at free-llm.com, or
- Open a PR here updating the relevant row in `README.md` (and localized `README.*.md` files if you can).

### 3. Report a Model That's No Longer Free

Found a model that used to be free and now requires payment? Use the report button on the model's row at [free-llm.com](https://free-llm.com), or open an issue here.

### 4. Add a Code Example

Have a working config snippet for a tool we don't cover yet (an AI coding assistant, a chat UI, an SDK)? Add a file to [`code-examples/`](code-examples/) following the existing format.

## Formatting

When adding a provider to a table, match the existing column format for that section (Permanent Free Tiers / Renewable Credits / One-Time Trial Credits). Example:

```markdown
| [Provider Name](https://provider.com) | No | 30 RPM | 1,000/day | Free forever | Model A, Model B |
```

## How to Submit a PR

1. Fork the repository.
2. Create a branch: `git checkout -b add-provider-name`.
3. Make your change, following the formatting above.
4. Commit: `git commit -m "Add ProviderName to permanent free tiers"`.
5. Push and open a Pull Request — fill in the PR checklist.

## Multi-Language READMEs

This is a global project with READMEs in multiple languages (`README.md`, `README.zh-CN.md`, `README.zh-TW.md`, `README.ja.md`, `README.ko.md`). Please update the primary `README.md` (English) at a minimum — updates to the localized files are appreciated but optional.

Thank you for helping keep this list accurate!
