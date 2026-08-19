// ===============================================
// SiliconFlow - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://siliconflow.com/pricing
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_SILICONFLOW_KEY',
  baseURL: 'https://api.siliconflow.com/v1'
});

// check cloud.siliconflow.cn/models for current free model IDs
const response = await client.chat.completions.create({
  model: 'model-name',
  messages: [{ role: 'user', content: 'Hello!' }]
});

console.log(response.choices[0].message.content);