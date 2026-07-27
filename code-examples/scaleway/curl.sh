# ===============================================
# Scaleway - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.scaleway.com/generative-api/models
# ===============================================

curl https://api.scaleway.ai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $SCW_SECRET_KEY" \
  -d '{
    "model": "llama-3.3-70b-instruct",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
