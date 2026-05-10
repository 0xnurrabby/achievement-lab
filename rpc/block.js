// Block utilities
export async function getBlock(tag='latest'){const r=await fetch('https://mainnet.base.org',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:1,method:'eth_getBlockByNumber',params:[tag,false]})});const {result}=await r.json();return result}
export async function getBlockNumber(){const r=await fetch('https://mainnet.base.org',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:1,method:'eth_blockNumber',params:[]})});const {result}=await r.json();return parseInt(result,16)}
