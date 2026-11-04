# ===============================================
# NovAI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://aiapi-pro.com
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_NOVAI_KEY",
    base_url="https://aiapi-pro.com/v1"
)

response = client.chat.completions.create(
    model="glm-4.7-flash",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)