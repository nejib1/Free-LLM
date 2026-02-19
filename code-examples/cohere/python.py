# ===============================================
# Cohere - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://cohere.com/
# ===============================================

import cohere

co = cohere.ClientV2(api_key="YOUR_COHERE_KEY")

response = co.chat(
    model="{{model}}",
    messages=[
        {"role": "user", "content": "What is retrieval augmented generation?"}
    ]
)

print(response.message.content[0].text)