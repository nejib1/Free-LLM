// ===============================================
// Grok (xAI) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://console.x.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_XAI_API_KEY',
  baseURL: 'https://api.x.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'grok-2-latest',
  messages: [
    { role: 'user', content: 'Explain quantum computing simply' }
  ]
});

console.log(response.choices[0].message.content);