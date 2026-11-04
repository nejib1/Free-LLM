# ===============================================
# SenseNova (SenseTime) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.sensenova.cn/token-plan
# ===============================================

curl https://token.sensenova.cn/v1/chat/completions \
  -H "Authorization: Bearer YOUR_SENSENOVA_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sensenova-6.8-flash-lite",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'