# ===============================================
# Fireworks AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://fireworks.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_FIREWORKS_KEY",
    base_url="https://api.fireworks.ai/inference/v1"
)

response = client.chat.completions.create(
    model="accounts/fireworks/models/llama-v3p3-70b-instruct",
    messages=[
        {"role": "user", "content": "Write a Python function to sort a list"}
    ]
)

print(response.choices[0].message.content)