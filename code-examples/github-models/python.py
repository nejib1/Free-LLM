# ===============================================
# GitHub Models - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/marketplace/models
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_GITHUB_TOKEN",
    base_url="https://models.inference.ai.azure.com"
)

response = client.chat.completions.create(
    model="{{model}}",
    messages=[
        {"role": "user", "content": "Explain how GitHub Models works"}
    ]
)

print(response.choices[0].message.content)