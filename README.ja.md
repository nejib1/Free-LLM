<p align="center">
  <h1 align="center">Free-LLM — 無料 AI・LLM API オープンディレクトリ</h1>
<!--STATS:START-->
  <p align="center"><strong>51 プロバイダーから 270 以上の無料 LLM モデル</strong> — 数秒で無料モデルを見つけ、比較し、設定できます。無制限・プライベートに使えるローカル/セルフホストツールも 9 種類。</p>
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
- ✅ **すぐ使えるコード** — [`code-examples/`](code-examples/) に 33 全プロバイダー分の Python / JavaScript / curl サンプル、さらに Claude Code・Cursor・Codex・OpenCode 向けの専用設定も
- ✅ **横並び比較** — [free-llm.com/compare](https://free-llm.com/compare) で 2 つのプロバイダーの制限・モデル・料金を直接比較

---

## 使い方 — 3 ステップ

1. **プロバイダーを選ぶ** — 下記 [Provider Directory](#provider-directory) を参照。初めてなら **Groq** がおすすめ（クレジットカード不要、30 RPM / 1 日 14,400 リクエスト、永久無料）。
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
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
# Groq 無料枠: 30 RPM、1 日 14,400 リクエスト — 個人利用には十分
```

### コーディングアシスタント

有料 API の代わりに、AI コーディングツールを無料バックエンドに接続:

- **Claude Code** — `ANTHROPIC_BASE_URL` と `ANTHROPIC_AUTH_TOKEN` を設定。[`code-examples/claude-code.md`](code-examples/claude-code.md) 参照
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
| [Google AI Studio](https://aistudio.google.com/) | 不要 | Varies by model (per-model limits are now shown only inside AI Studio) | Varies by model. Free: Flash, Flash-Lite and Gemini 2.5 Pro; Gemini 3.x Pro models are paid | 完全無料 | Gemini 3 Flash Preview, Gemini 2.5 Flash-Lite, Gemini 3.1 Flash-Lite, Gemini 3.5 Flash-Lite |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 電話番号認証が必要 | 1 request/second | - | Free | Codestral 2508, Ministral 3 8B, Ministral 3 14B, Mistral Large 3 |
| [Cohere](https://cohere.com/) | 不要 | 20 requests/minute | 1,000 API calls/month (trial key) | 1,000 API calls/month (trial key, non-commercial) | North Mini Code, Command A Reasoning, Command R+ (08-2024), Command R (08-2024) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 電話番号認証が必要 | ~40 RPM (varies per model, not published) | - | - | Nemotron 3.5 Super VL, DeepSeek V4.1 Flash, Nemotron 3 Ultra 550B A55B, Nemotron 3.5 Lightning 30B A3B |
| [Groq](https://console.groq.com/) | 不要 | 30 RPM; 8K TPM on most chat models (varies by model) | 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model) | Free Forever | Qwen3.8 27B, Whisper Large v3, Whisper Large v3 Turbo, GPT-OSS 120B |
| [Z.AI (GLM)](https://z.ai/) | 登録が必要 | ~1 request/second (Flash models) | ~1,000 requests/day (Flash tier) | Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 登録が必要 | 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go) | 非公開 | Beta Access | Llama 3.3 70B Instruct, GPT OSS 20B, GPT OSS 120B, Qwen3.5 9B |
| [Coze](https://www.coze.com/) | 登録が必要 | モデルにより異なる | トークン制の日次上限 | 毎日リセット | GPT-4o (via Coze), Gemini 1.5 Pro (via Coze) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 不要 | モデルにより異なる | 1 日 10,000 neurons | ~300,000 neurons/month | Kimi K2.6, GLM-5.3 Flash, Qwen3.8 27B, DeepSeek V4.1 Flash |
| [Nous Portal](https://portal.nousresearch.com) | 不要 | Standard rate limits (figures not published) | Free models only (no monthly credit) | Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 charge) is required to get a key - verify | Ornith 1.5 122B, Reflection Beam 1.0, LongCat 2.5 Preview, Laguna XS 2.1 |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | 不要 | 10 requests, 4M input / 100K output tokens per 60s (per API key) | No daily cap published (free while the API is experimental) | Free during experimental phase, no billing system yet | Qwen3.8 27B, Qwen3.6 35B A3B |
| [Pollinations.ai](https://pollinations.ai) | 不要 | API key required (anonymous access removed); no card | Free usage paid from Quest Pollen earned in the dashboard | Free, no billing system | GPT-OSS 20B, Mistral Large 3, Kimi K2.6, GLM 5.3 Flash |
| [Kilo AI Gateway](https://kilo.ai/gateway) | 不要 | 200 requests/hour per IP on free models (anonymous use allowed) | Default free models only | Free plan, no expiry | Nemotron 3 Nano Omni Reasoning, LFM2.5 2.6B, Dots3-Note Preview, XingChen Xing4.0 29B A4B |
| [Ollama Cloud](https://ollama.com/cloud) | 不要 | Starter usage credits; starter models only (add credits to unlock all models) | Monthly starter allowance (resets monthly from sign-up date) | Weekly usage limit resets every 7 days | Reflection Beam (501B), Gemma 4, DeepSeek V4.1 Flash, GPT-OSS 120B (Cloud) |
| [SiliconFlow](https://siliconflow.com/pricing) | 電話番号認証が必要 | Fixed limits for free models — exact figures require login, verify on cloud.siliconflow.cn/models | Not fully published — verify on docs.siliconflow.cn | Free models available after identity verification | GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B, GLM-4 9B 0414 |
| [ModelScope](https://modelscope.cn) | 電話番号認証が必要 | 500 requests/day per model | 2,000 requests/day total | Free, no billing | Step 3.7 Flash, MiniMax M3, GLM-5.2, DeepSeek V4.1 Flash |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | 不要 | Not published (daily credit allowance) | Daily free credit allowance (amount not published by Aion Labs) | Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| [Api.Airforce](https://api.airforce/) | 不要 | 1 RPM | 1,000 requests/day | Free plan, $0/month | See provider |
| [Routeway](https://routeway.ai/) | 登録が必要 | 5 RPM on :free models | 200 requests/day | Starter plan free, shared queue | Muse Glimmer 30B, MiniMax M2.7, DeepSeek V4 Flash |
| [LLM7.io](https://llm7.io) | 不要 | 1 req/s, 60/min, 250/hour (free token from dash.llm7.io) | 100,000 tokens per 24h (free token; may be reduced without notice) | Free, no billing | Nemotron 3 Nano 30B, GLM 5.3 Flash, Mistral Nemo Instruct 2407, Codestral Latest |
<!--TABLE:PERMANENT:END-->

### 💰 更新型クレジット

定期的に更新される無料クレジットで、一度きりの失効はありません。

<!--TABLE:RENEWABLE:START-->
| プロバイダー | クレジットカード | レート制限 | 無料枠 | 主なモデル |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 不要 | 20 requests/minute | 50 requests/day (up to 1000 with $10 topup) | Nemotron 3.5 Super VL, XingChen Xing4.0 29B A4B, MiniMax M3.1 Flash, Liquid LFM 2.5 2.6B |
| [Token Harbor](https://tokenharbor.ai) | 登録が必要 | 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | Free allowance, resets on a rolling 7-day period | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| [Requesty](https://requesty.ai/) | 不要 | 20 RPM on free models (60 RPM for paying orgs) | 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models | Ling 3.0 Tiny, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B, Mistral Leanstral 1.5 |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | 登録が必要 | Rate limited per model (lower than paid tier) | Monthly free credit (~$5, verify) | See provider |
| [Onomeo](https://onomeo.com) | 登録が必要 | 12 requests/minute per key | 30 free-model calls every 5 hours per account | Glyph Cluster (stealth), Gemini 3.5 Flash-Lite, Muse Glimmer 30B, GLM-4.6V Flash |
| [IteraCompute](https://iteracompute.com/free/) | 登録が必要 | 160K tokens/minute (fair use, may queue) | No daily cap; 30M tokens per month | Qwen3.8 27B |
| [BazaarLink](https://bazaarlink.ai/free) | 登録が必要 | 10 RPM (20 RPM with any credit), 2 concurrent requests | 60 weighted units/day (120 with credit), resets 00:00 UTC | Qwen3.7 Flash, Reflection Beam (free), Nemotron 3.5 Lightning (free), Glyph Cluster (stealth) |
<!--TABLE:RENEWABLE:END-->

### 🎁 一度きりの試用クレジット

登録すると使い切りのクレジットがもらえます。

<!--TABLE:TRIAL:START-->
| プロバイダー | クレジットカード | クレジット額 | 有効期限 | 主なモデル |
|:---|:---:|:---|:---|:---|
| [Replicate](https://replicate.com/) | 登録が必要 | Limited free runs on select models | 一度きり | See provider |
| [Fireworks AI](https://fireworks.ai/) | 登録が必要 | Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1) | 一度きり | Nemotron 3.5 Lightning 30B A3B, MiniMax M3, GPT-OSS 120B, GLM 5.3 Flash |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | 登録が必要 | $1 trial credit, valid 30 days (bank card required) | 一度きり | Qwen3 235B A22B Instruct 2507, GLM 5.3, GPT OSS 120B, Qwen3.8 27B |
| [Cerebras](https://cerebras.ai/inference) | 登録が必要 | $5 after adding a verified payment method (expires after 30 days) | 30 日間 | Qwen 3.8 27B, GPT OSS 120B |
| [Novita AI](https://novita.ai/) | 登録が必要 | No automatic sign-up credit; $10 per referral (both sides) | 一度きり | GLM 5.3, Kimi K3, DeepSeek V4.1 Flash, Qwen3.8 27B |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | 登録が必要 | 1M tokens | 一度きり | Qwen3 235B A22B Instruct 2507, DeepSeek V4.1 Flash, GLM 5.3, Gemma 4 26B A4B IT |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | 登録が必要 | Typically 1M tokens per model, valid 90 days (Singapore region) | One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| [AI21 Labs](https://docs.ai21.com/) | 登録が必要 | $10 (valid 7 days, no card) | 3 ヶ月 | Jamba Large, Jamba Mini |
| [Upstage](https://console.upstage.ai/) | 登録が必要 | $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify) | 3 ヶ月 | See provider |
| [Cerebrium](https://www.cerebrium.ai/) | 登録が必要 | No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per second) | 一度きり | See provider |
| [Nscale](https://www.nscale.com/product/inference) | 登録が必要 | No sign-up credit: minimum $5 card top-up (early users may get free credits) | 一度きり | See provider |
| [Inception Labs](https://www.inceptionlabs.ai/) | 不要 | — | — | Mercury 3, Mercury 2.5, Mercury 2 |
| [Dahl Inference](https://inference.dahl.global/) | 登録が必要 | — | — | GLM-5.3 Flash, MiniMax M2.7, DeepSeek V4 Flash 0731 |
| [Friendli AI](https://friendli.ai/) | 登録が必要 | Trial credits at onboarding (amount not published) | 一度きり | GLM-5.1, DeepSeek V3.2, Gemma 4 31B, GLM 5.2 |
| [Grokified](https://grokified.com) | 不要 | $5 | 一度きり | grok-4.6, grok-4.3, grok-build-0.1 |
<!--TABLE:TRIAL:END-->

### 🖥️ ローカル / セルフホスト（無制限・プライベート・永久無料）

| ツール | 種類 | 特徴 |
|:---|:---|:---|
| [Ollama](https://ollama.com/) | CLI + API | 100 以上のモデル、GPU アクセラレーション、OpenAI 互換エンドポイント |
| [LM Studio](https://lmstudio.ai/) | デスクトップ GUI | 任意の GGUF モデル、モデルブラウザ内蔵、オフライン利用可 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ エンジン | 任意の GGUF を実行、依存関係が最小限 |
| [GPT4All](https://gpt4all.io/) | デスクトップアプリ | CPU のみで動作、GPU 不要、オープンソース |
| [Jan.ai](https://jan.ai/) | デスクトップアプリ | プライバシー重視、100% オフラインの ChatGPT 代替 |
| [KoboldCpp](https://github.com/LostRuins/koboldcpp) | 単一実行ファイル | 創作・ロールプレイ向けに最適化、GGUF 対応 |
| [llamafile](https://github.com/Mozilla-Ocho/llamafile) | 単一実行ファイル | クロスプラットフォーム、llama.cpp + Cosmopolitan Libc |
| [Text Generation WebUI](https://github.com/oobabooga/text-generation-webui) | Gradio UI | 高度にカスタマイズ可能、上級者向けローカル実験に |
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
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | `https://api.tokenfactory.nebius.com/v1` | [取得 →](https://tokenfactory.nebius.com/) |
| [Cerebras](https://cerebras.ai/inference) | `https://api.cerebras.ai/v1` | [取得 →](https://cerebras.ai/inference) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [取得 →](https://console.groq.com/) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [取得 →](https://novita.ai/) |
| [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [取得 →](https://console.scaleway.com/generative-api/models) |
| [Qwen (Alibaba)](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [取得 →](https://bailian.console.alibabacloud.com/) |
| [AI21 Labs](https://docs.ai21.com/) | `https://api.ai21.com/studio/v1` | [取得 →](https://docs.ai21.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [取得 →](https://console.upstage.ai/) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [取得 →](https://z.ai/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [取得 →](https://endpoints.ai.cloud.ovh.net/) |
| [Coze](https://www.coze.com/) | `https://api.coze.com/v1` | [取得 →](https://www.coze.com/) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [取得 →](https://dash.cloudflare.com/) |
| [Nous Portal](https://portal.nousresearch.com) | `https://inference-api.nousresearch.com/v1` | [取得 →](https://portal.nousresearch.com) |
| [Hetzner Inference API](https://experiments.hetzner.com/inference) | `https://inference.hetzner.com/api/v1` | [取得 →](https://experiments.hetzner.com/inference) |
| [Pollinations.ai](https://pollinations.ai) | `https://text.pollinations.ai` | [取得 →](https://pollinations.ai) |
| [Kilo AI Gateway](https://kilo.ai/gateway) | `https://api.kilo.ai/api/gateway` | [取得 →](https://kilo.ai/gateway) |
| [Token Harbor](https://tokenharbor.ai) | `https://tokenharbor.ai/v1` | [取得 →](https://tokenharbor.ai) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [取得 →](https://www.cerebrium.ai/) |
| [Ollama Cloud](https://ollama.com/cloud) | `https://ollama.com/v1` | [取得 →](https://ollama.com/cloud) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [取得 →](https://requesty.ai/) |
| [SiliconFlow](https://siliconflow.com/pricing) | `https://api.siliconflow.com/v1` | [取得 →](https://siliconflow.com/pricing) |
| [ModelScope](https://modelscope.cn) | `https://api-inference.modelscope.cn/v1` | [取得 →](https://modelscope.cn) |
| [Aion Labs](https://www.aionlabs.ai/pricing/) | `https://api.aionlabs.ai/v1` | [取得 →](https://www.aionlabs.ai/pricing/) |
| [Nscale](https://www.nscale.com/product/inference) | `https://inference.api.nscale.com/v1` | [取得 →](https://www.nscale.com/product/inference) |
| [Vercel AI Gateway](https://vercel.com/ai-gateway) | `https://ai-gateway.vercel.sh/v1` | [取得 →](https://vercel.com/ai-gateway) |
| [Api.Airforce](https://api.airforce/) | `https://api.airforce/v1` | [取得 →](https://api.airforce/) |
| [Routeway](https://routeway.ai/) | `https://api.routeway.ai/v1` | [取得 →](https://routeway.ai/) |
| [Onomeo](https://onomeo.com) | `https://onomeo.com/v1` | [取得 →](https://onomeo.com) |
| [IteraCompute](https://iteracompute.com/free/) | `https://api.iteracompute.com/v1` | [取得 →](https://iteracompute.com/free/) |
| [Inception Labs](https://www.inceptionlabs.ai/) | `https://api.inceptionlabs.ai/v1` | [取得 →](https://www.inceptionlabs.ai/) |
| [BazaarLink](https://bazaarlink.ai/free) | `https://api.bazaarlink.ai/v1` | [取得 →](https://bazaarlink.ai/free) |
| [Dahl Inference](https://inference.dahl.global/) | `https://inference.dahl.global/v1` | [取得 →](https://inference.dahl.global/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [取得 →](https://friendli.ai/) |
| [LLM7.io](https://llm7.io) | `https://api.llm7.io/v1` | [取得 →](https://llm7.io) |
| [Grokified](https://grokified.com) | `https://api.grokified.com/v1` | [取得 →](https://grokified.com) |
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
**プロバイダー別（31 件）:** [AI21 Labs](code-examples/ai21-labs) · [Aion Labs](code-examples/aion-labs) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [Google AI Studio](code-examples/google-ai-studio) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [LLM7.io](code-examples/llm7-io) · [Mistral (La Plateforme)](code-examples/mistral-ai) · [ModelScope](code-examples/modelscope) · [Nebius (Token Factory)](code-examples/nebius) · [Nous Portal](code-examples/nous-portal) · [Novita AI](code-examples/novita-ai) · [Nscale](code-examples/nscale) · [NVIDIA NIM](code-examples/nvidia-nim) · [Ollama Cloud](code-examples/ollama-cloud) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Scaleway Generative APIs](code-examples/scaleway) · [SiliconFlow](code-examples/siliconflow) · [Upstage](code-examples/upstage) · [Z.AI (GLM)](code-examples/z-ai)
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

---

## Links

- 🌐 **公式サイト**: [free-llm.com](https://free-llm.com) — ディレクトリ、投票、投稿
- 🆚 **プロバイダー比較**: [free-llm.com/compare](https://free-llm.com/compare)
- 📚 **ガイド**: [free-llm.com/guides](https://free-llm.com/guides/)
- 🏆 **殿堂**: [free-llm.com/hall-of-fame](https://free-llm.com/hall-of-fame)
- ➕ **プロバイダーを投稿**: [free-llm.com/submit](https://free-llm.com/submit)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

---

## License

MIT — 詳細は [LICENSE](LICENSE) を参照してください。

---

<p align="center"><sub>Data synced automatically from the live directory — last updated: <!--LASTSYNC:START-->2026-10-26<!--LASTSYNC:END--></sub></p>
