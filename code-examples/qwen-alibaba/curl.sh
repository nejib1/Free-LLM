# ===============================================
# Qwen (Alibaba) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://bailian.console.alibabacloud.com/
# ===============================================

curl https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
  -H "Authorization: Bearer YOUR_DASHSCOPE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen-max",
    "messages": [
      {
        "role": "user",
        "content": "Explain the Qwen model architecture"
      }
    ]
  }'