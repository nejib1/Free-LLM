# ===============================================
# Mixlayer - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.mixlayer.com/credits-and-limits
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_MIXLAYER_KEY",
    base_url="https://models.mixlayer.ai/v1"
)

response = client.chat.completions.create(
    model="qwen/qwen3.5-4b-free",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)