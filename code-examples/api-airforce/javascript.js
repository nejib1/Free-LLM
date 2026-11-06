// ===============================================
// Api.Airforce - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://api.airforce/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_AIRFORCE_KEY',
  baseURL: 'https://api.airforce/v1'
});

const response = await client.chat.completions.create({
  model: 'gpt-oss-20b',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);