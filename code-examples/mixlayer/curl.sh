# ===============================================
# Mixlayer - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.mixlayer.com/credits-and-limits
# ===============================================

curl https://models.mixlayer.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_MIXLAYER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen/qwen3.5-4b-free",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'