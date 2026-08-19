# ===============================================
# Hugging Face Inference - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://huggingface.co/inference-api/serverless
# ===============================================

from huggingface_hub import InferenceClient

client = InferenceClient(api_key="YOUR_HF_TOKEN")

completion = client.chat.completions.create(
    model="meta-llama/Llama-3.2-11B-Vision-Instruct",
    messages=[
        {"role": "user", "content": "Explain the benefits of open inference routing"}
    ]
)

print(completion.choices[0].message.content)