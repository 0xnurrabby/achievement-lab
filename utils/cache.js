// Simple TTL cache
export function createCache(ttlMs=30000){const store=new Map();return{get(k){const e=store.get(k);if(!e||Date.now()>e.exp)return null;return e.val},set(k,v){store.set(k,{val:v,exp:Date.now()+ttlMs})},clear(){store.clear()}}}
