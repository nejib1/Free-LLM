# ===============================================
# Routeway - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://routeway.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_ROUTEWAY_KEY",
    base_url="https://api.routeway.ai/v1"
)

response = client.chat.completions.create(
    model="deepseek-v4.1-flash:free",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)