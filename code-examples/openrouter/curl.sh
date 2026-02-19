# ===============================================
# OpenRouter - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://openrouter.ai/
# ===============================================

curl https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_OPENROUTER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "{{model}}",
    "messages": [
      {
        "role": "user",
        "content": "What is OpenRouter?"
      }
    ]
  }'