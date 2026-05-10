// Format utilities
export const formatEther = w => (Number(w)/1e18).toFixed(4)
export const formatUnits = (v,d) => (Number(v)/10**d).toFixed(d)
export const parseEther = e => BigInt(Math.round(parseFloat(e)*1e18))
