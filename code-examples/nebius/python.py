# ===============================================
# Nebius (Token Factory) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://tokenfactory.nebius.com/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_NEBIUS_KEY",
    base_url="https://api.tokenfactory.nebius.com/v1"
)

response = client.chat.completions.create(
    model="meta-llama/Meta-Llama-3.1-70B-Instruct",
    messages=[
        {"role": "user", "content": "Explain the benefits of Nebius Token Factory"}
    ]
)

print(response.choices[0].message.content)