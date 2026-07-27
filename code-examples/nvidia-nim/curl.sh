# ===============================================
# NVIDIA NIM - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://build.nvidia.com/explore/discover
# ===============================================

curl https://integrate.api.nvidia.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer nvapi-YOUR_API_KEY" \
  -d '{
    "model": "meta/llama-3.1-70b-instruct",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
