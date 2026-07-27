# ===============================================
# Hyperbolic - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://app.hyperbolic.xyz/
# ===============================================

curl https://api.hyperbolic.xyz/v1/chat/completions \
  -H "Authorization: Bearer YOUR_HYPERBOLIC_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek-ai/DeepSeek-V3",
    "messages": [
      {
        "role": "user",
        "content": "What is decentralized AI inference?"
      }
    ]
  }'