# ===============================================
# Coze - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.coze.com/
# ===============================================

curl https://api.coze.com/v3/chat \
  -H "Authorization: Bearer YOUR_COZE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "bot_id": "YOUR_BOT_ID",
    "user_id": "user123",
    "stream": false,
    "additional_messages": [
      {
        "role": "user",
        "content": "Hello! What can you do?",
        "content_type": "text"
      }
    ]
  }'