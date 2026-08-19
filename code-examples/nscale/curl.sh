# ===============================================
# Nscale - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.nscale.com/product/inference
# ===============================================

curl https://inference.api.nscale.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_NSCALE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "model-name",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'