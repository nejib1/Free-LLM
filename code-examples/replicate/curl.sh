# ===============================================
# Replicate - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://replicate.com/
# ===============================================
# Replicate uses an async prediction API, not /chat/completions.
# "Prefer: wait" makes this call block for a synchronous result
# instead of returning a prediction ID you'd have to poll.

curl https://api.replicate.com/v1/models/meta/meta-llama-3-70b-instruct/predictions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Prefer: wait" \
  -d '{
    "input": {
      "prompt": "What makes model-hosting marketplaces useful?"
    }
  }'
