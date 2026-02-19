# ===============================================
# GitHub Models - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/marketplace/models
# ===============================================

curl https://models.inference.ai.azure.com/chat/completions \
  -H "Authorization: Bearer YOUR_GITHUB_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "{{model}}",
    "messages": [
      {
        "role": "user",
        "content": "Explain how GitHub Models works"
      }
    ]
  }'