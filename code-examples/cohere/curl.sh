# ===============================================
# Cohere - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://cohere.com/
# ===============================================

curl https://api.cohere.ai/v2/chat \
  -H "Authorization: Bearer YOUR_COHERE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "{{model}}",
    "messages": [
      {
        "role": "user",
        "content": "What is retrieval augmented generation?"
      }
    ]
  }'