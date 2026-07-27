// ===============================================
// DeepSeek - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://platform.deepseek.com/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://platform.deepseek.com/
const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.deepseek.com',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'deepseek-chat',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
