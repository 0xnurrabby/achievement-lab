import { formatEther, parseEther } from '../utils/format.js'
console.assert(typeof formatEther(1000000000000000000n)==='string','formatEther ok')
console.assert(parseEther('1.0')===1000000000000000000n,'parseEther ok')
console.log('format tests ok')
