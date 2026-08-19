// ===============================================
// LLM7.io - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://llm7.io
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_LLM7_TOKEN_OR_unused',
  baseURL: 'https://api.llm7.io/v1'
});

const response = await client.chat.completions.create({
  model: 'deepseek-r1',
  messages: [{ role: 'user', content: 'Hello!' }]
});

console.log(response.choices[0].message.content);