# ===============================================
# Scaleway - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.scaleway.com/generative-api/models
# ===============================================

from openai import OpenAI

# Get your API key from https://console.scaleway.com/generative-api/models
client = OpenAI(
    api_key="$SCW_SECRET_KEY",
    base_url="https://api.scaleway.ai/v1",
)

response = client.chat.completions.create(
    model="llama-3.3-70b-instruct",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
