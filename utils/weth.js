// WETH helpers for Base
export const WETH='0x4200000000000000000000000000000000000006'
export const DEPOSIT_SIG='0xd0e30db0'
export const WITHDRAW_SIG='0x2e1a7d4d'
export const encodeDeposit=()=>DEPOSIT_SIG
export const encodeWithdraw=amt=>WITHDRAW_SIG+BigInt(amt).toString(16).padStart(64,'0')
