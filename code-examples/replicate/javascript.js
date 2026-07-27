// ===============================================
// Replicate - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://replicate.com/
// ===============================================

import Replicate from 'replicate';

const replicate = new Replicate({
  auth: 'YOUR_REPLICATE_TOKEN'
});

const output = await replicate.run(
  'meta/llama-3-70b-instruct',
  {
    input: {
      prompt: 'Write a short poem about AI',
      max_tokens: 512
    }
  }
);

console.log(output.join(''));