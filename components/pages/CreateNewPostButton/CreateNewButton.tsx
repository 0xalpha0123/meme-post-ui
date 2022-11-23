import React, { useState } from "react";

import { Button, Dialog } from "../../base";
import CreatePost from "../../../modals/CreatePost";

const CreateNewPostButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  return (
    <>
      <Button onClick={() => toggleModal(true)} variant="outline" color="green">
        Create New{" "}
      </Button>
      <Dialog
        isOpen={isModalOpen}
        handleDismiss={() => toggleModal(false)}
        content={
          <CreatePost
            handleCreate={() => toggleModal(false)}
            handleDismiss={() => toggleModal(false)}
          />
        }
        width="max-w-2xl"
      />
    </>
  );
};

export default CreateNewPostButton;
