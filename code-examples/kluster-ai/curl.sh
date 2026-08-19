# ===============================================
# Kluster.ai - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://kluster.ai/
# ===============================================

# 1. Upload batch file
curl https://api.kluster.ai/v1/files \
  -H "Authorization: Bearer YOUR_KLUSTER_KEY" \
  -F purpose="batch" \
  -F file="@batch_requests.jsonl"

# 2. Create batch job
curl https://api.kluster.ai/v1/batches \
  -H "Authorization: Bearer YOUR_KLUSTER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input_file_id": "file-abc123",
    "endpoint": "/v1/chat/completions",
    "completion_window": "24h"
  }'