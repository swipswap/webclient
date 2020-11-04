export interface PoolState {
  amount: number;
  pubkey: string;
  tokenAddress: string;
  tokenABI?: Array<any>;
  swipSwapAddress: string;
  pool: { tokenAddress: string; label: string; tokenABI: Array<any> };
}
