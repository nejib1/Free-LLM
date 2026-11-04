# ===============================================
# Inception Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.inceptionlabs.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_INCEPTION_KEY",
    base_url="https://api.inceptionlabs.ai/v1"
)

response = client.chat.completions.create(
    model="mercury-3",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)