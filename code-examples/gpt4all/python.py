# ===============================================
# GPT4All - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://gpt4all.io/
# ===============================================

from openai import OpenAI

# Get your API key from https://gpt4all.io/
client = OpenAI(
    api_key="gpt4all",
    base_url="http://localhost:4891/v1",
)

response = client.chat.completions.create(
    model="Phi-3 Mini Instruct",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
