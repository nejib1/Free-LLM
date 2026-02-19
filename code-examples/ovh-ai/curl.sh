# ===============================================
# OVH AI Endpoints - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://endpoints.ai.cloud.ovh.net/
# ===============================================

curl -X POST https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OVH_AI_ENDPOINTS_ACCESS_TOKEN" \
  -d '{
    "model": "{{model}}",
    "messages": [
      {
        "role": "user",
        "content": "Hello!"
      }
    ],
    "temperature": 0,
    "max_tokens": 1024
  }'