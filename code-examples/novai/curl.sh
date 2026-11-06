# ===============================================
# NovAI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://aiapi-pro.com
# ===============================================

curl https://aiapi-pro.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_NOVAI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "glm-4.7-flash",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'