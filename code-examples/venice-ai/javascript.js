// ===============================================
// Venice.ai - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://venice.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_VENICE_KEY',
  baseURL: 'https://api.venice.ai/api/v1'
});

const response = await client.chat.completions.create({
  model: '{{model}}',
  messages: [
    { role: 'user', content: 'What is privacy-first AI?' }
  ]
});

console.log(response.choices[0].message.content);