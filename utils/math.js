// Math utilities for EVM values
export const min=(a,b)=>a<b?a:b
export const max=(a,b)=>a>b?a:b
export const clamp=(v,lo,hi)=>min(max(v,lo),hi)
export const bps=(amount,points)=>amount*BigInt(points)/10000n
export const percentOf=(amount,pct)=>amount*BigInt(Math.round(pct*100))/10000n
