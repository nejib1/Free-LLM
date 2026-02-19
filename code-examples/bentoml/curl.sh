# ===============================================
# BentoML - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.bentoml.com/
# ===============================================

# Serve locally first: bentoml serve service:LLMService
curl http://localhost:3000/generate \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Explain BentoML serving"
  }'