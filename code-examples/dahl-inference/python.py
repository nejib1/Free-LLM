# ===============================================
# Dahl Inference - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://inference.dahl.global/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_DAHL_KEY",
    base_url="https://inference.dahl.global/v1"
)

response = client.chat.completions.create(
    model="zai-org/GLM-5.3-Flash",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)