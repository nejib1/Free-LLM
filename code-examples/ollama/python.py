# ===============================================
# Ollama - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://ollama.com/
# ===============================================

from openai import OpenAI

# Ollama runs a local OpenAI-compatible server
client = OpenAI(
    api_key="ollama",
    base_url="http://localhost:11434/v1"
)

response = client.chat.completions.create(
    model="llama3.2:3b",
    messages=[
        {"role": "user", "content": "Hello, how are you?"}
    ]
)

print(response.choices[0].message.content)