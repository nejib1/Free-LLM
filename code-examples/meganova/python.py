# ===============================================
# MegaNova AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.meganova.ai/tiers
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_MEGANOVA_KEY",
    base_url="https://api.meganova.ai/v1"
)

response = client.chat.completions.create(
    model="meganova-ai/manta-pro-1.0",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)