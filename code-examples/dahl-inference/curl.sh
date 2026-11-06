# ===============================================
# Dahl Inference - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://inference.dahl.global/
# ===============================================

curl https://inference.dahl.global/v1/chat/completions \
  -H "Authorization: Bearer YOUR_DAHL_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "zai-org/GLM-5.3-Flash",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'