# ===============================================
# llama.cpp - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/ggml-org/llama.cpp
# ===============================================

# Start server: ./server -m model.gguf
curl http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "local",
    "messages": [
      {
        "role": "user",
        "content": "Explain quantum computing"
      }
    ]
  }'