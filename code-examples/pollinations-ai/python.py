# ===============================================
# Pollinations.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://pollinations.ai
# ===============================================

import requests

# No API key needed for basic use
response = requests.get("https://text.pollinations.ai/Hello!")
print(response.text)