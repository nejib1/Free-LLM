# ===============================================
# OpenRouter - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://openrouter.ai/
# ===============================================

curl https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_OPENROUTER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "google/gemini-2.0-flash-exp:free",
    "messages": [
      {
        "role": "user",
        "content": "What is OpenRouter?"
      }
    ]
  }'