// ===============================================
// Novita AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://novita.ai/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://novita.ai/
const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.novita.ai/openai/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'meta-llama/llama-3.1-8b-instruct',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
