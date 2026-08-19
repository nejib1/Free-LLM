// ===============================================
// Lepton AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.lepton.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_LEPTON_KEY',
  baseURL: 'https://api.lepton.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'llama3-1-70b',
  messages: [
    { role: 'user', content: 'Explain serverless AI inference' }
  ]
});

console.log(response.choices[0].message.content);