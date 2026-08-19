# ===============================================
# SiliconFlow - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://siliconflow.com/pricing
# ===============================================

curl https://api.siliconflow.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_SILICONFLOW_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "model-name",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'