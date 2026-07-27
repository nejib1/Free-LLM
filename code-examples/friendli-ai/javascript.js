// ===============================================
// Friendli AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://friendli.ai/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://friendli.ai/
const client = new OpenAI({
  apiKey: 'flp_YOUR_API_KEY',
  baseURL: 'https://api.friendli.ai/serverless/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'zai-org/GLM-5.2',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
