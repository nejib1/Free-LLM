# ===============================================
# Z.AI (GLM) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://z.ai/
# ===============================================

curl https://api.z.ai/api/paas/v4/chat/completions \
  -H "Authorization: Bearer YOUR_ZAI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "glm-4.5-flash",
    "messages": [
      {
        "role": "user",
        "content": "What makes the GLM Flash tier fast?"
      }
    ]
  }'