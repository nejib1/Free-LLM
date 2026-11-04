// ===============================================
// Tencent Cloud TokenHub - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.tencentcloud.com/act/pro/tokenhub
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_TENCENT_TOKENHUB_KEY',
  baseURL: 'https://tokenhub-intl.tencentmaas.com/v1'
});

const response = await client.chat.completions.create({
  model: 'model-name',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);