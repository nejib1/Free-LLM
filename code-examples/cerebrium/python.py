# ===============================================
# Cerebrium - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.cerebrium.ai/
# ===============================================
# Cerebrium has no shared endpoint -- deploy your own with
# `cerebrium deploy` (see cerebrium.toml in this folder) first,
# then call the URL it prints.

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_PROJECT_JWT",
    base_url="https://YOUR_DEPLOYMENT_URL/v1",
)

response = client.chat.completions.create(
    model="meta-llama/Meta-Llama-3.1-8B-Instruct",
    messages=[
        {"role": "user", "content": "What makes serverless GPU deployment useful?"}
    ],
)

print(response.choices[0].message.content)
