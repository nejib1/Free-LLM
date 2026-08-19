# ===============================================
# Nscale - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.nscale.com/product/inference
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_NSCALE_KEY",
    base_url="https://inference.api.nscale.com/v1"
)

response = client.chat.completions.create(
    model="model-name",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)