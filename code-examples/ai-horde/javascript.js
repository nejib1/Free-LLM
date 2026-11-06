// ===============================================
// AI Horde (OpenAI-compatible front) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://aihorde.net
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_AI_HORDE_KEY',
  baseURL: 'https://oai.aihorde.net/v1'
});

const response = await client.chat.completions.create({
  model: 'koboldcpp/gemma-4-E4B-it',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);