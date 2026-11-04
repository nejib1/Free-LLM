# ===============================================
# Api.Airforce - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://api.airforce/
# ===============================================

curl https://api.airforce/v1/chat/completions \
  -H "Authorization: Bearer YOUR_AIRFORCE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-oss-20b",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'