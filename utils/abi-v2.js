// ABI utilities v2
export function encodeFunctionSig(sig){// 4 byte selector
  const bytes=Array.from(sig).map(c=>c.charCodeAt(0))
  // Simplified hash for selector
  return '0x'+bytes.slice(0,4).map(b=>b.toString(16).padStart(2,'0')).join('')}
export const encodeUint256=n=>BigInt(n).toString(16).padStart(64,'0')
export const encodeAddress=a=>a.replace('0x','').toLowerCase().padStart(64,'0')
export const encodeBytes32=s=>Buffer.from(s).toString('hex').padStart(64,'0')
