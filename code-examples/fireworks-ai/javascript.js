// ===============================================
// Fireworks AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://fireworks.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_FIREWORKS_KEY',
  baseURL: 'https://api.fireworks.ai/inference/v1'
});

const response = await client.chat.completions.create({
  model: 'accounts/fireworks/models/llama-v3p3-70b-instruct',
  messages: [
    { role: 'user', content: 'Write a Python function to sort a list' }
  ]
});

console.log(response.choices[0].message.content);