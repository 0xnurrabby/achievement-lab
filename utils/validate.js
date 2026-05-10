// Input validation utilities
export const isUint256=v=>{try{return BigInt(v)>=0n&&BigInt(v)<2n**256n}catch{return false}}
export const isBytes32=v=>/^0x[0-9a-fA-F]{64}$/.test(v)
export const isTxHash=v=>/^0x[0-9a-fA-F]{64}$/.test(v)
export const isNonZero=v=>!/^0x0+$/.test(v)
