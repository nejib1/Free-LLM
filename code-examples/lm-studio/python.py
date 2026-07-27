# ===============================================
# LM Studio - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://lmstudio.ai/
# ===============================================

from openai import OpenAI

# LM Studio runs a local OpenAI-compatible server on port 1234
client = OpenAI(
    api_key="lm-studio",
    base_url="http://localhost:1234/v1"
)

response = client.chat.completions.create(
    model="local-model",
    messages=[
        {"role": "user", "content": "What can you help me with?"}
    ]
)

print(response.choices[0].message.content)