# ===============================================
# SimpleLLM - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://simplellm.eu/docs/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_SIMPLELLM_KEY",
    base_url="https://api.simplellm.eu/v1"
)

response = client.chat.completions.create(
    model="free-Llama-3.1-8B-Instruct",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)