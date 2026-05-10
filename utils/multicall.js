// Multicall3 helper
export const MC3 = '0xcA11bde05977b3631167028862bE2a173976CA11'
export function encodeCall(target, callData) { return {target, allowFailure:false, callData} }
