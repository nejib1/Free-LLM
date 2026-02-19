# ===============================================
# Grok (xAI) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.x.ai/
# ===============================================

curl https://api.x.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_XAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-2-latest",
    "messages": [
      {
        "role": "user",
        "content": "Explain quantum computing simply"
      }
    ]
  }'