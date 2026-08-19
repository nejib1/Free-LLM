# ===============================================
# Nous Portal - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://portal.nousresearch.com
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://inference-api.nousresearch.com/v1"
)

response = client.chat.completions.create(
    model="model-name-here",
    messages=[
        {"role": "user", "content": "Hello, how are you?"}
    ]
)

print(response.choices[0].message.content)