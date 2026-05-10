// ERC-20 helpers v2
export const TRANSFER_SIG='0xa9059cbb'
export const APPROVE_SIG='0x095ea7b3'
export const BALANCE_SIG='0x70a08231'
export function encodeTransfer(to,amt){return TRANSFER_SIG+to.replace('0x','').padStart(64,'0')+BigInt(amt).toString(16).padStart(64,'0')}
export function encodeApprove(spender,amt){return APPROVE_SIG+spender.replace('0x','').padStart(64,'0')+BigInt(amt).toString(16).padStart(64,'0')}
