# ===============================================
# Arli AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.arliai.com/pricing
# ===============================================

curl https://api.arliai.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_ARLI_AI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "Qwen3.5-27B-Derestricted",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'