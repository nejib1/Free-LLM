# ===============================================
# Vectoree - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://vectoree.ai
# ===============================================

curl https://vectoree.ai/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_VECTOREE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "vectoree/auto",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'