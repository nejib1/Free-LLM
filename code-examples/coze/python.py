# ===============================================
# Coze - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.coze.com/
# ===============================================

import requests

response = requests.post(
    "https://api.coze.com/v3/chat",
    headers={
        "Authorization": "Bearer YOUR_COZE_TOKEN",
        "Content-Type": "application/json"
    },
    json={
        "bot_id": "YOUR_BOT_ID",
        "user_id": "user123",
        "stream": False,
        "additional_messages": [
            {
                "role": "user",
                "content": "Hello! What can you do?",
                "content_type": "text"
            }
        ]
    }
)

print(response.json())