# ===============================================
# iFlytek Spark Lite - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.xfyun.cn/doc/spark/HTTP调用文档.html
# ===============================================

curl https://spark-api-open.xf-yun.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_IFLYTEK_SPARK_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "lite",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'