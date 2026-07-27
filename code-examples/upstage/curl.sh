# ===============================================
# Upstage - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.upstage.ai/
# ===============================================

curl https://api.upstage.ai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "solar-mini",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
