# ===============================================
# Mistral (La Plateforme) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.mistral.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_MISTRAL_KEY",
    base_url="https://api.mistral.ai/v1"
)

response = client.chat.completions.create(
    model="{{model}}",
    messages=[
        {"role": "user", "content": "Explain the Mixture of Experts architecture"}
    ]
)

print(response.choices[0].message.content)