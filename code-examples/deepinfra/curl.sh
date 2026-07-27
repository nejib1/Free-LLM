# ===============================================
# DeepInfra - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://deepinfra.com/
# ===============================================

curl https://api.deepinfra.com/v1/openai/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "meta-llama/Meta-Llama-3.1-8B-Instruct",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
