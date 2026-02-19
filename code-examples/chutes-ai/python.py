# ===============================================
# Chutes.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://chutes.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_CHUTES_KEY",
    base_url="https://api.chutes.ai/v1"
)

response = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-R1",
    messages=[
        {"role": "user", "content": "Solve: what is 15! / 13!?"}
    ]
)

print(response.choices[0].message.content)