import React from "react";

import { Button, DragDropZone, Input, Typography } from "../../components";

const CreatePost = ({
  handleCreate,
  handleDismiss,
}: {
  handleCreate: () => void;
  handleDismiss: () => void;
}) => {
  return (
    <div className="w-full flex flex-col gap-3 px-6 py-3 items-center">
      <Typography
        text="Create New Post"
        size="h6"
        textColor="text-primary_white-600 dark:text-primary_dark-600"
        className="mb-4"
      />
      <DragDropZone height="h-72" />
      <Input placeHolder="Please type title here" label="Title" />
      <div className="border transition-all duration-100 focus:transition-none text-sm rounded block w-full p-2.5 bg-primary_white-50 dark:bg-primary_dark-50 border-primary_white-200 dark:border-primary_dark-200 text-primary_white-700 dark:text-primary_dark-700 placeholder-primary_white-200 dark:placeholder-primary_dark-200 focus:border-primary_white-300 dark:focus:border-primary_dark-300 focus:outline-none dark:focus:outline-none h-[100px]">
        Discription
      </div>
      <Input placeHolder="Please select category here" label="Category" />
      <div className="w-full flex gap-3 mt-10 justify-end">
        <Button color="green" variant="outline" onClick={handleCreate}>
          Create
        </Button>
        <Button onClick={handleDismiss}>Cancel</Button>
      </div>
    </div>
  );
};

export default CreatePost;
