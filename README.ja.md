<p align="center">
  <h1 align="center">Free-LLM — 無料 AI・LLM API オープンディレクトリ</h1>
<!--STATS:START-->
  <p align="center"><strong>86 プロバイダーから 450 以上の無料 LLM モデル</strong> — 数秒で無料モデルを見つけ、比較し、設定できます。無制限・プライベートに使えるローカル/セルフホストツールも 9 種類。</p>
<!--STATS:END-->
</p>

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><strong>🌐 free-llm.com で見る</strong></a> —
  <a href="https://free-llm.com/compare" target="_blank" rel="noopener">プロバイダー比較</a> ·
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener">プロバイダーを投稿</a> ·
  <a href="https://free-llm.com/guides" target="_blank" rel="noopener">ガイド</a> ·
  <a href="https://free-llm.com/hall-of-fame" target="_blank" rel="noopener">殿堂</a>
</p>

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><img alt="Website" src="https://img.shields.io/badge/Website-free--llm.com-blue?style=for-the-badge" /></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" /></a>
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener"><img alt="Community Driven" src="https://img.shields.io/badge/Community-Driven-orange?style=for-the-badge" /></a>
</p>

<p align="center">
  🌐 <a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a>
</p>

---

## このプロジェクトの目的

無料の LLM API を探すために、何十ものリリースノートを読み漁ったり、レート制限を比較するためだけに 5 つも別々のプラットフォームに登録したり、どのプロバイダーが今月まだ無料枠を提供しているか推測したりする必要はないはずです。

このリポジトリは **[free-llm.com](https://free-llm.com)** のオンラインディレクトリを基にした、無料で LLM を使えるすべてのプロバイダーを網羅する、構造化されたコミュニティ運営のリファレンスです。

- ✅ **コミュニティ運営** — 実際のユーザーによる投票・投稿・編集提案を、公開前に審査
- ✅ **クレジットカードの透明性** — 各プロバイダーがカード必須か、電話番号認証が必要か、何も不要かを明記
- ✅ **すぐ使えるコード** — [`code-examples/`](code-examples/) に 稼働中の全プロバイダー分の Python / JavaScript / curl サンプル、さらに Claude Code・Cursor・Codex・OpenCode 向けの専用設定も
- ✅ **横並び比較** — [free-llm.com/compare](https://free-llm.com/compare) で 2 つのプロバイダーの制限・モデル・料金を直接比較

---

## 使い方 — 3 ステップ

1. **プロバイダーを選ぶ** — 下記 [Provider Directory](#provider-directory) を参照。初めてなら **Groq** がおすすめ（クレジットカード不要、約 30 RPM / モデルごとに 1 日 1,000 リクエスト、永久無料）。
2. **API キーを取得する** — [Quick Reference](#quick-reference--base-urls--api-keys) の各行から直接キー取得ページへ。ほとんどはメールアドレスだけで登録できます。
3. **コードに組み込む** — 下記表の base URL とモデル ID を [Quick Start](#quick-start--use-any-free-api-in-30-seconds) のサンプルコードにコピーします。

各プロバイダーの詳細・稼働状況・コミュニティの補足情報は、free-llm.com の各プロバイダーページにあります: **free-llm.com/provider/&lt;slug&gt;**（例: [free-llm.com/provider/groq](https://free-llm.com/provider/groq)）。

---

## Quick Start — 30 秒で無料 API を使う

以下のほとんどのプロバイダーは **OpenAI 互換エンドポイント** を提供しています。`baseURL` と `apiKey` を受け付けるツールなら、この 2 つを差し替えるだけで動作します。

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # 無料、クレジットカード不要
    api_key="GROQ_API_KEY",                      # console.groq.com/keys で取得
)

response = client.chat.completions.create(
    model="openai/gpt-oss-120b",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
# Groq 無料枠: 約 30 RPM、チャットモデルごとに 1 日 1,000 リクエスト — 個人利用には十分
```

### コーディングアシスタント

有料 API の代わりに、AI コーディングツールを無料バックエンドに接続:

- **Claude Code** — Anthropic API を使うため、Anthropic 互換エンドポイントを持つプロバイダー（OpenRouter、Z.AI、FreeInference、Ollama）か LiteLLM プロキシを使います。[`code-examples/claude-code.md`](code-examples/claude-code.md) 参照
- **Cursor** — Settings → Models → Add Model。[`code-examples/cursor.md`](code-examples/cursor.md) 参照
- **Codex CLI** — `OPENAI_BASE_URL` と `OPENAI_API_KEY` を設定。[`code-examples/codex.md`](code-examples/codex.md) 参照
- **OpenCode** — オープンソースの AI コーディングエージェント。`/connect` または環境変数で複数のプロバイダーに対応。[`code-examples/opencode.md`](code-examples/opencode.md) 参照

他のすべてのプロバイダーのサンプルコードは下記 [Code Examples](#code-examples) と [`code-examples/`](code-examples/) ディレクトリにあります。

---

## Provider Directory

### ⚡ 永久無料枠

期限なく使い続けられる、レート制限付きの無料アクセスです。

<!--TABLE:PERMANENT:START-->
| プロバイダー | クレジットカード | レート制限 | 1 日の上限 | 月間上限 | 主なモデル |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | 不要 | Varies by model (per-model limits are now shown only inside AI Studio) | Varies by model. Free: Gemini 3.x Flash / Flash-Lite and Gemini 2.5 Pro/Flash (2.5 redirect to 3.x on Dec 1, 2026); Gemini 3.x Pro and Gemini 4 are paid | 完全無料 | Gemini 3.8 Flash, Gemma 4 26B A4B IT, Gemma 4 31B IT, Gemini 3 Flash Preview |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 電話番号認証が必要 | 1 request/second | - | Free | Mistral Small, Mistral Large 4 (Preview), Codestral 2508, Ministral 3 8B |
| [Cohere](https://cohere.com/) | 不要 | 20 requests/minute | 1,000 API calls/month (trial key) | 1,000 API calls/month (trial key, non-commercial) | Command A (111B), Command A Translate, Command A Vision, North Mini Code |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 電話番号認証が必要 | ~40 RPM (varies per model, not published) | - | - | GLM-5.3 Flash, DiffusionGemma 26B A4B, Riva Translate 4B v2, Cosmos Reason 2 8B |
| [Groq](https://console.groq.com/) | 不要 | 30 RPM; 8K TPM on most chat models (varies by model) | 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model) | Free Forever | GPT-OSS 120B, Qwen3.8 27B, Whisper Large v3, Whisper Large v3 Turbo |
| [Z.AI (GLM)](https://z.ai/) | 登録が必要 | ~1 request/second (Flash models) | ~1,000 requests/day (Flash tier) | Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 不要 | モデルにより異なる | 1 日 10,000 neurons | ~300,000 neurons/month | GLM-5.3 Flash, FLUX.2 Dev (image), Whisper Large v3 Turbo, EuroLLM 9B |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 登録が必要 | 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go) | 非公開 | Beta Access | GPT OSS 120B, BGE-M3 (embeddings), Whisper Large v3 Turbo, Qwen2.5 VL 72B Instruct |
| [Kilo AI Gateway](https://kilo.ai/gateway) | 不要 | 200 requests/hour per IP on free models (anonymous use allowed) | Default free models only | Free plan, no expiry | Nemotron 3.5 Lightning, Nemotron 3 Nano Omni Reasoning, Dots3-Note Preview, Reflection Beam 1.0 |
| [Ollama Cloud](https://ollama.com/cloud) | 不要 | Pay-as-you-go: 3 concurrent requests; only Beam (beam:cloud) is labelled free | No free monthly allowance any more (starter credits removed); other cloud models are billed per token | Weekly usage limit resets every 7 days | Reflection Beam (501B) |
| [Nous Portal](https://portal.nousresearch.com) | カード登録が必要 | Standard rate limits (figures not published) | Free models only (no monthly credit) | Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 charge) is required to get a key - verify | StepFun Step 3.7 Flash, Reflection Beam 1.0, Upstage Solar Mini 4, Crouton Alpha (stealth, free) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | カード登録が必要 | 10 requests, 4M input / 100K output tokens per 60s (per API key) | No daily cap published (free while the API is experimental); a Hetzner account with billing details is required and Hetzner may ask for a card or ID to verify it | Free during experimental phase, no billing system yet | Qwen3.8 27B, Qwen3.6 35B A3B |
| [ModelScope](https://modelscope.cn) | 電話番号認証が必要 | 500 requests/day per model | 2,000 requests/day total | Free, no billing | Qwen3.8 27B, Nex N2.5 Pro, LongCat Flash Lite, ERNIE 4.5 300B A47B |
| [SiliconFlow](https://cloud.siliconflow.cn/models) | 電話番号認証が必要 | Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/models | Not fully published — verify on docs.siliconflow.cn | Free models available after identity verification | GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B, GLM-4 9B 0414 |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | 不要 | Not published (daily credit allowance) | Daily free credit allowance (amount not published by Aion Labs) | Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| [Api.Airforce](https://api.airforce/) | 不要 | 1 RPM | 1,000 requests/day | Free plan, $0/month | GPT-OSS 20B, GLM-4.7 Flash, Essential AI RNJ 1, Kimi K2.7 Code |
| [Routeway](https://routeway.ai/) | 登録が必要 | 5 RPM on :free models | 200 requests/day | Starter plan free, shared queue | DeepSeek V4.1 Flash (free), MiniMax M3.1 Flash (free), Muse Glimmer 30B |
| [FreeInference](https://freeinference.org) | 不要 | Not published ("generous quota"; HTTP 429 when rate-limited) | No published daily cap | — | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M3, Qwen3.6 35B A3B |
| [OpenTyphoon (Typhoon API)](https://opentyphoon.ai) | 不要 | 5 requests/second, 200 RPM (text models); 20 RPM for OCR | No daily cap published | — | Typhoon 2.5 30B A3B Instruct, Typhoon OCR 1.5 |
| [SEA-LION API](https://docs.sea-lion.ai/guides/inferencing/api) | 登録が必要 | 10 requests/minute per user (increase on request: sealion@aisingapore.org) | Not published | — | Qwen SEA-LION v4.5 27B Instruct, Llama SEA-LION v3.5 70B Reasoning, SEA-Guard (safety), SEA-LION Embedding 600M |
| [LLM.kiwi](https://llm.kiwi/pricing) | 登録が必要 | Baseline rate limits (figures not published) | Not published | — | Auto router, MiniMax M3, Nemotron 3 Ultra, Nemotron 3 Super |
| [Agnes AI](https://agnes-ai.com) | 登録が必要 | About 30 RPM per account (video 2 RPM), per third-party listings | Not published | — | Agnes 3.0 Flash, Agnes 2.5 Flash, Agnes Image 2.1 Flash (image) |
| [AI Horde (OpenAI-compatible front)](https://aihorde.net) | 不要 | Queue-based; anonymous requests have the lowest priority, registered users earn kudos for priority | No fixed cap (volunteer capacity) | — | Gemma 4 E4B IT, Qwen3 4B, Llama 3.2 1B Instruct, L3 8B Stheno v3.2 |
| [Arli AI](https://www.arliai.com/pricing) | 登録が必要 | 1 request at a time; max 12K context tokens | Limited trial uses per model (about 5 requests per 2 days, per third-party list) | — | Qwen3.5 27B Derestricted |
| [iFlytek Spark Lite](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) | 電話番号認証が必要 | Not published on the HTTP doc | Not published (Lite is free) | — | Spark Lite |
| [Zhipu BigModel (China)](https://docs.bigmodel.cn/cn/guide/start/model-overview) | 電話番号認証が必要 | Low concurrency on free Flash models (GLM-4.7-Flash reported at 1 concurrent request) | Not published | — | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4-Flash-250414, GLM-4.6V-Flash (vision) |
| [Mixlayer](https://docs.mixlayer.com/credits-and-limits) | 登録が必要 | Per-organization, per-model RPM/TPM (values shown in console only) | Not published | — | Qwen3.5 4B (free) |
| [SenseNova (SenseTime)](https://www.sensenova.cn/token-plan) | 電話番号認証が必要 | Not published | Not published (\"限时放量\" during public beta) | — | SenseNova 6.8 Flash Lite |
| [Pollinations.ai](https://pollinations.ai) | 不要 | API key required (anonymous access removed); no card | Free usage paid from Quest Pollen earned in the dashboard | Free, no billing system | GPT-OSS 20B, Mistral Large 3, Kimi K2.6, GLM 5.3 Flash |
| [LLM7.io](https://llm7.io) | 不要 | 1 req/s, 60/min, 250/hour (free token from dash.llm7.io) | 100,000 tokens per 24h (free token; may be reduced without notice) | Free, no billing | Nemotron 3 Nano 30B, GLM 5.3 Flash, Mistral Nemo Instruct 2407, Codestral Latest |
<!--TABLE:PERMANENT:END-->

### 💰 更新型クレジット

定期的に更新される無料クレジットで、一度きりの失効はありません。

<!--TABLE:RENEWABLE:START-->
| プロバイダー | クレジットカード | レート制限 | 無料枠 | 主なモデル |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 不要 | 20 requests/minute | 50 requests/day (up to 1000 with $10 topup) | Gemma 4 31B IT, NVIDIA Nemotron 3 Ultra, Recursive Flint v1.0 (free), Nemotron 3.5 Super VL |
| [Gonka Broker](https://gonkabroker.com) | 電話番号認証が必要 | Network limits (see docs.gonkabroker.com Limits & Quotas) | Monthly free token grant after SMS verification (does not accumulate) | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| [Experiential Labs](https://www.experientiallabs.ai/pricing) | カード登録が必要 | 10 RPM and 250K TPM per free core model | 1M input+output tokens/day shared across free core models, reset 00:00 UTC | GPT-6 Luna, DeepSeek V4.1 Flash 1017, Clef Flash (decision endpoint, free promo) |
| [Requesty](https://requesty.ai/) | 不要 | 20 RPM on free models (60 RPM for paying orgs) | 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models | Gemma 4 31B IT, Ling 3.0 Tiny, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | 登録が必要 | Lower per-model limits than the paid tier (429 on excess) | $5/month | Nemotron 3.5 Lightning (free), Llama 3.3 70B, MiniMax M3.1 Flash, GLM-4.7 Flash |
| [Token Harbor](https://tokenharbor.ai) | 登録が必要 | 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | Free allowance, resets on a rolling 7-day period | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| [BazaarLink](https://bazaarlink.ai/free) | 登録が必要 | 10 RPM (20 RPM with any credit), 2 concurrent requests | 60 weighted units/day (120 with credit), resets 00:00 UTC | Qwen3.7 Flash, Reflection Beam (free), Nemotron 3.5 Lightning (free), DeepSeek V4 Flash 0731 (free) |
| [AnyAPI](https://anyapi.ai) | 不要 | Limited API calls on the Free plan (exact RPM not published) | 100K ANY tokens per day, free models only | See provider |
| [Zro (MoonMath)](https://zro.moonmath.ai) | 登録が必要 | Daily usage allowance (amount not published) | Resets every day (Flash models only) | GLM-5.3 Flash, DeepSeek V4.1 Flash |
| [Inferbase](https://inferbase.ai) | 不要 | 100 managed requests per day | $0.50 of managed model usage per day; 5,000 requests per month | GPT-OSS 120B, DeepSeek V4 Flash, Qwen3.6 27B, Gemma 4 31B IT |
| [AIHubMix (free models)](https://aihubmix.com) | 登録が必要 | 5 RPM per account on most *-free routes | 100 requests/day and 1M tokens/day per account (500 RPD on some, e.g. glm-4.7-flash-free, coding-minimax-m3-free) | Coding GLM 5.3 (free), Coding GLM 5.3 Flash (free), Coding Kimi K3 (free), Coding MiniMax M3 (free) |
| [IBM watsonx.ai (Lite plan)](https://www.ibm.com/products/watsonx-ai/pricing) | カード登録が必要 | About 2 requests/second (Lite) | 300,000 tokens/month + 20 CUH/month | Granite 4 H Small, Llama 3.3 70B Instruct, Llama 4 Maverick, GPT-OSS 120B |
| [Bytez](https://docs.bytez.com/model-api/docs/billing) | 登録が必要 | 1 concurrent request (open models); 10 requests/second (closed models) | $1 free credits, refreshed every 4 weeks | See provider |
| [Moark (Gitee AI)](https://moark.com/docs/FAQ) | 電話番号認証が必要 | Not published | 100 free calls/day per user (free experience access token) | DeepSeek V4 Flash 0731, GLM 5.3 Flash, Qwen3.8 27B |
| [MegaNova AI](https://docs.meganova.ai/tiers) | 不要 | Tier 1 (free): 20-200 RPM | Tier 1: 50-500 free-model requests/day (varies by model) | Manta Pro 1.0, Manta Flash 1.0, Manta Mini 1.0, Mistral Small 3.2 24B |
| [SimpleLLM](https://simplellm.eu/docs/) | 登録が必要 | Account-specific (read via GET /v1/rate-limit) | Free-model hourly/daily request and token allowances (values per account, not published) | Llama 3.1 8B Free, Gemma E4B Free, Mistral 7B (tier free, $0), Kode 14B (tier free, $0) |
| [Sail Research](https://docs.sailresearch.com/pricing) | カード登録が必要 | Not published for Free plan (most relaxed on flex window) | $5 free credits every month (payment method attached) | Kimi K3, GLM 5.3, GLM 5.3 Flash, DeepSeek V4.1 Flash 1017 |
| [LLMTR](https://llmtr.com/en/terms) | 登録が必要 | Not published; lower allowance in an account's first 24h | Per-model daily allowance (e.g. 200K tokens/day on dated previews) | Nemotron 3 Ultra 550B, Nemotron 3.5 Super VL (free), Qwen3.8 27B (free), Agnes 3.0 Flash |
| [Kiosapi.id](https://kiosapi.id/pricing) | 登録が必要 | 5 requests/minute (free models) | 50 requests/day per account shared across free models, reset 07:00 WIB | GLM 4.7 Flash, Qwen3 30B, Gemma 4 26B, Llama 3.1 8B |
<!--TABLE:RENEWABLE:END-->

### 🎁 一度きりの試用クレジット

登録すると使い切りのクレジットがもらえます。

<!--TABLE:TRIAL:START-->
| プロバイダー | クレジットカード | クレジット額 | 有効期限 | 主なモデル |
|:---|:---:|:---|:---|:---|
| [Replicate](https://replicate.com/) | 登録が必要 | Limited free runs on select models | 一度きり | See provider |
| [Fireworks AI](https://fireworks.ai/) | 登録が必要 | Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1) | 一度きり | Nemotron 3.5 Lightning 30B A3B, MiniMax M3, GPT-OSS 120B, GLM 5.3 Flash |
| [Hyperbolic](https://app.hyperbolic.xyz/) | 電話番号認証が必要 | $1 after phone verification (Free Tier) | 一度きり | DeepSeek V4 Flash 0731, Qwen3.8 27B, MiMo V2.6 Flash, GLM-5.3 Flash |
| [Cerebras](https://cerebras.ai/inference) | カード登録が必要 | $5 after adding a verified payment method (expires after 30 days) | 30 日間 | GPT OSS 120B, Qwen 3.8 27B |
| [Novita AI](https://novita.ai/) | 登録が必要 | No automatic sign-up credit; $10 per referral (both sides) | 一度きり | GLM 5.3, Kimi K3, DeepSeek V4.1 Flash, Qwen3.8 27B |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | 登録が必要 | 1M tokens (+60 min audio transcription), all serverless models | 一度きり | GPT-OSS 120B, Whisper Large v3, Voxtral Small 24B, Holo2 30B A3B |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | 登録が必要 | ~1M tokens per model, 90 days (Singapore; newer models only since Oct 29, 2026) | One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| [Upstage](https://console.upstage.ai/) | 登録が必要 | $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify) | 3 ヶ月 | See provider |
| [Friendli AI](https://friendli.ai/) | 登録が必要 | Trial credits at onboarding (amount not published) | 一度きり | GLM-5.1, Gemma 4 31B, GLM 5.2, GLM 5.3 Flash |
| [Cerebrium](https://www.cerebrium.ai/) | 登録が必要 | No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per second) | 一度きり | See provider |
| [Grokified](https://grokified.com) | 不要 | $5 | 一度きり | Grok 4.7, grok-4.6, grok-4.3, grok-build-0.1 |
| [IteraCompute](https://iteracompute.com/free/) | 登録が必要 | 30M tokens/month on Qwen3.8-27B (promotion, no card) | Until Nov 24, 2026 00:00 PT | Qwen3.8 27B |
| [Dahl Inference](https://inference.dahl.global/) | 登録が必要 | — | — | GLM-5.3 Flash, MiniMax M2.7, DeepSeek V4 Flash 0731 |
| [Regolo.ai](https://regolo.ai) | 不要 | 30-day trial, 1M tokens/day, no card | 30 日間 | GPT-OSS 120B, Qwen3.8 27B, Gemma 4 31B, GLM-5.2 |
| [GonkaRouter](https://gonkarouter.io) | 不要 | 1M free tokens for new users | 一度きり | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M2.7 |
| [NovAI](https://aiapi-pro.com) | 不要 | $2 welcome credit, no card | 一度きり | GLM-4.7 Flash, GLM-4.6V Flash, GLM-4.1V Thinking Flash |
| [Vectoree](https://vectoree.ai) | 不要 | $5 welcome credit after CLI login | 一度きり | Vectoree Auto (router) |
| [Sarvam AI](https://www.sarvam.ai/api-pricing) | 電話番号認証が必要 | INR 100 free credits on signup | One-time; credits do not expire (per third-party list) | Sarvam 105B, Sarvam 105B Conversations |
| [HPC-AI Model APIs](https://www.hpc-ai.com/model-apis) | 登録が必要 | $2 free voucher on signup ($4 with an invite code, per third-party list) | 一度きり | Kimi K2.7 Code |
| [VLM Run Gateway](https://docs.vlm.run/gateway/rate-limits) | 不要 | 100 free credits on sign-up (~$1, at $0.01/credit) | One-time, then pay-as-you-go | Qwen3.8 27B, Gemma 4 26B A4B IT, Qwen3.5 0.8B, DiffusionGemma 26B A4B |
| [Tencent Cloud TokenHub](https://www.tencentcloud.com/act/pro/tokenhub) | カード登録が必要 | 1M free tokens per language model, once per account per model | 90 days after claim (intl promo page; docs say 1 year); campaign ends 2026-12-31" - DeepSeek-V4-Pro | See provider |
| [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) | 登録が必要 | Free-tier quota access, no billing account | Up to 90 days for new Google Cloud users | Gemini 3.1 Pro Preview, Gemini 3 Flash Preview, Gemini 2.5 Pro, Gemini 2.5 Flash |
| [Jina AI (Embeddings / Reader API)](https://jina.ai/embeddings/) | 不要 | Free tokens on an auto-generated key (amount not stated on page) | Keys do not expire | Jina Embeddings v5 Text Small, Jina Embeddings v5 Text Nano, Jina Embeddings v5 Omni Small, Jina Embeddings v3 |
| [Voyage AI (embeddings & rerankers)](https://docs.voyageai.com/docs/pricing) | 登録が必要 | First 200M tokens free per model (voyage-4 family, rerank-2.5); 50M on domain models | One-time per account per model | Voyage 4 Large, Voyage 4, Voyage 4 Lite, Voyage Code 3 |
| [Inception Labs](https://www.inceptionlabs.ai/) | 不要 | 100M tokens | One-time (new accounts) | Mercury 3, Mercury 2.5, Mercury 2 |
<!--TABLE:TRIAL:END-->

### 🖥️ ローカル / セルフホスト（無制限・プライベート・永久無料）

| ツール | 種類 | 特徴 |
|:---|:---|:---|
| [Ollama](https://ollama.com/) | CLI + API | 100 以上のモデル、GPU アクセラレーション、OpenAI 互換エンドポイント |
| [LM Studio](https://lmstudio.ai/) | デスクトップ GUI | 任意の GGUF モデル、モデルブラウザ内蔵、オフライン利用可 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ エンジン | 任意の GGUF を実行、依存関係が最小限 |
| [GPT4All](https://gpt4all.io/) | デスクトップアプリ | CPU のみで動作、GPU 不要、オープンソース（2025 年 2 月以降リリースなし） |
| [Jan.ai](https://jan.ai/) | デスクトップアプリ | プライバシー重視、100% オフラインの ChatGPT 代替 |
| [KoboldCpp](https://github.com/LostRuins/koboldcpp) | 単一実行ファイル | 創作・ロールプレイ向けに最適化、GGUF 対応 |
| [llamafile](https://github.com/mozilla-ai/llamafile) | 単一実行ファイル | クロスプラットフォーム、llama.cpp + Cosmopolitan Libc |
| [Text Generation WebUI](https://github.com/oobabooga/textgen) | Gradio UI | 高度にカスタマイズ可能、上級者向けローカル実験に |
| [BentoML](https://www.bentoml.com/) | 推論プラットフォーム | 任意の AI/ML モデルをどこにでもデプロイ、本番運用グレード |

---

## Quick Reference — Base URL と API キー

<!--TABLE:QUICKREF:START-->
| プロバイダー | Base URL | API キー取得 |
|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | `https://openrouter.ai/api/v1` | [取得 →](https://openrouter.ai/) |
| [Google AI Studio](https://aistudio.google.com/) | `https://generativelanguage.googleapis.com/v1beta` | [取得 →](https://aistudio.google.com/) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [取得 →](https://console.mistral.ai/) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [取得 →](https://cohere.com/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [取得 →](https://replicate.com/) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [取得 →](https://fireworks.ai/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [取得 →](https://build.nvidia.com/explore/discover) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.ai/inference/v1` | [取得 →](https://app.hyperbolic.xyz/) |
| [Cerebras](https://cerebras.ai/inference) | `https://api.cerebras.ai/v1` | [取得 →](https://cerebras.ai/inference) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [取得 →](https://console.groq.com/) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [取得 →](https://novita.ai/) |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [取得 →](https://console.scaleway.com/generative-api/models) |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [取得 →](https://bailian.console.alibabacloud.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [取得 →](https://console.upstage.ai/) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [取得 →](https://z.ai/) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [取得 →](https://dash.cloudflare.com/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [取得 →](https://endpoints.ai.cloud.ovh.net/) |
| [Kilo AI Gateway](https://kilo.ai/gateway) | `https://ai-gateway.kilo.ai/api/v1` | [取得 →](https://kilo.ai/gateway) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [取得 →](https://friendli.ai/) |
| [Ollama Cloud](https://ollama.com/cloud) | `https://ollama.com/v1` | [取得 →](https://ollama.com/cloud) |
| [Nous Portal](https://portal.nousresearch.com) | `https://inference-api.nousresearch.com/v1` | [取得 →](https://portal.nousresearch.com) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | `https://inference.hetzner.com/api/v1` | [取得 →](https://experiments.hetzner.com/inference) |
| [ModelScope](https://modelscope.cn) | `https://api-inference.modelscope.cn/v1` | [取得 →](https://modelscope.cn) |
| [Gonka Broker](https://gonkabroker.com) | `https://proxy.gonkabroker.com/v1` | [取得 →](https://gonkabroker.com) |
| [Experiential Labs](https://www.experientiallabs.ai/pricing) | `https://api.experientiallabs.ai/v1` | [取得 →](https://www.experientiallabs.ai/pricing) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [取得 →](https://www.cerebrium.ai/) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [取得 →](https://requesty.ai/) |
| [SiliconFlow](https://cloud.siliconflow.cn/models) | `https://api.siliconflow.cn/v1` | [取得 →](https://cloud.siliconflow.cn/models) |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | `https://api.aionlabs.ai/v1` | [取得 →](https://www.aionlabs.ai/pricing/) |
| [Grokified](https://grokified.com) | `https://api.grokified.com/v1` | [取得 →](https://grokified.com) |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | `https://ai-gateway.vercel.sh/v1` | [取得 →](https://vercel.com/ai-gateway) |
| [Api.Airforce](https://api.airforce/) | `https://api.airforce/v1` | [取得 →](https://api.airforce/) |
| [Routeway](https://routeway.ai/) | `https://api.routeway.ai/v1` | [取得 →](https://routeway.ai/) |
| [Token Harbor](https://tokenharbor.ai) | `https://tokenharbor.ai/v1` | [取得 →](https://tokenharbor.ai) |
| [IteraCompute](https://iteracompute.com/free/) | `https://api.iteracompute.com/v1` | [取得 →](https://iteracompute.com/free/) |
| [BazaarLink](https://bazaarlink.ai/free) | `https://api.bazaarlink.ai/v1` | [取得 →](https://bazaarlink.ai/free) |
| [Dahl Inference](https://inference.dahl.global/) | `https://inference.dahl.global/v1` | [取得 →](https://inference.dahl.global/) |
| [FreeInference](https://freeinference.org) | `https://freeinference.org/v1` | [取得 →](https://freeinference.org) |
| [AnyAPI](https://anyapi.ai) | `https://api.anyapi.ai/v1` | [取得 →](https://anyapi.ai) |
| [Zro (MoonMath)](https://zro.moonmath.ai) | `https://zro.moonmath.ai/v1` | [取得 →](https://zro.moonmath.ai) |
| [Inferbase](https://inferbase.ai) | `https://api.inferbase.ai/v1` | [取得 →](https://inferbase.ai) |
| [OpenTyphoon (Typhoon API)](https://opentyphoon.ai) | `https://api.opentyphoon.ai/v1` | [取得 →](https://opentyphoon.ai) |
| [Regolo.ai](https://regolo.ai) | `https://api.regolo.ai/v1` | [取得 →](https://regolo.ai) |
| [GonkaRouter](https://gonkarouter.io) | `https://api.gonkarouter.io/v1` | [取得 →](https://gonkarouter.io) |
| [NovAI](https://aiapi-pro.com) | `https://aiapi-pro.com/v1` | [取得 →](https://aiapi-pro.com) |
| [Vectoree](https://vectoree.ai) | `https://vectoree.ai/api/v1` | [取得 →](https://vectoree.ai) |
| [SEA-LION API](https://docs.sea-lion.ai/guides/inferencing/api) | `https://api.sea-lion.ai/v1` | [取得 →](https://docs.sea-lion.ai/guides/inferencing/api) |
| [AIHubMix (free models)](https://aihubmix.com) | `https://aihubmix.com/v1` | [取得 →](https://aihubmix.com) |
| [LLM.kiwi](https://llm.kiwi/pricing) | `https://api.llm.kiwi/v1` | [取得 →](https://llm.kiwi/pricing) |
| [Agnes AI](https://agnes-ai.com) | `https://apihub.agnes-ai.com/v1` | [取得 →](https://agnes-ai.com) |
| [AI Horde (OpenAI-compatible front)](https://aihorde.net) | `https://oai.aihorde.net/v1` | [取得 →](https://aihorde.net) |
| [Arli AI](https://www.arliai.com/pricing) | `https://api.arliai.com/v1` | [取得 →](https://www.arliai.com/pricing) |
| [Sarvam AI](https://www.sarvam.ai/api-pricing) | `https://api.sarvam.ai/v1` | [取得 →](https://www.sarvam.ai/api-pricing) |
| [HPC-AI Model APIs](https://www.hpc-ai.com/model-apis) | `https://api.hpc-ai.com/inference/v1` | [取得 →](https://www.hpc-ai.com/model-apis) |
| [VLM Run Gateway](https://docs.vlm.run/gateway/rate-limits) | `https://gateway.vlm.run/v1/openai` | [取得 →](https://docs.vlm.run/gateway/rate-limits) |
| [Tencent Cloud TokenHub](https://www.tencentcloud.com/act/pro/tokenhub) | `https://tokenhub-intl.tencentmaas.com/v1` | [取得 →](https://www.tencentcloud.com/act/pro/tokenhub) |
| [iFlytek Spark Lite](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) | `https://spark-api-open.xf-yun.com/v1` | [取得 →](https://www.xfyun.cn/doc/spark/HTTP调用文档.html) |
| [Zhipu BigModel (China)](https://docs.bigmodel.cn/cn/guide/start/model-overview) | `https://open.bigmodel.cn/api/paas/v4` | [取得 →](https://docs.bigmodel.cn/cn/guide/start/model-overview) |
| [IBM watsonx.ai (Lite plan)](https://www.ibm.com/products/watsonx-ai/pricing) | `https://us-south.ml.cloud.ibm.com/ml/v1/text/chat?version=2025-02-11` | [取得 →](https://www.ibm.com/products/watsonx-ai/pricing) |
| [Bytez](https://docs.bytez.com/model-api/docs/billing) | `https://api.bytez.com/models/v2/openai/v1` | [取得 →](https://docs.bytez.com/model-api/docs/billing) |
| [Mixlayer](https://docs.mixlayer.com/credits-and-limits) | `https://models.mixlayer.ai/v1` | [取得 →](https://docs.mixlayer.com/credits-and-limits) |
| [Moark (Gitee AI)](https://moark.com/docs/FAQ) | `https://api.moark.com/v1` | [取得 →](https://moark.com/docs/FAQ) |
| [MegaNova AI](https://docs.meganova.ai/tiers) | `https://api.meganova.ai/v1` | [取得 →](https://docs.meganova.ai/tiers) |
| [SimpleLLM](https://simplellm.eu/docs/) | `https://api.simplellm.eu/v1` | [取得 →](https://simplellm.eu/docs/) |
| [Sail Research](https://docs.sailresearch.com/pricing) | `https://api.sailresearch.com/v1` | [取得 →](https://docs.sailresearch.com/pricing) |
| [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) | `https://aiplatform.googleapis.com/v1/publishers/google/models/MODEL_ID:generateContent` | [取得 →](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) |
| [Jina AI (Embeddings / Reader API)](https://jina.ai/embeddings/) | `https://api.jina.ai/v1/embeddings` | [取得 →](https://jina.ai/embeddings/) |
| [Voyage AI (embeddings & rerankers)](https://docs.voyageai.com/docs/pricing) | `https://api.voyageai.com/v1/embeddings` | [取得 →](https://docs.voyageai.com/docs/pricing) |
| [SenseNova (SenseTime)](https://www.sensenova.cn/token-plan) | `https://token.sensenova.cn/v1` | [取得 →](https://www.sensenova.cn/token-plan) |
| [LLMTR](https://llmtr.com/en/terms) | `https://llmtr.com/v1` | [取得 →](https://llmtr.com/en/terms) |
| [Kiosapi.id](https://kiosapi.id/pricing) | `https://api.kiosapi.id/v1` | [取得 →](https://kiosapi.id/pricing) |
| [Pollinations.ai](https://pollinations.ai) | `https://gen.pollinations.ai/v1` | [取得 →](https://pollinations.ai) |
| [Inception Labs](https://www.inceptionlabs.ai/) | `https://api.inceptionlabs.ai/v1` | [取得 →](https://www.inceptionlabs.ai/) |
| [LLM7.io](https://llm7.io) | `https://api.llm7.io/v1` | [取得 →](https://llm7.io) |
<!--TABLE:QUICKREF:END-->

---

## ガイド・チュートリアル

[free-llm.com/guides](https://free-llm.com/guides/) で公開中:

- **2026 年版・最高の無料 LLM API** — 主要な選択肢を横並びで比較
- **Gemini vs ChatGPT（無料プラン）** — $0 で実際に何ができるか
- **OpenRouter の使い方** — コード付きセットアップ手順
- **OpenRouter の代替サービス** — 他に試す価値のあるアグリゲーター
- **Ollama でローカル LLM を動かす** — 5 分で始める
- **無料 LLM API 完全ガイド** — 最も詳しい徹底解説
- **コーディング向け無料 LLM** — 無料のコーディングモデルと Claude Code / Codex / Cursor の設定
- **無料の OpenRouter 代替** — 無料枠がより大きいゲートウェイと API
- **無料 LLM フォールバック構成** — 複数プロバイダーをつないでレート制限を回避
- **月次レポート: 2026 年 11 月** — 新しい無料プロバイダー、終了したサービス、モデルの変更

---

## コミュニティ機能

Free-LLM は**コミュニティ主導**のプロジェクトです。[free-llm.com](https://free-llm.com) では以下が可能です:

- **投票** で最も役立つプロバイダーを浮き彫りにする
- **投稿** で新しいプロバイダーやモデルを追加提案
- **編集提案** で既存のプロバイダー情報を更新提案（管理者が審査）
- **報告** で無料から有料に変わったモデルを知らせる
- [殿堂](https://free-llm.com/hall-of-fame) で評価される

データは本リポジトリにも同期されます。

---

## Code Examples

[`code-examples/`](code-examples/) ディレクトリには、すぐ実行できる Python・JavaScript・curl のサンプルがあります。API キーを追加するだけです。

**コーディングアシスタント別:** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md) · [OpenCode](code-examples/opencode.md)

<!--CODEEX:PROVIDERS:START-->
**プロバイダー別（74 件）:** [Agnes AI](code-examples/agnes-ai) · [AI Horde (OpenAI-compatible front)](code-examples/ai-horde) · [AIHubMix (free models)](code-examples/aihubmix) · [Aion Labs](code-examples/aion-labs) · [AnyAPI](code-examples/anyapi) · [Api.Airforce](code-examples/api-airforce) · [Arli AI](code-examples/arli-ai) · [BazaarLink](code-examples/bazaarlink) · [Bytez](code-examples/bytez) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Dahl Inference](code-examples/dahl-inference) · [Experiential Labs](code-examples/experiential-labs) · [Fireworks AI](code-examples/fireworks-ai) · [FreeInference](code-examples/freeinference) · [Friendli AI](code-examples/friendli-ai) · [Gonka Broker](code-examples/gonka-broker) · [GonkaRouter](code-examples/gonkarouter) · [Google AI Studio](code-examples/google-ai-studio) · [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](code-examples/vertex-ai-express) · [Grokified](code-examples/grokified) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [HPC-AI Model APIs](code-examples/hpc-ai) · [Hyperbolic](code-examples/hyperbolic) · [IBM watsonx.ai (Lite plan)](code-examples/ibm-watsonx) · [iFlytek Spark Lite](code-examples/iflytek-spark) · [Inception Labs](code-examples/inception-labs) · [Inferbase](code-examples/inferbase) · [IteraCompute](code-examples/iteracompute) · [Jina AI (Embeddings / Reader API)](code-examples/jina-ai) · [Kilo AI Gateway](code-examples/kilo-gateway) · [Kiosapi.id](code-examples/kiosapi) · [LLM.kiwi](code-examples/llm-kiwi) · [LLM7.io](code-examples/llm7-io) · [LLMTR](code-examples/llmtr) · [MegaNova AI](code-examples/meganova) · [Mistral (La Plateforme)](code-examples/mistral-ai) · [Mixlayer](code-examples/mixlayer) · [Moark (Gitee AI)](code-examples/moark) · [ModelScope](code-examples/modelscope) · [Nous Portal](code-examples/nous-portal) · [NovAI](code-examples/novai) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [Ollama Cloud](code-examples/ollama-cloud) · [OpenRouter](code-examples/openrouter) · [OpenTyphoon (Typhoon API)](code-examples/opentyphoon) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Regolo.ai](code-examples/regolo-ai) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Routeway](code-examples/routeway) · [Sail Research](code-examples/sail-research) · [Sarvam AI](code-examples/sarvam-ai) · [Scaleway Generative APIs](code-examples/scaleway) · [SEA-LION API](code-examples/sea-lion) · [SenseNova (SenseTime)](code-examples/sensenova) · [SiliconFlow](code-examples/siliconflow) · [SimpleLLM](code-examples/simplellm) · [Tencent Cloud TokenHub](code-examples/tencent-tokenhub) · [Token Harbor](code-examples/token-harbor) · [Upstage](code-examples/upstage) · [Vectoree](code-examples/vectoree) · [Vercel AI Gateway](code-examples/vercel-ai-gateway) · [VLM Run Gateway](code-examples/vlm-run) · [Voyage AI (embeddings & rerankers)](code-examples/voyage-ai) · [Z.AI (GLM)](code-examples/z-ai) · [Zhipu BigModel (China)](code-examples/zhipu-bigmodel) · [Zro (MoonMath)](code-examples/zro)
<!--CODEEX:PROVIDERS:END-->

**ローカル / セルフホスト:** [BentoML](code-examples/bentoml) · [GPT4All](code-examples/gpt4all) · [Jan.ai](code-examples/jan-ai) · [KoboldCpp](code-examples/koboldcpp) · [llama.cpp](code-examples/llama-cpp) · [llamafile](code-examples/llamafile) · [LM Studio](code-examples/lm-studio) · [Ollama](code-examples/ollama) · [Text Gen WebUI](code-examples/text-generation-webui)

---

## リポジトリ構成

```
Free-LLM/
├── README.md                 ← このファイル（英語）
├── README.zh-CN.md            ← 简体中文
├── README.zh-TW.md            ← 繁體中文
├── README.ja.md               ← 日本語
├── README.ko.md                ← 한국어
├── CONTRIBUTING.md            ← 貢献ガイドライン
├── code-examples/             ← すぐ使えるサンプル（プロバイダー別 + ツール別）
├── .github/                   ← Issue / PR テンプレート
└── LICENSE                    ← MIT
```

---

## Contributing（貢献方法）

詳しくは [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。要約:

1. **プロバイダーを追加** — サイトの [投稿フォーム](https://free-llm.com/submit) を使うか、このリポジトリで [issue](https://github.com/nejib1/Free-LLM/issues/new/choose) / PR を作成
2. **誤ったデータを修正** — レート制限は変わり、プロバイダーは有料化・終了することもあります。PR 歓迎です
3. **コードサンプルを追加** — 未対応のツール（コーディングアシスタント、チャット UI、SDK）向けの動作する設定があれば [`code-examples/`](code-examples/) に追加してください
4. **投票・議論に参加** — [free-llm.com](https://free-llm.com) でコミュニティの選択を助けましょう

### 掲載基準

以下を満たすプロバイダーを掲載します:
1. **本当の無料枠**を明示的に提供していること（無料の選択肢がない有料トライアルは対象外）— 分類方法は [Provider Directory](#provider-directory) を参照
2. API が**一般公開**されていること（ウェイトリスト、クローズドベータ、リバースエンジニアリング不要）
3. 試用クレジットの場合は明示し、恒久的な無料枠の有無を明記すること
4. プロバイダー自身のサービスであること: 他社モデルのキーを転売・共有するサービス（「無料の Claude/GPT」キープール）は掲載しません

---

## Links

- 🌐 **公式サイト**: [free-llm.com](https://free-llm.com) — ディレクトリ、投票、投稿
- 🆚 **プロバイダー比較**: [free-llm.com/compare](https://free-llm.com/compare)
- 📚 **ガイド**: [free-llm.com/guides](https://free-llm.com/guides/)
- 🏆 **殿堂**: [free-llm.com/hall-of-fame](https://free-llm.com/hall-of-fame)
- 🧩 **JSON catalog**: [free-llm.com/catalog.json](https://free-llm.com/catalog.json)
- ➕ **プロバイダーを投稿**: [free-llm.com/submit](https://free-llm.com/submit)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

---

## License

MIT — 詳細は [LICENSE](LICENSE) を参照してください。

---

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-11-13<!--LASTSYNC:END--></sub></p>
