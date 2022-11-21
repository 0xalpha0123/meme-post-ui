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

export const NetworkContextName = "NETWORK";
