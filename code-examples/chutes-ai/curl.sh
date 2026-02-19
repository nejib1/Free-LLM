# ===============================================
# Chutes.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://chutes.ai/
# ===============================================

curl https://api.chutes.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_CHUTES_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek-ai/DeepSeek-R1",
    "messages": [
      {
        "role": "user",
        "content": "Solve: what is 15! / 13!?"
      }
    ]
  }'