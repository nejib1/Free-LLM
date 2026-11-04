# ===============================================
# Zhipu BigModel (China) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://docs.bigmodel.cn/cn/guide/start/model-overview
# ===============================================

curl https://open.bigmodel.cn/api/paas/v4/chat/completions \
  -H "Authorization: Bearer YOUR_ZHIPU_BIGMODEL_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "glm-4.7-flash",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'