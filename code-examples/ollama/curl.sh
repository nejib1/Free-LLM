# ===============================================
# Ollama - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://ollama.com/
# ===============================================

# First: ollama run llama3.2:3b
curl http://localhost:11434/api/chat \
  -d '{
    "model": "llama3.2:3b",
    "messages": [
      {
        "role": "user",
        "content": "Hello, how are you?"
      }
    ],
    "stream": false
  }'