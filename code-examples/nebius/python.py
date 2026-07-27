# ===============================================
# Nebius (Token Factory) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://tokenfactory.nebius.com/
# ===============================================

from openai import OpenAI

# Get your API key from https://tokenfactory.nebius.com/
client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.tokenfactory.nebius.com/v1",
)

response = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-R1-0528",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
