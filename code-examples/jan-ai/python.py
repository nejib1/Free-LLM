# ===============================================
# Jan.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://jan.ai/
# ===============================================

from openai import OpenAI

# Jan.ai local server (enable in Settings)
client = OpenAI(
    api_key="jan",
    base_url="http://localhost:1337/v1"
)

response = client.chat.completions.create(
    model="gpt-oss-20b",
    messages=[
        {"role": "user", "content": "Write a haiku about local AI"}
    ]
)

print(response.choices[0].message.content)