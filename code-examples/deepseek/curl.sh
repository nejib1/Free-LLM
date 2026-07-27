# ===============================================
# DeepSeek - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://platform.deepseek.com/
# ===============================================

curl https://api.deepseek.com/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "deepseek-chat",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
