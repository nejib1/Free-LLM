# ===============================================
# Ollama Cloud - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://ollama.com/cloud
# ===============================================

curl https://ollama.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "model-name-here",
    "messages": [
      {"role": "user", "content": "Hello, how are you?"}
    ]
  }'