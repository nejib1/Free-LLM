// Minimal MCP server (Streamable HTTP, JSON responses) at /mcp.
// Lets Claude Code, Cursor, ChatGPT… call free models as a tool ("second opinion").
import { runChat, collect, listModels, PROFILES } from './router.js';
import * as st from './state.js';
import { catalogStatus } from './catalog.js';
import { sendJson, VERSION } from './util.js';

const TOOLS = [
  {
    name: 'ask_free_model',
    description: 'Ask a free LLM (routed by Free-LLM Router across many free providers) and get its answer. Useful for a second opinion, drafting, translation, summarising, or offloading simple tasks.',
    inputSchema: {
      type: 'object',
      properties: {
        prompt: { type: 'string', description: 'The question or task' },
        system: { type: 'string', description: 'Optional system instructions' },
        model: { type: 'string', description: `Optional: a model id or profile (${Object.keys(PROFILES).join(', ')}). Default: auto` },
        max_tokens: { type: 'number', description: 'Optional output limit' },
      },
      required: ['prompt'],
    },
  },
  {
    name: 'second_opinion',
    description: 'Get a merged answer from several different free models (fusion). Slower, but good for checking reasoning, reviewing code or plans.',
    inputSchema: {
      type: 'object',
      properties: { question: { type: 'string' }, context: { type: 'string', description: 'Code, plan or text to review' } },
      required: ['question'],
    },
  },
  {
    name: 'list_free_models',
    description: 'List the free models currently usable through this router (with your configured keys).',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'router_status',
    description: 'Usage today, success rate, and which free providers are healthy.',
    inputSchema: { type: 'object', properties: {} },
  },
];

async function callTool(cfg, name, args, ctx) {
  if (name === 'ask_free_model') {
    const messages = [];
    if (args.system) messages.push({ role: 'system', content: String(args.system) });
    messages.push({ role: 'user', content: String(args.prompt ?? '') });
    const r = await collect(runChat(cfg, { model: args.model || 'auto', messages, max_tokens: args.max_tokens }, { ...ctx, endpoint: 'mcp' }));
    return `${r.text}\n\n— answered by ${r.meta?.provider}/${r.meta?.model} (free, via Free-LLM Router)`;
  }
  if (name === 'second_opinion') {
    const content = args.context ? `${args.question}\n\n---\n${args.context}` : String(args.question ?? '');
    const r = await collect(runChat(cfg, { model: 'auto:fusion', messages: [{ role: 'user', content }] }, { ...ctx, endpoint: 'mcp' }));
    return `${r.text}\n\n— merged by ${r.meta?.provider}/${r.meta?.model} from several free models`;
  }
  if (name === 'list_free_models') {
    const ms = listModels(cfg).data.filter((m) => !m.id.startsWith('auto'));
    return `${ms.length} free models available:\n` + ms.slice(0, 120).map((m) => `- ${m.id} (${m.owned_by})`).join('\n');
  }
  if (name === 'router_status') {
    const s = st.stats(1);
    const c = catalogStatus();
    return JSON.stringify({ today: s.totals, top_models: s.models.slice(0, 10).map((m) => ({ id: m.id, requests: m.requests, ok: m.ok, p50_ms: m.p50 })), catalog: c }, null, 2);
  }
  throw Object.assign(new Error(`Unknown tool: ${name}`), { code: -32602 });
}

export async function handleMcp(cfg, req, res, body, ctx) {
  if (req.method === 'GET') { res.writeHead(405, { allow: 'POST' }); res.end(); return; }
  if (req.method === 'DELETE') { res.writeHead(200); res.end(); return; }
  const batch = Array.isArray(body) ? body : [body];
  const out = [];
  for (const msg of batch) {
    const { id, method, params = {} } = msg || {};
    const reply = (result) => out.push({ jsonrpc: '2.0', id, result });
    const fail = (code, message) => out.push({ jsonrpc: '2.0', id, error: { code, message } });
    if (id === undefined || id === null) continue; // notification
    try {
      if (method === 'initialize') {
        reply({ protocolVersion: params.protocolVersion || '2025-06-18', capabilities: { tools: { listChanged: false } }, serverInfo: { name: 'free-llm-router', title: 'Free-LLM Router', version: VERSION }, instructions: 'Free LLMs from many providers behind one router. Use ask_free_model for quick tasks and second_opinion to cross-check important answers.' });
      } else if (method === 'ping') reply({});
      else if (method === 'tools/list') reply({ tools: TOOLS });
      else if (method === 'tools/call') {
        try {
          const text = await callTool(cfg, params.name, params.arguments || {}, ctx);
          reply({ content: [{ type: 'text', text }], isError: false });
        } catch (e) {
          if (e.code === -32602) throw e;
          reply({ content: [{ type: 'text', text: `Error: ${e.message}` }], isError: true });
        }
      } else if (method === 'resources/list') reply({ resources: [] });
      else if (method === 'prompts/list') reply({ prompts: [] });
      else fail(-32601, `Method not found: ${method}`);
    } catch (e) {
      fail(e.code || -32603, e.message);
    }
  }
  if (!out.length) { res.writeHead(202); res.end(); return; }
  sendJson(res, 200, Array.isArray(body) ? out : out[0]);
}
