// ===============================================
// Qwen (Alibaba) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://bailian.console.alibabacloud.com/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_DASHSCOPE_KEY',
  baseURL: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1'
});

const response = await client.chat.completions.create({
  model: 'qwen-max',
  messages: [
    { role: 'user', content: 'Explain the Qwen model architecture' }
  ]
});

console.log(response.choices[0].message.content);