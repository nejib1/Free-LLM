# ===============================================
# Qwen / Alibaba - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://bailian.console.alibabacloud.com/
# ===============================================

curl https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_DASHSCOPE_API_KEY" \
  -d '{
    "model": "qwen-plus",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
