# Security Policy

## Supported versions

Security fixes are released for the latest version of **Free-LLM Router** only.
Run the installer again (or `npm install -g github:nejib1/Free-LLM`) to update;
your keys and settings are kept.

| Version | Supported |
|:--------|:----------|
| latest `router-v1.x` release | ✅ |
| older releases | ❌ |

## Reporting a vulnerability

**Please do not open a public issue for a security problem.**

Report it privately, either way:

- GitHub: [**Report a vulnerability**](https://github.com/nejib1/Free-LLM/security/advisories/new) (private advisory, visible only to the maintainers)
- Email: **contact@free-llm.com** with `[security]` in the subject

Please include:

- what is affected (router version from `free-llm -v`, or the URL on free-llm.com)
- how to reproduce it, as precisely as you can
- what an attacker could do with it

**Never send a real API key.** Redact keys in logs and screenshots. If a key was
exposed while you were testing, revoke it at the provider first.

### What to expect

- an acknowledgement within 3 working days
- an assessment and a planned fix date within 10 working days
- credit in the release notes once the fix is out, if you want it

Please give us a reasonable time to ship a fix before publishing details.

## Scope

In scope:

- **Free-LLM Router** (everything under [`router/`](router/), the installers, the Docker image built from this repository): anything that could leak or misroute an API key, expose the local endpoint or dashboard to another machine or website, bypass the router key, or run code on the user's computer
- **free-llm.com**: account or session takeover, injection, access to data that is not public, anything that lets a visitor alter directory data without review

Out of scope:

- the third-party providers listed in the directory (report those to the provider)
- rate limits or quotas of a provider's free tier
- wrong or outdated directory data — that's a normal [data correction](https://github.com/nejib1/Free-LLM/issues/new/choose)
- findings that need physical access to an unlocked computer, or a machine that is already compromised
- automated scanner output without a working demonstration

## How the router handles keys

For context when you assess a finding:

- the router runs on the user's own computer; there is no Free-LLM server between it and the providers
- keys are stored encrypted (AES-256-GCM) in `~/.free-llm`
- each key is pinned to the domain of the provider that issued it and is never sent anywhere else
- the only other outbound request is the public provider catalog from free-llm.com
- no account, no telemetry

Details: [Is it safe?](router/README.md#-is-it-safe-yes--100-local-and-private)
