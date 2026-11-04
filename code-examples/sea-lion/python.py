# ===============================================
# SEA-LION API - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.sea-lion.ai/guides/inferencing/api
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_SEA_LION_KEY",
    base_url="https://api.sea-lion.ai/v1"
)

response = client.chat.completions.create(
    model="aisingapore/Qwen-SEA-LION-v4.5-27B-IT",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)