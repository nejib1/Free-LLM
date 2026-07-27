# ===============================================
# SambaNova - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://cloud.sambanova.ai/
# ===============================================

curl https://api.sambanova.ai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "Meta-Llama-3.3-70B-Instruct",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
