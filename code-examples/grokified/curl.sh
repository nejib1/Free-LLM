# ===============================================
# Grokified - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://grokified.com
# ===============================================

curl https://api.grokified.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_GROKIFIED_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4.7",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'