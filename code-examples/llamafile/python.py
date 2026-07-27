# ===============================================
# llamafile - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/Mozilla-Ocho/llamafile
# ===============================================

from openai import OpenAI

# Run: ./model.llamafile --server
client = OpenAI(
    api_key="llamafile",
    base_url="http://localhost:8080/v1"
)

response = client.chat.completions.create(
    model="local",
    messages=[
        {"role": "user", "content": "What is llamafile?"}
    ]
)

print(response.choices[0].message.content)