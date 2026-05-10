import { isTransfer, ERC20_TRANSFER } from '../utils/events.js'
const fakeLog = { topics: [ERC20_TRANSFER,'0x01','0x02'], data:'0x01' }
console.assert(isTransfer(fakeLog),'isTransfer ok')
console.log('events tests ok')
