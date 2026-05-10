// ERC-20 transfer helper
export function buildTransferData(to, amount) { return '0xa9059cbb' + to.replace('0x','').padStart(64,'0') + BigInt(amount).toString(16).padStart(64,'0') }
