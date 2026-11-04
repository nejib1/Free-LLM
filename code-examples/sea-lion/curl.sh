# ===============================================
# SEA-LION API - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.sea-lion.ai/guides/inferencing/api
# ===============================================

curl https://api.sea-lion.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_SEA_LION_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "aisingapore/Qwen-SEA-LION-v4.5-27B-IT",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'