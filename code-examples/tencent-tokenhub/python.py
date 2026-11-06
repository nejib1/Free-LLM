# ===============================================
# Tencent Cloud TokenHub - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.tencentcloud.com/act/pro/tokenhub
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_TENCENT_TOKENHUB_KEY",
    base_url="https://tokenhub-intl.tencentmaas.com/v1"
)

response = client.chat.completions.create(
    model="model-name",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)