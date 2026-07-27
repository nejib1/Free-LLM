# ===============================================
# llamafile - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/Mozilla-Ocho/llamafile
# ===============================================

curl http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer llamafile" \
  -d '{
    "model": "llava-v1.5-7b",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
