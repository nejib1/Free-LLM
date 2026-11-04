# ===============================================
# AI Horde (OpenAI-compatible front) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://aihorde.net
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_AI_HORDE_KEY",
    base_url="https://oai.aihorde.net/v1"
)

response = client.chat.completions.create(
    model="koboldcpp/gemma-4-E4B-it",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)