# ===============================================
# Hugging Face Inference - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://huggingface.co/inference-api/serverless
# ===============================================

curl https://router.huggingface.co/v1/chat/completions \
  -H "Authorization: Bearer YOUR_HF_TOKEN" \
  -H "Content-Type: application/json" \
  -d '"'"'{
    "model": "meta-llama/Llama-3.2-11B-Vision-Instruct",
    "messages": [
      {"role": "user", "content": "Explain the benefits of open inference routing"}
    ]
  }'"'"'