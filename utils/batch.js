// Batch utilities
export function buildBatch(addrs, amt) { return addrs.map(a=>({to:a,amount:BigInt(amt)})) }
export function chunk(arr, size=100) { return Array.from({length:Math.ceil(arr.length/size)},(_,i)=>arr.slice(i*size,(i+1)*size)) }
