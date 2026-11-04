# ===============================================
# IteraCompute - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://iteracompute.com/free/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_ITERACOMPUTE_KEY",
    base_url="https://api.iteracompute.com/v1"
)

response = client.chat.completions.create(
    model="qwen/qwen3.8-27b",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)