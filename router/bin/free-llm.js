#!/usr/bin/env node
// Free-LLM Router — command line.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import readline from 'node:readline/promises';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const major = Number(process.versions.node.split('.')[0]);
if (major < 18) {
  console.error(`Free-LLM Router needs Node.js 18 or newer (you have ${process.versions.node}). Get it at https://nodejs.org`);
  process.exit(1);
}

const HERE = path.dirname(fileURLToPath(import.meta.url));
const { loadConfig, saveConfig, configExists, addKey, removeKey, providerKeys, providerCfg, providerAccountId, hostOf, PATHS, STRATEGIES } = await import('../src/config.js');
const { loadCatalog, catalog, catalogStatus, refreshCatalog, recommendScore } = await import('../src/catalog.js');
const st = await import('../src/state.js');
const { runChat, allTargets, listModels, PROFILES } = await import('../src/router.js');
const { testKey } = await import('../src/upstream.js');
const { AGENTS, snippets, urls } = await import('../src/setup.js');
const { VERSION, sleep, fmtMs } = await import('../src/util.js');

// ---------- tiny terminal helpers ----------
const color = process.stdout.isTTY && !process.env.NO_COLOR;
const c = (code) => (s) => (color ? `\x1b[${code}m${s}\x1b[0m` : String(s));
const bold = c('1'), dim = c('2'), green = c('32'), yellow = c('33'), red = c('31'), cyan = c('36'), magenta = c('35');
const out = (...a) => console.log(...a);

const argv = process.argv.slice(2);
const flags = {};
const pos = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--') { pos.push(...argv.slice(i + 1)); break; }
  if (a.startsWith('--')) {
    const [k, v] = a.slice(2).split('=');
    if (v !== undefined) flags[k] = v;
    else if (argv[i + 1] && !argv[i + 1].startsWith('-') && ['port', 'host', 'label', 'account-id', 'model', 'days'].includes(k)) flags[k] = argv[++i];
    else flags[k] = true;
  } else if (a === '-h') flags.help = true;
  else if (a === '-v') flags.version = true;
  else pos.push(a);
}
const cmd = pos.shift();

const SIGNUP = { no: green('no card'), registration: cyan('email sign-up'), phone_verification: yellow('phone check'), credit_card: red('card required') };

async function ensureCatalog(cfg) {
  try { await loadCatalog(cfg); } catch (e) { out(red(`Could not load the model catalog: ${e.message}`)); process.exit(1); }
  return catalog();
}

async function routerRunning(cfg) {
  try {
    const r = await fetch(`${urls(cfg).root}/health`, { signal: AbortSignal.timeout(1500) });
    return r.ok;
  } catch { return false; }
}

function which(bin) {
  const r = spawnSync(process.platform === 'win32' ? 'where' : 'which', [bin], { encoding: 'utf8' });
  return r.status === 0 ? r.stdout.trim().split('\n')[0] : null;
}

function findProvider(cat, q) {
  if (!q) return null;
  const s = q.toLowerCase();
  if (cat.providers.has(s)) return cat.providers.get(s);
  const alias = { groq: 'groq-cloud', gemini: 'google-ai-studio', google: 'google-ai-studio', mistral: 'mistral-ai', nvidia: 'nvidia-nim', cloudflare: 'cloudflare-workers-ai', zai: 'z-ai', glm: 'z-ai', hf: 'huggingface-inference', huggingface: 'huggingface-inference', qwen: 'qwen-alibaba', together: 'together-ai', fireworks: 'fireworks-ai', llm7: 'llm7-io', kilo: 'kilo-gateway', vercel: 'vercel-ai-gateway', ovh: 'ovh-ai' };
  if (alias[s] && cat.providers.has(alias[s])) return cat.providers.get(alias[s]);
  return [...cat.providers.values()].find((p) => p.slug.startsWith(s) || p.name.toLowerCase().startsWith(s)) || null;
}

/** Best providers to sign up for first (same score as the dashboard). */
function recommended(cat, n = 10) {
  return [...cat.providers.values()]
    .map((p) => ({ p, s: recommendScore(p) }))
    .filter((x) => x.s >= 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.p);
}

async function testProviderKey(cfg, prov, keyId) {
  const value = providerKeys(cfg, prov.slug, hostOf(prov.base)).find((k) => k.id === keyId)?.value;
  if (!value) return { ok: false, ms: 0, error: 'key blocked: the provider address changed since you added it (see free-llm doctor)' };
  const model = prov.models.find((m) => m.kind === 'chat') || prov.models[0];
  return testKey({ provider: prov, model, key: { id: keyId, value, anonymous: false }, accountId: providerAccountId(cfg, prov.slug) });
}

// ---------- commands ----------

function help() {
  out(`
${bold('⚡ Free-LLM Router')} ${dim(VERSION)} — all the free LLM APIs behind one endpoint.
${dim('Your app talks to one address; the router picks a free model, and switches to another one the moment a provider is busy or out of quota.')}

${bold('Start')}
  free-llm                      first run: guided setup, then start the router
  free-llm start [--port 4000] [--host 127.0.0.1] [--open] [--daemon]
  free-llm stop                 stop a background router
  free-llm status               is it running? usage today

${bold('Keys & providers')}
  free-llm providers [--all]    best free providers to sign up for (with links)
  free-llm keys                 list your keys
  free-llm keys add <provider> <key> [--label x] [--account-id id]
  free-llm keys remove <provider> [key-id]
  free-llm keys test [provider] check that your keys work

${bold('Use it')}
  free-llm setup <agent> [--default] [--remove]   claude | codex | opencode | aider | all
  free-llm launch <agent> [-- args]               run claude / codex / opencode / aider / qwen / goose / crush on free models
  free-llm connect [tool]       copy-paste settings for Cursor, Cline, Continue, Zed, Open WebUI, SDKs…
  free-llm chat ["question"] [--model auto:coding]   quick chat in the terminal
  free-llm models [--all]       models you can use now

${bold('Maintenance')}
  free-llm doctor               diagnose problems
  free-llm update               refresh the model catalog now (it also refreshes on its own)
  free-llm service install      start automatically at login (systemd / launchd)
  free-llm config               where files live, current settings

Model names you can send: ${Object.keys(PROFILES).join(', ')}, any model id (e.g. deepseek-v4-flash) or provider/model.
Docs: https://free-llm.com/router · Catalog: https://free-llm.com
`);
}

async function onboarding() {
  const cfg = loadConfig();
  const cat = await ensureCatalog(cfg);
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  out(`
${bold('⚡ Welcome to Free-LLM Router')}

${bold('What it does, in one sentence:')} you give it a few ${green('free')} API keys, and it gives you
${bold('one')} address that works like the OpenAI / Anthropic API. Behind it, it always picks
a free model that is up, and switches instantly when one is slow, down or out of quota.

${dim('It already works right now with no key at all ("guest mode", slower).')}
${dim('Each free key you add makes it faster and stronger. Most take 1 minute and no credit card.')}
`);
  out(green(bold('🔒 100% local and private')));
  out(`   • Your keys are stored ${bold('only on this computer')}, encrypted (AES-256-GCM), in ${PATHS.home}`);
  out(`   • Each key is sent ${bold('only to its own provider')} (your Groq key only to api.groq.com…), and locked to that address`);
  out('   • Nothing goes through free-llm.com: no account, no telemetry, no tracking');
  out(`   • Open source — read the code: ${dim('https://github.com/nejib1/Free-LLM/tree/main/router')}\n`);
  const recs = recommended(cat, 8);
  out(bold('Best free providers to start with:'));
  recs.forEach((p, i) => {
    out(`  ${cyan(String(i + 1).padStart(2))}. ${bold(p.name.padEnd(26))} ${(SIGNUP[p.signup] || '').padEnd(color ? 24 : 15)} ${dim(p.helpUrl)}`);
  });
  out(dim('\n  (the link shows exactly how to get the key; full list: free-llm providers)\n'));

  for (const p of recs) {
    const has = providerKeys(cfg, p.slug).length;
    if (has) { out(`  ${green('✓')} ${p.name}: key already saved`); continue; }
    const ans = (await rl.question(`  Paste your ${bold(p.name)} key ${dim(`(stays here, only sent to ${hostOf(p.base) || 'the provider'} · Enter to skip)`)}: `)).trim();
    if (!ans) continue;
    if (p.needs.includes('account_id')) {
      const acc = (await rl.question(`    ${p.name} account ID: `)).trim();
      if (acc) providerCfg(cfg, p.slug).account_id = acc;
    }
    const id = addKey(cfg, p.slug, ans, 'setup');
    saveConfig(cfg);
    process.stdout.write(dim('    testing… '));
    const r = await testProviderKey(cfg, p, id);
    out(r.ok ? green(`works (${fmtMs(r.ms)})`) : red(`problem: ${r.error}`));
  }
  const more = (await rl.question(`\n  Add a key for another provider? ${dim('(type its name, or Enter to continue)')}: `)).trim();
  if (more) {
    const p = findProvider(cat, more);
    if (!p) out(yellow(`  Unknown provider "${more}". See: free-llm providers --all`));
    else {
      const k = (await rl.question(`  ${p.name} key: `)).trim();
      if (k) { const id = addKey(cfg, p.slug, k, 'setup'); saveConfig(cfg); const r = await testProviderKey(cfg, p, id); out(r.ok ? green('  works') : red(`  problem: ${r.error}`)); }
    }
  }

  const agents = ['claude', 'codex', 'opencode', 'aider'].filter((a) => which(a === 'claude' ? 'claude' : a));
  if (agents.length) {
    out(`\n${bold('Coding tools found on this computer:')} ${agents.map((a) => AGENTS[a].name).join(', ')}`);
    for (const a of agents) {
      const yes = (await rl.question(`  Make ${bold(AGENTS[a].name)} use free models? ${dim('[y/N]')} `)).trim().toLowerCase();
      if (yes === 'y' || yes === 'yes' || yes === 'o' || yes === 'oui') {
        const r = AGENTS[a].apply(cfg, {});
        out(`  ${green('✓')} ${r.note} ${dim(`(${r.file}, backup in ${PATHS.backups})`)}`);
      }
    }
  }
  rl.close();
  saveConfig(cfg);
  out(`\n${green('All set.')} Starting the router…  ${dim('(next time just run: free-llm)')}\n`);
}

async function cmdStart() {
  const base = loadConfig();
  // Remember an explicit --port/--host: setup/status/launch must point at the same address.
  if ((flags.port && Number(flags.port) !== base.port) || (flags.host && flags.host !== base.host)) {
    if (flags.port) base.port = Number(flags.port);
    if (flags.host) base.host = flags.host;
    saveConfig(base);
  }
  const cfg = base;
  if (await routerRunning(cfg)) {
    out(yellow(`The router is already running at ${urls(cfg).root}`));
    return;
  }
  if (flags.daemon) {
    fs.mkdirSync(PATHS.home, { recursive: true });
    const logFile = path.join(PATHS.home, 'router.log');
    const fd = fs.openSync(logFile, 'a');
    const args = [path.join(HERE, 'free-llm.js'), 'start'];
    if (flags.port) args.push('--port', String(flags.port));
    if (flags.host) args.push('--host', String(flags.host));
    const child = spawn(process.execPath, args, { detached: true, stdio: ['ignore', fd, fd], env: process.env });
    child.unref();
    for (let i = 0; i < 40; i++) { await sleep(250); if (await routerRunning(cfg)) break; }
    out((await routerRunning(cfg)) ? green(`Router started in the background → ${urls(cfg).root}`) : red(`Router did not start — see ${logFile}`));
    return;
  }
  const { startServer } = await import('../src/server.js');
  try {
    const { cfg: live } = await startServer({ port: flags.port, host: flags.host });
    if (flags.open) openUrl(urls(live).root);
  } catch (e) {
    if (e.code === 'EADDRINUSE') out(red(`Port ${flags.port || cfg.port} is already used by another program. Try: free-llm start --port 4100`));
    else out(red(e.stack || e.message));
    process.exit(1);
  }
}

function openUrl(u) {
  const opener = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'cmd' : 'xdg-open';
  const args = process.platform === 'win32' ? ['/c', 'start', '', u] : [u];
  try { spawn(opener, args, { detached: true, stdio: 'ignore' }).unref(); } catch { /* headless */ }
}

async function cmdStop() {
  let pid = null;
  try { pid = Number(fs.readFileSync(PATHS.pid, 'utf8')); } catch { /* none */ }
  if (!pid) { out('No background router found.'); return; }
  try { process.kill(pid, 'SIGTERM'); out(green('Router stopped.')); } catch { out('Router was not running.'); }
  try { fs.unlinkSync(PATHS.pid); } catch { /* ignore */ }
}

async function cmdStatus() {
  const cfg = loadConfig();
  const up = await routerRunning(cfg);
  out(`${bold('Router')}      ${up ? green('running') : red('not running')}  ${dim(urls(cfg).root)}`);
  if (!up) { out(dim('Start it with: free-llm start   (or free-llm start --daemon)')); return; }
  const r = await fetch(`${urls(cfg).root}/admin/api/status`, { headers: { authorization: `Bearer ${cfg.api_key}` } }).then((x) => x.json());
  out(`${bold('Models')}      ${r.models} usable (${r.healthy_targets}/${r.targets} routes healthy)${r.guest_mode ? yellow('  — guest mode, add keys for speed') : ''}`);
  out(`${bold('Today')}       ${r.today.requests} requests · ${r.today.ok} ok · ${r.today.fail} retried · ${r.today.tokens.toLocaleString()} tokens`);
  out(`${bold('Catalog')}     ${r.catalog.providers} providers, ${r.catalog.models} models — ${r.catalog.source}`);
  out(`${bold('Strategy')}    ${r.strategy}`);
}

async function cmdProviders() {
  const cfg = loadConfig();
  const cat = await ensureCatalog(cfg);
  const list = flags.all ? [...cat.providers.values()].filter((p) => p.usable).sort((a, b) => a.name.localeCompare(b.name)) : recommended(cat, 15);
  out(bold(flags.all ? `All ${list.length} providers the router can use:` : 'Best free providers to sign up for:'));
  for (const p of list) {
    const has = providerKeys(cfg, p.slug).length ? green(' ✓ key saved') : p.anonymousKey !== null ? dim(' (guest access)') : '';
    const chat = p.models.filter((m) => m.kind === 'chat').length;
    out(`  ${bold(p.name.padEnd(28))} ${(SIGNUP[p.signup] || p.signup || '').padEnd(color ? 24 : 15)} ${String(chat).padStart(3)} models  ${dim(p.helpUrl)}${has}`);
  }
  out(dim(`\nAdd one:  free-llm keys add <provider> <key>     (e.g. free-llm keys add groq gsk_…)`));
  if (!flags.all) out(dim('More:     free-llm providers --all'));
}

async function cmdKeys() {
  const cfg = loadConfig();
  const cat = await ensureCatalog(cfg);
  const sub = pos.shift();
  if (!sub || sub === 'list') {
    const rows = Object.entries(cfg.providers).filter(([, v]) => v.keys?.length || v.account_id);
    if (!rows.length) { out('No keys yet. Run ' + bold('free-llm providers') + ' to see where to get free ones.'); return; }
    for (const [slug, v] of rows) {
      const name = cat.providers.get(slug)?.name || slug;
      for (const k of providerKeys(cfg, slug)) out(`  ${bold(name.padEnd(26))} ${dim(k.id)}  ${k.value.slice(0, 4)}…${k.value.slice(-4)}  ${dim(k.label)}${v.enabled === false ? red(' (disabled)') : ''}`);
    }
    return;
  }
  if (sub === 'add') {
    const p = findProvider(cat, pos.shift());
    const key = pos.shift();
    if (!p || (!key && !flags['account-id'])) { out(red('Usage: free-llm keys add <provider> <key> [--account-id id]')); process.exit(1); }
    if (flags['account-id']) providerCfg(cfg, p.slug).account_id = String(flags['account-id']);
    let id = null;
    if (key) id = addKey(cfg, p.slug, key, flags.label || '');
    saveConfig(cfg);
    out(green(`Saved for ${p.name}.`));
    if (id && p.usable) {
      process.stdout.write(dim('Testing… '));
      const r = await testProviderKey(cfg, p, id);
      out(r.ok ? green(`works (${fmtMs(r.ms)})`) : red(`problem: ${r.error}`));
    }
    out(dim(`🔒 Stored encrypted on this computer only; it will only ever be sent to ${hostOf(p.base) || p.name}.`));
    if (await routerRunning(cfg)) out(dim('The running router picks it up within seconds — no restart needed.'));
    return;
  }
  if (sub === 'remove' || sub === 'rm') {
    const p = findProvider(cat, pos.shift());
    if (!p) { out(red('Usage: free-llm keys remove <provider> [key-id]')); process.exit(1); }
    removeKey(cfg, p.slug, pos.shift());
    saveConfig(cfg);
    out(green(`Removed ${p.name} key(s).`));
    return;
  }
  if (sub === 'test') {
    const only = pos.shift();
    const slugs = Object.keys(cfg.providers).filter((s) => !only || s === findProvider(cat, only)?.slug);
    for (const slug of slugs) {
      const p = cat.providers.get(slug);
      if (!p) continue;
      for (const k of providerKeys(cfg, slug)) {
        const r = await testProviderKey(cfg, p, k.id);
        out(`  ${r.ok ? green('✓') : red('✗')} ${p.name.padEnd(26)} ${dim(k.id)} ${r.ok ? fmtMs(r.ms) : red(r.error)}`);
      }
    }
    return;
  }
  out(red(`Unknown: keys ${sub}`));
}

async function cmdModels() {
  const cfg = loadConfig();
  await ensureCatalog(cfg);
  st.loadState();
  const data = listModels(cfg, { all: Boolean(flags.all) }).data;
  out(bold('Profiles') + dim(' (send these as the model name)'));
  for (const m of data.filter((x) => x.id.startsWith('auto'))) out(`  ${cyan(m.id.padEnd(16))} ${dim(m.description || '')}`);
  const rest = data.filter((x) => !x.id.startsWith('auto'));
  out(bold(`\n${rest.length} models`) + dim(' (best first)'));
  for (const m of rest) out(`  ${m.id.padEnd(44)} ${dim((m.context_length ? `${Math.round(m.context_length / 1000)}K ctx  ` : '') + m.owned_by)}`);
  if (!rest.length) out(yellow('  None yet — add a key: free-llm providers'));
}

async function cmdSetup() {
  const cfg = loadConfig();
  const name = pos.shift();
  const list = name === 'all' ? ['claude', 'codex', 'opencode', 'aider'] : [name];
  if (!name || !list.every((a) => AGENTS[a]?.apply)) {
    out(red('Usage: free-llm setup <claude|codex|opencode|aider|all> [--default] [--remove]'));
    out(dim('For other tools: free-llm connect'));
    process.exit(1);
  }
  for (const a of list) {
    const r = AGENTS[a].apply(cfg, { remove: Boolean(flags.remove), makeDefault: Boolean(flags.default) });
    out(`${green('✓')} ${bold(AGENTS[a].name)}: ${r.note}\n  ${dim(`${r.file} — previous version saved in ${PATHS.backups}`)}`);
  }
  if (!flags.remove && !(await routerRunning(cfg))) out(yellow('\nThe router is not running yet: free-llm start   (or free-llm service install to start it at login)'));
}

async function cmdLaunch() {
  const cfg = loadConfig();
  const name = pos.shift();
  const agent = AGENTS[name];
  if (!agent?.launch) { out(red(`Usage: free-llm launch <${Object.keys(AGENTS).join('|')}> [-- args]`)); process.exit(1); }
  if (!(await routerRunning(cfg))) {
    out(dim('Starting the router in the background…'));
    flags.daemon = true;
    await cmdStart();
  }
  if (agent.needsSetup) agent.apply(cfg, {});
  const l = agent.launch(cfg);
  if (!which(l.cmd)) { out(red(`${agent.name} (${l.cmd}) is not installed or not in PATH.`)); process.exit(1); }
  const child = spawn(l.cmd, [...(l.args || []), ...pos], { stdio: 'inherit', env: { ...process.env, ...l.env }, shell: process.platform === 'win32' });
  child.on('exit', (code) => process.exit(code ?? 0));
}

async function cmdConnect() {
  const cfg = loadConfig();
  const want = pos.shift();
  const list = snippets(cfg).filter((s) => !want || s.id === want || s.name.toLowerCase().includes(want.toLowerCase()));
  if (!list.length) { out(red(`Nothing for "${want}". Try: ${snippets(cfg).map((s) => s.id).join(', ')}`)); return; }
  for (const s of list) out(`\n${bold(s.name)}\n${s.text.split('\n').map((l) => '  ' + l).join('\n')}`);
  out('');
}

async function cmdChat() {
  const cfg = loadConfig();
  await ensureCatalog(cfg);
  st.loadState();
  const model = flags.model || 'auto';
  const history = [];
  const ask = async (q) => {
    history.push({ role: 'user', content: q });
    let text = '';
    let meta = null;
    let thinking = false;
    try {
      for await (const ev of runChat(cfg, { model, messages: history, stream: true }, { stream: true, endpoint: 'cli' })) {
        if (ev.t === 'meta') { meta = ev; continue; }
        if (ev.t === 'reasoning' && !thinking) { thinking = true; process.stdout.write(dim('(thinking…) ')); }
        if (ev.t === 'text') { process.stdout.write(ev.v); text += ev.v; }
      }
      process.stdout.write('\n' + dim(`— ${meta?.provider}/${meta?.model}${meta?.attempts?.length > 1 ? ` after ${meta.attempts.length - 1} switch(es)` : ''}`) + '\n');
      history.push({ role: 'assistant', content: text });
    } catch (e) {
      out(red(e.message));
      history.pop();
    }
    st.saveState();
  };
  if (pos.length) { await ask(pos.join(' ')); return; }
  out(dim(`Chat on free models (${model}). Empty line or Ctrl+C to quit.`));
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  for (;;) {
    const q = (await rl.question(bold('\nyou › '))).trim();
    if (!q) break;
    process.stdout.write(magenta('ai  › '));
    await ask(q);
  }
  rl.close();
}

async function cmdDoctor() {
  const cfg = loadConfig();
  let ok = true;
  const line = (good, label, detail = '') => { if (!good) ok = false; out(`  ${good ? green('✓') : red('✗')} ${label}${detail ? dim('  ' + detail) : ''}`); };
  out(bold('Free-LLM Router doctor'));
  line(major >= 18, `Node.js ${process.versions.node}`, major >= 18 ? '' : 'needs 18+');
  line(fs.existsSync(PATHS.config), 'Config file', PATHS.config);
  const cat = await loadCatalog(cfg).catch(() => null);
  const cs = catalogStatus();
  line(Boolean(cat), 'Model catalog', `${cs.providers} providers · ${cs.models} models · ${cs.source}${cs.last_error ? ' · last error: ' + cs.last_error : ''}`);
  let keys = 0;
  for (const [slug, v] of Object.entries(cfg.providers)) {
    for (const k of v.keys || []) {
      keys++;
      try { providerKeys(cfg, slug); } catch { line(false, `Key ${k.id} for ${slug} cannot be decrypted`, 'master.key changed?'); }
    }
  }
  line(keys > 0, `${keys} API key(s) saved`, keys ? '' : 'guest mode only — run: free-llm providers');
  if (cat) {
    for (const [slug, v] of Object.entries(cfg.providers)) {
      const p = cat.providers.get(slug);
      if (!p) { line(false, `Provider "${slug}" is no longer in the catalog`, 'it may have closed its free tier — see free-llm.com/changelog'); continue; }
      if (!p.usable) line(false, `${p.name} has no OpenAI-compatible API`, 'the router cannot use it');
      if (p.needs.includes('account_id') && !v.account_id) line(false, `${p.name} needs an account ID`, `free-llm keys add ${slug} --account-id <id>`);
      for (const k of providerKeys(cfg, slug)) {
        const r = await testProviderKey(cfg, p, k.id);
        line(r.ok, `${p.name} key ${k.id}`, r.ok ? fmtMs(r.ms) : r.error);
      }
    }
  }
  const up = await routerRunning(cfg);
  line(up, 'Router running', up ? urls(cfg).root : 'start it: free-llm start');
  for (const [id, a] of Object.entries(AGENTS)) {
    if (!a.file) continue;
    const f = a.file();
    let configured = false;
    try { configured = fs.readFileSync(f, 'utf8').includes(String(cfg.port)) && fs.readFileSync(f, 'utf8').includes(cfg.api_key); } catch { /* not there */ }
    if (which(id === 'claude' ? 'claude' : id)) out(`  ${configured ? green('✓') : dim('·')} ${a.name} ${configured ? 'uses the router' : dim(`not configured — free-llm setup ${id}`)}`);
  }
  out(ok ? green('\nEverything looks good.') : yellow('\nSome things need attention (see ✗ above).'));
}

async function cmdService() {
  const cfg = loadConfig();
  const sub = pos.shift() || 'install';
  const node = process.execPath;
  const script = path.join(HERE, 'free-llm.js');
  if (process.platform === 'linux') {
    const dir = path.join(os.homedir(), '.config', 'systemd', 'user');
    const file = path.join(dir, 'free-llm-router.service');
    if (sub === 'uninstall') {
      spawnSync('systemctl', ['--user', 'disable', '--now', 'free-llm-router'], { stdio: 'inherit' });
      try { fs.unlinkSync(file); } catch { /* ignore */ }
      out(green('Service removed.'));
      return;
    }
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(file, `[Unit]\nDescription=Free-LLM Router\nAfter=network-online.target\n\n[Service]\nExecStart=${node} ${script} start\nRestart=on-failure\nRestartSec=5\nEnvironment=FREE_LLM_HOME=${PATHS.home}\n\n[Install]\nWantedBy=default.target\n`);
    spawnSync('systemctl', ['--user', 'daemon-reload'], { stdio: 'inherit' });
    const r = spawnSync('systemctl', ['--user', 'enable', '--now', 'free-llm-router'], { stdio: 'inherit' });
    out(r.status === 0 ? green(`Installed: the router now starts at login → ${urls(cfg).root}`) : yellow(`Unit written to ${file}; enable it with: systemctl --user enable --now free-llm-router`));
    return;
  }
  if (process.platform === 'darwin') {
    const file = path.join(os.homedir(), 'Library', 'LaunchAgents', 'com.free-llm.router.plist');
    if (sub === 'uninstall') {
      spawnSync('launchctl', ['unload', file]);
      try { fs.unlinkSync(file); } catch { /* ignore */ }
      out(green('Service removed.'));
      return;
    }
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0"><dict>\n<key>Label</key><string>com.free-llm.router</string>\n<key>ProgramArguments</key><array><string>${node}</string><string>${script}</string><string>start</string></array>\n<key>RunAtLoad</key><true/><key>KeepAlive</key><true/>\n<key>StandardOutPath</key><string>${path.join(PATHS.home, 'router.log')}</string>\n<key>StandardErrorPath</key><string>${path.join(PATHS.home, 'router.log')}</string>\n</dict></plist>\n`);
    spawnSync('launchctl', ['unload', file]);
    spawnSync('launchctl', ['load', file], { stdio: 'inherit' });
    out(green(`Installed: the router now starts at login → ${urls(cfg).root}`));
    return;
  }
  if (process.platform === 'win32') {
    const startup = path.join(process.env.APPDATA || '', 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup', 'free-llm-router.vbs');
    if (sub === 'uninstall') { try { fs.unlinkSync(startup); } catch { /* ignore */ } out(green('Removed from startup.')); return; }
    fs.writeFileSync(startup, `CreateObject("Wscript.Shell").Run """${node}"" ""${script}"" start", 0, False\n`);
    out(green(`Added to Windows startup. Starting now…`));
    flags.daemon = true;
    await cmdStart();
    return;
  }
  out(yellow('Automatic start is not supported on this system; use: free-llm start --daemon'));
}

async function cmdConfig() {
  const cfg = loadConfig();
  out(`${bold('Home')}       ${PATHS.home}`);
  out(`${bold('Config')}     ${PATHS.config}  ${dim('(keys are stored encrypted with ' + PATHS.masterKey + ')')}`);
  out(`${bold('Address')}    ${urls(cfg).root}`);
  out(`${bold('API key')}    ${cfg.api_key}`);
  out(`${bold('Strategy')}   ${cfg.strategy}  ${dim(`(${STRATEGIES.join(' | ')}) — change it in the dashboard`)}`);
  out(`${bold('Catalog')}    ${cfg.catalog.url}  ${dim(`refresh every ${cfg.catalog.refresh_hours} h`)}`);
}

// ---------- dispatch ----------

if (flags.version) { out(VERSION); process.exit(0); }
if (flags.help || cmd === 'help') { help(); process.exit(0); }

try {
  switch (cmd) {
    case undefined:
      if (!configExists()) { if (process.stdin.isTTY) await onboarding(); }
      await cmdStart();
      break;
    case 'start': case 'serve': case 'run': await cmdStart(); break;
    case 'init': case 'onboard': await onboarding(); break;
    case 'stop': await cmdStop(); break;
    case 'status': await cmdStatus(); break;
    case 'providers': await cmdProviders(); break;
    case 'keys': case 'key': await cmdKeys(); break;
    case 'models': await cmdModels(); break;
    case 'setup': await cmdSetup(); break;
    case 'launch': await cmdLaunch(); break;
    case 'connect': await cmdConnect(); break;
    case 'chat': case 'ask': await cmdChat(); break;
    case 'doctor': await cmdDoctor(); break;
    case 'update': {
      const cfg = loadConfig();
      await refreshCatalog(cfg);
      const s = catalogStatus();
      out(s.last_error ? red(`Update failed: ${s.last_error}`) : green(`Catalog updated: ${s.providers} providers, ${s.models} models (${s.source}).`));
      break;
    }
    case 'service': await cmdService(); break;
    case 'config': await cmdConfig(); break;
    case 'version': out(VERSION); break;
    default:
      out(red(`Unknown command "${cmd}".`));
      help();
      process.exit(1);
  }
} catch (e) {
  out(red(e.message || String(e)));
  process.exit(1);
}
