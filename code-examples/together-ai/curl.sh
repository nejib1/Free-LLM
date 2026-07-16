# ===============================================
# Together.AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://together.ai/
# ===============================================

curl https://api.together.xyz/v1/chat/completions \
  -H "Authorization: Bearer YOUR_TOGETHER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta-llama/Llama-4-Scout-17B-16E-Instruct-FP8",
    "messages": [
      {
        "role": "user",
        "content": "Explain the Apriel model architecture"
      }
    ]
  }'