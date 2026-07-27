// ===============================================
// Cerebrium - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.cerebrium.ai/
// ===============================================
// Cerebrium has no shared endpoint -- deploy your own with
// `cerebrium deploy` (see cerebrium.toml in this folder) first,
// then call the URL it prints.

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_PROJECT_JWT',
  baseURL: 'https://YOUR_DEPLOYMENT_URL/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
    messages: [{ role: 'user', content: 'What makes serverless GPU deployment useful?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
