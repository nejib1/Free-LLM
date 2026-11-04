# ===============================================
# Vectoree - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://vectoree.ai
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_VECTOREE_KEY",
    base_url="https://vectoree.ai/api/v1"
)

response = client.chat.completions.create(
    model="vectoree/auto",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)