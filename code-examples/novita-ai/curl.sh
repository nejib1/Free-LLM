# ===============================================
# Novita AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://novita.ai/
# ===============================================

curl https://api.novita.ai/v3/openai/chat/completions \
  -H "Authorization: Bearer YOUR_NOVITA_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta-llama/llama-3.1-8b-instruct",
    "messages": [
      {
        "role": "user",
        "content": "What are open source LLMs?"
      }
    ]
  }'