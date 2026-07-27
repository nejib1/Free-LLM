# ===============================================
# LM Studio - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://lmstudio.ai/
# ===============================================

from openai import OpenAI

# Get your API key from https://lmstudio.ai/
client = OpenAI(
    api_key="lm-studio",
    base_url="http://localhost:1234/v1",
)

response = client.chat.completions.create(
    model="llama-3.2-3b-instruct",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
