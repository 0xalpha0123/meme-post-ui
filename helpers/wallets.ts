/* eslint-disable no-unused-vars */
import { UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";

export enum WALLET_ERROR {
  INSTALL_METAMASK,
  UNSUPPORTED_NETWORK,
  CONNECT_WALLET,
  UNKNOWN,
}

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
