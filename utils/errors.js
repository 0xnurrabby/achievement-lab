// Common error handlers
export class RPCError extends Error{constructor(msg,code){super(msg);this.name='RPCError';this.code=code}}
export class InvalidAddressError extends Error{constructor(addr){super('Invalid address: '+addr);this.name='InvalidAddressError'}}
export function assertAddress(addr){if(!/^0x[0-9a-fA-F]{40}$/.test(addr))throw new InvalidAddressError(addr)}
