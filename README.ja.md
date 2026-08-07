<p align="center">
  <h1 align="center">Free-LLM — 無料 AI・LLM API オープンディレクトリ</h1>
  <p align="center"><strong>33 プロバイダーから 130 以上の無料 LLM モデル</strong> — 数秒で無料モデルを見つけ、比較し、設定できます。無制限・プライベートに使えるローカル/セルフホストツールも 9 種類。</p>
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
- ✅ **すぐ使えるコード** — [`code-examples/`](code-examples/) に 33 全プロバイダー分の Python / JavaScript / curl サンプル、さらに Claude Code・Cursor・Codex 向けの専用設定も
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

他のすべてのプロバイダーのサンプルコードは下記 [Code Examples](#code-examples) と [`code-examples/`](code-examples/) ディレクトリにあります。

---

## Provider Directory

### ⚡ 永久無料枠

期限なく使い続けられる、レート制限付きの無料アクセスです。

| プロバイダー | クレジットカード | レート制限 | 1 日の上限 | 月間上限 | 主なモデル |
|:---|:---:|:---|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | 不要 | 5〜30 RPM（モデルにより異なる） | 9,000 RPD (Flash) / 25 RPD (Pro) | 完全無料 | Gemini 3.1 Pro Preview, 3.6 Flash, 3.5 Flash, 3.5 Flash-Lite |
| [Groq](https://console.groq.com/) | 不要 | 30 RPM | 14,400 RPD | 永久無料 | Llama 3.3 70B, Qwen3.6 27B, GPT-OSS 120B/20B, Kimi K2, Whisper |
| [Cerebras](https://inference.cerebras.ai/) | 不要 | 30 RPM | 1 日 100 万トークン | 永久無料 | GPT-OSS 120B, GLM-4.7, Gemma 4 31B |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | 不要 | 300 リクエスト/時 | 負荷状況による | 永久無料（レート制限あり） | Llama 3.2 11B, Qwen 2.5 72B, Gemma 2 9B, Flux.1 |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | 不要 | モデルにより異なる | 1 日 10,000 neurons | 月間約 30 万 neurons | Llama 3.1 8B, Mistral 7B, Qwen 1.5 7B, DeepSeek Coder 6.7B, Phi-2 |
| [Cohere](https://cohere.com/) | 不要 | 20 RPM | — | 月 1,000 リクエスト | Command A+, Command A Reasoning, Command A, Command R+, Command R |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | 電話番号認証が必要 | 1 リクエスト/秒 | — | 無料（"Experiment" プラン） | Mistral Large 3, Mistral Medium 3.5, Codestral, Mistral Small |
| [Inference.net](https://inference.net/) | 不要 | 30 RPM（フェアユース） | フェアユースの範囲内 | 対象モデルは無料 | DeepSeek-R1, Llama 3.1 8B/70B |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | 登録が必要 | 2 RPM（匿名）/ 400 RPM（認証済み） | 非公開 | ベータ提供中 | Qwen3-32B, Qwen3.6-27B, 20 以上のオープンモデル |
| [Chutes.ai](https://chutes.ai/) | 登録が必要 | コミュニティの計算資源による | 空き状況による | 上限なし | DeepSeek-R1, Llama 3.1 70B, Qwen 2.5 72B |
| [Coze](https://www.coze.com/) | 登録が必要 | モデルにより異なる | トークン制の日次上限 | 毎日リセット | GPT-4o（Coze 経由）, Gemini 1.5 Pro（Coze 経由） |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | 電話番号認証が必要 | 40 RPM | — | — | Llama 4 Scout, DeepSeek-R1, 各種オープンソースモデル |
| [Z.AI (GLM)](https://z.ai/) | 登録が必要 | 約 1 リクエスト/秒（Flash 枠） | 約 1 日 1,000 リクエスト（Flash 枠） | 無料枠は継続提供 | GLM-4.5-Flash, GLM-4.7-Flash |

### 💰 更新型クレジット

定期的に更新される無料クレジットで、一度きりの失効はありません。

| プロバイダー | クレジットカード | レート制限 | 無料枠 | 主なモデル |
|:---|:---:|:---|:---|:---|
| [OpenRouter](https://openrouter.ai/) | 不要 | 20 RPM | 1 日 50 リクエスト（$10 の一度きりのチャージで最大 1,000 に） | DeepSeek V4 Flash, Llama 4 Maverick/Scout, GPT-OSS 120B, Gemini 2.0（29 以上の無料モデル） |
| [GitHub Models](https://github.com/marketplace/models) | 不要 | 10 RPM（上位モデル） | 50 RPD（上位）/ 150 RPD（mini 枠） | GPT-5 Chat, GPT-5 Mini, Llama 4 Scout/Maverick, Phi-4, Mistral Medium |
| [Grok / xAI](https://console.x.ai/) | 登録が必要 | 無料枠は低め | 登録時に $25 分（データ共有に同意すると月額 $150 のオプションも） | Grok 4.5, Grok 4.3 |
| [Venice.ai](https://venice.ai/) ⚠️ *フル API アクセスには Pro サブスクリプションが必要* | 登録が必要 | 10 RPM（無料枠） | 1 日の利用量に制限あり、毎日リセット | Llama 3.1 405B, Dolphin Mixtral, Stable Diffusion 3 |

### 🎁 一度きりの試用クレジット

登録すると使い切りのクレジットがもらえます。

| プロバイダー | クレジットカード | クレジット額 | 有効期限 | 主なモデル |
|:---|:---:|:---|:---|:---|
| [Together.AI](https://together.ai/) ⚠️ *無料の研究用モデルには最低 $5 の入金が必要* | 登録が必要 | 無料の研究用モデル | 永久無料（研究目的） | Apriel 1.6/1.5 15B Thinker |
| [DeepSeek](https://platform.deepseek.com/) | 登録が必要 | 500 万トークン | 30 日間 | DeepSeek-V4 Flash（チャット + 推論モード） |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | 登録が必要 | $5 分のクレジット | 一度きり | Llama 3.3 70B, DeepSeek-V3.1 |
| [Cerebrium](https://www.cerebrium.ai/) | 登録が必要 | $30 分のクレジット | 一度きり | 任意のモデルをデプロイ可能（サーバーレス GPU 基盤、共有エンドポイントではない） |
| [AI21 Labs](https://docs.ai21.com/) | 登録が必要 | $10 分のクレジット | 3 ヶ月 | Jamba Large, Jamba Mini |
| [Fireworks AI](https://fireworks.ai/) | 登録が必要 | $1 分のクレジット | 一度きりの試用 | 各種オープンソースモデル |
| [Friendli AI](https://friendli.ai/) | 登録が必要 | 登録時に試用クレジット付与 | 一度きり | 主要なオープンソースモデル |
| [Hyperbolic](https://app.hyperbolic.xyz/) | 登録が必要 | $1 分のクレジット | 一度きりの試用 | Llama 3.1 405B, DeepSeek V3 |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | 登録が必要 | 試用クレジット | 一度きりの試用 | DeepSeek-R1, 各種オープンソースモデル |
| [Novita AI](https://novita.ai/) | 登録が必要 | $0.50 分のクレジット | 90 日間 | Llama, Mistral |
| [Replicate](https://replicate.com/) | 登録が必要 | 少額の試用クレジット | — | 1000 以上のモデル（LLM、画像、音声） |
| [Upstage](https://console.upstage.ai/) | 登録が必要 | $10 分のクレジット | 3 ヶ月 | Solar Mini, Solar Pro 3 |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | 登録が必要 | モデルごとに入力・出力各 100 万トークン（国際/シンガポールアカウントのみ） | 90 日間 | Qwen3.7-Max, Qwen-Plus, Qwen-Flash, Qwen3-Coder-Plus |
| [Scaleway](https://console.scaleway.com/generative-api/models) | 登録が必要 | 無料 100 万トークン | 一度きりの試用 | Mistral, Llama, Qwen（EU ホスティング） |
| [Requesty](https://requesty.ai/) | 登録が必要 | 毎月の無料クレジット | 毎月更新 | マルチプロバイダー・ルーティング |

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

| プロバイダー | Base URL | API キー取得 |
|:---|:---|:---|
| [Google AI Studio](https://aistudio.google.com/) | `https://generativelanguage.googleapis.com/v1beta` | [取得 →](https://aistudio.google.com/app/apikey) |
| [Groq](https://console.groq.com/) | `https://api.groq.com/openai/v1` | [取得 →](https://console.groq.com/keys) |
| [Cerebras](https://inference.cerebras.ai/) | `https://api.cerebras.ai/v1` | [取得 →](https://cloud.cerebras.ai/) |
| [Hugging Face Inference](https://huggingface.co/inference-api/serverless) | `https://router.huggingface.co/v1` | [取得 →](https://huggingface.co/settings/tokens) |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/` | [取得 →](https://dash.cloudflare.com/profile/api-tokens) |
| [Cohere](https://cohere.com/) | `https://api.cohere.ai/v1` | [取得 →](https://dashboard.cohere.com/api-keys) |
| [Mistral (La Plateforme)](https://console.mistral.ai/) | `https://api.mistral.ai/v1` | [取得 →](https://console.mistral.ai/api-keys) |
| [Inference.net](https://inference.net/) | `https://api.inference.net/v1` | [取得 →](https://inference.net/) |
| [OVH AI Endpoints](https://endpoints.ai.cloud.ovh.net/) | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [取得 →](https://endpoints.ai.cloud.ovh.net/) |
| [Chutes.ai](https://chutes.ai/) | `https://api.chutes.ai/v1` | [取得 →](https://chutes.ai/) |
| [Coze](https://www.coze.com/) | `https://api.coze.com/v1` | [取得 →](https://www.coze.com/) |
| [NVIDIA NIM](https://build.nvidia.com/explore/discover) | `https://integrate.api.nvidia.com/v1` | [取得 →](https://build.nvidia.com/settings/api-keys) |
| [Z.AI (GLM)](https://z.ai/) | `https://api.z.ai/api/paas/v4` | [取得 →](https://z.ai/) |
| [OpenRouter](https://openrouter.ai/) | `https://openrouter.ai/api/v1` | [取得 →](https://openrouter.ai/keys) |
| [GitHub Models](https://github.com/marketplace/models) | `https://models.inference.ai.azure.com` | [取得 →](https://github.com/marketplace/models) |
| [Grok / xAI](https://console.x.ai/) | `https://api.x.ai/v1` | [取得 →](https://console.x.ai/) |
| [Venice.ai](https://venice.ai/) | `https://api.venice.ai/api/v1` | [取得 →](https://venice.ai/) |
| [Together.AI](https://together.ai/) | `https://api.together.xyz/v1` | [取得 →](https://together.ai/) |
| [DeepSeek](https://platform.deepseek.com/) | `https://api.deepseek.com/v1` | [取得 →](https://platform.deepseek.com/api_keys) |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | `https://api.sambanova.ai/v1` | [取得 →](https://cloud.sambanova.ai/apis) |
| [Cerebrium](https://www.cerebrium.ai/) | `https://api.cortex.cerebrium.ai/v4` | [取得 →](https://www.cerebrium.ai/) |
| [AI21 Labs](https://docs.ai21.com/) | `https://api.ai21.com/studio/v1` | [取得 →](https://studio.ai21.com/account/api-key) |
| [Fireworks AI](https://fireworks.ai/) | `https://api.fireworks.ai/inference/v1` | [取得 →](https://fireworks.ai/) |
| [Friendli AI](https://friendli.ai/) | `https://inference.friendli.ai/v1` | [取得 →](https://friendli.ai/) |
| [Hyperbolic](https://app.hyperbolic.xyz/) | `https://api.hyperbolic.xyz/v1` | [取得 →](https://app.hyperbolic.xyz/) |
| [Nebius (Token Factory)](https://tokenfactory.nebius.com/) | `https://api.tokenfactory.nebius.com/v1` | [取得 →](https://studio.nebius.com/settings/api-keys) |
| [Novita AI](https://novita.ai/) | `https://api.novita.ai/v3/openai` | [取得 →](https://novita.ai/) |
| [Replicate](https://replicate.com/) | `https://api.replicate.com/v1` | [取得 →](https://replicate.com/) |
| [Upstage](https://console.upstage.ai/) | `https://api.upstage.ai/v1/solar` | [取得 →](https://console.upstage.ai/) |
| [Qwen / Alibaba](https://bailian.console.alibabacloud.com/) | `https://dashscope-intl.aliyuncs.com/api/v1` | [取得 →](https://bailian.console.alibabacloud.com/) |
| [Scaleway](https://console.scaleway.com/generative-api/models) | `https://api.scaleway.ai/v1` | [取得 →](https://console.scaleway.com/generative-api/models) |
| [Requesty](https://requesty.ai/) | `https://router.requesty.ai/v1` | [取得 →](https://requesty.ai/) |

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

**コーディングアシスタント別:** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md)

**プロバイダー別（33 件）:** [AI21 Labs](code-examples/ai21-labs) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Chutes.ai](code-examples/chutes-ai) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Coze](code-examples/coze) · [DeepInfra](code-examples/deepinfra) · [DeepSeek](code-examples/deepseek) · [Fireworks AI](code-examples/fireworks-ai) · [Friendli AI](code-examples/friendli-ai) · [GitHub Models](code-examples/github-models) · [Google AI Studio](code-examples/google-ai-studio) · [Grok / xAI](code-examples/grok-xai) · [Groq](code-examples/groq-cloud) · [Hugging Face Inference](code-examples/huggingface-inference) · [Hyperbolic](code-examples/hyperbolic) · [Inference.net](code-examples/inference-net) · [Mistral AI](code-examples/mistral-ai) · [Nebius](code-examples/nebius) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OVH AI Endpoints](code-examples/ovh-ai) · [Qwen / Alibaba](code-examples/qwen-alibaba) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [SambaNova](code-examples/sambanova) · [Scaleway](code-examples/scaleway) · [Together.AI](code-examples/together-ai) · [Upstage](code-examples/upstage) · [Venice.ai](code-examples/venice-ai) · [Z.AI (GLM)](code-examples/z-ai)

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

## License

MIT — 詳細は [LICENSE](LICENSE) を参照してください。
