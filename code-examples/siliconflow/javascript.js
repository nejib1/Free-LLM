// ===============================================
// SiliconFlow - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://cloud.siliconflow.cn/models
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_SILICONFLOW_KEY',
  baseURL: 'https://api.siliconflow.cn/v1'
});

const response = await client.chat.completions.create({
  model: 'THUDM/GLM-Z1-9B-0414',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);