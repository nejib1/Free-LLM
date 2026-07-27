// ===============================================
// Replicate - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://replicate.com/
// ===============================================
// Replicate uses an async prediction API, not /chat/completions.
// The `replicate` package's .run() call handles the polling for you.

import Replicate from 'replicate';

const replicate = new Replicate({ auth: 'YOUR_API_TOKEN' });

async function main() {
  const output = await replicate.run('meta/meta-llama-3-70b-instruct', {
    input: { prompt: 'What makes model-hosting marketplaces useful?' },
  });

  console.log(output.join(''));
}

main();
