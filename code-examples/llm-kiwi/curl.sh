# ===============================================
# LLM.kiwi - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://llm.kiwi/pricing
# ===============================================

curl https://api.llm.kiwi/v1/chat/completions \
  -H "Authorization: Bearer YOUR_LLM_KIWI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "auto",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'