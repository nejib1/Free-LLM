# ===============================================
# Yi AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.01.ai/
# ===============================================

curl https://api.01.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_YI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "yi-large",
    "messages": [
      {
        "role": "user",
        "content": "Explain the Yi model architecture"
      }
    ]
  }'