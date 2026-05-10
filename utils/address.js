// Address helpers
export const shorten = (a,c=4) => a.slice(0,2+c)+'...'+a.slice(-c)
export const isValid = a => /^0x[0-9a-fA-F]{40}$/.test(a)
export const zero = () => '0x'+'0'.repeat(40)
