# ===============================================
# LLMTR - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://llmtr.com/en/terms
# ===============================================

curl https://llmtr.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_LLMTR_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "nvidia/nemotron-3-ultra-550b-a55b",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'