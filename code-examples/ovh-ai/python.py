# ===============================================
# OVH AI Endpoints - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://endpoints.ai.cloud.ovh.net/
# ===============================================

import os
from openai import OpenAI

# Set your API key
# export OVH_AI_ENDPOINTS_ACCESS_TOKEN=<your-access-token>

client = OpenAI(
    base_url="https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
    api_key=os.getenv("OVH_AI_ENDPOINTS_ACCESS_TOKEN", "empty-if-anonymous")
)

response = client.chat.completions.create(
    model="{{model}}",
    messages=[
        {"role": "user", "content": "Hello!"}
    ],
    temperature=0,
    max_tokens=1024
)

print(response.choices[0].message.content)