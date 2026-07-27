# ===============================================
# Z.AI (GLM) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://z.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_ZAI_KEY",
    base_url="https://api.z.ai/api/paas/v4"
)

response = client.chat.completions.create(
    model="glm-4.5-flash",
    messages=[
        {"role": "user", "content": "What makes the GLM Flash tier fast?"}
    ]
)

print(response.choices[0].message.content)