# ===============================================
# HPC-AI Model APIs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.hpc-ai.com/model-apis
# ===============================================

curl https://api.hpc-ai.com/inference/v1/chat/completions \
  -H "Authorization: Bearer YOUR_HPC_AI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "moonshotai/kimi-k2.7-code",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'