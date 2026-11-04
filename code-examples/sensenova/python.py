# ===============================================
# SenseNova (SenseTime) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.sensenova.cn/token-plan
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_SENSENOVA_KEY",
    base_url="https://token.sensenova.cn/v1"
)

response = client.chat.completions.create(
    model="sensenova-6.8-flash-lite",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)