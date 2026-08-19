# ===============================================
# DeepInfra - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://deepinfra.com/
# ===============================================

curl https://api.deepinfra.com/v1/openai/chat/completions \
  -H "Authorization: Bearer YOUR_DEEPINFRA_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta-llama/Meta-Llama-3.1-405B-Instruct",
    "messages": [
      {
        "role": "user",
        "content": "Explain the MoE architecture"
      }
    ]
  }'