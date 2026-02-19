# ===============================================
# Cloudflare Workers AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://dash.cloudflare.com/
# ===============================================

import requests

ACCOUNT_ID = "YOUR_ACCOUNT_ID"
API_TOKEN = "YOUR_API_TOKEN"

response = requests.post(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/meta/llama-3.1-8b-instruct",
    headers={"Authorization": f"Bearer {API_TOKEN}"},
    json={
        "messages": [
            {"role": "user", "content": "What is Workers AI?"}
        ]
    }
)

print(response.json()["result"]["response"])