# ===============================================
# Experiential Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.experientiallabs.ai/pricing
# ===============================================

curl https://api.experientiallabs.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_EXPERIENTIAL_LABS_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-6-luna",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'