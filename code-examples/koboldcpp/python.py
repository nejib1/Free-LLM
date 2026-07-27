# ===============================================
# KoboldCpp - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/LostRuins/koboldcpp
# ===============================================

from openai import OpenAI

# Get your API key from https://github.com/LostRuins/koboldcpp
client = OpenAI(
    api_key="koboldcpp",
    base_url="http://localhost:5001/v1",
)

response = client.chat.completions.create(
    model="Llama-3-8B-Instruct.Q4_K_M.gguf",
    messages=[
        {"role": "user", "content": "What makes your inference platform unique?"}
    ],
)

print(response.choices[0].message.content)
