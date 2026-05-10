// TypeScript type definitions
export declare function buildTransferData(to: string, amount: bigint): string
export declare function toHex(n: number | bigint): string
export declare function fromHex(h: string): number
export declare function isValid(address: string): boolean
export declare function shorten(address: string, chars?: number): string
export declare function toUnits(usd: string): bigint
export declare function fromUnits(units: bigint): string
export declare function formatEther(wei: bigint): string
export declare function parseEther(eth: string): bigint
