// ===============================================
// Zhipu BigModel (China) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://docs.bigmodel.cn/cn/guide/start/model-overview
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_ZHIPU_BIGMODEL_KEY',
  baseURL: 'https://open.bigmodel.cn/api/paas/v4'
});

const response = await client.chat.completions.create({
  model: 'glm-4.7-flash',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);