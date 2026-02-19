# ===============================================
# Cerebras - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://cerebras.ai/inference
# ===============================================

import os
from cerebras.cloud.sdk import Cerebras

# Get API Key from https://cloud.cerebras.ai/
client = Cerebras(
    api_key="YOUR_CEREBRAS_API_KEY",
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "Why is fast inference important?",
        }
    ],
    model="{{model}}",
)

print(chat_completion.choices[0].message.content)