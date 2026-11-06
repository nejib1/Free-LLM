# ===============================================
# Inferbase - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://inferbase.ai
# ===============================================

curl https://api.inferbase.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_INFERBASE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openai-gpt-oss-120b",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'