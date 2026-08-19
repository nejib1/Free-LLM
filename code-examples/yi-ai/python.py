# ===============================================
# Yi AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.01.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_YI_KEY",
    base_url="https://api.01.ai/v1"
)

response = client.chat.completions.create(
    model="yi-large",
    messages=[
        {"role": "user", "content": "Explain the Yi model architecture"}
    ]
)

print(response.choices[0].message.content)