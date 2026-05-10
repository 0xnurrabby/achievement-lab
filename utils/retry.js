// Retry utility
export async function withRetry(fn, retries=3, delayMs=500) {
  for (let i=0;i<retries;i++){
    try { return await fn() }
    catch(e){ if(i===retries-1)throw e; await new Promise(r=>setTimeout(r,delayMs)) }
  }
}
