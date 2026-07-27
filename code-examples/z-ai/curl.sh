# ===============================================
# Z.AI (GLM) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://z.ai/
# ===============================================

curl https://api.z.ai/api/paas/v4/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "glm-4.5-flash",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
