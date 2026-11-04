# ===============================================
# AI Horde (OpenAI-compatible front) - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://aihorde.net
# ===============================================

curl https://oai.aihorde.net/v1/chat/completions \
  -H "Authorization: Bearer YOUR_AI_HORDE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "koboldcpp/gemma-4-E4B-it",
    "messages": [
      {"role": "user", "content": "Give me three tips for writing clean code."}
    ]
  }'