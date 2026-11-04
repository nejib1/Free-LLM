# ===============================================
# Pollinations.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://pollinations.ai
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_POLLINATIONS_KEY",
    base_url="https://gen.pollinations.ai/v1"
)

response = client.chat.completions.create(
    model="openai/gpt-oss-20b",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)