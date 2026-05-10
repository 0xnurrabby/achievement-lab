// Gas utilities
export async function getGasPrice() { const r = await fetch('https://mainnet.base.org',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:1,method:'eth_gasPrice',params:[]})}); const {result} = await r.json(); return BigInt(result) }
