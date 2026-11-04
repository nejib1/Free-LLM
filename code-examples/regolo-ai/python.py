# ===============================================
# Regolo.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://regolo.ai
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_REGOLO_KEY",
    base_url="https://api.regolo.ai/v1"
)

response = client.chat.completions.create(
    model="gpt-oss-120b",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)