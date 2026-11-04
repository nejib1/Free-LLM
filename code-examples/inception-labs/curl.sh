# ===============================================
# Inception Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.inceptionlabs.ai/
# ===============================================

curl https://api.inceptionlabs.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_INCEPTION_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "mercury-3",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'