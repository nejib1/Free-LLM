// ===============================================
// Token Harbor - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://tokenharbor.ai
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_TOKEN_HARBOR_KEY',
  baseURL: 'https://tokenharbor.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'deepseek-v4.1-flash:free',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);