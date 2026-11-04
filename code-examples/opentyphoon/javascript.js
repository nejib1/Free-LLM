// ===============================================
// OpenTyphoon (Typhoon API) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://opentyphoon.ai
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_TYPHOON_KEY',
  baseURL: 'https://api.opentyphoon.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'typhoon-v2.5-30b-a3b-instruct',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);