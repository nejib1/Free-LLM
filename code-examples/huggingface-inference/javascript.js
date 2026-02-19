// ===============================================
// Hugging Face Inference - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://huggingface.co/inference-api/serverless
// ===============================================

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/{{model}}",
		{
			headers: { Authorization: "Bearer YOUR_HF_TOKEN" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": "Can you please let us know more details about your"}).then((response) => {
	console.log(JSON.stringify(response));
});