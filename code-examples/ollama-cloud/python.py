# ===============================================
# Ollama Cloud - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://ollama.com/cloud
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://ollama.com/v1"
)

response = client.chat.completions.create(
    model="model-name-here",
    messages=[
        {"role": "user", "content": "Hello, how are you?"}
    ]
)

print(response.choices[0].message.content)