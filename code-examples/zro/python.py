# ===============================================
# Zro (MoonMath) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://zro.moonmath.ai
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_ZRO_KEY",
    base_url="https://zro.moonmath.ai/v1"
)

response = client.chat.completions.create(
    model="glm-5.3-flash",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)