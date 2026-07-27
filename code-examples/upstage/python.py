# ===============================================
# Upstage - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.upstage.ai/
# ===============================================

from openai import OpenAI

# Get your API key from https://console.upstage.ai/
client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.upstage.ai/v1",
)

response = client.chat.completions.create(
    model="solar-mini",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
