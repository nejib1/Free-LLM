// ===============================================
// SambaNova Cloud - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://cloud.sambanova.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_SAMBANOVA_API_KEY',
  baseURL: 'https://api.sambanova.ai/v1',
});

async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Explain quantum computing in one sentence.' }],
    model: 'Meta-Llama-3.1-405B-Instruct',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();