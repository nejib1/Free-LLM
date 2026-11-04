# ===============================================
# SimpleLLM - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://simplellm.eu/docs/
# ===============================================

curl https://api.simplellm.eu/v1/chat/completions \
  -H "Authorization: Bearer YOUR_SIMPLELLM_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "free-Llama-3.1-8B-Instruct",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'