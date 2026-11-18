// Stream filters applied to normalised events.
import { parseLooseJson, uid } from './util.js';

/**
 * Moves <think>…</think> (and <thinking>) out of the visible text into
 * reasoning events. Works across chunk boundaries.
 */
export function thinkStripper() {
  let inThink = false;
  let pending = '';
  const OPEN = /<think(?:ing)?>/i;
  const CLOSE = /<\/think(?:ing)?>/i;
  return {
    push(text) {
      const out = [];
      let s = pending + text;
      pending = '';
      while (s) {
        if (!inThink) {
          const m = s.match(OPEN);
          if (m) {
            if (m.index) out.push({ t: 'text', v: s.slice(0, m.index) });
            s = s.slice(m.index + m[0].length);
            inThink = true;
            continue;
          }
          // keep a possible partial "<thi" at the end for the next chunk
          const lt = s.lastIndexOf('<');
          if (lt >= 0 && s.length - lt < 11 && '<thinking>'.startsWith(s.slice(lt).toLowerCase())) {
            if (lt) out.push({ t: 'text', v: s.slice(0, lt) });
            pending = s.slice(lt);
          } else out.push({ t: 'text', v: s });
          s = '';
        } else {
          const m = s.match(CLOSE);
          if (m) {
            if (m.index) out.push({ t: 'reasoning', v: s.slice(0, m.index) });
            s = s.slice(m.index + m[0].length).replace(/^\s+/, '');
            inThink = false;
            continue;
          }
          const lt = s.lastIndexOf('<');
          if (lt >= 0 && s.length - lt < 12 && '</thinking>'.startsWith(s.slice(lt).toLowerCase())) {
            if (lt) out.push({ t: 'reasoning', v: s.slice(0, lt) });
            pending = s.slice(lt);
          } else out.push({ t: 'reasoning', v: s });
          s = '';
        }
      }
      return out.filter((e) => e.v);
    },
    flush() {
      const p = pending;
      pending = '';
      return p ? [{ t: inThink ? 'reasoning' : 'text', v: p }] : [];
    },
  };
}

const TOOLISH_START = /^\s*(<tool_call>|<\|tool_call\|>|<function=|```(?:json)?\s*\{\s*"(?:name|tool|function)"|\{\s*"(?:name|tool_name|function)"\s*:)/;

/** Try to read tool calls a model wrote as plain text. */
export function rescueToolCalls(text, toolNames) {
  const names = new Set(toolNames);
  const calls = [];
  const consider = (obj) => {
    if (!obj || typeof obj !== 'object') return;
    if (Array.isArray(obj)) { obj.forEach(consider); return; }
    const name = obj.name ?? obj.tool ?? obj.tool_name ?? obj.function?.name ?? obj.function;
    let args = obj.arguments ?? obj.parameters ?? obj.args ?? obj.input ?? obj.function?.arguments ?? {};
    if (typeof args === 'string') args = parseLooseJson(args) ?? { input: args };
    if (typeof name === 'string' && names.has(name)) calls.push({ id: 'call_' + uid('', 20), name, arguments: JSON.stringify(args) });
  };
  for (const m of text.matchAll(/<tool_call>([\s\S]*?)(?:<\/tool_call>|$)/g)) consider(parseLooseJson(m[1]));
  for (const m of text.matchAll(/<function=([\w.-]+)>([\s\S]*?)(?:<\/function>|$)/g)) {
    if (names.has(m[1])) calls.push({ id: 'call_' + uid('', 20), name: m[1], arguments: JSON.stringify(parseLooseJson(m[2]) ?? {}) });
  }
  if (!calls.length) consider(parseLooseJson(text));
  return calls;
}

/**
 * When tools were offered and the visible text *starts* like a tool call,
 * hold it back; at the end, convert it to real tool calls if it parses.
 */
export function toolRescuer(toolNames) {
  let mode = 'undecided'; // undecided | passthrough | holding
  let held = '';
  return {
    push(ev) {
      if (!toolNames?.length || ev.t !== 'text') return [ev];
      if (mode === 'passthrough') return [ev];
      held += ev.v;
      if (mode === 'undecided') {
        if (held.trim().length < 12 && /^\s*[<{`]/.test(held)) return [];
        mode = TOOLISH_START.test(held) ? 'holding' : 'passthrough';
        if (mode === 'passthrough') { const v = held; held = ''; return [{ t: 'text', v }]; }
      }
      return [];
    },
    /** called before 'finish'; returns events to emit and whether tool calls were produced */
    flush(baseIndex = 0) {
      if (!held) return { events: [], rescued: false };
      const text = held;
      held = '';
      if (mode === 'holding') {
        const calls = rescueToolCalls(text, toolNames);
        if (calls.length) {
          const events = [];
          calls.forEach((c, k) => {
            events.push({ t: 'tool_start', i: baseIndex + k, id: c.id, name: c.name });
            events.push({ t: 'tool_args', i: baseIndex + k, v: c.arguments });
          });
          return { events, rescued: true };
        }
      }
      return { events: [{ t: 'text', v: text }], rescued: false };
    },
  };
}
