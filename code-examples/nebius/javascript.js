// ===============================================
// Nebius (Token Factory) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://tokenfactory.nebius.com/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_NEBIUS_KEY',
  baseURL: 'https://api.tokenfactory.nebius.com/v1'
});

const response = await client.chat.completions.create({
  model: 'meta-llama/Meta-Llama-3.1-70B-Instruct',
  messages: [
    { role: 'user', content: 'Explain the benefits of Nebius Token Factory' }
  ]
});

console.log(response.choices[0].message.content);