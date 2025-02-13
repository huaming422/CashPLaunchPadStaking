import Web3 from "web3";
import CashPrinter from "../abi/CashPrinter.json";
import CashPrinterStaking from "../abi/Staking.json";
import CashPStakingPulseChain from "../abi/CashPrinterStakingPulseChain.json";
import { ankrRpc, STAKE_ADDRESSES } from "../../constants";
import { isMetaMaskInstalled } from "../../utils/helper";
import config from "../../utils/config";

export const erc20TokenContract = (chainId, tokenAddress, library) => {
  const abi = CashPrinter;
  const connection = getCurrentConnection(chainId, abi, tokenAddress);
  return connection;
};

export const stakeContract = (chainId) => {
 if (chainId?.toString() === config.plsChainMainnet?.toString()) {
    const address = STAKE_ADDRESSES?.[chainId];
    const abi = CashPStakingPulseChain;
    const connection = getCurrentConnection(chainId, abi, address);
    return connection;
  } else if (chainId?.toString() === config.plsChainTestnet?.toString()) {
    const address = STAKE_ADDRESSES?.[chainId];

    const abi = CashPrinterStaking;
    const connection = getCurrentConnection(chainId, abi, address);
    return connection;
  } else if (chainId?.toString() === config.rinkeby?.toString()) {
    const address = STAKE_ADDRESSES?.[chainId];
    const abi = CashPrinterStaking;
    const connection = getCurrentConnection(chainId, abi, address);
    return connection;
  } else {
    const address = STAKE_ADDRESSES?.[1];
    const abi = CashPrinterStaking;
    const connection = getCurrentConnection(1, abi, address);
    return connection;
  }
};

const getCurrentConnection = (chainId, abi, contractAddress) => {
  const _ankrRpc = ankrRpc?.[chainId];

  const web3 = isMetaMaskInstalled()
    ? new Web3(window.ethereum)
    : new Web3(
        new Web3.providers.HttpProvider(_ankrRpc ? _ankrRpc : ankrRpc[1])
      );
  return new web3.eth.Contract(abi, contractAddress);
};
