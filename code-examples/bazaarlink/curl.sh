# ===============================================
# BazaarLink - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://bazaarlink.ai/free
# ===============================================

curl https://api.bazaarlink.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_BAZAARLINK_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen/qwen3.7-flash",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'