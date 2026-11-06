# ===============================================
# Routeway - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://routeway.ai/
# ===============================================

curl https://api.routeway.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_ROUTEWAY_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek-v4.1-flash:free",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'