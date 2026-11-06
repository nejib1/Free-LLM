# ===============================================
# Hetzner Inference API - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://experiments.hetzner.com/inference
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_HETZNER_API_TOKEN",
    base_url="https://inference.hetzner.com/api/v1"
)

response = client.chat.completions.create(
    model="Qwen3.8-27B",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)