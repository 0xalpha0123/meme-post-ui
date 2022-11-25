/* eslint-disable no-unused-vars */
import { UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";

import { ChainId, NetworksInfo, WALLET_ERROR } from "../constants/network";

const switchRequest = (chain: ChainId) => {
  const info = getChainInfo(chain);
  return (window as any).ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: info.chainId }],
  });
};

const addChainRequest = (chain: ChainId) => {
  const { chainId, chainName, rpcUrls, blockExplorerUrls, nativeCurrency } =
    getChainInfo(chain);

  return (window as any).ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId,
        chainName,
        rpcUrls,
        blockExplorerUrls,
        nativeCurrency,
      },
    ],
  });
};

export const swithNetwork = async (chain = ChainId.MUMBAI) => {
  if ((window as any).ethereum) {
    try {
      await switchRequest(chain);
    } catch (error: any) {
      if (error.code === 4902) {
        try {
          await addChainRequest(chain);
          await switchRequest(chain);
        } catch (addError) {
          console.log(error);
        }
      }
      console.log(error);
    }
  }
};

export const getChainInfo = (chain: ChainId) => {
  const info = NetworksInfo[chain];
  if (!info) {
    throw Error("Chain don't support");
  }
  return info;
};

export function getErrorMessage(error: Error): {
  msg: string;
  code: WALLET_ERROR;
} {
  if (error instanceof NoEthereumProviderError) {
    return {
      msg: "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.",
      code: WALLET_ERROR.INSTALL_METAMASK,
    };
  } else if (error instanceof UnsupportedChainIdError) {
    return {
      msg: "You're connected to an unsupported network.",
      code: WALLET_ERROR.UNSUPPORTED_NETWORK,
    };
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect ||
    error instanceof UserRejectedRequestErrorFrame
  ) {
    return {
      msg: "Please authorize this website to access your Ethereum account.",
      code: WALLET_ERROR.CONNECT_WALLET,
    };
  } else {
    console.error(error);
    return {
      msg: "An unknown error occurred. Check the console for more details.",
      code: WALLET_ERROR.UNKNOWN,
    };
  }
}
