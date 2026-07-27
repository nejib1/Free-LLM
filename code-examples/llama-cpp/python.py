# ===============================================
# llama.cpp - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/ggml-org/llama.cpp
# ===============================================

from openai import OpenAI

# Get your API key from https://github.com/ggml-org/llama.cpp
client = OpenAI(
    api_key="no-key",
    base_url="http://localhost:8080/v1",
)

response = client.chat.completions.create(
    model="Meta-Llama-3-8B-Instruct.Q4_K_M.gguf",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
