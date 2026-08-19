# ===============================================
# AI21 Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.ai21.com/
# ===============================================

import ai21

client = ai21.AI21Client(api_key="YOUR_API_KEY")

response = client.chat.completions.create(
    model="jamba-large",
    messages=[
        {"role": "user", "content": "Explain the Mamba architecture"}
    ]
)

print(response.choices[0].message.content)