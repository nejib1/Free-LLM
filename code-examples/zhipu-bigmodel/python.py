# ===============================================
# Zhipu BigModel (China) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.bigmodel.cn/cn/guide/start/model-overview
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_ZHIPU_BIGMODEL_KEY",
    base_url="https://open.bigmodel.cn/api/paas/v4"
)

response = client.chat.completions.create(
    model="glm-4.7-flash",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)