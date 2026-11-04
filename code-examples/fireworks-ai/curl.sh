# ===============================================
# Fireworks AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://fireworks.ai/
# ===============================================

curl https://api.fireworks.ai/inference/v1/chat/completions \
  -H "Authorization: Bearer YOUR_FIREWORKS_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "accounts/fireworks/models/nemotron-lightning-3p5-30b-a3b",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'