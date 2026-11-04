# ===============================================
# Hyperbolic - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://app.hyperbolic.xyz/
# ===============================================

curl https://api.hyperbolic.ai/inference/v1/chat/completions \
  -H "Authorization: Bearer YOUR_HYPERBOLIC_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek-v4-flash-0731",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'