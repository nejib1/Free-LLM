# ===============================================
# AI21 Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.ai21.com/
# ===============================================

from openai import OpenAI

# Get your API key from https://docs.ai21.com/
client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.ai21.com/studio/v1",
)

response = client.chat.completions.create(
    model="jamba-large",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
