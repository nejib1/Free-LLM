# ===============================================
# Jan.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://jan.ai/
# ===============================================

from openai import OpenAI

# Get your API key from https://jan.ai/
client = OpenAI(
    api_key="jan",
    base_url="http://127.0.0.1:1337/v1",
)

response = client.chat.completions.create(
    model="llama3.2:3b-gguf-q4-km",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
