# ===============================================
# llama.cpp - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/ggml-org/llama.cpp
# ===============================================

from openai import OpenAI

# llama.cpp server: ./server -m model.gguf
client = OpenAI(
    api_key="llama-cpp",
    base_url="http://localhost:8080/v1"
)

response = client.chat.completions.create(
    model="local",
    messages=[
        {"role": "user", "content": "Explain quantum computing"}
    ]
)

print(response.choices[0].message.content)