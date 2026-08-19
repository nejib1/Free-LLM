// ===============================================
// Yi AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.01.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_YI_KEY',
  baseURL: 'https://api.01.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'yi-large',
  messages: [
    { role: 'user', content: 'Explain the Yi model architecture' }
  ]
});

console.log(response.choices[0].message.content);