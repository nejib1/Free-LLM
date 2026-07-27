# ===============================================
# NVIDIA NIM - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://build.nvidia.com/explore/discover
# ===============================================

curl https://integrate.api.nvidia.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_NVIDIA_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta/llama-3.1-70b-instruct",
    "messages": [
      {
        "role": "user",
        "content": "What is NVIDIA NIM?"
      }
    ]
  }'