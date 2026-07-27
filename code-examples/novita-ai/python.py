# ===============================================
# Novita AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://novita.ai/
# ===============================================

from openai import OpenAI

# Get your API key from https://novita.ai/
client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.novita.ai/openai/v1",
)

response = client.chat.completions.create(
    model="meta-llama/llama-3.1-8b-instruct",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
