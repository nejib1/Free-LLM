// ===============================================
// AI21 Labs - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://docs.ai21.com/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://docs.ai21.com/
const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.ai21.com/studio/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'jamba-large',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
