# ===============================================
# Hugging Face Inference - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://huggingface.co/inference-api/serverless
# ===============================================

curl https://router.huggingface.co/v1/chat/completions \
  -H "Authorization: Bearer YOUR_HF_TOKEN" \
  -H "Content-Type: application/json" \
  -d '"'"'{
    "model": "black-forest-labs/FLUX.1-dev",
    "messages": [
      {"role": "user", "content": "Explain the benefits of open inference routing"}
    ]
  }'"'"'