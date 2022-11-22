import React, { useState } from "react";
import cx from "clsx";

import { Typography } from "../../base";
import { GalleryIcon } from "../../../icons";

const DragDropZone = ({ height }: { height: string }) => {
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [files, setFile] = useState<any>([]);
  const [message, setMessage] = useState<string>();

  // use to check if a file is being dragged
  const hasFiles = ({ dataTransfer: { types = [] } }) =>
    (types as string[]).indexOf("Files") > -1;

  // only react to actual files being dragged
  function dragEnterHandler(e: any) {
    e.preventDefault();
    if (!hasFiles(e)) {
      return;
    }
    setIsDrag(true);
  }

  function dragLeaveHandler() {
    setIsDrag(false);
  }

  // reset counter and append file to gallery when file is dropped
  function dropHandler(e: any) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const fileType = file["type"];
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (validImageTypes.includes(fileType)) {
      setFile([file]);
    } else {
      setMessage("only images accepted");
    }
  }

  const handleFile = (e: any) => {
    setMessage("");
    const file = e.target.files[0];
    const fileType = file["type"];
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (validImageTypes.includes(fileType)) {
      setFile([file]);
    } else {
      setMessage("only images accepted");
    }
  };

  const removeImage = () => {
    setFile([]);
    setIsDrag(false);
  };

  return (
    <>
      <div
        className={cx(
          "flex flex-col gap-3 w-full relative items-center cursor-pointer rounded-xl border border-dashed border-bg_white_secondary dark:border-bg_dark_secondary hover:cursor-pointer",
          height
        )}
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
      >
        {files.length === 0 ? (
          <>
            <input
              type="file"
              onChange={handleFile}
              className="h-full w-full opacity-0 z-10 absolute inset-0"
              multiple={false}
              name="files[]"
            />
            <div
              className={cx(
                "h-full w-full absolute z-1 flex flex-col gap-3 justify-center items-center top-0",
                isDrag ? "blur-md" : ""
              )}
            >
              <GalleryIcon size="w-8 h-8 text-secondary" />
              <Typography
                text={
                  <>
                    Drop your image here, or{" "}
                    <span className="text-secondary">browse</span>
                  </>
                }
                textColor="text-primary_white-600 dark:text-primary_dark-600"
                size="description"
              />
              <Typography
                text={<>JPG,PNG and GIF files are allowed</>}
                textColor="text-primary_white-600 dark:text-primary_dark-600"
                size="miniDescription"
              />
            </div>
            <div
              className={cx(
                "h-full w-full absolute z-1 flex flex-col gap-3 justify-center items-center top-0",
                isDrag ? "block" : "hidden"
              )}
            >
              <Typography
                text={
                  <>
                    Drop your images here to{" "}
                    <span className="text-secondary">UPLOAD</span>
                  </>
                }
                textColor="text-primary_white-600 dark:text-primary_dark-600"
                size="description"
              />
            </div>
          </>
        ) : (
          <img
            src={URL.createObjectURL(files[0])}
            onClick={removeImage}
            className="h-full w-full z-10 absolute inset-0 rounded-lg"
          />
        )}
      </div>
      <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
        {message}
      </span>
    </>
  );
};

export default DragDropZone;
