# ===============================================
# VLM Run Gateway - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.vlm.run/gateway/rate-limits
# ===============================================

curl https://gateway.vlm.run/v1/openai/chat/completions \
  -H "Authorization: Bearer YOUR_VLM_RUN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen/qwen3.8-27b",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'