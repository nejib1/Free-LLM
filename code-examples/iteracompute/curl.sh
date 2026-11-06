# ===============================================
# IteraCompute - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://iteracompute.com/free/
# ===============================================

curl https://api.iteracompute.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_ITERACOMPUTE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen/qwen3.8-27b",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'