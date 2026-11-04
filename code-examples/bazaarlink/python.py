# ===============================================
# BazaarLink - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://bazaarlink.ai/free
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_BAZAARLINK_KEY",
    base_url="https://api.bazaarlink.ai/v1"
)

response = client.chat.completions.create(
    model="qwen/qwen3.7-flash",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)