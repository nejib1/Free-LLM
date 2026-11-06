# ===============================================
# Grokified - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://grokified.com
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_GROKIFIED_KEY",
    base_url="https://api.grokified.com/v1"
)

response = client.chat.completions.create(
    model="grok-4.7",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)