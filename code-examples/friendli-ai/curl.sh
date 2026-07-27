# ===============================================
# Friendli AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://friendli.ai/
# ===============================================

curl https://api.friendli.ai/serverless/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer flp_YOUR_API_KEY" \
  -d '{
    "model": "zai-org/GLM-5.2",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
