# ===============================================
# Sail Research - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.sailresearch.com/pricing
# ===============================================

curl https://api.sailresearch.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_SAIL_RESEARCH_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "moonshotai/Kimi-K3",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'