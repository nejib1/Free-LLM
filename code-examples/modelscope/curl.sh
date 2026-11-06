# ===============================================
# ModelScope - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://modelscope.cn
# ===============================================

curl https://api-inference.modelscope.cn/v1/chat/completions \
  -H "Authorization: Bearer YOUR_MODELSCOPE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "Qwen/Qwen3.8-27B",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'