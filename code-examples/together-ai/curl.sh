# ===============================================
# Together.AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://together.ai/
# ===============================================

curl https://api.together.xyz/v1/chat/completions \
  -H "Authorization: Bearer YOUR_TOGETHER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "Prism-ML/Ternary-Bonsai-27B",
    "messages": [
      {
        "role": "user",
        "content": "Explain the Apriel model architecture"
      }
    ]
  }'