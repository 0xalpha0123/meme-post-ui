import {
  injected,
  network,
  walletconnect,
  walletlink,
  ledger,
  trezor,
  lattice,
  frame,
  authereum,
  fortmatic,
  magic,
  portis,
  torus,
} from "../helpers/connectors";

/* eslint-disable no-unused-vars */

export enum ChainId {
  MAINNET = 1,
  POLYGON = 137,
  MUMBAI = 80001,
}

export enum WALLET_ERROR {
  INSTALL_METAMASK,
  UNSUPPORTED_NETWORK,
  CONNECT_WALLET,
  UNKNOWN,
}

export enum ConnectorNames {
  Injected = "Injected",
  Network = "Network",
  WalletConnect = "WalletConnect",
  WalletLink = "WalletLink",
  Ledger = "Ledger",
  Trezor = "Trezor",
  Lattice = "Lattice",
  Frame = "Frame",
  Authereum = "Authereum",
  Fortmatic = "Fortmatic",
  Magic = "Magic",
  Portis = "Portis",
  Torus = "Torus",
}

export const DEFAULD_NETWORK = ChainId.MUMBAI;

export const AVAILABLE_CHAINS = [
  ChainId.MAINNET,
  ChainId.POLYGON,
  ChainId.MUMBAI,
];

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: "Ethereum",
  [ChainId.POLYGON]: "Polygon",
  [ChainId.MUMBAI]: "Mumbai",
};

export const NetworksInfo = {
  [ChainId.POLYGON]: {
    chainId: "0x89",
    chainName: "Polygon Mainnet",
    shortName: "Polygon",
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    img: "/images/chains/matic.png",
  },
  [ChainId.MUMBAI]: {
    chainId: "0x13881",
    chainName: "Mumbai",
    shortName: "Mumbai",
    rpcUrls: ["https://matic-mumbai.chainstacklabs.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    img: "/images/chains/matic.png",
  },
  [ChainId.MAINNET]: {
    chainId: "0x1",
    chainName: "Ethereum",
    shortName: "ETH",
    rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    blockExplorerUrls: ["https://etherscan.io"],
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    img: "/images/chains/eth.png",
  },
};

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.Torus]: torus,
  [ConnectorNames.Ledger]: ledger,
  [ConnectorNames.Trezor]: trezor,
  [ConnectorNames.Authereum]: authereum,
  [ConnectorNames.Network]: network,
  [ConnectorNames.WalletLink]: walletlink,
  [ConnectorNames.Lattice]: lattice,
  [ConnectorNames.Frame]: frame,
  [ConnectorNames.Fortmatic]: fortmatic,
  [ConnectorNames.Magic]: magic,
  [ConnectorNames.Portis]: portis,
};
