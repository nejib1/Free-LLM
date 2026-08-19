// ===============================================
// Ollama Cloud - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://ollama.com/cloud
// ===============================================

<?php

$apiKey = 'YOUR_API_KEY';
$endpoint = 'https://ollama.com/v1';

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
