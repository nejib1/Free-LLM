# ===============================================
# Scaleway Generative APIs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.scaleway.com/generative-api/models
# ===============================================

curl https://api.scaleway.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_SCALEWAY_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.1-70b",
    "messages": [
      {
        "role": "user",
        "content": "What is GDPR compliance?"
      }
    ]
  }'