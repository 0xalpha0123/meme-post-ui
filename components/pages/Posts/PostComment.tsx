import React from "react";
import { Avatar } from "../../base";
import { DocumentTextIcon, EmojiHappyIcon, GalleryIcon } from "../../../icons";

interface PostCommentProps {
  avatar: string;
}

const PostComment = (props: PostCommentProps) => {
  return (
    <div className="w-full bg-white dark:bg-bg_dark rounded-xl">
      <div className="flex gap-3">
        <div className="flex items-start">
          <Avatar src={props.avatar} />
        </div>
        <div className="relative flex flex-col w-full">
          <input
            className="text-sm rounded block w-full p-2.5 pb-8 bg-primary_white-50 dark:bg-primary_dark-50 border border-primary_white-200 dark:border-primary_dark-200 text-primary_white-700 dark:text-primary_dark-700 placeholder-primary_white-200 dark:placeholder-primary_dark-200 focus:border-primary_white-300 dark:focus:border-primary_dark-300 focus:outline-none dark:focus:outline-none"
            placeholder="Write a comment"
          />
          <div className="flex gap-3 justify-end absolute right-3 bottom-3 text-primary_white-400 dark:text-primary_dark-400">
            <DocumentTextIcon className="cursor-pointer" />
            <GalleryIcon className="cursor-pointer" />
            <EmojiHappyIcon className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
