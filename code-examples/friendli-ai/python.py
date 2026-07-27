# ===============================================
# Friendli AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://friendli.ai/
# ===============================================

from openai import OpenAI

# Get your API key from https://friendli.ai/
client = OpenAI(
    api_key="flp_YOUR_API_KEY",
    base_url="https://api.friendli.ai/serverless/v1",
)

response = client.chat.completions.create(
    model="zai-org/GLM-5.2",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
