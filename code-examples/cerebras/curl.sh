# ===============================================
# Cerebras - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://cerebras.ai/inference
# ===============================================

curl https://api.cerebras.ai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_CEREBRAS_API_KEY" \
  -d '{
    "model": "{{model}}",
    "messages": [
      {"role": "user", "content": "Why is fast inference important?"}
    ],
    "temperature": 0.7
  }'