// Storage reader
export async function readSlot(addr, slot, block='latest') { const r=await fetch('https://mainnet.base.org',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:1,method:'eth_getStorageAt',params:[addr,slot,block]})}); const {result}=await r.json(); return result }
