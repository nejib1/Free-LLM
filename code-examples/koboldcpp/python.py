# ===============================================
# KoboldCpp - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/LostRuins/koboldcpp
# ===============================================

import requests

# KoboldCpp uses its own API format
response = requests.post(
    "http://localhost:5001/api/v1/generate",
    json={
        "prompt": "Once upon a time in a magical land,",
        "max_length": 200,
        "temperature": 0.7
    }
)

result = response.json()
print(result['results'][0]['text'])