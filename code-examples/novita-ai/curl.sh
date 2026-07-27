# ===============================================
# Novita AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://novita.ai/
# ===============================================

curl https://api.novita.ai/openai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "meta-llama/llama-3.1-8b-instruct",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
