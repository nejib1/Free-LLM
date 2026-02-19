# ===============================================
# Together.AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://together.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_TOGETHER_KEY",
    base_url="https://api.together.xyz/v1"
)

response = client.chat.completions.create(
    model="{{model}}",
    messages=[
        {"role": "user", "content": "Explain the Apriel model architecture"}
    ]
)

print(response.choices[0].message.content)