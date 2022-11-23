/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import cx from "clsx";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import { Button, Dialog } from "../../base";

import WalletModal from "../../../modals/WalletModal";

interface Web3ConnectProps {
  className?: string;
}

const Web3Connect = (props: Web3ConnectProps = { className: "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { active } = useWeb3React<Web3Provider>();

  useEffect(() => {
    if (active && isModalOpen) {
      toggleModal(false);
    }
  }, [active]);

  const toggleModal = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  return (
    <>
      <Button
        onClick={() => toggleModal(true)}
        className={props.className}
        variant="outline"
        color="green"
        size="md"
      >
        Connect Wallet
      </Button>
      <Dialog
        isOpen={isModalOpen}
        handleDismiss={() => toggleModal(false)}
        content={<WalletModal isModalOpen={isModalOpen} />}
      />
    </>
  );
};

export default Web3Connect;
