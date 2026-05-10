// USDC helpers
export const USDC = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'
export const DECIMALS = 6
export const toUnits = usd => BigInt(Math.round(parseFloat(usd)*1e6))
export const fromUnits = u => (Number(u)/1e6).toFixed(6)
