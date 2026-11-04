# ===============================================
# VLM Run Gateway - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.vlm.run/gateway/rate-limits
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_VLM_RUN_KEY",
    base_url="https://gateway.vlm.run/v1/openai"
)

response = client.chat.completions.create(
    model="qwen/qwen3.8-27b",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)