# ===============================================
# Upstage - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.upstage.ai/
# ===============================================

curl https://api.upstage.ai/v1/solar/chat/completions \
  -H "Authorization: Bearer YOUR_UPSTAGE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "solar-pro",
    "messages": [
      {
        "role": "user",
        "content": "What is document understanding?"
      }
    ]
  }'