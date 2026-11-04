# ===============================================
# AIHubMix (free models) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://aihubmix.com
# ===============================================

curl https://aihubmix.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_AIHUBMIX_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "coding-glm-5.3-free",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'