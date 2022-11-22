/* eslint-disable no-unused-vars */
export enum ChainId {
  MAINNET = 1,
  GÖRLI = 5,
  POLYGON = 137,
  MUMBAI = 80001,
  LOCALHOST = 31337,
}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: "Ethereum",
  [ChainId.GÖRLI]: "Görli",
  [ChainId.POLYGON]: "Polygon",
  [ChainId.MUMBAI]: "Mumbai",
  [ChainId.LOCALHOST]: "Localhost",
};
