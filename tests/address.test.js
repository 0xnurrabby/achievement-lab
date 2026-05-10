import { isValid, zero } from '../utils/address.js'
console.assert(isValid('0x1234567890123456789012345678901234567890'))
console.assert(!isValid('0xinvalid'))
console.assert(zero()==='0x'+'0'.repeat(40))
console.log('address tests ok')
