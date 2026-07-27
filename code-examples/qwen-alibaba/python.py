# ===============================================
# Qwen (Alibaba) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://bailian.console.alibabacloud.com/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_DASHSCOPE_KEY",
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
)

response = client.chat.completions.create(
    model="qwen-max",
    messages=[
        {"role": "user", "content": "Explain the Qwen model architecture"}
    ]
)

print(response.choices[0].message.content)