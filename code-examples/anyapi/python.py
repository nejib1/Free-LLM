# ===============================================
# AnyAPI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://anyapi.ai
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_ANYAPI_KEY",
    base_url="https://api.anyapi.ai/v1"
)

response = client.chat.completions.create(
    model="model-name",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)