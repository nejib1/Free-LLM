# ===============================================
# Mistral (La Plateforme) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://console.mistral.ai/
# ===============================================

curl https://api.mistral.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_MISTRAL_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "{{model}}",
    "messages": [
      {
        "role": "user",
        "content": "Explain the Mixture of Experts architecture"
      }
    ]
  }'