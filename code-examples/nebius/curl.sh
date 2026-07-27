# ===============================================
# Nebius (Token Factory) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://tokenfactory.nebius.com/
# ===============================================

curl https://api.tokenfactory.nebius.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_NEBIUS_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta-llama/Meta-Llama-3.1-70B-Instruct",
    "messages": [
      {
        "role": "user",
        "content": "Explain the benefits of Nebius Token Factory"
      }
    ]
  }'