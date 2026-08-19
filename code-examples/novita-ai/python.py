# ===============================================
# Novita AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://novita.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_NOVITA_KEY",
    base_url="https://api.novita.ai/v3/openai"
)

response = client.chat.completions.create(
    model="meta-llama/llama-3.1-8b-instruct",
    messages=[
        {"role": "user", "content": "What are open source LLMs?"}
    ]
)

print(response.choices[0].message.content)