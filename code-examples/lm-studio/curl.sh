# ===============================================
# LM Studio - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://lmstudio.ai/
# ===============================================

# Start LM Studio server first, then:
curl http://localhost:1234/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "local-model",
    "messages": [
      {
        "role": "user",
        "content": "What can you help me with?"
      }
    ]
  }'