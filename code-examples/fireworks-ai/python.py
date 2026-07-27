# ===============================================
# Fireworks AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://fireworks.ai/
# ===============================================

from openai import OpenAI

# Get your API key from https://fireworks.ai/
client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.fireworks.ai/inference/v1",
)

response = client.chat.completions.create(
    model="accounts/fireworks/models/llama-v3p1-8b-instruct",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
