import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import React, { useEffect } from "react";

import { Dots, Typography } from "../../components";

import useToast from "../../hooks/useToast";
import { getErrorMessage } from "../../helpers/wallets";
import { ConnectorNames, connectorsByName } from "../../constants/wallets";

const WalletModal = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const { connector, activate, error } = useWeb3React<Web3Provider>();
  const { emitToast } = useToast();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();

  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  useEffect(() => {
    if (!!error) {
      emitToast(getErrorMessage(error), "error");
    }
  }, [error]);

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
          const connected = currentConnector === connector;
          const disabled = !!activatingConnector || connected || !!error;

          return (
            <div
              key={name}
              className="w-full flex p-3 rounded-lg items-center gap-6 transition-all duration-200 cursor-pointer bg-primary_white-200 dark:bg-primary_dark-200 hover:bg-primary_white-300 hover:dark:bg-primary_dark-300"
              onClick={() => {
                if (!disabled) {
                  setActivatingConnector(currentConnector);
                  activate(
                    connectorsByName[name as ConnectorNames],
                    (error) => {
                      if (error) {
                        setActivatingConnector(undefined);
                        emitToast(getErrorMessage(error), "error");
                      }
                    }
                  );
                }
              }}
            >
              <img
                src={`/images/wallets/${name.toLowerCase()}.png`}
                className="w-12 h-12 rounded-lg"
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
          {getErrorMessage(error)}
        </h4>
      )}
    </div>
  );
};

export default WalletModal;
