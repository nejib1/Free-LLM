// ===============================================
// Grokified - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://grokified.com
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_GROKIFIED_KEY',
  baseURL: 'https://api.grokified.com/v1'
});

const response = await client.chat.completions.create({
  model: 'grok-4.7',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);