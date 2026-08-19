# ===============================================
# LLM7.io - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://llm7.io
# ===============================================

curl https://api.llm7.io/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek-r1",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'