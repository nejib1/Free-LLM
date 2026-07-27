# ===============================================
# Text Gen WebUI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/oobabooga/text-generation-webui
# ===============================================

curl http://127.0.0.1:5000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer text-gen-webui" \
  -d '{
    "model": "Meta-Llama-3-8B-Instruct",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
