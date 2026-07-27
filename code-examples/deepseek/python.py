# ===============================================
# DeepSeek - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://platform.deepseek.com/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_DEEPSEEK_KEY",
    base_url="https://api.deepseek.com/v1"
)

# Use DeepSeek-V3 for general tasks
response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "user", "content": "Write a Python function to detect palindromes"}
    ]
)

print(response.choices[0].message.content)

# Use DeepSeek-R1 for reasoning tasks
reasoning = client.chat.completions.create(
    model="deepseek-reasoner",
    messages=[
        {"role": "user", "content": "Prove that sqrt(2) is irrational"}
    ]
)

print(reasoning.choices[0].message.content)