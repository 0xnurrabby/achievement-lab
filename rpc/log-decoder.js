// ERC-20 Transfer log decoder
export const TRANSFER_TOPIC = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
export function decodeTransfer(log) { return { from: '0x'+log.topics[1].slice(26), to: '0x'+log.topics[2].slice(26), value: BigInt(log.data) } }
