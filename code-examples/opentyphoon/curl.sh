# ===============================================
# OpenTyphoon (Typhoon API) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://opentyphoon.ai
# ===============================================

curl https://api.opentyphoon.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_TYPHOON_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "typhoon-v2.5-30b-a3b-instruct",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'