// ===============================================
// Novita AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://novita.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_NOVITA_KEY',
  baseURL: 'https://api.novita.ai/v3/openai'
});

const response = await client.chat.completions.create({
  model: 'meta-llama/llama-3.1-70b-instruct',
  messages: [
    { role: 'user', content: 'What are open source LLMs?' }
  ]
});

console.log(response.choices[0].message.content);