# ===============================================
# NVIDIA NIM - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://build.nvidia.com/explore/discover
# ===============================================

from openai import OpenAI

# Get your API key from https://build.nvidia.com/explore/discover
client = OpenAI(
    api_key="nvapi-YOUR_API_KEY",
    base_url="https://integrate.api.nvidia.com/v1",
)

response = client.chat.completions.create(
    model="meta/llama-3.1-70b-instruct",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
