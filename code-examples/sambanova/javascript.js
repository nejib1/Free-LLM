// ===============================================
// SambaNova - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://cloud.sambanova.ai/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://cloud.sambanova.ai/
const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.sambanova.ai/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'Meta-Llama-3.3-70B-Instruct',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
