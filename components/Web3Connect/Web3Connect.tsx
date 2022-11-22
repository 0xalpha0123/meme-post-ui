/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import Button from "../Button";
import Dialog from "../Dialog";
import Dots from "../Dots";
import Typography from "../Typography";

import useToast from "../../hooks/useToast";
import { getErrorMessage } from "../../helpers/wallets";

import { ConnectorNames, connectorsByName } from "../../constants/wallets";

interface Web3ConnectProps {
  className?: string;
}

const Web3Connect = (props: Web3ConnectProps = { className: "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { emitToast } = useToast();
  const { connector, activate, deactivate, active, error } =
    useWeb3React<Web3Provider>();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  useEffect(() => {
    if (active && isModalOpen) {
      toggleModal(false);
    }
  }, [active]);

  useEffect(() => {
    if (!!error) {
      emitToast(getErrorMessage(error), "error");
    }
  }, [error]);

  const content = () => {
    return (
      <div className="w-full flex flex-col gap-3">
        <Typography
          text="Connect Wallet"
          size="h5"
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
                className={`w-full flex p-3 rounded-lg items-center gap-6 transition-all duration-200 cursor-pointer bg-primary_white-200 dark:bg-primary_dark-200 hover:bg-primary_white-300 hover:dark:bg-primary_dark-300`}
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

  const toggleModal = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  return (
    <>
      <Button
        component="Connect Wallet"
        onClick={() => toggleModal(true)}
        customClass={`border-2 border-secondary bg-transparent dark:bg-transparent hover:bg-transparent hover:dark:bg-transparent text-secondary ${props.className}`}
      />
      <Dialog
        isOpen={isModalOpen}
        handleDismiss={() => toggleModal(false)}
        content={content()}
      />
    </>
  );
};

export default Web3Connect;
