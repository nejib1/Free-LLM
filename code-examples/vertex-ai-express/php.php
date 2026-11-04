// ===============================================
// Google Vertex AI express mode (Gemini Enterprise Agent Platform) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview
// ===============================================

<?php

$apiKey = 'YOUR_API_KEY';
$endpoint = 'https://aiplatform.googleapis.com/v1/publishers/google/models/MODEL_ID:generateContent';

$data = [
    'model' => 'model-name-here',
    'messages' => [
        ['role' => 'user', 'content' => 'Hello, how are you?']
    ]
];

$ch = curl_init($endpoint . '/chat/completions');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
]);

$response = curl_exec($ch);
curl_close($ch);

$result = json_decode($response, true);
echo $result['choices'][0]['message']['content'];
