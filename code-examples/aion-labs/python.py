# ===============================================
# Aion Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.aionlabs.ai/pricing/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_AIONLABS_KEY",
    base_url="https://api.aionlabs.ai/v1"
)

response = client.chat.completions.create(
    model="model-name",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)