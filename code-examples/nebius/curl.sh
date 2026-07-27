# ===============================================
# Nebius (Token Factory) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://tokenfactory.nebius.com/
# ===============================================

curl https://api.tokenfactory.nebius.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "deepseek-ai/DeepSeek-R1-0528",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
