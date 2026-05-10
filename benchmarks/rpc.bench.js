// RPC benchmark
import { call } from '../rpc/client.js'

async function bench() {
  const start = Date.now()
  await Promise.all(Array.from({length:5},()=>call('eth_blockNumber')))
  console.log('5 concurrent RPC calls in', Date.now()-start, 'ms')
}

bench().catch(console.error)
