# ===============================================
# Cerebrium - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.cerebrium.ai/
# ===============================================

# Install: pip install cerebrium
from cerebrium import get_secret

# Cerebrium uses Python-native deployments
# main.py (deployed to Cerebrium)
from vllm import LLM, SamplingParams

llm = LLM(model="meta-llama/Llama-3.1-8B-Instruct")

def predict(prompt: str):
    params = SamplingParams(temperature=0.7, max_tokens=512)
    output = llm.generate([prompt], params)
    return {"response": output[0].outputs[0].text}

# Deploy: cerebrium deploy my-llm