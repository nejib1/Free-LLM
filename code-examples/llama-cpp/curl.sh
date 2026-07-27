# ===============================================
# llama.cpp - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/ggml-org/llama.cpp
# ===============================================

curl http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer no-key" \
  -d '{
    "model": "Meta-Llama-3-8B-Instruct.Q4_K_M.gguf",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
