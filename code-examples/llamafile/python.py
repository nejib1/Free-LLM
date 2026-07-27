# ===============================================
# llamafile - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/Mozilla-Ocho/llamafile
# ===============================================

from openai import OpenAI

# Get your API key from https://github.com/Mozilla-Ocho/llamafile
client = OpenAI(
    api_key="llamafile",
    base_url="http://localhost:8080/v1",
)

response = client.chat.completions.create(
    model="llava-v1.5-7b",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
