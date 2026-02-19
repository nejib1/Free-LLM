# ===============================================
# Venice.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://venice.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_VENICE_KEY",
    base_url="https://api.venice.ai/api/v1"
)

response = client.chat.completions.create(
    model="{{model}}",
    messages=[
        {"role": "user", "content": "What is privacy-first AI?"}
    ]
)

print(response.choices[0].message.content)