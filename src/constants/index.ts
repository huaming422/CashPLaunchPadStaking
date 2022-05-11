const testing = false;
export const currentConnection = testing ? "testnet" : "mainnet";

export const STAKE_ADDRESSES: { [index: number]: string } = {
  1: "0x1b46b72c5280f30Fbe8A958B4f3c348FD0fD2E55",
  4: "0xA5c2186CFb734828EE89a4087FD571F12Af1E895", // rinkeby testnet
  9411: "0x7a1238cba81de51158c150ffb48a2dba14b987bd", //pulse mainnet
  941: "0x7a1238cba81de51158c150ffb48a2dba14b987bd", // pulse testnet,
};

// stake contract addresses
export const stakeContractAdrresses = {
  ethereum:
    currentConnection === "mainnet"
      ? "0x1b46b72c5280f30Fbe8A958B4f3c348FD0fD2E55"
      : "0x7678f0AF7304e01554E2D49D96E55C8de4975c66",
  pulseChain:
    currentConnection === "mainnet"
      ? "0x7a1238cba81de51158c150ffb48a2dba14b987bd"
      : "0x7a1238cba81de51158c150ffb48a2dba14b987bd",
};

export const tokenAddresses = {
  CashP: {
    1: "0x298d492e8c1d909D3F63Bc4A36C66c64ACB3d695", // mainnet
    4: "0x0D6ae2a429df13e44A07Cd2969E085e4833f64A0", // rinkeby
    9411: "0x0D6ae2a429df13e44A07Cd2969E085e4833f64A0", //  pulse mainnet
    941: "0x6024ca0b7c12846a396a5d860ff885233ef16dd0", // pulse testnet
  }
};

export const tokenContarctAddresses = {
  ethereum: {
    CashP:
      currentConnection === "mainnet"
        ? "0x298d492e8c1d909D3F63Bc4A36C66c64ACB3d695"
        : "0x0D6ae2a429df13e44A07Cd2969E085e4833f64A0",
  },
  pulse: {
    CashP:
      currentConnection === "mainnet"
        ? "0xfc649ce83d2b25086bf645ca88a9621b5e8a36fa"
        : "0xfc649ce83d2b25086bf645ca88a9621b5e8a36fa",
  }
};

export const CashP = "CashP";

export const tokenLogo = {
  CashP: "img/symbol.png"
};

export const tokenName = {
  CashP: "CashPrinter"
};

export const tokenInfo = {
  CashP: {
    1: {
      buy: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x298d492e8c1d909d3f63bc4a36c66c64acb3d695",
      info: "https://www.coingecko.com/en/coins/polkabridge",
    },
    4: {
      buy: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x298d492e8c1d909d3f63bc4a36c66c64acb3d695",
      info: "https://www.coingecko.com/en/coins/polkabridge",
    },
    941: {
      buy: "https://google.com",
      info: "https://www.coingecko.com",
    },
    9411: {
      buy: "https://google.com",
      info: "https://www.coingecko.com",
    },
  }
};

//given token name and network, --> poolId
export const poolId: { [index: string]: number } = {
  CashP: 0
};

export const apyConstants = {
  ethereum: {
    CashP: {
      NUMBER_BLOCKS_PER_YEAR: 2400000,
      AVG_REWARD_PER_BLOCK: 1, //0.7
    },
  },
  pulseChain: {
    CashP: {
      NUMBER_BLOCKS_PER_YEAR: 43200 * 365,
      AVG_REWARD_PER_BLOCK: 0.25,
    },
  }
};

export const coingeckoTokenId = {
  CashP: "polkabridge"
};

export const etheriumNetwork = "ethereum";
export const pulseChainNetwork = "pulseChain";

export const etherConfig = {
  network_id: {
    mainet: "1",
    rinkeby: "4",
  },
};

export const supportedChainIds = [
  1,
  4,
  9411, //harmony mainnet
  941, // harmony testnet,
];



export const pulseConfig = {
  chainId: {
    mainnet: "9411",
    testnet: "941",
  },
};
export const claimTokens = "1";

export const supportedNetworks = ["1", "4", "941", "9411"];

export const supportedStaking = {
  1: [CashP],
  4: [CashP],
  941: [CashP],
  9411: [CashP],
};

export const unsupportedStaking = {
  1: [],
  4: [],
  941: [],
  9411: []
};

export const minimumStakingAmount = {
  CashP: 1
};

export const ankrRpc = {
  1: "https://rpc.ankr.com/eth",
  4: "https://rinkeby.infura.io/v3/538f6602a3474dfab48d5e4728f98d13",
  941: "https://rpc.v2b.testnet.pulsechain.com",
};

export const NetworkContextName = "NETWORK";

export const TOKEN_ALLOWANCE_ALLOWANCE = "999999999";
export const CORGIB_ALLOWANCE_ALLOWANCE =
  "999999999999999999999999999999999999";
