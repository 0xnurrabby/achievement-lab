// Format benchmark
import { formatEther, parseEther } from '../utils/format.js'

const N=10000
const start=Date.now()
for(let i=0;i<N;i++){formatEther(BigInt(i)*10n**18n)}
console.log(N,'formatEther calls in',Date.now()-start,'ms')
