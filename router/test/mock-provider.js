// A fake OpenAI-compatible provider whose behaviour depends on the model id.
import http from 'node:http';

function sse(res, chunks, { usage } = {}) {
  res.writeHead(200, { 'content-type': 'text/event-stream' });
  for (const c of chunks) res.write(`data: ${JSON.stringify(c)}\n\n`);
  if (usage) res.write(`data: ${JSON.stringify({ choices: [], usage })}\n\n`);
  res.write('data: [DONE]\n\n');
  res.end();
}
const delta = (d, finish = null) => ({ id: 'x', object: 'chat.completion.chunk', choices: [{ index: 0, delta: d, finish_reason: finish }] });

export function startMock(catalog) {
  const calls = [];
  const server = http.createServer(async (req, res) => {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const body = chunks.length ? JSON.parse(Buffer.concat(chunks).toString()) : {};
    const url = req.url;
    if (url === '/catalog.json') {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(catalog()));
      return;
    }
    calls.push({ url, auth: req.headers.authorization, body });
    const auth = req.headers.authorization;
    if (url.endsWith('/models')) {
      res.writeHead(auth === 'Bearer good' ? 200 : 401, { 'content-type': 'application/json' });
      res.end(JSON.stringify(auth === 'Bearer good' ? { data: [] } : { error: { message: 'Invalid API key' } }));
      return;
    }
    if (auth !== 'Bearer good') {
      res.writeHead(401, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ error: { message: 'Invalid API key provided' } }));
      return;
    }
    if (url.endsWith('/embeddings')) {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ object: 'list', data: [{ object: 'embedding', index: 0, embedding: [0.1, 0.2, 0.3] }], usage: { prompt_tokens: 3, total_tokens: 3 } }));
      return;
    }
    const m = body.model;
    const usage = { prompt_tokens: 11, completion_tokens: 7, total_tokens: 18 };
    switch (m) {
      case 'rl-model':
        res.writeHead(429, { 'content-type': 'application/json', 'retry-after': '30' });
        res.end(JSON.stringify({ error: { message: 'Rate limit reached for requests per minute' } }));
        return;
      case 'quota-model':
        res.writeHead(429, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ error: { message: 'You exceeded your daily quota (RPD)' } }));
        return;
      case 'err-model':
        res.writeHead(500, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ error: { message: 'internal' } }));
        return;
      case 'gone-model':
        res.writeHead(404, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ error: { message: 'The model gone-model does not exist' } }));
        return;
      case 'empty-model':
        return sse(res, [delta({ role: 'assistant' }), delta({}, 'stop')]);
      case 'strict-model':
        if (body.stream_options) {
          res.writeHead(400, { 'content-type': 'application/json' });
          res.end(JSON.stringify({ error: { message: 'Unrecognized request argument supplied: stream_options' } }));
          return;
        }
        return sse(res, [delta({ content: 'strict ok' }), delta({}, 'stop')]);
      case 'json-model': // ignores stream:true and answers JSON
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ choices: [{ index: 0, message: { role: 'assistant', content: 'json answer' }, finish_reason: 'stop' }], usage }));
        return;
      case 'think-model':
        return sse(res, [delta({ content: '<thi' }), delta({ content: 'nk>secret plan</th' }), delta({ content: 'ink>\nVisible answer' }), delta({}, 'stop')], { usage });
      case 'tool-model':
        return sse(res, [
          delta({ tool_calls: [{ index: 0, id: 'call_abc', type: 'function', function: { name: 'get_weather', arguments: '' } }] }),
          delta({ tool_calls: [{ index: 0, function: { arguments: '{"city":' } }] }),
          delta({ tool_calls: [{ index: 0, function: { arguments: '"Paris"}' } }] }),
          delta({}, 'tool_calls'),
        ], { usage });
      case 'texttool-model':
        return sse(res, [delta({ content: '<tool_call>{"name": "get_weather", ' }), delta({ content: '"arguments": {"city": "Tunis"}}</tool_call>' }), delta({}, 'stop')]);
      case 'agent-model': { // a tiny "agent": asks for a Bash call, then reports the result
        const last = body.messages.at(-1);
        if (last.role === 'tool') return sse(res, [delta({ content: `The command printed: ${String(last.content).trim()}` }), delta({}, 'stop')], { usage });
        const bash = (body.tools || []).find((t) => t.function.name === 'Bash');
        if (!bash) return sse(res, [delta({ content: 'no Bash tool offered' }), delta({}, 'stop')]);
        return sse(res, [delta({ tool_calls: [{ index: 0, id: 'call_agent1', type: 'function', function: { name: 'Bash', arguments: JSON.stringify({ command: 'echo hello-from-tool', description: 'Print a test string' }) } }] }), delta({}, 'tool_calls')], { usage });
      }
      case 'slow-model':
        await new Promise((r) => setTimeout(r, 3000));
        return sse(res, [delta({ content: 'late' }), delta({}, 'stop')]);
      default: // ok-model and anything else
        if (!body.stream) {
          res.writeHead(200, { 'content-type': 'application/json' });
          res.end(JSON.stringify({ choices: [{ index: 0, message: { role: 'assistant', content: `Hello from ${m}` }, finish_reason: 'stop' }], usage }));
          return;
        }
        return sse(res, [delta({ role: 'assistant', content: '' }), delta({ content: 'Hello ' }), delta({ content: `from ${m}` }), delta({}, 'stop')], { usage });
    }
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port, calls })));
}
