# ===============================================
# Moark (Gitee AI) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://moark.com/docs/FAQ
# ===============================================

curl https://api.moark.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_MOARK_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek-v4-flash-0731",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'