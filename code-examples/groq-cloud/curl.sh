# ===============================================
# Groq - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.groq.com/
# ===============================================

curl https://api.groq.com/openai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "qwen/qwen3.6-27b",
    "messages": [
      {
        "role": "user",
        "content": "Explain the importance of fast language models"
      }
    ]
  }'