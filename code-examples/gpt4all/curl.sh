# ===============================================
# GPT4All - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://gpt4all.io/
# ===============================================

# Enable Server Mode in GPT4All settings first
curl http://localhost:4891/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "local-model",
    "messages": [
      {
        "role": "user",
        "content": "Summarize this document for me"
      }
    ]
  }'