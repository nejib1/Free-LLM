# ===============================================
# llamafile - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/Mozilla-Ocho/llamafile
# ===============================================

# Run: ./model.llamafile --server
curl http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "local",
    "messages": [
      {
        "role": "user",
        "content": "What is llamafile?"
      }
    ]
  }'