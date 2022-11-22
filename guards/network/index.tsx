import React, { FC, ReactElement } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";

import { Typography } from "../../components";

import { ChainId, NETWORK_LABEL } from "../../constants/network";

interface NetworkGuardProps {
  networks: ChainId[];
  children?: ReactElement;
}

const Component: FC<NetworkGuardProps> = ({
  children,
  networks = [],
}: NetworkGuardProps) => {
  const { chainId, account, error } = useWeb3React();
  const isInValid =
    error instanceof UnsupportedChainIdError ||
    (!!chainId && !!account && !networks.includes(chainId));
  return (
    <>
      {isInValid && (
        <div className="fixed -z-50 inset-0 overflow-y-auto">
          <div className="relative flex items-center justify-center min-h-screen text-center block">
            <div className="fixed inset-0 bg-black bg-opacity-40 transition backdrop-filter backdrop-blur-[3px] backdrop-opacity-100">
              <div className="fixed inset-0 mb-[20vw] ml-auto bg-pink bg-opacity-40 w-[60vw] z-0 filter blur-[400px] rounded-full" />
              <div className="fixed inset-0 mt-[20vw] mr-auto bg-blue bg-opacity-40 w-[60vw] z-0 filter blur-[400px] rounded-full" />
            </div>
            <span
              className="inline-block align-middle h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom rounded-lg text-left overflow-hidden transform  sm:my-8 sm:align-middle max-w-sm md:max-w-3xl sm:w-full p-4 sm:p-6">
              <div className="flex flex-col gap-7 justify-center"></div>
              <Typography
                size="h5"
                text={`This feature is not supported on ${
                  NETWORK_LABEL[chainId as ChainId] || "current network"
                }`}
                textColor="text-primary_white-400 dark:text-primary_dark-400"
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
      {!isInValid && children}
    </>
  );
};

const NetworkGuard = (networks: ChainId[]) => {
  // eslint-disable-next-line react/display-name
  return ({ children }: any) => (
    <Component networks={networks}>{children}</Component>
  );
};

export default NetworkGuard;
