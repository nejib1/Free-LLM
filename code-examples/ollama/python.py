# ===============================================
# Ollama - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://ollama.com/
# ===============================================

from openai import OpenAI

# Get your API key from https://ollama.com/
client = OpenAI(
    api_key="ollama",
    base_url="http://localhost:11434/v1",
)

response = client.chat.completions.create(
    model="llama3.2",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
