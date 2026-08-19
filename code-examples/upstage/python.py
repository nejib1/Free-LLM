# ===============================================
# Upstage - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.upstage.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_UPSTAGE_KEY",
    base_url="https://api.upstage.ai/v1/solar"
)

response = client.chat.completions.create(
    model="solar-pro",
    messages=[
        {"role": "user", "content": "What is document understanding?"}
    ]
)

print(response.choices[0].message.content)