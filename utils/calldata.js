// Raw calldata utilities
export const concat=(...parts)=>'0x'+parts.map(p=>p.replace('0x','')).join('')
export const slice=(data,start,end)=>'0x'+data.slice(2).slice(start*2,end*2)
export const toBytes=(hex)=>Uint8Array.from(hex.replace('0x','').match(/.{2}/g).map(b=>parseInt(b,16)))
