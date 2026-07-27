# ===============================================
# DeepInfra - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://deepinfra.com/
# ===============================================

from openai import OpenAI

# Get your API key from https://deepinfra.com/
client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.deepinfra.com/v1/openai",
)

response = client.chat.completions.create(
    model="meta-llama/Meta-Llama-3.1-8B-Instruct",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
