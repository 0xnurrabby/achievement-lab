import { toHex, fromHex, isHex } from '../utils/hex.js'
console.assert(toHex(255)==='0xff')
console.assert(fromHex('0xff')===255)
console.assert(isHex('0xdeadbeef'))
console.assert(!isHex('deadbeef'))
console.log('hex tests ok')
