# ===============================================
# GPT4All - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://gpt4all.io/
# ===============================================

from openai import OpenAI

# GPT4All local server (enable in Settings > Server)
client = OpenAI(
    api_key="gpt4all",
    base_url="http://localhost:4891/v1"
)

response = client.chat.completions.create(
    model="local-model",
    messages=[
        {"role": "user", "content": "Summarize this document for me"}
    ]
)

print(response.choices[0].message.content)