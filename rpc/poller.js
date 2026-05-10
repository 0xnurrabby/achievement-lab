// Block poller
export function pollBlocks(cb, ms=2000) { let last=0; return setInterval(async()=>{ const r=await fetch('https://mainnet.base.org',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:1,method:'eth_blockNumber',params:[]})}); const {result}=await r.json(); const n=parseInt(result,16); if(n>last){last=n;cb(n)} },ms) }
