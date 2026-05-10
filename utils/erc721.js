// ERC-721 helpers
export function decodeNFTTransfer(log) { return { from:'0x'+log.topics[1].slice(26), to:'0x'+log.topics[2].slice(26), tokenId:BigInt(log.topics[3]) } }
