// ===============================================
// LM Studio - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://lmstudio.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'lm-studio',
  baseURL: 'http://localhost:1234/v1'
});

const response = await client.chat.completions.create({
  model: 'local-model',
  messages: [
    { role: 'user', content: 'What can you help me with?' }
  ]
});

console.log(response.choices[0].message.content);