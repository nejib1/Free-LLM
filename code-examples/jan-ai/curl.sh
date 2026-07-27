# ===============================================
# Jan.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://jan.ai/
# ===============================================

curl http://127.0.0.1:1337/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer jan" \
  -d '{
    "model": "llama3.2:3b-gguf-q4-km",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
