# ===============================================
# Kiosapi.id - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://kiosapi.id/pricing
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_KIOSAPI_KEY",
    base_url="https://api.kiosapi.id/v1"
)

response = client.chat.completions.create(
    model="zai/glm-4.7-flash",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)