# ===============================================
# Hetzner Inference API - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://experiments.hetzner.com/inference
# ===============================================

curl https://inference.hetzner.com/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_HETZNER_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "Qwen3.8-27B",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'