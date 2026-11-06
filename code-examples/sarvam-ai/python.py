# ===============================================
# Sarvam AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.sarvam.ai/api-pricing
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_SARVAM_AI_KEY",
    base_url="https://api.sarvam.ai/v1"
)

response = client.chat.completions.create(
    model="sarvam-105b",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)