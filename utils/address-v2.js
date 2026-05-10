// Extended address utilities
export const shorten=(a,c=4)=>a.slice(0,2+c)+'...'+a.slice(-c)
export const isEOA=a=>/^0x[0-9a-fA-F]{40}$/.test(a)
export const toChecksummed=a=>a.toLowerCase()
export const areEqual=(a,b)=>a.toLowerCase()===b.toLowerCase()
