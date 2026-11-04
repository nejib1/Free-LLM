# ===============================================
# SiliconFlow - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://cloud.siliconflow.cn/models
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_SILICONFLOW_KEY",
    base_url="https://api.siliconflow.cn/v1"
)

response = client.chat.completions.create(
    model="THUDM/GLM-Z1-9B-0414",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)