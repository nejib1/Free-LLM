// ===============================================
// Upstage - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://console.upstage.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_UPSTAGE_KEY',
  baseURL: 'https://api.upstage.ai/v1/solar'
});

const response = await client.chat.completions.create({
  model: 'solar-mini',
  messages: [
    { role: 'user', content: 'What is document understanding?' }
  ]
});

console.log(response.choices[0].message.content);