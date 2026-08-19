# ===============================================
# ModelScope - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://modelscope.cn
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_MODELSCOPE_TOKEN",
    base_url="https://api-inference.modelscope.cn/v1"
)

response = client.chat.completions.create(
    model="model-name",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)