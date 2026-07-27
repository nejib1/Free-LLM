// ===============================================
// GPT4All - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://gpt4all.io/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://gpt4all.io/
const client = new OpenAI({
  apiKey: 'gpt4all',
  baseURL: 'http://localhost:4891/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'Phi-3 Mini Instruct',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
