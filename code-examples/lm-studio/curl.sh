# ===============================================
# LM Studio - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://lmstudio.ai/
# ===============================================

curl http://localhost:1234/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer lm-studio" \
  -d '{
    "model": "llama-3.2-3b-instruct",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
