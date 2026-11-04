# ===============================================
# OpenTyphoon (Typhoon API) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://opentyphoon.ai
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_TYPHOON_KEY",
    base_url="https://api.opentyphoon.ai/v1"
)

response = client.chat.completions.create(
    model="typhoon-v2.5-30b-a3b-instruct",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)