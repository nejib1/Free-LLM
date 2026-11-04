# ===============================================
# Sail Research - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.sailresearch.com/pricing
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_SAIL_RESEARCH_KEY",
    base_url="https://api.sailresearch.com/v1"
)

response = client.chat.completions.create(
    model="moonshotai/Kimi-K3",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)