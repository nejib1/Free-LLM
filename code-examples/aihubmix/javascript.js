// ===============================================
// AIHubMix (free models) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://aihubmix.com
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_AIHUBMIX_KEY',
  baseURL: 'https://aihubmix.com/v1'
});

const response = await client.chat.completions.create({
  model: 'coding-glm-5.3-free',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);