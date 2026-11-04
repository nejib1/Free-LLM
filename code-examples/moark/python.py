# ===============================================
# Moark (Gitee AI) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://moark.com/docs/FAQ
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_MOARK_KEY",
    base_url="https://api.moark.com/v1"
)

response = client.chat.completions.create(
    model="deepseek-v4-flash-0731",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)