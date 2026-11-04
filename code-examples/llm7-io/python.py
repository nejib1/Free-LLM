# ===============================================
# LLM7.io - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://llm7.io
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_LLM7_TOKEN_OR_unused",
    base_url="https://api.llm7.io/v1"
)

response = client.chat.completions.create(
    model="nemotron-3-nano:30b",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)