# ===============================================
# LLMTR - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://llmtr.com/en/terms
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_LLMTR_KEY",
    base_url="https://llmtr.com/v1"
)

response = client.chat.completions.create(
    model="nvidia/nemotron-3-ultra-550b-a55b",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)