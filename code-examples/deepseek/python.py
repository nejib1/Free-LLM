# ===============================================
# DeepSeek - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://platform.deepseek.com/
# ===============================================

from openai import OpenAI

# Get your API key from https://platform.deepseek.com/
client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.deepseek.com",
)

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
