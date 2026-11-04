# ===============================================
# iFlytek Spark Lite - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.xfyun.cn/doc/spark/HTTP调用文档.html
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_IFLYTEK_SPARK_KEY",
    base_url="https://spark-api-open.xf-yun.com/v1"
)

response = client.chat.completions.create(
    model="lite",
    messages=[
        {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
)

print(response.choices[0].message.content)