# ===============================================
# Api.Airforce - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://api.airforce/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_AIRFORCE_KEY",
    base_url="https://api.airforce/v1"
)

response = client.chat.completions.create(
    model="gpt-oss-20b",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)