// Batch utilities v2
export const buildBatch=(addrs,amt)=>addrs.map(a=>({to:a,amount:BigInt(amt)}))
export const chunk=(arr,n=100)=>Array.from({length:Math.ceil(arr.length/n)},(_,i)=>arr.slice(i*n,(i+1)*n))
export const flatten=bs=>bs.flat()
