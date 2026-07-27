# ===============================================
# Qwen / Alibaba - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://bailian.console.alibabacloud.com/
# ===============================================

from openai import OpenAI

# Get your API key from https://bailian.console.alibabacloud.com/
client = OpenAI(
    api_key="YOUR_DASHSCOPE_API_KEY",
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

response = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
