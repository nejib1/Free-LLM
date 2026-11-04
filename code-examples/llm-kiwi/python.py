# ===============================================
# LLM.kiwi - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://llm.kiwi/pricing
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_LLM_KIWI_KEY",
    base_url="https://api.llm.kiwi/v1"
)

response = client.chat.completions.create(
    model="auto",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)