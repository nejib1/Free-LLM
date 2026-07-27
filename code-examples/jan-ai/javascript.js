// ===============================================
// Jan.ai - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://jan.ai/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://jan.ai/
const client = new OpenAI({
  apiKey: 'jan',
  baseURL: 'http://127.0.0.1:1337/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'llama3.2:3b-gguf-q4-km',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
