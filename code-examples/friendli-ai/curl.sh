# ===============================================
# Friendli AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://friendli.ai/
# ===============================================

curl https://inference.friendli.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_FRIENDLI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta-llama-3.1-70b-instruct",
    "messages": [
      {
        "role": "user",
        "content": "What makes your inference fast?"
      }
    ]
  }'