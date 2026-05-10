// Base RPC client v2 with AbortController
const RPC='https://mainnet.base.org'
export async function callWithTimeout(method,params=[],ms=10000){const c=new AbortController();const t=setTimeout(()=>c.abort(),ms);try{const r=await fetch(RPC,{signal:c.signal,method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:Date.now(),method,params})});clearTimeout(t);return r.json()}catch(e){clearTimeout(t);throw e}}
