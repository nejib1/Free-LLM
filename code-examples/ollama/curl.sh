# ===============================================
# Ollama - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://ollama.com/
# ===============================================

curl http://localhost:11434/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ollama" \
  -d '{
    "model": "llama3.2",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
