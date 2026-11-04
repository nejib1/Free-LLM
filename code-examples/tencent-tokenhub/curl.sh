# ===============================================
# Tencent Cloud TokenHub - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.tencentcloud.com/act/pro/tokenhub
# ===============================================

curl https://tokenhub-intl.tencentmaas.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_TENCENT_TOKENHUB_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "model-name",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'