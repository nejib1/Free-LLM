// ===============================================
// Kluster.ai - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://kluster.ai/
// ===============================================

import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'YOUR_KLUSTER_KEY',
  baseURL: 'https://api.kluster.ai/v1'
});

// Upload batch file
const file = await client.files.create({
  file: fs.createReadStream('batch_requests.jsonl'),
  purpose: 'batch'
});

// Create batch job
const batch = await client.batches.create({
  input_file_id: file.id,
  endpoint: '/v1/chat/completions',
  completion_window: '24h'
});

console.log(`Batch ID: ${batch.id}`);