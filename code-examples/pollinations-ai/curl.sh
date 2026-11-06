# ===============================================
# Pollinations.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://pollinations.ai
# ===============================================

curl https://gen.pollinations.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_POLLINATIONS_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openai/gpt-oss-20b",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'