# ===============================================
# Groq - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.groq.com/
# ===============================================

import os
from groq import Groq

client = Groq(
    api_key="YOUR_API_KEY",
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "Explain the importance of fast language models",
        }
    ],
    model="{{model}}",
)

print(chat_completion.choices[0].message.content)