# ===============================================
# Sarvam AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.sarvam.ai/api-pricing
# ===============================================

curl https://api.sarvam.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_SARVAM_AI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sarvam-105b",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'