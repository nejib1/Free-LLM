# ===============================================
# Kilo AI Gateway - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://kilo.ai/gateway
# ===============================================

curl https://ai-gateway.kilo.ai/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KILO_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "nvidia/nemotron-3.5-lightning:free",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'