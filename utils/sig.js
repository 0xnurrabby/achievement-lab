// Signature utilities
export function split(sig) { const s=sig.slice(2); return {r:'0x'+s.slice(0,64),s:'0x'+s.slice(64,128),v:parseInt(s.slice(128,130),16)} }
export const isValid = s => /^0x[0-9a-fA-F]{130}$/.test(s)
