// Base RPC client
const RPC = 'https://mainnet.base.org'
export async function call(method, params=[]) { const r = await fetch(RPC,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:1,method,params})}); return r.json() }
