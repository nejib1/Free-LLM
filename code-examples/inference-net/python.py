# ===============================================
# Inference.net - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://inference.net/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_INFERENCE_NET_KEY",
    base_url="https://api.inference.net/v1"
)

response = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-R1",
    messages=[
        {"role": "user", "content": "What is decentralized AI inference?"}
    ]
)

print(response.choices[0].message.content)