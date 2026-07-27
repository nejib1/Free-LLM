# ===============================================
# DeepInfra - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://deepinfra.com/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_DEEPINFRA_KEY",
    base_url="https://api.deepinfra.com/v1/openai"
)

response = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-V3",
    messages=[
        {"role": "user", "content": "Explain the MoE architecture"}
    ]
)

print(response.choices[0].message.content)