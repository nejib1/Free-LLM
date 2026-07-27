# ===============================================
# Fireworks AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://fireworks.ai/
# ===============================================

curl https://api.fireworks.ai/inference/v1/chat/completions \
  -H "Authorization: Bearer YOUR_FIREWORKS_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "accounts/fireworks/models/llama-v3p3-70b-instruct",
    "messages": [
      {
        "role": "user",
        "content": "Write a Python function to sort a list"
      }
    ]
  }'