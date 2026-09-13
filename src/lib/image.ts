// Deterministic fallback: if a remote photo fails to load (offline dev,
// restricted network, a moved/deleted asset), swap it for a brand-toned
// local placeholder instead of leaving a broken image icon.

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

const WIDE_COUNT = 24;
const TALL_COUNT = 12;

export function fallbackFor(seed: string, orientation: 'wide' | 'tall' = 'wide'): string {
  const n = orientation === 'wide' ? WIDE_COUNT : TALL_COUNT;
  const idx = (hash(seed) % n) + 1;
  return `${import.meta.env.BASE_URL}images/ph/${orientation}-${idx}.jpg`;
}

export function agentFallback(seed: string): string {
  const idx = (hash(seed) % 3) + 1;
  return `${import.meta.env.BASE_URL}images/ph/agent-${idx}.jpg`;
}
