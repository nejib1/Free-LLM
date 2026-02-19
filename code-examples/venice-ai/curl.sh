# ===============================================
# Venice.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://venice.ai/
# ===============================================

curl https://api.venice.ai/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_VENICE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "{{model}}",
    "messages": [
      {
        "role": "user",
        "content": "What is privacy-first AI?"
      }
    ]
  }'