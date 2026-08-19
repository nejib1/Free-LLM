// ===============================================
// ModelScope - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://modelscope.cn
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_MODELSCOPE_TOKEN',
  baseURL: 'https://api-inference.modelscope.cn/v1'
});

const response = await client.chat.completions.create({
  model: 'model-name',
  messages: [{ role: 'user', content: 'Hello!' }]
});

console.log(response.choices[0].message.content);