# ===============================================
# AI21 Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.ai21.com/
# ===============================================

curl https://api.ai21.com/studio/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "jamba-1.5-large",
    "messages": [
      {
        "role": "user",
        "content": "Explain the Mamba architecture"
      }
    ]
  }'