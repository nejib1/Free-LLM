// ===============================================
// llamafile - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://github.com/Mozilla-Ocho/llamafile
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://github.com/Mozilla-Ocho/llamafile
const client = new OpenAI({
  apiKey: 'llamafile',
  baseURL: 'http://localhost:8080/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'llava-v1.5-7b',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
