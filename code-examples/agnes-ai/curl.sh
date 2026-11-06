# ===============================================
# Agnes AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://agnes-ai.com
# ===============================================

curl https://apihub.agnes-ai.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_AGNES_AI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "agnes-3.0-flash",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'