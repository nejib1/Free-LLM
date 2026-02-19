# ===============================================
# Glhf.chat - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://glhf.chat/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_GLHF_KEY",
    base_url="https://glhf.chat/api/openai/v1"
)

response = client.chat.completions.create(
    model="hf:meta-llama/Llama-3.1-70B-Instruct",
    messages=[
        {"role": "user", "content": "Write a haiku about programming"}
    ]
)

print(response.choices[0].message.content)