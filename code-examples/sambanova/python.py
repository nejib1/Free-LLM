# ===============================================
# SambaNova Cloud - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://cloud.sambanova.ai/
# ===============================================

import os
import openai

client = openai.OpenAI(
    api_key="YOUR_SAMBANOVA_API_KEY",
    base_url="https://api.sambanova.ai/v1",
)

response = client.chat.completions.create(
    model="Meta-Llama-3.3-70B-Instruct",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing in one sentence."}
    ],
    temperature=0.1,
    top_p=0.1
)

print(response.choices[0].message.content)