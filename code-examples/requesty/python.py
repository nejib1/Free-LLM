# ===============================================
# Requesty - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://requesty.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_REQUESTY_KEY",
    base_url="https://router.requesty.ai/v1"
)

response = client.chat.completions.create(
    model="novita/inclusionai/ling-3.0-tiny",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)