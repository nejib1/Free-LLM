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
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "Explain AI routing"}
    ]
)

print(response.choices[0].message.content)