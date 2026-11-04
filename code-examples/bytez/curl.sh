# ===============================================
# Bytez - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.bytez.com/model-api/docs/billing
# ===============================================

curl https://api.bytez.com/models/v2/openai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_BYTEZ_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "model-name",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'