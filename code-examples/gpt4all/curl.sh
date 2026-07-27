# ===============================================
# GPT4All - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://gpt4all.io/
# ===============================================

curl http://localhost:4891/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer gpt4all" \
  -d '{
    "model": "Phi-3 Mini Instruct",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
