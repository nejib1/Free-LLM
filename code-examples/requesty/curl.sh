# ===============================================
# Requesty - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://requesty.ai/
# ===============================================

curl https://router.requesty.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_REQUESTY_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {
        "role": "user",
        "content": "Explain AI routing"
      }
    ]
  }'