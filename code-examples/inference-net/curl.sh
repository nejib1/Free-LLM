# ===============================================
# Inference.net - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://inference.net/
# ===============================================

curl https://api.inference.net/v1/chat/completions \
  -H "Authorization: Bearer YOUR_INFERENCE_NET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek-ai/DeepSeek-R1",
    "messages": [
      {
        "role": "user",
        "content": "What is decentralized AI inference?"
      }
    ]
  }'