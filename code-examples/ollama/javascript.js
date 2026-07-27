// ===============================================
// Ollama - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://ollama.com/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://ollama.com/
const client = new OpenAI({
  apiKey: 'ollama',
  baseURL: 'http://localhost:11434/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'llama3.2',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
