<h1 align="center">Free-LLM — 無料 LLM API をひとつの場所に</h1>
<!--STATS:START-->
  <p align="center"><strong>78 プロバイダーから 450 以上の無料 LLM モデル</strong> — 数秒で無料モデルを見つけ、比較し、設定できます。無制限・プライベートに使えるローカル/セルフホストツールも 9 種類。</p>
<!--STATS:END-->

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><strong>🌐 ライブディレクトリ：free-llm.com</strong></a> ·
  <a href="https://free-llm.com/models" target="_blank" rel="noopener">無料モデル</a> ·
  <a href="https://free-llm.com/compare" target="_blank" rel="noopener">比較</a> ·
  <a href="https://free-llm.com/guides" target="_blank" rel="noopener">ガイド</a> ·
  <a href="https://free-llm.com/changelog" target="_blank" rel="noopener">変更履歴</a> ·
  <a href="https://free-llm.com/submit" target="_blank" rel="noopener">プロバイダーを提案</a>
</p>

<p align="center">
  <a href="https://free-llm.com" target="_blank" rel="noopener"><img alt="Website" src="https://img.shields.io/badge/Website-free--llm.com-blue?style=for-the-badge" /></a>
  <a href="https://github.com/nejib1/Free-LLM/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/nejib1/Free-LLM?style=for-the-badge&color=f5b301" /></a>
  <a href="https://github.com/nejib1/Free-LLM/commits/main"><img alt="Data updated" src="https://img.shields.io/github/last-commit/nejib1/Free-LLM?style=for-the-badge&label=data%20updated&color=2ea44f" /></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" /></a>
</p>

<p align="center">
  🌐 <a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a>
</p>

無料の LLM API は毎週のように変わります。モデルの提供終了、無料枠へのカード登録の追加、いつの間にか終わる試用。このリポジトリはそのすべてを追いかけています。下の表はすべて **[free-llm.com](https://free-llm.com) のデータベースから毎晩自動で再生成**され、各プロバイダーは公式の料金ページ、ドキュメント、または公開モデル一覧で確認済みです。ここに載っているのは、今日実際に使えるものです。

- 🔎 **探す**：どのプロバイダーが、どのモデルを、どんな制限で無料提供しているか
- 💳 **条件がわかる**：カード、電話番号、メールアドレスが必要か、何も要らないかを全項目に明記
- ⚡ **すぐ使える**：Base URL、プロバイダーごとの実行可能なコード、Claude Code・Codex・Cursor・OpenCode の設定
- 🔁 **止まらない**：[Free-LLM Router](#-free-llm-router小さな無料枠を束ねてひとつの大きな枠に) がすべての無料キーをひとつのアドレスにまとめます

<details>
<summary><strong>目次</strong></summary>

- [🚀 まずはここから：いま選ぶべき無料プロバイダー](#-まずはここからいま選ぶべき無料プロバイダー)
- [🧠 提供元が最も多い無料モデル](#-提供元が最も多い無料モデル)
- [📰 最近の変更](#-最近の変更)
- [⚡ Free-LLM Router：小さな無料枠を束ねて、ひとつの大きな枠に](#-free-llm-router小さな無料枠を束ねてひとつの大きな枠に)
- [クイックスタート：30 秒で最初のリクエスト](#クイックスタート30-秒で最初のリクエスト)
- [コーディングアシスタントを無料モデルで](#コーディングアシスタントを無料モデルで)
- [プロバイダー一覧](#プロバイダー一覧)
- [クイックリファレンス：Base URL と API キー](#クイックリファレンスbase-url-と-api-キー)
- [正確さを保つ仕組み](#正確さを保つ仕組み)
- [よくある質問](#よくある質問)
- [ガイド](#ガイド)
- [コード例](#コード例)
- [コントリビュート](#コントリビュート)
- [リンクとサポート](#リンクとサポート)

</details>

---

## 🚀 まずはここから：いま選ぶべき無料プロバイダー

どこから始めればいいか迷ったら、よくある用途ごとにひとつずつおすすめを挙げました。各行はライブデータから作られており、プロバイダーが無料でなくなれば、次の夜間同期で次点のプロバイダーに自動で入れ替わります。

<!--TOPPICKS:START-->
| 目的 | おすすめ | 無料枠 | 無料モデル |
|:---|:---|:---|:---|
| 総合力No.1（長いコンテキスト・画像） | **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 カード不要</sub> | ⏱️ Varies by model (per-model limits are now shown only inside AI Studio)<br>📅 Varies by model (shown in AI Studio). Free: Gemini 4 Hydrogen, Gemini…<br><sub>[詳細 →](https://free-llm.com/provider/google-ai-studio)</sub> | Gemini 3.8 Flash, Gemini 3 Flash Preview, Gemini 3.1 Flash-Lite |
| 応答が最速 | **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 カード不要</sub> | ⏱️ 30 RPM; 8K TPM on most chat models (varies by model)<br>📅 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by m…<br><sub>[詳細 →](https://free-llm.com/provider/groq-cloud)</sub> | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B |
| 1つのキーで多数の無料モデル | **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 カード不要</sub> | ⏱️ 20 requests/minute<br>📅 50 requests/day (up to 1000 with $10 topup) | Gemma 4 31B IT, Gemma 4 26B A4B IT, Nemotron 3.5 Super VL |
| 大規模オープンモデル（GLM・Mistral Large・Nemotron） | **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 電話認証</sub> | ⏱️ ~40 RPM (varies per model, not published) | GLM-5.3 Flash, Gemma 4 31B IT, Nemotron 3.5 Super VL |
| アカウント不要で試す | **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 カード不要</sub> | ⏱️ 200 requests/hour per IP on free models (anonymous use allowed)<br>📅 Default free models only | Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B, Nemotron 3.5 Lightning |
| Claude Code（Anthropic 互換エンドポイント） | **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ メール登録</sub> | ⏱️ ~1 request/second (Flash models)<br>📅 ~1,000 requests/day (Flash tier) | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| テキスト・画像・音声を1つの無料枠で | **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 カード不要</sub> | ⏱️ モデルにより異なる<br>📅 1 日 10,000 neurons | Qwen3.8 27B, GLM 4.7 Flash, GPT OSS 120B |
| EU 域内でホスト | **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ メール登録</sub> | ⏱️ 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-…<br><sub>[詳細 →](https://free-llm.com/provider/ovh-ai)</sub> | Qwen3.8 27B, GPT OSS 120B, Gemma 4 26B A4B |
| 無制限・プライベート（自分のPCで実行） | **[Ollama](https://free-llm.com/provider/ollama)**<br><sub>🟢 カード不要</sub> | 制限なし（ハードウェア次第） | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B |
<!--TOPPICKS:END-->

**登録条件の凡例：** 🟢 カード不要 · ✉️ メール登録 · 📱 電話認証 · 💳 カード必要（通常は請求なし）

---

## 🧠 提供元が最も多い無料モデル

同じオープンモデルが複数のプロバイダーで無料になっていることはよくあります。あるプロバイダーでレート制限にかかったりモデルが消えたりしたら、別のプロバイダーに切り替えましょう。🟢 = そのプロバイダーはカード不要。

<!--TOPMODELS:START-->
| モデル | 無料提供数 | おすすめの入口 | コンテキスト |
|:---|:---|:---|:---|
| **[GLM-5.3 Flash](https://free-llm.com/free-models/glm-5.3-flash)** | 12 社 | [FreeInference](https://free-llm.com/provider/freeinference) 🟢 · [Pollinations.ai](https://free-llm.com/provider/pollinations-ai) 🟢 · [NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)<br><sub>[全 12 社 →](https://free-llm.com/free-models/glm-5.3-flash)</sub> | 1M |
| **[Qwen3.8 27B](https://free-llm.com/free-models/qwen3.8-27b)** | 12 社 | [Groq](https://free-llm.com/provider/groq-cloud) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)<br><sub>[全 12 社 →](https://free-llm.com/free-models/qwen3.8-27b)</sub> | 131K |
| **[GLM 4.7 Flash](https://free-llm.com/free-models/glm-4.7-flash)** | 10 社 | [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [Inferbase](https://free-llm.com/provider/inferbase) 🟢 · [NovAI](https://free-llm.com/provider/novai) 🟢<br><sub>[全 10 社 →](https://free-llm.com/free-models/glm-4.7-flash)</sub> | 200K |
| **[GPT-OSS 120B](https://free-llm.com/free-models/gpt-oss-120b)** | 10 社 | [Groq](https://free-llm.com/provider/groq-cloud) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [Inferbase](https://free-llm.com/provider/inferbase) 🟢<br><sub>[全 10 社 →](https://free-llm.com/free-models/gpt-oss-120b)</sub> | 131K |
| **[Gemma 4 31B IT](https://free-llm.com/free-models/gemma-4-31b)** | 10 社 | [OpenRouter](https://free-llm.com/provider/openrouter) 🟢 · [Google AI Studio](https://free-llm.com/provider/google-ai-studio) 🟢 · [Requesty](https://free-llm.com/provider/requesty) 🟢<br><sub>[全 10 社 →](https://free-llm.com/free-models/gemma-4-31b)</sub> | 262K |
| **[DeepSeek V4.1 Flash](https://free-llm.com/free-models/deepseek-v4.1-flash)** | 7 社 | [ModelScope](https://free-llm.com/provider/modelscope) · [Token Harbor](https://free-llm.com/provider/token-harbor) · [Zro (MoonMath)](https://free-llm.com/provider/zro)<br><sub>[全 7 社 →](https://free-llm.com/free-models/deepseek-v4.1-flash)</sub> | 1M |
| **[Gemma 4 26B A4B IT](https://free-llm.com/free-models/gemma-4-26b)** | 7 社 | [OpenRouter](https://free-llm.com/provider/openrouter) 🟢 · [Google AI Studio](https://free-llm.com/provider/google-ai-studio) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢<br><sub>[全 7 社 →](https://free-llm.com/free-models/gemma-4-26b)</sub> | 262K |
| **[DeepSeek V4 Flash 0731](https://free-llm.com/free-models/deepseek-v4-flash-0731)** | 6 社 | [ModelScope](https://free-llm.com/provider/modelscope) · [Gonka Broker](https://free-llm.com/provider/gonka-broker) · [BazaarLink](https://free-llm.com/provider/bazaarlink)<br><sub>[全 6 社 →](https://free-llm.com/free-models/deepseek-v4-flash-0731)</sub> | — |
| **[GLM 5.3](https://free-llm.com/free-models/glm-5.3)** | 6 社 | [LLMTR](https://free-llm.com/provider/llmtr) · [Fireworks AI](https://free-llm.com/provider/fireworks-ai) · [Novita AI](https://free-llm.com/provider/novita-ai)<br><sub>[全 6 社 →](https://free-llm.com/free-models/glm-5.3)</sub> | 512K |
| **[Llama 3.3 70B Instruct](https://free-llm.com/free-models/llama-3.3-70b)** | 6 社 | [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [OVH AI Endpoints](https://free-llm.com/provider/ovh-ai) · [Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)<br><sub>[全 6 社 →](https://free-llm.com/free-models/llama-3.3-70b)</sub> | 24K |
| **[DeepSeek V4 Flash](https://free-llm.com/free-models/deepseek-v4-flash)** | 5 社 | [FreeInference](https://free-llm.com/provider/freeinference) 🟢 · [Inferbase](https://free-llm.com/provider/inferbase) 🟢 · [Pollinations.ai](https://free-llm.com/provider/pollinations-ai) 🟢<br><sub>[全 5 社 →](https://free-llm.com/free-models/deepseek-v4-flash)</sub> | 1M |
| **[GPT-OSS 20B](https://free-llm.com/free-models/gpt-oss-20b)** | 5 社 | [Groq](https://free-llm.com/provider/groq-cloud) 🟢 · [Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai) 🟢 · [Api.Airforce](https://free-llm.com/provider/api-airforce) 🟢<br><sub>[全 5 社 →](https://free-llm.com/free-models/gpt-oss-20b)</sub> | 131K |
<!--TOPMODELS:END-->

**→ すべての無料モデルを名前・コンテキスト長・画像対応で検索：[free-llm.com/models](https://free-llm.com/models)**

---

## 📰 最近の変更

<!--WHATSNEW:START-->
- `2026-11-26` ⛔ **[Inferaft](https://free-llm.com/provider/inferaft)** — 無料枠終了
- `2026-11-26` 🆕 **[Plugsky](https://free-llm.com/provider/plugsky)** — 新しい無料プロバイダー
- `2026-11-25` ⛔ **[IteraCompute](https://free-llm.com/provider/iteracompute)** — 無料枠終了
- `2026-11-23` ➖ **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)** — 無料提供終了: Dots3-Note Preview, Cohere North Mini Code
- `2026-11-23` ➖ **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)** — 無料提供終了: Gemini 2.5 Flash-Lite, Gemini 2.5 Flash
- `2026-11-23` ➖ **[Api.Airforce](https://free-llm.com/provider/api-airforce)** — 無料提供終了: GLM-4.7 Flash
- `2026-11-23` ➖ **[Routeway](https://free-llm.com/provider/routeway)** — 無料提供終了: DeepSeek V4.1 Flash (free)
- `2026-11-21` ⛔ **[LLM7.io](https://free-llm.com/provider/llm7-io)** — 無料枠終了
- `2026-11-21` ⛔ **[Mistral (La Plateforme)](https://free-llm.com/provider/mistral-ai)** — 無料枠終了
- `2026-11-21` ⛔ **[Ollama Cloud](https://free-llm.com/provider/ollama-cloud)** — 無料枠終了
- `2026-11-21` 🆕 **[HiAPI](https://free-llm.com/provider/hiapi)** — 新しい無料プロバイダー
- `2026-11-21` 🆕 **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)** — 新しい無料プロバイダー

**→ 全履歴: [FREE-TIER-CHANGELOG.md](FREE-TIER-CHANGELOG.md) · [free-llm.com/changelog](https://free-llm.com/changelog) · [RSS](https://free-llm.com/changelog-feed)**
<!--WHATSNEW:END-->

---

## ⚡ Free-LLM Router：小さな無料枠を束ねて、ひとつの大きな枠に

上のプロバイダーはどれも*小さな*無料枠しかなく、キーも制限もばらばらです。Router はそれらを重ね合わせます。アプリやコーディングエージェントは、あなたの PC 上の OpenAI / Anthropic 互換アドレス**ひとつ**に接続するだけ。各リクエストはその時点で使える無料モデルに送られ、あるプロバイダーが混雑したり上限に達したりすると、次のプロバイダーがすぐに応答します。

```bash
npm install -g github:nejib1/Free-LLM   # `free-llm` コマンドをインストール
free-llm                                # ガイド付きセットアップ後、http://localhost:4000 を開く
free-llm setup claude                   # Claude Code を無料モデルで（codex、opencode、aider も対応）
```

<p align="center"><a href="router/README.md"><img src="router/docs/dashboard.png" width="760" alt="Free-LLM Router dashboard"></a></p>

- **ひとつのアドレスで全キー**：OpenAI、Anthropic Messages、Codex Responses、Ollama、MCP の各 API に対応
- **自動更新**：プロバイダー一覧は free-llm.com に当日中に追従し、終了したプランは自動で外れます
- **ローカルでプライベート**：あなたの PC 上で動作し、キーは暗号化して保存、各キーは対応するプロバイダーにしか送られません。アカウント不要、テレメトリなし、依存パッケージゼロ

**→ [仕組みを読む](router/README.md)** · [free-llm.com/router](https://free-llm.com/router) · [リリースノート](CHANGELOG.md)

---

## クイックスタート：30 秒で最初のリクエスト

ほとんどのプロバイダーは **OpenAI 互換エンドポイント**を提供しているので、Base URL と API キーを指定できる SDK やツールならそのまま使えます。この 2 つを差し替えるだけで、コードは変えずに済みます。例では Groq（カード不要、毎分約 30 回・1 日 1,000 回）を使います。先に[キーを取得](https://console.groq.com/keys)してください。

<details open>
<summary><strong>Python</strong></summary>

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key="YOUR_GROQ_API_KEY",
)

reply = client.chat.completions.create(
    model="openai/gpt-oss-120b",
    messages=[{"role": "user", "content": "レート制限を一文で説明して。"}],
)
print(reply.choices[0].message.content)
```
</details>

<details>
<summary><strong>JavaScript / TypeScript</strong></summary>

```js
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

const reply = await client.chat.completions.create({
  model: "openai/gpt-oss-120b",
  messages: [{ role: "user", content: "レート制限を一文で説明して。" }],
});
console.log(reply.choices[0].message.content);
```
</details>

<details>
<summary><strong>curl</strong></summary>

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model": "openai/gpt-oss-120b", "messages": [{"role": "user", "content": "Hello!"}]}'
```
</details>

**プロバイダーの切り替え** = `base_url`、キー、モデル ID を変えるだけ。3 つとも[クイックリファレンス](#クイックリファレンスbase-url-と-api-キー)と各プロバイダーのページにあります。HTTP `429` が返ってきたら無料枠の上限です。時間枠のリセットを待つか、別のプロバイダーにフォールバックするか（[ガイド](https://free-llm.com/guides/free-llm-fallback-system)）、[Router](#-free-llm-router小さな無料枠を束ねてひとつの大きな枠に) に任せましょう。

---

## コーディングアシスタントを無料モデルで

| ツール | 方法 | ガイド |
|:---|:---|:---|
| **Claude Code** | Anthropic Messages API が必要：Anthropic 互換エンドポイントを持つプロバイダー（OpenRouter、Z.AI、FreeInference、ローカルの Ollama）、LiteLLM プロキシ、または `free-llm setup claude` | [`claude-code.md`](code-examples/claude-code.md) |
| **Codex CLI** | `~/.codex/config.toml` にプロバイダーを追加し、`wire_api = "chat"` を指定 | [`codex.md`](code-examples/codex.md) |
| **Cursor** | Settings → Models → OpenAI Base URL を上書きし、モデル ID を追加 | [`cursor.md`](code-examples/cursor.md) |
| **OpenCode** | `/connect`、またはプロバイダーごとの環境変数 | [`opencode.md`](code-examples/opencode.md) |

エージェントは短時間に大量のリクエストを送るため、毎分 20〜30 回の枠はすぐに制限されます。高速なプロバイダー（Groq、NVIDIA NIM）を選ぶか、Router で負荷を分散するか、ローカルモデルを使いましょう。

---

## プロバイダー一覧

無料アクセスは 3 種類に分けています。時間が経つと振る舞いがまったく違うためです。各プロバイダー名は free-llm.com のページにリンクしており、すべての無料モデル、正確な制限、設定手順、コミュニティのメモが載っています。

### ⚡ 永久無料枠

レート制限付きで継続的に使える無料アクセス。使い切ることはなく、枠は定期的にリセットされます。

<!--TABLE:PERMANENT:START-->
| プロバイダー · 登録条件 | 無料枠・制限 | 主なモデル |
|:---|:---|:---|
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 カード不要</sub> | ⏱️ Varies by model (per-model limits are now shown only inside AI Studio)<br>📅 Varies by model (shown in AI Studio). Free: Gemini 4 Hydrogen, Gemini 3.x Flash / Flash-Lite a…<br>🗓️ 完全無料<br><sub>[詳細 →](https://free-llm.com/provider/google-ai-studio)</sub> | Gemini 3.8 Flash, Gemini 3 Flash Preview, Gemini 3.1 Flash-Lite, Gemini 3.5 Flash-Lite |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 カード不要</sub> | ⏱️ 30 RPM; 8K TPM on most chat models (varies by model)<br>📅 1,000 requests/day and 200K tokens/day on gpt-oss / Qwen (varies by model)<br>🗓️ Free Forever | Qwen3.8 27B, GPT-OSS 120B, GPT-OSS 20B, Whisper Large v3 |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 電話認証</sub> | ⏱️ ~40 RPM (varies per model, not published) | GLM-5.3 Flash, Gemma 4 31B IT, Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 カード不要</sub> | ⏱️ モデルにより異なる<br>📅 1 日 10,000 neurons<br>🗓️ ~300,000 neurons/month | Qwen3.8 27B, GLM 4.7 Flash, GPT OSS 120B, Gemma 4 26B A4B |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 カード不要</sub> | ⏱️ 20 requests/minute<br>📅 1,000 API calls/month (trial key)<br>🗓️ 1,000 API calls/month (trial key, non-commercial) | Command A (111B), Command A Vision, Command A Reasoning, Command R+ (08-2024) |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ メール登録</sub> | ⏱️ ~1 request/second (Flash models)<br>📅 ~1,000 requests/day (Flash tier)<br>🗓️ Free tier ongoing, subject to change | GLM-4.6V-Flash (vision), GLM-4.5-Flash, GLM-4.7-Flash |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 カード不要</sub> | ⏱️ 200 requests/hour per IP on free models (anonymous use allowed)<br>📅 Default free models only<br>🗓️ Free plan, no expiry | Nemotron 3.5 Super VL, Nemotron 3 Ultra 550B A55B, Nemotron 3.5 Lightning, Glyph Cluster (stealth) |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ メール登録</sub> | ⏱️ 2 RPM per IP per model (anonymous, free); 400 RPM with a key (pay-as-you-go)<br>🗓️ Beta Access | Qwen3.8 27B, GPT OSS 120B, Gemma 4 26B A4B, Llama 3.3 70B Instruct |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 電話認証</sub> | ⏱️ Concurrency limited dynamically according to platform load<br>📅 Counted in Magicubes: about 0.5, 1 or 2 per call depending on model size<br>🗓️ Free, no billing | Qwen3.8 27B, GLM-4.7 Flash, DeepSeek V4.1 Flash (1017), DeepSeek V4.1 Flash |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 カード不要</sub> | ⏱️ Not published ("generous quota"; HTTP 429 when rate-limited)<br>📅 No published daily cap | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M3, Qwen3.6 35B A3B |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 電話認証</sub> | ⏱️ Fixed limits on free models, shown in the console after login<br>📅 Not published on the public site<br>🗓️ Free models available after identity verification | Qwen3.5 4B, GLM-Z1 9B, Qwen2.5 7B Instruct, Xing4.0 29B A4B |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 電話認証</sub> | ⏱️ Low concurrency on free Flash models (GLM-4.7-Flash reported at 1 concurrent request) | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4-Flash-250414, GLM-4.6V-Flash (vision) |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 カード不要</sub> | ⏱️ Queue-based; anonymous requests have the lowest priority, registered users earn kudos for prio…<br>📅 No fixed cap (volunteer capacity)<br><sub>[詳細 →](https://free-llm.com/provider/ai-horde)</sub> | L3 8B Stheno v3.2, Gemma 4 E4B IT, Qwen3 4B, Llama 3.2 1B Instruct |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 カード不要</sub> | ⏱️ 5 requests/min before the first top-up<br>📅 Free Flash models with no daily cap published; $2 welcome credit for paid models | GLM-4.7 Flash, GLM-4.6V Flash, GLM-4.1V Thinking Flash, CogView-3 Flash |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 カード不要</sub> | ⏱️ API key required (anonymous access removed); no card<br>📅 Free usage paid from Quest Pollen earned in the dashboard<br>🗓️ Free usage is paid from Quest Pollen earned in the dashboard | GLM 5.3 Flash, GPT-OSS 20B, DeepSeek V4 Flash, Mistral Large 3 |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 カード不要</sub> | ⏱️ Not published (daily credit allowance)<br>📅 Daily free credit allowance (amount not published by Aion Labs)<br>🗓️ Free, no billing | Aion 2.0, Aion 3.0 Mini, Aion 3.5 Mini |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 カード不要</sub> | ⏱️ 1 RPM<br>📅 1,000 requests/day<br>🗓️ Free plan, $0/month | GPT-OSS 20B, Kimi K2.7 Code, Llama Instant |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 カード不要</sub> | ⏱️ 30 requests/day on the free plan; effective upstream rate limits also apply<br>📅 30 requests/day<br>🗓️ 800 rounds/month | fm-v1-lite (free tier alias, default model), fm-v1-standard (paid, Standard plan only), fm-v1-pro (paid, Pro plan only) |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 カード不要</sub> | ⏱️ 5 requests/second, 200 RPM (text models); 20 RPM for OCR<br>📅 No daily cap published | Typhoon 2.5 30B A3B Instruct, Typhoon OCR 1.5 |
| **[Plugsky](https://free-llm.com/provider/plugsky)**<br><sub>🟢 カード不要</sub> | ⏱️ 30 RPM<br>📅 500 requests/day (about 100/day for accounts created from 2 Nov 2026)<br>🗓️ Free plan, no card, 2 API keys | plugsky-micro, plugsky-lite |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ メール登録</sub> | ⏱️ Baseline rate limits (figures not published) | MiniMax M3, Auto router, Nemotron 3 Ultra, Nemotron 3 Super |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ メール登録</sub> | ⏱️ 10 requests/minute per user (increase on request: sealion@aisingapore.org) | Qwen SEA-LION v4.5 27B Instruct, Llama SEA-LION v3.5 70B Reasoning, SEA-Guard (safety), SEA-LION Embedding 600M |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ メール登録</sub> | ⏱️ About 30 RPM per account (video 2 RPM), per third-party listings | Agnes 3.0 Flash, Agnes 2.5 Flash, Agnes Image 2.1 Flash (image) |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ メール登録</sub> | ⏱️ 30 requests per minute per API key, enforced as one request every 2 seconds (429 with Retry-Af…<br>📅 None published<br>🗓️ None published<br><sub>[詳細 →](https://free-llm.com/provider/merkium)</sub> | Ganymede 1.1 (now Neptune), Pluto 1.2 Pro (now Ceres), Pluto 1.2 Flash (now Ceres) |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ メール登録</sub> | ⏱️ 5 RPM on :free models<br>📅 200 requests/day<br>🗓️ Starter plan free, shared queue | MiniMax M3.1 Flash (free), Muse Glimmer 30B |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ メール登録</sub> | ⏱️ 1 request at a time; max 12K context tokens<br>📅 Limited trial uses per model (about 5 requests per 2 days, per third-party list) | Qwen3.5 27B Derestricted |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ メール登録</sub> | ⏱️ Per-organization, per-model RPM/TPM (values shown in console only) | Qwen3.5 4B (free) |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 電話認証</sub> | ⏱️ Not published on the HTTP doc<br>📅 Not published (Lite is free) | Spark Lite |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 電話認証</sub> | 📅 Not published (\"限时放量\" during public beta) | SenseNova 6.8 Flash Lite |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 カード必要</sub> | ⏱️ Standard rate limits (figures not published)<br>📅 Free models only (no monthly credit)<br>🗓️ Free tier: $0/month. A GitHub user reported (14 Sep 2026) that a payment method (Stripe, $0 ch…<br><sub>[詳細 →](https://free-llm.com/provider/nous-portal)</sub> | StepFun Step 3.7 Flash, Upstage Solar Mini 4, Qwen4 Max, LongCat 2.5 |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 カード必要</sub> | ⏱️ 10 requests, 4M input / 100K output tokens per 60s (per API key)<br>📅 No daily cap published (free while the API is experimental); a Hetzner account with billing de…<br>🗓️ Free until the experiment ends on 8 December 2026<br><sub>[詳細 →](https://free-llm.com/provider/hetzner-inference)</sub> | Qwen3.8 27B, Qwen3.6 35B A3B |
<!--TABLE:PERMANENT:END-->

### 💰 更新型クレジット

毎日または毎月補充される無料枠（クレジット、トークン、neurons）。

<!--TABLE:RENEWABLE:START-->
| プロバイダー · 登録条件 | 無料枠・制限 | 主なモデル |
|:---|:---|:---|
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 カード不要</sub> | 🎁 50 requests/day (up to 1000 with $10 topup)<br>⏱️ 20 requests/minute | Gemma 4 31B IT, Gemma 4 26B A4B IT, Nemotron 3.5 Super VL, Recursive Flint v1.0 (free) |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ メール登録</sub> | 🎁 $5/month<br>⏱️ Lower per-model limits than the paid tier (429 on excess) | GLM-4.7 Flash, GPT-OSS 120B, Llama 3.3 70B, Nemotron 3.5 Lightning (free) |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 カード不要</sub> | 🎁 200 requests/day (new orgs) / 1,000/day (paying orgs), shared across free models<br>⏱️ 20 RPM on free models (60 RPM for paying orgs) | Gemma 4 31B IT, Nemotron 3.5 Lightning 30B A3B, Nemotron 3 Nano Omni Reasoning, Nemotron 3 Nano 30B A3B |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 カード不要</sub> | 🎁 Tier 1: 50-500 free-model requests/day (varies by model)<br>⏱️ Tier 1 (free): 20-200 RPM | GLM 4.7 Flash (needs $1 top-up per third-party list), Mistral Small 3.2 24B, L3 8B Stheno v3.2, Manta Pro 1.0 |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 カード不要</sub> | 🎁 $0.50 of managed model usage per day; 5,000 requests per month<br>⏱️ 100 managed requests per day | GPT-OSS 120B, Gemma 4 31B IT, GLM-4.7 Flash, DeepSeek V4 Flash |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 カード不要</sub> | 🎁 See provider<br>⏱️ See provider | GLM 5.3 Flash (zai-org/GLM-5.3-Flash), gpt-oss 120B (openai/gpt-oss-120b), DeepSeek V4.1 Flash (deepseek-ai/DeepSeek-V4.1-Flash), GLM 5.3 (zai-org/GLM-5.3) |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 カード不要</sub> | 🎁 100K ANY tokens per day, free models only<br>⏱️ Limited API calls on the Free plan (exact RPM not published) | See provider |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ メール登録</sub> | 🎁 Per-model daily allowance (e.g. 200K tokens/day on dated previews)<br>⏱️ Not published; lower allowance in an account's first 24h | Qwen3.8 27B (free), Gemma 4 31B, DeepSeek V4.1 Flash, GLM-5.3 |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ メール登録</sub> | 🎁 100 requests/day and 1M tokens/day per account (500 RPD on some, e.g. glm-4.7-flash-free, codi…<br>⏱️ 5 RPM per account on most *-free routes<br><sub>[詳細 →](https://free-llm.com/provider/aihubmix)</sub> | Gemma 4 31B IT (free), GLM 4.7 Flash (free), Nemotron 3 Ultra 550B A55B (free), Coding GLM 5.3 (free) |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ メール登録</sub> | 🎁 Daily cap in points (pts), per account; resets 00:00 UTC+8<br>⏱️ 20 RPM per account, 30 RPM per API key, 120 RPM per IP, 8 concurrent requests per key | GLM-5.3-Flash, Qwen3.8-27B, Gemma-4-31B-IT, DeepSeek-V4.1-Flash |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ メール登録</sub> | 🎁 50 requests/day per account shared across free models, reset 07:00 WIB<br>⏱️ 5 requests/minute (free models) | GLM 4.7 Flash, Gemma 4 26B, Llama 3.1 8B, Qwen3 30B |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ メール登録</sub> | 🎁 60 weighted units/day (120 with credit), resets 00:00 UTC<br>⏱️ 10 RPM (20 RPM with any credit), 2 concurrent requests | DeepSeek V4 Flash 0731 (free), Nemotron 3.5 Lightning (free), Glyph Cluster (stealth), Qwen3.7 Flash |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ メール登録</sub> | 🎁 Free-model hourly/daily request and token allowances (values per account, not published)<br>⏱️ Account-specific (read via GET /v1/rate-limit) | Llama 3.1 8B Free, Gemma E4B Free, Mistral 7B (tier free, $0), Kode 14B (tier free, $0) |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ メール登録</sub> | 🎁 Free allowance, resets on a rolling 7-day period<br>⏱️ 60 requests/min and 1,800/hour per account (100/min, 3,000/hour per IP) | DeepSeek V4.1 Flash, MiMo V2.6 Flash, TH-Rudder |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ メール登録</sub> | 🎁 Resets every day (Flash models only)<br>⏱️ Daily usage allowance (amount not published) | GLM-5.3 Flash, DeepSeek V4.1 Flash |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ メール登録</sub> | 🎁 See provider<br>⏱️ No per-key RPM/TPM cap; one request at a time per account | DeepSeek V4.1 Flash 1017 |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ メール登録</sub> | 🎁 50 requests/day (first 7 days), then 10 requests/day<br>⏱️ 10 requests/minute per key | qwen3-coder-30b |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ メール登録</sub> | 🎁 $1 free credits, refreshed every 4 weeks<br>⏱️ 1 concurrent request (open models); 10 requests/second (closed models) | See provider |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 電話認証</sub> | 🎁 Monthly free token grant after SMS verification (does not accumulate)<br>⏱️ Network limits (see docs.gonkabroker.com Limits & Quotas) | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 電話認証</sub> | 🎁 100 free calls/day per user (free experience access token) | GLM 5.3 Flash, Qwen3.8 27B, DeepSeek V4 Flash 0731 |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 カード必要</sub> | 🎁 $5 free credits every month (payment method attached)<br>⏱️ Not published for Free plan (most relaxed on flex window) | GLM 5.3 Flash, Gemma 4 31B IT, GLM 5.3, Kimi K3 |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 カード必要</sub> | 🎁 300,000 tokens/month + 20 CUH/month<br>⏱️ About 2 requests/second (Lite) | GPT-OSS 120B, Llama 3.3 70B Instruct, Mistral Small 3.1 24B, Granite 4 H Small |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 カード必要</sub> | 🎁 1M input+output tokens/day shared across free core models, reset 00:00 UTC<br>⏱️ 10 RPM and 250K TPM per free core model | DeepSeek V4.1 Flash 1017, GPT-6 Luna, Clef Flash (decision endpoint, free promo) |
<!--TABLE:RENEWABLE:END-->

### 🎁 一度きりの試用クレジット

登録時に一度だけもらえるクレジットで、使い切ったら終わりです。有料化の前に大型モデルを試すのに向いています。

<!--TABLE:TRIAL:START-->
| プロバイダー · 登録条件 | 無料クレジット | 主なモデル |
|:---|:---|:---|
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 カード必要</sub> | 🎁 $5 after adding a verified payment method (expires after 30 days)<br>⌛ 30 日間 | GPT OSS 120B, Qwen 3.8 27B |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ メール登録</sub> | 🎁 1M tokens (+60 min audio transcription), all serverless models<br>⌛ 一度きり | Qwen3.8 27B, GPT-OSS 120B, DeepSeek V4.1 Flash (1017), Gemma 4 26B A4B IT |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ メール登録</sub> | 🎁 Free starter credit for new accounts (amount no longer stated by Fireworks; historically $1)<br>⌛ 一度きり | GLM 5.3 Flash, GPT-OSS 120B, DeepSeek V4.1 Flash, GLM 5.3 |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ メール登録</sub> | 🎁 ~1M tokens per model, 90 days (Singapore; newer models only since Oct 29, 2026)<br>⌛ One-time per model | Qwen3.8 Flash, Qwen3.7 Plus, Qwen3.8 Max, Qwen3.7 Max |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ メール登録</sub> | 🎁 No automatic sign-up credit; $10 per referral (both sides)<br>⌛ 一度きり | Qwen3.8 27B, GLM 5.3, Llama 3.3 70B Instruct, Kimi K3 |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 電話認証</sub> | 🎁 $1 after phone verification (Free Tier)<br>⌛ 一度きり | Qwen3.8 27B, GLM-5.3 Flash, DeepSeek V4.1 Flash, DeepSeek V4 Flash 0731 |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 カード不要</sub> | 🎁 30-day trial, 1M tokens/day, no card<br>⌛ 30 日間 | Qwen3.8 27B, GPT-OSS 120B, Gemma 4 31B, GLM-5.2 |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 カード不要</sub> | 🎁 Free tokens on an auto-generated key (amount not stated on page)<br>⌛ Keys do not expire | Jina Embeddings v5 Text Small, Jina Embeddings v5 Text Nano, Jina Embeddings v5 Omni Small, Jina Embeddings v3 |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 カード不要</sub> | 🎁 100 free credits on sign-up (~$1, at $0.01/credit)<br>⌛ One-time, then pay-as-you-go | Qwen3.8 27B, Gemma 4 26B A4B IT, Qwen3.5 0.8B, DiffusionGemma 26B A4B |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 カード不要</sub> | 🎁 $5<br>⌛ 一度きり | Grok 4.7, grok-4.6, grok-4.3, grok-build-0.1 |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 カード不要</sub> | 🎁 1M free tokens for new users<br>⌛ 一度きり | GLM-5.3 Flash, DeepSeek V4 Flash, MiniMax M2.7 |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 カード不要</sub> | 🎁 100M tokens<br>⌛ One-time (new accounts) | Mercury 3, Mercury 2.5, Mercury 2 |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 カード不要</sub> | 🎁 $5 welcome credit after CLI login<br>⌛ 一度きり | Vectoree Auto (router) |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ メール登録</sub> | — | DeepSeek V4.1 Flash, GLM 5.3, GPT-6.1 Sol, Claude Opus 5.5 |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ メール登録</sub> | 🎁 First 200M tokens free per model (voyage-4 family, rerank-2.5); 50M on domain models<br>⌛ One-time per account per model | Voyage 4 Large, Voyage 4, Voyage 4 Lite, Voyage Code 3 |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ メール登録</sub> | 🎁 Trial credits at onboarding (amount not published)<br>⌛ 一度きり | GLM 5.3 Flash, Gemma 4 31B, GLM 5.3, GLM 5.2 |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ メール登録</sub> | 🎁 Free-tier quota access, no billing account<br>⌛ Up to 90 days for new Google Cloud users | Gemini 3.1 Pro Preview, Gemini 3 Flash Preview, Gemini 2.5 Pro, Gemini 2.5 Flash |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ メール登録</sub> | — | GLM-5.3 Flash, DeepSeek V4 Flash 0731, MiniMax M2.7 |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ メール登録</sub> | 🎁 $2 free voucher on signup ($4 with an invite code, per third-party list)<br>⌛ 一度きり | Kimi K2.7 Code |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ メール登録</sub> | 🎁 No sign-up credit shown on the pricing page (Hobby plan: free platform, compute billed per sec…<br>⌛ 一度きり<br><sub>[詳細 →](https://free-llm.com/provider/cerebrium)</sub> | See provider |
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ メール登録</sub> | 🎁 Limited free runs on select models<br>⌛ 一度きり | See provider |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ メール登録</sub> | 🎁 $10 sign-up credit (announced by Upstage; not shown on the pricing page, verify)<br>⌛ 3 ヶ月 | See provider |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 電話認証</sub> | 🎁 INR 100 free credits on signup<br>⌛ One-time; credits do not expire (per third-party list) | Sarvam 105B, Sarvam 105B Conversations |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 カード必要</sub> | 🎁 1M free tokens per language model, once per account per model<br>⌛ 90 days after claim (intl promo page; docs say 1 year); campaign ends 2026-12-31" - DeepSeek-V…<br><sub>[詳細 →](https://free-llm.com/provider/tencent-tokenhub)</sub> | See provider |
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

## クイックリファレンス：Base URL と API キー

現在無料のホスト型プロバイダーすべてについて、OpenAI 互換クライアントに貼り付ける Base URL と、キー作成ページへの直接リンクをまとめました。登録が簡単な順に並んでいます。

<!--TABLE:QUICKREF:START-->
| プロバイダー · 登録条件 · API キー | OpenAI 互換 Base URL |
|:---|:---|
| **[Google AI Studio](https://free-llm.com/provider/google-ai-studio)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://aistudio.google.com/)</sub> | `https://generativelanguage.googleapis.com/v1beta/openai` |
| **[OpenRouter](https://free-llm.com/provider/openrouter)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://openrouter.ai/)</sub> | `https://openrouter.ai/api/v1` |
| **[Groq](https://free-llm.com/provider/groq-cloud)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://console.groq.com/)</sub> | `https://api.groq.com/openai/v1` |
| **[Cerebras](https://free-llm.com/provider/cerebras)**<br><sub>💳 カード必要 · [🔑&nbsp;キー](https://cerebras.ai/inference)</sub> | `https://api.cerebras.ai/v1` |
| **[NVIDIA NIM](https://free-llm.com/provider/nvidia-nim)**<br><sub>📱 電話認証 · [🔑&nbsp;キー](https://build.nvidia.com/explore/discover)</sub> | `https://integrate.api.nvidia.com/v1` |
| **[Cloudflare Workers AI](https://free-llm.com/provider/cloudflare-workers-ai)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://dash.cloudflare.com/)</sub> | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1` |
| **[Cohere](https://free-llm.com/provider/cohere)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://cohere.com/)</sub> | `https://api.cohere.ai/compatibility/v1` |
| **[Z.AI (GLM)](https://free-llm.com/provider/z-ai)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://z.ai/)</sub> | `https://api.z.ai/api/paas/v4` |
| **[Kilo AI Gateway](https://free-llm.com/provider/kilo-gateway)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://kilo.ai/gateway)</sub> | `https://ai-gateway.kilo.ai/api/v1` |
| **[Scaleway Generative APIs](https://free-llm.com/provider/scaleway)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://console.scaleway.com/generative-api/models)</sub> | `https://api.scaleway.ai/v1` |
| **[OVH AI Endpoints](https://free-llm.com/provider/ovh-ai)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://endpoints.ai.cloud.ovh.net/)</sub> | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` |
| **[Vercel AI Gateway](https://free-llm.com/provider/vercel-ai-gateway)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://vercel.com/ai-gateway)</sub> | `https://ai-gateway.vercel.sh/v1` |
| **[Fireworks AI](https://free-llm.com/provider/fireworks-ai)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://fireworks.ai/)</sub> | `https://api.fireworks.ai/inference/v1` |
| **[Qwen (Alibaba)](https://free-llm.com/provider/qwen-alibaba)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://bailian.console.alibabacloud.com/)</sub> | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` |
| **[ModelScope](https://free-llm.com/provider/modelscope)**<br><sub>📱 電話認証 · [🔑&nbsp;キー](https://modelscope.cn)</sub> | `https://api-inference.modelscope.cn/v1` |
| **[Requesty](https://free-llm.com/provider/requesty)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://requesty.ai/)</sub> | `https://router.requesty.ai/v1` |
| **[FreeInference](https://free-llm.com/provider/freeinference)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://freeinference.org)</sub> | `https://freeinference.org/v1` |
| **[Novita AI](https://free-llm.com/provider/novita-ai)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://novita.ai/)</sub> | `https://api.novita.ai/v3/openai` |
| **[SiliconFlow](https://free-llm.com/provider/siliconflow)**<br><sub>📱 電話認証 · [🔑&nbsp;キー](https://www.siliconflow.cn/pricing)</sub> | `https://api.siliconflow.cn/v1` |
| **[Hyperbolic](https://free-llm.com/provider/hyperbolic)**<br><sub>📱 電話認証 · [🔑&nbsp;キー](https://app.hyperbolic.xyz/)</sub> | `https://api.hyperbolic.ai/inference/v1` |
| **[Zhipu BigModel (China)](https://free-llm.com/provider/zhipu-bigmodel)**<br><sub>📱 電話認証 · [🔑&nbsp;キー](https://docs.bigmodel.cn/cn/guide/start/model-overview)</sub> | `https://open.bigmodel.cn/api/paas/v4` |
| **[MegaNova AI](https://free-llm.com/provider/meganova)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://docs.meganova.ai/tiers)</sub> | `https://api.meganova.ai/v1` |
| **[Inferbase](https://free-llm.com/provider/inferbase)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://inferbase.ai)</sub> | `https://api.inferbase.ai/v1` |
| **[Regolo.ai](https://free-llm.com/provider/regolo-ai)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://regolo.ai)</sub> | `https://api.regolo.ai/v1` |
| **[AI Horde (OpenAI-compatible front)](https://free-llm.com/provider/ai-horde)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://aihorde.net)</sub> | `https://oai.aihorde.net/v1` |
| **[Jina AI (Embeddings / Reader API)](https://free-llm.com/provider/jina-ai)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://jina.ai/embeddings/)</sub> | `https://api.jina.ai/v1` |
| **[NovAI](https://free-llm.com/provider/novai)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://aiapi-pro.com)</sub> | `https://aiapi-pro.com/v1` |
| **[Pollinations.ai](https://free-llm.com/provider/pollinations-ai)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://pollinations.ai)</sub> | `https://gen.pollinations.ai/v1` |
| **[Runcrate (free inference)](https://free-llm.com/provider/runcrate)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://www.runcrate.ai/inference/free)</sub> | `https://api.runcrate.ai/v1` |
| **[VLM Run Gateway](https://free-llm.com/provider/vlm-run)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://docs.vlm.run/gateway/rate-limits)</sub> | `https://gateway.vlm.run/v1/openai` |
| **[Grokified](https://free-llm.com/provider/grokified)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://grokified.com)</sub> | `https://api.grokified.com/v1` |
| **[Aion Labs](https://free-llm.com/provider/aion-labs)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://www.aionlabs.ai/pricing/)</sub> | `https://api.aionlabs.ai/v1` |
| **[Api.Airforce](https://free-llm.com/provider/api-airforce)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://api.airforce/)</sub> | `https://api.airforce/v1` |
| **[FreeModel](https://free-llm.com/provider/freemodel)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://freemodel.online/)</sub> | `https://freemodel.online/v1 (OpenAI-compatible) · https://freemodel.online/api/gateway (Anthropic-compatible)` |
| **[GonkaRouter](https://free-llm.com/provider/gonkarouter)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://gonkarouter.io)</sub> | `https://api.gonkarouter.io/v1` |
| **[Inception Labs](https://free-llm.com/provider/inception-labs)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://www.inceptionlabs.ai/)</sub> | `https://api.inceptionlabs.ai/v1` |
| **[OpenTyphoon (Typhoon API)](https://free-llm.com/provider/opentyphoon)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://opentyphoon.ai)</sub> | `https://api.opentyphoon.ai/v1` |
| **[Plugsky](https://free-llm.com/provider/plugsky)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://plugsky.com/)</sub> | `https://api.plugsky.com/v1` |
| **[Vectoree](https://free-llm.com/provider/vectoree)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://vectoree.ai)</sub> | `https://vectoree.ai/api/v1` |
| **[AnyAPI](https://free-llm.com/provider/anyapi)**<br><sub>🟢 カード不要 · [🔑&nbsp;キー](https://anyapi.ai)</sub> | `https://api.anyapi.ai/v1` |
| **[LLMTR](https://free-llm.com/provider/llmtr)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://llmtr.com/en/terms)</sub> | `https://llmtr.com/v1` |
| **[AIHubMix (free models)](https://free-llm.com/provider/aihubmix)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://aihubmix.com)</sub> | `https://aihubmix.com/v1` |
| **[AMD Radeon Cloud (Token Factory)](https://free-llm.com/provider/amd-radeon-cloud-china)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://developer.amd.com.cn/radeon/tokenfactory)</sub> | `https://developer.amd.com.cn/radeon/api/v1` |
| **[HiAPI](https://free-llm.com/provider/hiapi)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://hiapi.ai/)</sub> | `https://api.hiapi.ai/v1` |
| **[Voyage AI (embeddings & rerankers)](https://free-llm.com/provider/voyage-ai)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://docs.voyageai.com/docs/pricing)</sub> | `https://api.voyageai.com/v1` |
| **[Friendli AI](https://free-llm.com/provider/friendli-ai)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://friendli.ai/)</sub> | `https://inference.friendli.ai/v1` |
| **[Google Vertex AI express mode (Gemini Enterprise Agent Platform)](https://free-llm.com/provider/vertex-ai-express)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview)</sub> | <sub>独自 API のみ — [設定ガイド](https://free-llm.com/provider/vertex-ai-express)</sub> |
| **[Kiosapi.id](https://free-llm.com/provider/kiosapi)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://kiosapi.id/pricing)</sub> | `https://api.kiosapi.id/v1` |
| **[LLM.kiwi](https://free-llm.com/provider/llm-kiwi)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://llm.kiwi/pricing)</sub> | `https://api.llm.kiwi/v1` |
| **[BazaarLink](https://free-llm.com/provider/bazaarlink)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://bazaarlink.ai/free)</sub> | `https://api.bazaarlink.ai/v1` |
| **[SEA-LION API](https://free-llm.com/provider/sea-lion)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://docs.sea-lion.ai/guides/inferencing/api)</sub> | `https://api.sea-lion.ai/v1` |
| **[SimpleLLM](https://free-llm.com/provider/simplellm)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://simplellm.eu/docs/)</sub> | `https://api.simplellm.eu/v1` |
| **[Agnes AI](https://free-llm.com/provider/agnes-ai)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://agnes-ai.com)</sub> | `https://apihub.agnes-ai.com/v1` |
| **[Dahl Inference](https://free-llm.com/provider/dahl-inference)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://inference.dahl.global/)</sub> | `https://inference.dahl.global/v1` |
| **[Merkium](https://free-llm.com/provider/merkium)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://www.merkium.nl/)</sub> | `https://chat.merkium.nl/api/v1` |
| **[Token Harbor](https://free-llm.com/provider/token-harbor)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://tokenharbor.ai)</sub> | `https://tokenharbor.ai/v1` |
| **[Routeway](https://free-llm.com/provider/routeway)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://routeway.ai/)</sub> | `https://api.routeway.ai/v1` |
| **[Zro (MoonMath)](https://free-llm.com/provider/zro)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://zro.moonmath.ai)</sub> | `https://zro.moonmath.ai/v1` |
| **[Arli AI](https://free-llm.com/provider/arli-ai)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://www.arliai.com/pricing)</sub> | `https://api.arliai.com/v1` |
| **[CheapLLM](https://free-llm.com/provider/cheapllm)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://cheapllm.shop/)</sub> | `https://cheapllm.shop/v1` |
| **[HPC-AI Model APIs](https://free-llm.com/provider/hpc-ai)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://www.hpc-ai.com/model-apis)</sub> | `https://api.hpc-ai.com/inference/v1` |
| **[Mixlayer](https://free-llm.com/provider/mixlayer)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://docs.mixlayer.com/credits-and-limits)</sub> | `https://models.mixlayer.ai/v1` |
| **[Synap](https://free-llm.com/provider/synap)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://synap402.com/)</sub> | `https://synap402.com/v1` |
| **[Bytez](https://free-llm.com/provider/bytez)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://docs.bytez.com/model-api/docs/billing)</sub> | `https://api.bytez.com/models/v2/openai/v1` |
| **[Cerebrium](https://free-llm.com/provider/cerebrium)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://www.cerebrium.ai/)</sub> | <sub>独自 API のみ — [設定ガイド](https://free-llm.com/provider/cerebrium)</sub> |
| **[Replicate](https://free-llm.com/provider/replicate)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://replicate.com/)</sub> | <sub>独自 API のみ — [設定ガイド](https://free-llm.com/provider/replicate)</sub> |
| **[Upstage](https://free-llm.com/provider/upstage)**<br><sub>✉️ メール登録 · [🔑&nbsp;キー](https://console.upstage.ai/)</sub> | `https://api.upstage.ai/v1` |
| **[Gonka Broker](https://free-llm.com/provider/gonka-broker)**<br><sub>📱 電話認証 · [🔑&nbsp;キー](https://gonkabroker.com)</sub> | `https://proxy.gonkabroker.com/v1` |
| **[Moark (Gitee AI)](https://free-llm.com/provider/moark)**<br><sub>📱 電話認証 · [🔑&nbsp;キー](https://moark.com/docs/FAQ)</sub> | `https://api.moark.com/v1` |
| **[Sarvam AI](https://free-llm.com/provider/sarvam-ai)**<br><sub>📱 電話認証 · [🔑&nbsp;キー](https://www.sarvam.ai/api-pricing)</sub> | `https://api.sarvam.ai/v1` |
| **[iFlytek Spark Lite](https://free-llm.com/provider/iflytek-spark)**<br><sub>📱 電話認証 · [🔑&nbsp;キー](https://www.xfyun.cn/doc/spark/HTTP调用文档.html)</sub> | `https://spark-api-open.xf-yun.com/v1` |
| **[SenseNova (SenseTime)](https://free-llm.com/provider/sensenova)**<br><sub>📱 電話認証 · [🔑&nbsp;キー](https://www.sensenova.cn/token-plan)</sub> | `https://token.sensenova.cn/v1` |
| **[Sail Research](https://free-llm.com/provider/sail-research)**<br><sub>💳 カード必要 · [🔑&nbsp;キー](https://docs.sailresearch.com/pricing)</sub> | `https://api.sailresearch.com/v1` |
| **[IBM watsonx.ai (Lite plan)](https://free-llm.com/provider/ibm-watsonx)**<br><sub>💳 カード必要 · [🔑&nbsp;キー](https://www.ibm.com/products/watsonx-ai/pricing)</sub> | <sub>独自 API のみ — [設定ガイド](https://free-llm.com/provider/ibm-watsonx)</sub> |
| **[Nous Portal](https://free-llm.com/provider/nous-portal)**<br><sub>💳 カード必要 · [🔑&nbsp;キー](https://portal.nousresearch.com)</sub> | `https://inference-api.nousresearch.com/v1` |
| **[Experiential Labs](https://free-llm.com/provider/experiential-labs)**<br><sub>💳 カード必要 · [🔑&nbsp;キー](https://www.experientiallabs.ai/pricing)</sub> | `https://api.experientiallabs.ai/v1` |
| **[Hetzner Inference API](https://free-llm.com/provider/hetzner-inference)**<br><sub>💳 カード必要 · [🔑&nbsp;キー](https://experiments.hetzner.com/inference)</sub> | `https://inference.hetzner.com/api/v1` |
| **[Tencent Cloud TokenHub](https://free-llm.com/provider/tencent-tokenhub)**<br><sub>💳 カード必要 · [🔑&nbsp;キー](https://www.tencentcloud.com/act/pro/tokenhub)</sub> | `https://tokenhub-intl.tencentmaas.com/v1` |
<!--TABLE:QUICKREF:END-->

---

## 正確さを保つ仕組み

- **公式情報のみ。** 掲載前に、無料枠をプロバイダー自身の料金ページ、ドキュメント、または公開 `/v1/models` 一覧で確認します。第三者のリストやブログ記事は根拠にしません。
- **毎晩再生成。** この README の表、[無料枠の変更履歴](FREE-TIER-CHANGELOG.md)、Router のカタログスナップショットは、free-llm.com のデータベースから毎日再生成されます。表を手で編集しても上書きされるため、修正はデータ側で行います。
- **黙って消えることはありません。** モデルやプロバイダーが無料でなくなった場合は、削除するのではなく、その旨を日付とともに[変更履歴](https://free-llm.com/changelog)（[RSS](https://free-llm.com/changelog-feed)）に記録します。
- **読者が正確さを支えています。** 多くの変更は、無料枠の終了に気づいた利用者からの報告です。見つけたら公式ページのリンクを添えて[修正を報告](https://github.com/nejib1/Free-LLM/issues/new/choose)するか、プロバイダーページの報告ボタンを使ってください。
- **キープールは掲載しません。** 他社モデルへのアクセスを転売・共有するサービス（「無料 Claude/GPT キー」）は一切掲載しません。

---

## よくある質問

<details>
<summary><strong>本当に無料ですか？</strong></summary>

はい、ただし制限付きです。ここでの「無料」は、支払いなしで実際に API を呼び出せることを指します。レート制限付きの無料枠、更新型の割り当て、または登録時の一回限りのクレジットです。無制限のものはなく、各プロバイダーの制限を明記しています。本当に無制限なのは Ollama などのローカルツールだけで、それは自分のハードウェアで動かすからです。
</details>

<details>
<summary><strong>クレジットカードは必要ですか？</strong></summary>

ほとんどのプロバイダーでは不要です。各項目に 🟢 カード不要、✉️ メール登録、📱 電話認証、💳 カード必要のいずれかを表示しています。請求されなくても、無料枠の有効化にカード登録が必要な場合があり、そうしたプロバイダーは明示しています。
</details>

<details>
<summary><strong>どれから始めればいいですか？</strong></summary>

多くの人には [Google AI Studio](https://free-llm.com/provider/google-ai-studio)（Gemini、長いコンテキスト、画像）、[Groq](https://free-llm.com/provider/groq-cloud)（速度）、[OpenRouter](https://free-llm.com/provider/openrouter)（1 つのキーで多数の無料モデル）がおすすめです。3 つともカード不要です。ほかの用途は[まずはここから](#-まずはここからいま選ぶべき無料プロバイダー)をご覧ください。
</details>

<details>
<summary><strong>本番環境や商用で使えますか？</strong></summary>

プロバイダー次第です。評価用や非商用に限定している無料枠もあり（例：Cohere の試用キー）、一部のゲートウェイの無料モデルはプロンプトを学習に使う場合があります。本格的に使う前に利用規約を確認し、代替手段を用意してください。無料枠は予告なく変わることがあります。
</details>

<details>
<summary><strong>プロンプトのプライバシーは守られますか？</strong></summary>

常にとは限りません。一部の無料モデル、特にアグリゲーター上のものは、入力を記録したり学習に使ったりすることがあります。プロバイダーのデータポリシーを確認し、機密情報や個人情報は無料エンドポイントに送らないでください。プライバシーが重要ならローカルモデルを使いましょう。
</details>

<details>
<summary><strong>上限に達するとどうなりますか？</strong></summary>

時間枠（プロバイダーにより毎分・毎日・毎月）がリセットされるまで、API は HTTP `429 Too Many Requests` を返します。バックオフ付きの再試行、同じモデルを提供する別のプロバイダーへの切り替え、または [Free-LLM Router](#-free-llm-router小さな無料枠を束ねてひとつの大きな枠に) の利用で動かし続けられます。
</details>

<details>
<summary><strong>機械可読なデータはありますか？</strong></summary>

あります。[free-llm.com/catalog.json](https://free-llm.com/catalog.json) に、すべての無料プロバイダーとモデルが Base URL と制限付きで載っています。Router もこれを使っており、自由に利用できます。
</details>

---

## ガイド

[free-llm.com/guides](https://free-llm.com/guides/) の詳しいガイド（英語）。同じデータで常に最新に保たれています。

| はじめに | コーディング | さらに詳しく |
|:---|:---|:---|
| [2026 年のおすすめ無料 LLM API](https://free-llm.com/guides/best-free-llm-apis-2026) | [Claude Code を無料で使う](https://free-llm.com/guides/claude-code-free) | [レート制限に当たらないフォールバック構成](https://free-llm.com/guides/free-llm-fallback-system) |
| [無料 LLM API 完全ガイド](https://free-llm.com/guides/ultimate-free-llm-api-guide) | [コーディングに最適な無料 LLM](https://free-llm.com/guides/best-free-llm-for-coding) | [OpenRouter の代替](https://free-llm.com/guides/openrouter-alternatives) |
| [Gemini と ChatGPT の無料枠比較](https://free-llm.com/guides/gemini-vs-chatgpt-free) | [OpenRouter の使い方](https://free-llm.com/guides/how-to-use-openrouter) | [Ollama でローカル LLM](https://free-llm.com/guides/local-llm-ollama-guide) |

📰 月次レポート：[2026 年 11 月の変更点](https://free-llm.com/guides/free-llm-apis-november-2026-what-changed)

---

## コード例

[`code-examples/`](code-examples/) にはプロバイダーごとのフォルダーがあり、`python.py`、`javascript.js`、`curl.sh` と無料モデルをまとめた README が入っています。キーを入れればすぐ動きます。

**コーディングアシスタント別：** [Claude Code](code-examples/claude-code.md) · [Cursor](code-examples/cursor.md) · [Codex CLI](code-examples/codex.md) · [OpenCode](code-examples/opencode.md)

<!--CODEEX:PROVIDERS:START-->
**プロバイダー別（70 件）:** [Agnes AI](code-examples/agnes-ai) · [AI Horde (OpenAI-compatible front)](code-examples/ai-horde) · [AIHubMix (free models)](code-examples/aihubmix) · [Aion Labs](code-examples/aion-labs) · [AnyAPI](code-examples/anyapi) · [Api.Airforce](code-examples/api-airforce) · [Arli AI](code-examples/arli-ai) · [BazaarLink](code-examples/bazaarlink) · [Bytez](code-examples/bytez) · [Cerebras](code-examples/cerebras) · [Cerebrium](code-examples/cerebrium) · [Cloudflare Workers AI](code-examples/cloudflare-workers-ai) · [Cohere](code-examples/cohere) · [Dahl Inference](code-examples/dahl-inference) · [Experiential Labs](code-examples/experiential-labs) · [Fireworks AI](code-examples/fireworks-ai) · [FreeInference](code-examples/freeinference) · [Friendli AI](code-examples/friendli-ai) · [Gonka Broker](code-examples/gonka-broker) · [GonkaRouter](code-examples/gonkarouter) · [Google AI Studio](code-examples/google-ai-studio) · [Google Vertex AI express mode (Gemini Enterprise Agent Platform)](code-examples/vertex-ai-express) · [Grokified](code-examples/grokified) · [Groq](code-examples/groq-cloud) · [Hetzner Inference API](code-examples/hetzner-inference) · [HPC-AI Model APIs](code-examples/hpc-ai) · [Hyperbolic](code-examples/hyperbolic) · [IBM watsonx.ai (Lite plan)](code-examples/ibm-watsonx) · [iFlytek Spark Lite](code-examples/iflytek-spark) · [Inception Labs](code-examples/inception-labs) · [Inferbase](code-examples/inferbase) · [Jina AI (Embeddings / Reader API)](code-examples/jina-ai) · [Kilo AI Gateway](code-examples/kilo-gateway) · [Kiosapi.id](code-examples/kiosapi) · [LLM.kiwi](code-examples/llm-kiwi) · [LLMTR](code-examples/llmtr) · [MegaNova AI](code-examples/meganova) · [Mixlayer](code-examples/mixlayer) · [Moark (Gitee AI)](code-examples/moark) · [ModelScope](code-examples/modelscope) · [Nous Portal](code-examples/nous-portal) · [NovAI](code-examples/novai) · [Novita AI](code-examples/novita-ai) · [NVIDIA NIM](code-examples/nvidia-nim) · [OpenRouter](code-examples/openrouter) · [OpenTyphoon (Typhoon API)](code-examples/opentyphoon) · [OVH AI Endpoints](code-examples/ovh-ai) · [Pollinations.ai](code-examples/pollinations-ai) · [Qwen (Alibaba)](code-examples/qwen-alibaba) · [Regolo.ai](code-examples/regolo-ai) · [Replicate](code-examples/replicate) · [Requesty](code-examples/requesty) · [Routeway](code-examples/routeway) · [Sail Research](code-examples/sail-research) · [Sarvam AI](code-examples/sarvam-ai) · [Scaleway Generative APIs](code-examples/scaleway) · [SEA-LION API](code-examples/sea-lion) · [SenseNova (SenseTime)](code-examples/sensenova) · [SiliconFlow](code-examples/siliconflow) · [SimpleLLM](code-examples/simplellm) · [Tencent Cloud TokenHub](code-examples/tencent-tokenhub) · [Token Harbor](code-examples/token-harbor) · [Upstage](code-examples/upstage) · [Vectoree](code-examples/vectoree) · [Vercel AI Gateway](code-examples/vercel-ai-gateway) · [VLM Run Gateway](code-examples/vlm-run) · [Voyage AI (embeddings & rerankers)](code-examples/voyage-ai) · [Z.AI (GLM)](code-examples/z-ai) · [Zhipu BigModel (China)](code-examples/zhipu-bigmodel) · [Zro (MoonMath)](code-examples/zro)
<!--CODEEX:PROVIDERS:END-->

**ローカル / セルフホスト:** [BentoML](code-examples/bentoml) · [GPT4All](code-examples/gpt4all) · [Jan.ai](code-examples/jan-ai) · [KoboldCpp](code-examples/koboldcpp) · [llama.cpp](code-examples/llama-cpp) · [llamafile](code-examples/llamafile) · [LM Studio](code-examples/lm-studio) · [Ollama](code-examples/ollama) · [Text Gen WebUI](code-examples/text-generation-webui)

<details>
<summary><strong>リポジトリ構成</strong></summary>

```
Free-LLM/
├── README.md                  ← English
├── README.zh-CN.md            ← 简体中文
├── README.zh-TW.md            ← 繁體中文
├── README.ja.md               ← 日本語（このページ）
├── README.ko.md               ← 한국어
├── FREE-TIER-CHANGELOG.md     ← 無料枠の開始・終了を日付順に記録
├── code-examples/             ← すぐ動くコード（プロバイダー別・ツール別）
├── router/                    ← Free-LLM Router（ソース、テスト、ドキュメント）
├── package.json · Dockerfile  ← Router のインストール・実行
├── CHANGELOG.md               ← Router のリリースノート
├── CONTRIBUTING.md · CODE_OF_CONDUCT.md · SECURITY.md · SUPPORT.md
└── LICENSE                    ← MIT
```
</details>

---

## コントリビュート

いちばん役立つ貢献は修正の報告です。無料枠の変化は、ひとりでは追いきれないほど速いからです。

1. **誤りや古い情報を見つけたら：** プロバイダーの公式ページのリンクを添えて[データ修正を報告](https://github.com/nejib1/Free-LLM/issues/new/choose)してください。表は毎晩再生成されるため、PR で表を編集しないでください。修正はデータ側で行う必要があります。
2. **載っていないプロバイダーがあれば：** [提案フォーム](https://free-llm.com/submit)か「Add a provider」の issue フォームをお使いください。サービス提供者自身による提案も歓迎です（その旨を書いてください）。
3. **未対応ツールの設定があれば：** [`code-examples/`](code-examples/) や Router への PR を歓迎します。[CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください。

**掲載基準：** 実際に使える無料 API アクセス（無料枠、更新型の割り当て、または明示された試用クレジット）であること、一般公開されていること（ウェイトリストやクローズドベータは不可）、プロバイダー自身が運営していること（転売・共有キーは不可）、公式ページで確認できること。

---

## リンクとサポート

- 🌐 [free-llm.com](https://free-llm.com) · 🧠 [無料モデル](https://free-llm.com/models) · 🆚 [比較](https://free-llm.com/compare) · 📚 [ガイド](https://free-llm.com/guides/) · 📰 [変更履歴](https://free-llm.com/changelog)（[RSS](https://free-llm.com/changelog-feed)）
- 🧩 [JSON カタログ](https://free-llm.com/catalog.json) · ⚡ [Router](https://free-llm.com/router) · ➕ [プロバイダーを提案](https://free-llm.com/submit) · 🏆 [殿堂](https://free-llm.com/hall-of-fame)
- 💬 質問やアイデア：[GitHub Discussions](https://github.com/nejib1/Free-LLM/discussions) · 🐛 不具合と修正：[issues](https://github.com/nejib1/Free-LLM/issues/new/choose)（[どのフォーム？](SUPPORT.md)） · 🔒 セキュリティ：[SECURITY.md](SECURITY.md) · 🤝 [行動規範](CODE_OF_CONDUCT.md)

このリストが役に立ったら、⭐ を付けてほかの人にも見つけやすくしてください。

[![Star History Chart](https://api.star-history.com/svg?repos=nejib1/Free-LLM&type=Date)](https://star-history.com/#nejib1/Free-LLM&Date)

**ライセンス：** MIT（[LICENSE](LICENSE) を参照）。

---

<p align="center"><sub>表はライブディレクトリから自動で再生成 — 最終更新：<!--LASTSYNC:START-->2026-11-26<!--LASTSYNC:END--></sub></p>
