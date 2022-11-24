import React from "react";
import { Typography } from "../../base";
import { MessageIcon, ShareIcon, ThumbUpIcon } from "../../../icons";

const PostAction = () => {
  return (
    <div className="flex justify-between px-10">
      <Typography
        text={
          <div className="flex gap-1 justify-center">
            <ThumbUpIcon />
            Like
          </div>
        }
        className="cursor-pointer"
        textColor="text-primary_white-400 dark:text-primary_dark-400"
      />
      <Typography
        text={
          <div className="flex gap-1 justify-center">
            <MessageIcon />
            Comments
          </div>
        }
        className="cursor-pointer"
        textColor="text-primary_white-400 dark:text-primary_dark-400"
      />
      <Typography
        text={
          <div className="flex gap-1 justify-center">
            <ShareIcon />
            Share
          </div>
        }
        className="cursor-pointer"
        textColor="text-primary_white-400 dark:text-primary_dark-400"
      />
    </div>
  );
};

export default PostAction;
