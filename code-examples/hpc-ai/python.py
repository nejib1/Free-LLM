# ===============================================
# HPC-AI Model APIs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.hpc-ai.com/model-apis
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_HPC_AI_KEY",
    base_url="https://api.hpc-ai.com/inference/v1"
)

response = client.chat.completions.create(
    model="moonshotai/kimi-k2.7-code",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)