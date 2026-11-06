# ===============================================
# Vercel AI Gateway - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://vercel.com/ai-gateway
# ===============================================

curl https://ai-gateway.vercel.sh/v1/chat/completions \
  -H "Authorization: Bearer YOUR_AI_GATEWAY_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "nvidia/nemotron-3.5-lightning-free",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'