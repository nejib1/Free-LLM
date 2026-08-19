# ===============================================
# Jan.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://jan.ai/
# ===============================================

# Enable Jan local server in Settings first
curl http://localhost:1337/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama3-8b-instruct",
    "messages": [
      {
        "role": "user",
        "content": "Write a haiku about local AI"
      }
    ]
  }'