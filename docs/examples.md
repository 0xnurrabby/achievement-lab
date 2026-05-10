# Examples

## Send USDC on Base
\\\js
import { toUnits, USDC } from 'base-utils'
import { buildTransferData } from 'base-utils'

const data = buildTransferData(recipientAddress, toUnits('10.00'))
console.log('calldata:', data)
\\\`n