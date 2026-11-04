# ===============================================
# Arli AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.arliai.com/pricing
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_ARLI_AI_KEY",
    base_url="https://api.arliai.com/v1"
)

response = client.chat.completions.create(
    model="Qwen3.5-27B-Derestricted",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)