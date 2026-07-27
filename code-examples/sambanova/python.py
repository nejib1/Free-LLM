# ===============================================
# SambaNova - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://cloud.sambanova.ai/
# ===============================================

from openai import OpenAI

# Get your API key from https://cloud.sambanova.ai/
client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.sambanova.ai/v1",
)

response = client.chat.completions.create(
    model="Meta-Llama-3.3-70B-Instruct",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
