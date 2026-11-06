# ===============================================
# Hyperbolic - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://app.hyperbolic.xyz/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_HYPERBOLIC_KEY",
    base_url="https://api.hyperbolic.ai/inference/v1"
)

response = client.chat.completions.create(
    model="deepseek-v4-flash-0731",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)