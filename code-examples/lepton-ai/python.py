# ===============================================
# Lepton AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.lepton.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_LEPTON_KEY",
    base_url="https://api.lepton.ai/v1"
)

response = client.chat.completions.create(
    model="llama3-1-70b",
    messages=[
        {"role": "user", "content": "Explain serverless AI inference"}
    ]
)

print(response.choices[0].message.content)