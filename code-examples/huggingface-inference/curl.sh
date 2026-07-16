# ===============================================
# Hugging Face Inference - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://huggingface.co/inference-api/serverless
# ===============================================

curl https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3.1-8B-Instruct \
	-X POST \
	-d '{"inputs": "Can you please let us know more details about your"}' \
	-H 'Content-Type: application/json' \
	-H 'Authorization: Bearer YOUR_HF_TOKEN'