# ===============================================
# Text Generation WebUI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/oobabooga/text-generation-webui
# ===============================================

# Enable OpenAI extension in text-generation-webui
curl http://localhost:5000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "local-model",
    "messages": [
      {
        "role": "user",
        "content": "Tell me about text generation"
      }
    ]
  }'