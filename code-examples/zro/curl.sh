# ===============================================
# Zro (MoonMath) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://zro.moonmath.ai
# ===============================================

curl https://zro.moonmath.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_ZRO_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "glm-5.3-flash",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'