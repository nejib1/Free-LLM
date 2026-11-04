# ===============================================
# Gonka Broker - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://gonkabroker.com
# ===============================================

curl https://proxy.gonkabroker.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_GONKA_BROKER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "zai-org/GLM-5.3-Flash",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'