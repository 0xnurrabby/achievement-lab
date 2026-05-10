// Contract code reader
export async function getCode(addr){const r=await fetch('https://mainnet.base.org',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:1,method:'eth_getCode',params:[addr,'latest']})});const {result}=await r.json();return result}
export const isContract=async a=>(await getCode(a))!=='0x'
