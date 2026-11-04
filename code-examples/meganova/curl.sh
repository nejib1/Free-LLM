# ===============================================
# MegaNova AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.meganova.ai/tiers
# ===============================================

curl https://api.meganova.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_MEGANOVA_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meganova-ai/manta-pro-1.0",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'