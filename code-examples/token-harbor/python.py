# ===============================================
# Token Harbor - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://tokenharbor.ai
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_TOKEN_HARBOR_KEY",
    base_url="https://tokenharbor.ai/v1"
)

response = client.chat.completions.create(
    model="deepseek-v4.1-flash:free",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)