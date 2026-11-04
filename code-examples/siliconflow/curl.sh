# ===============================================
# SiliconFlow - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://cloud.siliconflow.cn/models
# ===============================================

curl https://api.siliconflow.cn/v1/chat/completions \
  -H "Authorization: Bearer YOUR_SILICONFLOW_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "THUDM/GLM-Z1-9B-0414",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'