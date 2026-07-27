// ===============================================
// Jan.ai - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://jan.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'jan',
  baseURL: 'http://localhost:1337/v1'
});

const response = await client.chat.completions.create({
  model: 'gemma-2-9b-it',
  messages: [
    { role: 'user', content: 'Write a haiku about local AI' }
  ]
});

console.log(response.choices[0].message.content);