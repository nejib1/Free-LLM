# ===============================================
# Google AI Studio - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://aistudio.google.com/
# ===============================================

import requests
import os

# Get your API key from https://aistudio.google.com/
api_key = "YOUR_API_KEY"
url = f"https://generativelanguage.googleapis.com/v1beta/models/{{model}}:generateContent?key={api_key}"

headers = {
    "Content-Type": "application/json"
}

data = {
    "contents": [{
        "parts": [{"text": "Explain how AI works"}]
    }]
}

response = requests.post(url, headers=headers, json=data)
print(response.json())