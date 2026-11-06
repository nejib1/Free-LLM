# ===============================================
# GonkaRouter - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://gonkarouter.io
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_GONKAROUTER_KEY",
    base_url="https://api.gonkarouter.io/v1"
)

response = client.chat.completions.create(
    model="zai-org/GLM-5.3-Flash",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)