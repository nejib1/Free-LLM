// ===============================================
// iFlytek Spark Lite - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.xfyun.cn/doc/spark/HTTP调用文档.html
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_IFLYTEK_SPARK_KEY',
  baseURL: 'https://spark-api-open.xf-yun.com/v1'
});

const response = await client.chat.completions.create({
  model: 'lite',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);