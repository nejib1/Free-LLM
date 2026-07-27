# ===============================================
# Cerebrium - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.cerebrium.ai/
# ===============================================
# Cerebrium has no shared endpoint -- deploy your own with
# `cerebrium deploy` (see cerebrium.toml in this folder) first,
# then call the URL it prints.

curl https://YOUR_DEPLOYMENT_URL/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_PROJECT_JWT" \
  -d '{
    "model": "meta-llama/Meta-Llama-3.1-8B-Instruct",
    "messages": [
      {"role": "user", "content": "What makes serverless GPU deployment useful?"}
    ]
  }'
