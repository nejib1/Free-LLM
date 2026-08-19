# ===============================================
# Lepton AI - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.lepton.ai/
# ===============================================

curl https://api.lepton.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_LEPTON_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama3-1-70b",
    "messages": [
      {
        "role": "user",
        "content": "Explain serverless AI inference"
      }
    ]
  }'