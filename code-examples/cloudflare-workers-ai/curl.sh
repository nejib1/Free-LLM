# ===============================================
# Cloudflare Workers AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://dash.cloudflare.com/
# ===============================================

curl https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/ai/run/@cf/meta/llama-3.1-8b-instruct \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {
        "role": "user",
        "content": "What is Workers AI?"
      }
    ]
  }'