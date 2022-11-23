import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import React from "react";

import { Button, Dots, Typography } from "../../components";

import useToast from "../../hooks/useToast";
import {
  ConnectorNames,
  connectorsByName,
  WALLET_ERROR,
} from "../../constants/network";
import { getErrorMessage, swithNetwork } from "../../helpers/network";

export const handleError = (error: any) => {
  const { emitToast } = useToast();
  emitToast(
    <>
      {getErrorMessage(error).code === WALLET_ERROR.INSTALL_METAMASK && (
        <p>
          No Ethereum browser extension detected, install{" "}
          <a
            className="text-yellow-400"
            href="https://metamask.io/"
            target="__blank"
          >
            MetaMask
          </a>{" "}
          on desktop or visit from a dApp browser on mobile.
        </p>
      )}
      {getErrorMessage(error).code === WALLET_ERROR.UNSUPPORTED_NETWORK && (
        <div>
          <div className="flex gap-3 items-center">
            You&apos;re connected to an unsupported network.
          </div>
          <div className="flex justify-end mt-2">
            <Button onClick={() => swithNetwork()} size="xs">
              Switch Network
            </Button>
          </div>
        </div>
      )}
      {getErrorMessage(error).code === WALLET_ERROR.UNKNOWN && (
        <p>An unknown error occurred. Check the console for more details.</p>
      )}
      {getErrorMessage(error).code === WALLET_ERROR.CONNECT_WALLET && (
        <p>Please authorize this website to access your Ethereum account.</p>
      )}
    </>,
    "error"
  );
};

const WalletModal = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const { connector, error, activate } = useWeb3React<Web3Provider>();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();

  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  return (
    <div className="w-full flex flex-col gap-3">
      <Typography
        text="Connect Wallet"
        size="h6"
        textColor="text-primary_white-600 dark:text-primary_dark-600"
        className="mb-4"
      />
      {Object.keys(connectorsByName)
        .filter((item, index) => index < 6)
        .map((name) => {
          const currentConnector: any =
            connectorsByName[name as ConnectorNames];
          const activating = currentConnector === activatingConnector;

          return (
            <div
              key={name}
              className="w-full flex p-3 rounded items-center gap-6 transition-all duration-200 cursor-pointer bg-primary_white-200 dark:bg-primary_dark-200 hover:bg-primary_white-300 hover:dark:bg-primary_dark-300"
              onClick={() => {
                setActivatingConnector(currentConnector);
                activate(connectorsByName[name as ConnectorNames], (error) => {
                  if (error) {
                    setActivatingConnector(undefined);
                    handleError(error);
                  }
                });
              }}
            >
              <img
                src={`/images/wallets/${name.toLowerCase()}.png`}
                className="w-12 h-12 rounded"
              />
              <div className="flex flex-col">
                <Typography
                  text={name === "Injected" ? "MetaMask" : name}
                  size="h6"
                  textColor="text-primary_white-800 dark:text-primary_dark-800"
                />
                {name === "Injected" && (
                  <Typography
                    text={
                      activating && isModalOpen ? (
                        <Dots>Connecting</Dots>
                      ) : (
                        "Easy-to-use browser extension."
                      )
                    }
                    size="description"
                    textColor="text-primary_white-600 dark:text-primary_dark-600"
                  />
                )}
              </div>
            </div>
          );
        })}
      {!!error && (
        <h4 style={{ marginTop: "1rem", marginBottom: "0" }}>
          {getErrorMessage(error).msg}
        </h4>
      )}
    </div>
  );
};

export default WalletModal;
