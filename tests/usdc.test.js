import { toUnits, fromUnits } from '../utils/usdc.js'
console.assert(toUnits('1.00')===1000000n,'toUnits ok')
console.assert(fromUnits(1000000n)==='1.000000','fromUnits ok')
console.log('usdc tests ok')
