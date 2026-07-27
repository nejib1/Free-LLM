# ===============================================
# Replicate - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://replicate.com/
# ===============================================

curl -s -X POST https://api.replicate.com/v1/predictions \
  -H "Authorization: Bearer YOUR_REPLICATE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "version": "MODEL_VERSION_ID",
    "input": {
      "prompt": "Write a short poem about AI",
      "max_tokens": 512
    }
  }'