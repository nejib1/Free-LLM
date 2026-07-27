# ===============================================
# Text Gen WebUI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/oobabooga/text-generation-webui
# ===============================================

from openai import OpenAI

# Get your API key from https://github.com/oobabooga/text-generation-webui
client = OpenAI(
    api_key="text-gen-webui",
    base_url="http://127.0.0.1:5000/v1",
)

response = client.chat.completions.create(
    model="Meta-Llama-3-8B-Instruct",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
