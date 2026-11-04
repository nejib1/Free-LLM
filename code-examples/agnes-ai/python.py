# ===============================================
# Agnes AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://agnes-ai.com
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_AGNES_AI_KEY",
    base_url="https://apihub.agnes-ai.com/v1"
)

response = client.chat.completions.create(
    model="agnes-3.0-flash",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)