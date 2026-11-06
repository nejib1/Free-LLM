// ===============================================
// Inception Labs - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.inceptionlabs.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_INCEPTION_KEY',
  baseURL: 'https://api.inceptionlabs.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'mercury-3',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);