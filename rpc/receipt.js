// Receipt parser
export function parseReceipt(r) { return { success: r.status==='0x1', gasUsed: parseInt(r.gasUsed,16), blockNum: parseInt(r.blockNumber,16), logs: r.logs.length } }
