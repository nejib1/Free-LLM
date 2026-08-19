# ===============================================
# Friendli AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://friendli.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_FRIENDLI_KEY",
    base_url="https://inference.friendli.ai/v1"
)

response = client.chat.completions.create(
    model="model-name",
    messages=[
        {"role": "user", "content": "What makes your inference fast?"}
    ]
)

print(response.choices[0].message.content)