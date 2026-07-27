# ===============================================
# AI21 Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.ai21.com/
# ===============================================

curl https://api.ai21.com/studio/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "jamba-large",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
