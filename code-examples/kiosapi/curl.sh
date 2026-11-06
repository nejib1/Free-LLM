# ===============================================
# Kiosapi.id - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://kiosapi.id/pricing
# ===============================================

curl https://api.kiosapi.id/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KIOSAPI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "zai/glm-4.7-flash",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'