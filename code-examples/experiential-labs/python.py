# ===============================================
# Experiential Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.experientiallabs.ai/pricing
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_EXPERIENTIAL_LABS_KEY",
    base_url="https://api.experientiallabs.ai/v1"
)

response = client.chat.completions.create(
    model="gpt-6-luna",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)