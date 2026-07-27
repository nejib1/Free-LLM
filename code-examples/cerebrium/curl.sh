# ===============================================
# Cerebrium - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.cerebrium.ai/
# ===============================================

curl https://api.cortex.cerebrium.ai/v4/YOUR_APP/predict \
  -H "Authorization: Bearer YOUR_CEREBRIUM_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Explain serverless GPU computing"
  }'