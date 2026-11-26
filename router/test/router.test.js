// End-to-end tests: real router HTTP server against a mock provider.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { startMock } from './mock-provider.js';

const HOME = fs.mkdtempSync(path.join(os.tmpdir(), 'free-llm-test-'));
process.env.FREE_LLM_HOME = HOME;
process.env.FREE_LLM_NO_ENV_IMPORT = '1';
process.env.HOME = HOME; // setup tests write agent configs here

let mock;
let base;
let KEY;
let server;

const MODELS = ['ok-model', 'rl-model', 'quota-model', 'err-model', 'gone-model', 'empty-model', 'strict-model', 'json-model', 'think-model', 'tool-model', 'texttool-model', 'slow-model'];

function catalog() {
  const prov = (slug, models, extra = {}) => ({
    slug, name: slug.toUpperCase(), type: 'API', base_url: `http://127.0.0.1:${mock.port}/${slug}/v1`, openai_compatible: true,
    openai_base_url: `http://127.0.0.1:${mock.port}/${slug}/v1`, signup_requirement: 'no', category: 'permanent', free_tier: 'truly_free',
    needs: [], anonymous_key: null, models: models.map((id) => ({ id, name: id, key: id, kind: id.startsWith('emb') ? 'embedding' : 'chat', vision: false, context_tokens: 128000 })), ...extra,
  });
  return {
    schema_version: 2, generated_at: new Date().toISOString(),
    providers: [prov('alpha', MODELS), prov('beta', ['ok-model', 'emb-model']), prov('badkey', ['ok-model'])],
  };
}

async function post(p, body, headers = {}) {
  const r = await fetch(base + p, { method: 'POST', headers: { 'content-type': 'application/json', authorization: `Bearer ${KEY}`, ...headers }, body: JSON.stringify(body) });
  const text = await r.text();
  let json = null;
  try { json = JSON.parse(text); } catch { /* sse */ }
  return { status: r.status, headers: r.headers, text, json };
}

function sseEvents(text) {
  return text.split('\n\n').filter(Boolean).map((block) => {
    const ev = block.match(/^event: (.*)$/m)?.[1];
    const data = block.match(/^data: (.*)$/m)?.[1];
    return { event: ev, data: data && data !== '[DONE]' ? JSON.parse(data) : data };
  });
}

async function settings(s) {
  return post('/admin/api/settings', s);
}

before(async () => {
  mock = await startMock(catalog);
  const cfgFile = path.join(HOME, 'config.json');
  fs.writeFileSync(cfgFile, JSON.stringify({
    port: 0, catalog: { url: `http://127.0.0.1:${mock.port}/catalog.json`, refresh_hours: 24 },
    first_token_timeout_s: 2, sticky_minutes: 0, strategy: 'order',
  }));
  const { addKey, saveConfig, loadConfig } = await import('../src/config.js');
  const cfg = loadConfig();
  addKey(cfg, 'alpha', 'good');
  addKey(cfg, 'beta', 'good');
  addKey(cfg, 'badkey', 'wrong');
  saveConfig(cfg);
  const { startServer } = await import('../src/server.js');
  const started = await startServer({ quiet: true, port: 0 });
  server = started.server;
  KEY = started.cfg.api_key;
  base = `http://127.0.0.1:${server.address().port}`;
});

after(() => {
  server?.close();
  mock?.server.close();
  setTimeout(() => process.exit(0), 50).unref();
});

test('marks MiniMax-M3.1-Flash catalog IDs as reasoning models', async () => {
  const { buildIndex } = await import('../src/catalog.js');
  const named = ['MiniMax-M3.1-Flash', 'minimaxai/minimax-m3.1-flash', 'minimax-m3.1-flash:free', 'minimax/minimax-m3.1-flash'];
  const ids = [...named, 'minimax-m3.1-flashlight'];
  const index = buildIndex({ providers: [{ slug: 'test', models: ids.map((id) => ({ id })) }] }, 'test');
  assert.deepEqual(index.models.filter((m) => m.reasoning).map((m) => m.id), named);
});

test('rejects requests without the router key', async () => {
  const r = await fetch(base + '/v1/chat/completions', { method: 'POST', body: '{}' });
  assert.equal(r.status, 401);
});

test('fails over from a rate-limited model to a working one', async () => {
  await settings({ chain: ['alpha/rl-model', 'alpha/err-model', 'beta/ok-model'], strategy: 'order' });
  const r = await post('/v1/chat/completions', { model: 'auto', messages: [{ role: 'user', content: 'hi' }] });
  assert.equal(r.status, 200, r.text);
  assert.equal(r.json.choices[0].message.content, 'Hello from ok-model');
  assert.equal(r.headers.get('x-free-llm-provider'), 'beta');
  assert.equal(Number(r.headers.get('x-free-llm-attempts')), 3);
});

test('rate-limited model is skipped next time (cooldown)', async () => {
  const before = mock.calls.filter((c) => c.body.model === 'rl-model').length;
  const r = await post('/v1/chat/completions', { model: 'auto', messages: [{ role: 'user', content: 'again' }] });
  assert.equal(r.status, 200);
  assert.equal(mock.calls.filter((c) => c.body.model === 'rl-model').length, before);
});

test('streams OpenAI chunks with usage', async () => {
  await settings({ chain: ['beta/ok-model'] });
  const r = await post('/v1/chat/completions', { model: 'auto', stream: true, stream_options: { include_usage: true }, messages: [{ role: 'user', content: 'hi' }] });
  const ev = sseEvents(r.text);
  const text = ev.filter((e) => e.data?.choices?.[0]?.delta?.content).map((e) => e.data.choices[0].delta.content).join('');
  assert.equal(text, 'Hello from ok-model');
  assert.ok(ev.some((e) => e.data?.usage?.total_tokens === 18));
  assert.equal(ev.at(-1).data, '[DONE]');
});

test('empty answer counts as failure and fails over', async () => {
  await settings({ chain: ['alpha/empty-model', 'beta/ok-model'] });
  const r = await post('/v1/chat/completions', { model: 'auto', messages: [{ role: 'user', content: 'x' }] });
  assert.equal(r.json.choices[0].message.content, 'Hello from ok-model');
});

test('retries the same provider in strict mode after a 400 on optional params', async () => {
  await settings({ chain: ['alpha/strict-model', 'beta/ok-model'] });
  const r = await post('/v1/chat/completions', { model: 'auto', stream: true, messages: [{ role: 'user', content: 'x' }] });
  assert.match(r.text, /strict ok/);
});

test('handles providers that answer JSON to a stream request', async () => {
  await settings({ chain: ['alpha/json-model'] });
  const r = await post('/v1/chat/completions', { model: 'auto', stream: true, messages: [{ role: 'user', content: 'x' }] });
  assert.match(r.text, /json answer/);
});

test('moves <think> blocks out of the visible text (split across chunks)', async () => {
  await settings({ chain: ['alpha/think-model'] });
  const r = await post('/v1/chat/completions', { model: 'auto', messages: [{ role: 'user', content: 'x' }] });
  assert.equal(r.json.choices[0].message.content.trim(), 'Visible answer');
  assert.equal(r.json.choices[0].message.reasoning_content, 'secret plan');
});

test('explicit provider/model is honoured', async () => {
  await settings({ chain: [] , strategy: 'balanced' });
  const r = await post('/v1/chat/completions', { model: 'alpha/ok-model', messages: [{ role: 'user', content: 'x' }] });
  assert.equal(r.headers.get('x-free-llm-provider'), 'alpha');
});

test('bad key is detected, other providers keep working', async () => {
  const r = await post('/v1/chat/completions', { model: 'badkey/ok-model', messages: [{ role: 'user', content: 'x' }] });
  assert.equal(r.status, 200);
  assert.notEqual(r.headers.get('x-free-llm-provider'), 'badkey');
  const prov = await fetch(base + '/admin/api/providers', { headers: { authorization: `Bearer ${KEY}` } }).then((x) => x.json());
  assert.ok(prov.providers.find((p) => p.slug === 'badkey').keys[0].invalid);
});

test('tool calls: OpenAI format', async () => {
  await settings({ chain: ['alpha/tool-model'], strategy: 'order' });
  const tools = [{ type: 'function', function: { name: 'get_weather', parameters: { type: 'object', properties: { city: { type: 'string' } } } } }];
  const r = await post('/v1/chat/completions', { model: 'auto', tools, messages: [{ role: 'user', content: 'weather?' }] });
  const tc = r.json.choices[0].message.tool_calls[0];
  assert.equal(tc.function.name, 'get_weather');
  assert.deepEqual(JSON.parse(tc.function.arguments), { city: 'Paris' });
  assert.equal(r.json.choices[0].finish_reason, 'tool_calls');
});

test('tool calls written as text are rescued', async () => {
  await settings({ chain: ['alpha/texttool-model'] });
  const tools = [{ type: 'function', function: { name: 'get_weather', parameters: { type: 'object', properties: {} } } }];
  const r = await post('/v1/chat/completions', { model: 'auto', tools, messages: [{ role: 'user', content: 'weather?' }] });
  const tc = r.json.choices[0].message.tool_calls?.[0];
  assert.ok(tc, r.text);
  assert.deepEqual(JSON.parse(tc.function.arguments), { city: 'Tunis' });
});

test('Anthropic /v1/messages — text, non-stream', async () => {
  await settings({ chain: ['beta/ok-model'] });
  const r = await post('/v1/messages', { model: 'claude-sonnet-4-5', max_tokens: 100, system: [{ type: 'text', text: 'be nice' }], messages: [{ role: 'user', content: [{ type: 'text', text: 'hi' }] }] }, { 'anthropic-version': '2023-06-01' });
  assert.equal(r.status, 200, r.text);
  assert.equal(r.json.type, 'message');
  assert.equal(r.json.content[0].text, 'Hello from ok-model');
  assert.equal(r.json.stop_reason, 'end_turn');
});

test('Anthropic /v1/messages — streaming tool_use (Claude Code path)', async () => {
  await settings({ chain: ['alpha/tool-model'] });
  const body = {
    model: 'claude-sonnet-4-5', max_tokens: 1000, stream: true,
    tools: [{ name: 'get_weather', description: 'w', input_schema: { type: 'object', properties: { city: { type: 'string' } } } }, { type: 'web_search_20250305', name: 'web_search' }],
    messages: [
      { role: 'user', content: 'weather?' },
      { role: 'assistant', content: [{ type: 'text', text: 'checking' }, { type: 'tool_use', id: 'toolu_1', name: 'get_weather', input: { city: 'Rome' } }] },
      { role: 'user', content: [{ type: 'tool_result', tool_use_id: 'toolu_1', content: [{ type: 'text', text: 'sunny' }] }, { type: 'text', text: 'and Paris?' }] },
    ],
  };
  const r = await post('/v1/messages', body);
  const ev = sseEvents(r.text);
  const names = ev.map((e) => e.event);
  assert.deepEqual([names[0], names.at(-2), names.at(-1)], ['message_start', 'message_delta', 'message_stop']);
  const start = ev.find((e) => e.event === 'content_block_start' && e.data.content_block.type === 'tool_use');
  assert.equal(start.data.content_block.name, 'get_weather');
  const json = ev.filter((e) => e.data?.delta?.type === 'input_json_delta').map((e) => e.data.delta.partial_json).join('');
  assert.deepEqual(JSON.parse(json), { city: 'Paris' });
  assert.equal(ev.find((e) => e.event === 'message_delta').data.delta.stop_reason, 'tool_use');
  // what the provider received: tool result became a role:"tool" message, server tool dropped
  const sent = mock.calls.filter((c) => c.body.model === 'tool-model').at(-1).body;
  assert.equal(sent.messages.find((m) => m.role === 'tool').content, 'sunny');
  assert.equal(sent.tools.length, 1);
});

test('Anthropic count_tokens', async () => {
  const r = await post('/v1/messages/count_tokens', { model: 'x', messages: [{ role: 'user', content: 'hello world' }] });
  assert.ok(r.json.input_tokens > 0);
});

test('Responses API (Codex) — streaming custom tool + previous_response_id', async () => {
  await settings({ chain: ['beta/ok-model'] });
  const r1 = await post('/v1/responses', { model: 'gpt-5-codex', instructions: 'You are Codex', input: [{ type: 'message', role: 'user', content: [{ type: 'input_text', text: 'hi' }] }] });
  assert.equal(r1.json.output[0].content[0].text, 'Hello from ok-model');
  const r2 = await post('/v1/responses', { model: 'gpt-5-codex', previous_response_id: r1.json.id, input: 'and again', stream: true });
  const ev = sseEvents(r2.text);
  assert.equal(ev[0].event, 'response.created');
  assert.equal(ev.at(-1).event, 'response.completed');
  const sent = mock.calls.at(-1).body;
  assert.equal(sent.messages.length, 4); // system + user + assistant + user
  await settings({ chain: ['alpha/tool-model'] });
  const r3 = await post('/v1/responses', { model: 'auto', stream: true, input: 'go', tools: [{ type: 'custom', name: 'get_weather', description: 'patch' }] });
  const done = sseEvents(r3.text).find((e) => e.event === 'response.output_item.done');
  assert.equal(done.data.item.type, 'custom_tool_call');
});

test('Ollama /api/chat streams NDJSON', async () => {
  await settings({ chain: ['beta/ok-model'] });
  const r = await post('/api/chat', { model: 'auto', messages: [{ role: 'user', content: 'hi' }] });
  const lines = r.text.trim().split('\n').map((l) => JSON.parse(l));
  assert.equal(lines.map((l) => l.message.content).join(''), 'Hello from ok-model');
  assert.equal(lines.at(-1).done, true);
});

test('embeddings route to embedding models only', async () => {
  const r = await post('/v1/embeddings', { model: 'auto', input: 'abc' });
  assert.equal(r.status, 200, r.text);
  assert.deepEqual(r.json.data[0].embedding, [0.1, 0.2, 0.3]);
  assert.equal(r.json.model, 'beta/emb-model');
});

test('MCP: initialize, tools/list, tools/call', async () => {
  const init = await post('/mcp', { jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18' } });
  assert.equal(init.json.result.serverInfo.name, 'free-llm-router');
  const list = await post('/mcp', { jsonrpc: '2.0', id: 2, method: 'tools/list' });
  assert.ok(list.json.result.tools.some((t) => t.name === 'ask_free_model'));
  const call = await post('/mcp', { jsonrpc: '2.0', id: 3, method: 'tools/call', params: { name: 'ask_free_model', arguments: { prompt: 'hi' } } });
  assert.match(call.json.result.content[0].text, /Hello from ok-model/);
});

test('/v1/models lists profiles and models', async () => {
  const r = await fetch(base + '/v1/models', { headers: { authorization: `Bearer ${KEY}` } }).then((x) => x.json());
  assert.ok(r.data.some((m) => m.id === 'auto:coding'));
  assert.ok(r.data.some((m) => m.id === 'ok-model'));
});

test('all providers failing → clear 503 listing what was tried', async () => {
  await settings({ chain: ['alpha/err-model', 'alpha/gone-model', 'alpha/quota-model'], strategy: 'order' });
  // only failing models allowed: disable the good ones temporarily
  for (const [p, m] of [['beta', 'ok-model'], ['alpha', 'ok-model'], ['alpha', 'strict-model'], ['alpha', 'json-model'], ['alpha', 'think-model'], ['alpha', 'tool-model'], ['alpha', 'texttool-model'], ['alpha', 'slow-model'], ['alpha', 'empty-model'], ['badkey', 'ok-model']]) {
    await post('/admin/api/models/toggle', { provider: p, model: m, enabled: false });
  }
  await post('/admin/api/reset-cooldowns', {});
  const r = await post('/v1/chat/completions', { model: 'auto', messages: [{ role: 'user', content: 'x' }] });
  assert.equal(r.status, 503);
  assert.match(r.json.error.message, /err-model/);
  for (const [p, m] of [['beta', 'ok-model'], ['alpha', 'ok-model']]) await post('/admin/api/models/toggle', { provider: p, model: m, enabled: true });
});

test('first-token timeout fails over', async () => {
  await post('/admin/api/models/toggle', { provider: 'alpha', model: 'slow-model', enabled: true });
  await settings({ chain: ['alpha/slow-model', 'beta/ok-model'], strategy: 'order' });
  const t0 = Date.now();
  const r = await post('/v1/chat/completions', { model: 'auto', messages: [{ role: 'user', content: 'x' }] });
  assert.equal(r.json.choices[0].message.content, 'Hello from ok-model');
  assert.ok(Date.now() - t0 < 2900);
});

test('dashboard is served without CORS and embeds the key only for local requests', async () => {
  const r = await fetch(base + '/');
  assert.equal(r.headers.get('access-control-allow-origin'), null);
  const html = await r.text();
  assert.ok(html.includes(KEY));
  const cross = await fetch(base + '/', { headers: { origin: 'https://evil.example', 'sec-fetch-site': 'cross-site' } }).then((x) => x.text());
  assert.ok(!cross.includes(KEY));
});

test('agent setup writes and removes Claude Code / Codex config', async () => {
  const { AGENTS } = await import('../src/setup.js');
  const { loadConfig } = await import('../src/config.js');
  const cfg = loadConfig();
  const codexFile = AGENTS.codex.file();
  fs.mkdirSync(path.dirname(codexFile), { recursive: true });
  fs.writeFileSync(codexFile, 'model = "o3"\n\n[profiles.mine]\nmodel = "gpt-5"\n');
  AGENTS.codex.apply(cfg, { makeDefault: true });
  let t = fs.readFileSync(codexFile, 'utf8');
  assert.match(t, /\[model_providers\.free-llm\]/);
  assert.match(t, /\[profiles\.mine\]\nmodel = "gpt-5"/); // user's own profile untouched
  assert.ok(t.indexOf('model_provider = "free-llm"') < t.indexOf('['));
  AGENTS.codex.apply(cfg, { remove: true });
  t = fs.readFileSync(codexFile, 'utf8');
  assert.ok(!t.includes('free-llm'));
  AGENTS.claude.apply(cfg, {});
  const j = JSON.parse(fs.readFileSync(AGENTS.claude.file(), 'utf8'));
  assert.equal(j.env.ANTHROPIC_AUTH_TOKEN, cfg.api_key);
  AGENTS.claude.apply(cfg, { remove: true });
  assert.equal(JSON.parse(fs.readFileSync(AGENTS.claude.file(), 'utf8')).env, undefined);
});

test('a key is locked to its provider domain and never sent elsewhere', async () => {
  const { loadConfig, providerKeys, blockedKeys } = await import('../src/config.js');
  const cfg = loadConfig();
  const realHost = `127.0.0.1:${mock.port}`;
  assert.equal(providerKeys(cfg, 'alpha', realHost).length, 1); // pinned on first use
  assert.equal(providerKeys(cfg, 'alpha', 'attacker.example').length, 0); // catalog tampered → key withheld
  assert.equal(blockedKeys(cfg, 'alpha', 'attacker.example').length, 1);
  const stored = fs.readFileSync(path.join(HOME, 'config.json'), 'utf8');
  assert.ok(!stored.includes('"good"'), 'keys must be encrypted at rest');
});

// ---------- CLI ----------
test('cli: a key the provider refuses is not kept, an unknown provider gets a clear error', async () => {
  const { spawn } = await import('node:child_process');
  const { fileURLToPath } = await import('node:url');
  const bin = fileURLToPath(new URL('../bin/free-llm.js', import.meta.url));
  // async on purpose: the mock provider lives in this process, a sync spawn would freeze it
  const run = (...args) => new Promise((resolve) => {
    const child = spawn(process.execPath, [bin, ...args], { env: { ...process.env, FREE_LLM_HOME: HOME, HOME, FREE_LLM_NO_ENV_IMPORT: '1', NO_COLOR: '1' } });
    let stdout = '';
    child.stdout.on('data', (d) => { stdout += d; });
    child.on('close', (status) => resolve({ status, stdout }));
  });
  const { loadConfig, providerKeys } = await import('../src/config.js');
  const before = providerKeys(loadConfig(), 'beta').length;

  const bad = await run('keys', 'add', 'beta', 'definitely-wrong');
  assert.equal(bad.status, 1);
  assert.match(bad.stdout, /Not kept/);
  assert.equal(providerKeys(loadConfig(), 'beta').length, before);

  const unknown = await run('keys', 'add', 'no-such-provider', 'x');
  assert.equal(unknown.status, 1);
  assert.match(unknown.stdout, /Unknown provider "no-such-provider"/);

  const service = await run('service');
  assert.match(service.stdout, /Usage: free-llm service install/);
});

test('cli: --json prints only JSON for status, models and providers', async () => {
  const { spawn } = await import('node:child_process');
  const { fileURLToPath } = await import('node:url');
  const bin = fileURLToPath(new URL('../bin/free-llm.js', import.meta.url));
  const run = (args, env = {}) => new Promise((resolve) => {
    const child = spawn(process.execPath, [bin, ...args], { env: { ...process.env, FREE_LLM_HOME: HOME, HOME, FREE_LLM_NO_ENV_IMPORT: '1', NO_COLOR: '1', ...env } });
    let stdout = '';
    child.stdout.on('data', (d) => { stdout += d; });
    child.on('close', (status) => resolve({ status, stdout }));
  });

  const down = await run(['status', '--json']);
  assert.equal(down.status, 0);
  assert.equal(JSON.parse(down.stdout).running, false);

  const up = await run(['status', '--json'], { FREE_LLM_PORT: String(server.address().port) });
  assert.equal(up.status, 0);
  const status = JSON.parse(up.stdout);
  assert.equal(status.running, true);
  assert.equal(status.strategy, 'order');
  assert.equal(typeof status.today.requests, 'number');
  assert.equal(status.api_key, undefined, 'the router key stays out of status output');

  const models = await run(['models', '--json']);
  assert.equal(models.status, 0);
  const ids = JSON.parse(models.stdout).data.map((m) => m.id);
  assert.ok(ids.includes('auto') && ids.includes('ok-model'));

  const providers = await run(['providers', '--all', '--json']);
  assert.equal(providers.status, 0);
  const alpha = JSON.parse(providers.stdout).providers.find((p) => p.slug === 'alpha');
  assert.equal(alpha.has_key, true);
  assert.equal(alpha.chat_models, MODELS.length);
});

test('ssh tunnel hint: shown over SSH on localhost only, with the right port and user', async () => {
  const { sshTunnelHint } = await import('../src/setup.js');
  const cfg = { host: '127.0.0.1', port: 4000 };
  assert.equal(sshTunnelHint(cfg, {}, 'me'), null, 'no SSH session: no hint');
  const h = sshTunnelHint(cfg, { SSH_CONNECTION: '192.168.1.20 51022 192.168.1.171 22' }, 'root');
  assert.equal(h.command, 'ssh -L 4000:127.0.0.1:4000 root@192.168.1.171');
  assert.equal(h.url, 'http://localhost:4000');
  assert.equal(sshTunnelHint({ host: '127.0.0.1', port: 4100 }, { SSH_CONNECTION: '10.0.0.2 5000 10.0.0.9 2222' }, 'ana').command,
    'ssh -L 4100:127.0.0.1:4100 -p 2222 ana@10.0.0.9');
  assert.equal(sshTunnelHint({ host: '0.0.0.0', port: 4000 }, { SSH_CONNECTION: '1.1.1.1 1 2.2.2.2 22' }, 'x'), null, 'already shared on the network');
});
