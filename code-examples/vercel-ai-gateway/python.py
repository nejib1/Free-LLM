# ===============================================
# Vercel AI Gateway - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://vercel.com/ai-gateway
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_AI_GATEWAY_KEY",
    base_url="https://ai-gateway.vercel.sh/v1"
)

response = client.chat.completions.create(
    model="nvidia/nemotron-3.5-lightning-free",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)