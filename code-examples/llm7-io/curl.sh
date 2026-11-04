# ===============================================
# LLM7.io - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://llm7.io
# ===============================================

curl https://api.llm7.io/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "nemotron-3-nano:30b",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'