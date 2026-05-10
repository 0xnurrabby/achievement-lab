// Format utilities v2
export const fmt6 = w => (Number(w)/1e18).toFixed(6)
export const fmtUnits = (v,d) => (Number(v)/10**d).toFixed(Math.min(d,6))
export const parseE = e => BigInt(Math.round(parseFloat(e)*1e18))
export const parseU = (v,d) => BigInt(Math.round(parseFloat(v)*10**d))
