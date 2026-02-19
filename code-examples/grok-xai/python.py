# ===============================================
# Grok (xAI) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.x.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_XAI_API_KEY",
    base_url="https://api.x.ai/v1"
)

response = client.chat.completions.create(
    model="grok-2-latest",
    messages=[
        {"role": "user", "content": "Explain quantum computing simply"}
    ]
)

print(response.choices[0].message.content)