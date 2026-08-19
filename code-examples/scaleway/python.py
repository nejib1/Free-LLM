# ===============================================
# Scaleway Generative APIs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.scaleway.com/generative-api/models
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_SCALEWAY_KEY",
    base_url="https://api.scaleway.ai/v1"
)

response = client.chat.completions.create(
    model="mistral-large",
    messages=[
        {"role": "user", "content": "What is GDPR compliance?"}
    ]
)

print(response.choices[0].message.content)