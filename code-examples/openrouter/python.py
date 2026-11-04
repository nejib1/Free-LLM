# ===============================================
# OpenRouter - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://openrouter.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_OPENROUTER_KEY",
    base_url="https://openrouter.ai/api/v1"
)

response = client.chat.completions.create(
    model="google/gemma-4-31b-it:free",
    messages=[
        {"role": "user", "content": "What is OpenRouter?"}
    ]
)

print(response.choices[0].message.content)