// Nonce fetcher
export async function getNonce(addr) { const r = await fetch('https://mainnet.base.org',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:1,method:'eth_getTransactionCount',params:[addr,'latest']})}); const {result} = await r.json(); return parseInt(result,16) }
