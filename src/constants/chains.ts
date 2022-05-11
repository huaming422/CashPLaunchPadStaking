export enum SupportedChainId {
  MAINNET = 1,
  PULSECHAINTESTNET = 941,
  RINKEBY = 4,
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.MAINNET]: "mainnet",
  [SupportedChainId.RINKEBY]: "rinkeby",
  [SupportedChainId.PULSECHAINTESTNET]: "pulsechaintestnet"
};

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === "number") as SupportedChainId[];

export const MULTICALL_ADDRESS: { [index: string]: string } = {
  1: "0x3a2Bd96Da4B14C30918aE0fC0E784E2F56120F1d",
  4: "0x6c4f9282bBD29992bF4F064F0165e805336Eef59",
  941: "0x688EC8C059592104fC713E0dA9276e649302C4Ab"
};

export const NATIVE_TOKEN: { [index: number]: string } = {
  1: "ETH",
  4: "ETH",
  941: "tPLS"
};
