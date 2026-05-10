// Hex utilities
export const toHex = n => '0x' + n.toString(16)
export const fromHex = h => parseInt(h,16)
export const isHex = s => /^0x[0-9a-fA-F]+$/.test(s)
