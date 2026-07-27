# ===============================================
# DeepSeek - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://platform.deepseek.com/
# ===============================================

curl https://api.deepseek.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_DEEPSEEK_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek-chat",
    "messages": [
      {
        "role": "user",
        "content": "Write a Python function to detect palindromes"
      }
    ]
  }'