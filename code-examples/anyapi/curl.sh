# ===============================================
# AnyAPI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://anyapi.ai
# ===============================================

curl https://api.anyapi.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_ANYAPI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "model-name",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'