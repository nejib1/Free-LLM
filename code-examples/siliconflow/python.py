# ===============================================
# SiliconFlow - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://siliconflow.com/pricing
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_SILICONFLOW_KEY",
    base_url="https://api.siliconflow.com/v1"
)

response = client.chat.completions.create(
    model="model-name",  # check cloud.siliconflow.cn/models for current free model IDs
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)