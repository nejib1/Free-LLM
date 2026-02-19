# ===============================================
# Kluster.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://kluster.ai/
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_KLUSTER_KEY",
    base_url="https://api.kluster.ai/v1"
)

# Upload batch file
batch_file = client.files.create(
    file=open("batch_requests.jsonl", "rb"),
    purpose="batch"
)

# Create batch job
batch = client.batches.create(
    input_file_id=batch_file.id,
    endpoint="/v1/chat/completions",
    completion_window="24h"
)

print(f"Batch ID: {batch.id}")
print(f"Status: {batch.status}")