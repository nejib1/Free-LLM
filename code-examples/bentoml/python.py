# ===============================================
# BentoML - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://www.bentoml.com/
# ===============================================

# service.py - Define your BentoML service
import bentoml

@bentoml.service
class LLMService:
    def __init__(self):
        import vllm
        self.llm = vllm.LLM(model="meta-llama/Llama-3-8B-Instruct")

    @bentoml.api
    def generate(self, prompt: str) -> str:
        from vllm import SamplingParams
        params = SamplingParams(max_tokens=512)
        output = self.llm.generate([prompt], params)
        return output[0].outputs[0].text

# Run: bentoml serve service:LLMService