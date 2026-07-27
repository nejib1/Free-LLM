# ===============================================
# Hyperbolic - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://app.hyperbolic.xyz/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_HYPERBOLIC_KEY",
    base_url="https://api.hyperbolic.xyz/v1"
)

response = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-V3",
    messages=[
        {"role": "user", "content": "What is decentralized AI inference?"}
    ]
)

print(response.choices[0].message.content)