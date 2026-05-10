// Log filter builder
export function buildFilter({address,topics=[],fromBlock='latest',toBlock='latest'}) { return {address,topics,fromBlock:typeof fromBlock==='number'?'0x'+fromBlock.toString(16):fromBlock,toBlock:typeof toBlock==='number'?'0x'+toBlock.toString(16):toBlock} }
