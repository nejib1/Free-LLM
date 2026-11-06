# ===============================================
# Regolo.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://regolo.ai
# ===============================================

curl https://api.regolo.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_REGOLO_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-oss-120b",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'