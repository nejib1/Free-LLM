# ===============================================
# Fireworks AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://fireworks.ai/
# ===============================================

curl https://api.fireworks.ai/inference/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "accounts/fireworks/models/llama-v3p1-8b-instruct",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
