// ===============================================
// Together.AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://together.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_TOGETHER_KEY',
  baseURL: 'https://api.together.xyz/v1'
});

const response = await client.chat.completions.create({
  model: '{{model}}',
  messages: [
    { role: 'user', content: 'Explain the Apriel model architecture' }
  ]
});

console.log(response.choices[0].message.content);