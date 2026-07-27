# ===============================================
# Text Generation WebUI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/oobabooga/text-generation-webui
# ===============================================

from openai import OpenAI

# Enable OpenAI extension in text-generation-webui
client = OpenAI(
    api_key="textgen",
    base_url="http://localhost:5000/v1"
)

response = client.chat.completions.create(
    model="local-model",
    messages=[
        {"role": "user", "content": "Tell me about text generation"}
    ]
)

print(response.choices[0].message.content)