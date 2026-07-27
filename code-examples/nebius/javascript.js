// ===============================================
// Nebius (Token Factory) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://tokenfactory.nebius.com/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://tokenfactory.nebius.com/
const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.tokenfactory.nebius.com/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'deepseek-ai/DeepSeek-R1-0528',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
