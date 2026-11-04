# ===============================================
# Aion Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.aionlabs.ai/pricing/
# ===============================================

curl https://api.aionlabs.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_AIONLABS_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "aion-labs/aion-2.0",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'