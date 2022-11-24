import React from "react";
import Link from "next/link";
import { Avatar, Button, Input } from "../../base";
import { GalleryIcon, MessageIcon, VideoIcon } from "../../../icons";

interface PostProps {
  avatar: string;
  className?: string;
}

export interface Post {
  username?: string;
  avatar?: string;
  status?: true | false;
  text: string;
  image?: string;
  commenters: User[];
  share_number: number;
}

export interface User {
  username?: string;
  avatar?: string;
}

const Post = (props: PostProps) => {
  const imageUrl = props.avatar;
  const className = props.className || "";

  return (
    <div
      className={`w-full rounded border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark p-5 ${className}`}
    >
      <div className="flex gap-3 items-center">
        <Avatar src={imageUrl} size="12" />
        <Input placeHolder="What are you thinking?" />
      </div>
      <div className="flex w-full mt-4 justify-between">
        <div className="flex items-center gap-3 text-xs text-primary_white-300 dark:text-primary_dark-300">
          <Link href="/">
            <div className="flex gap-1 cursor-pointer">
              <VideoIcon />
              Live Video
            </div>
          </Link>
          <Link href="/">
            <div className="flex gap-1 cursor-pointer">
              <GalleryIcon />
              Photo/Video
            </div>
          </Link>
          <Link href="/">
            <div className="flex gap-1 cursor-pointer">
              <MessageIcon />
              Feeling
            </div>
          </Link>
        </div>
        <Button size="md" color="green" className="px-8">
          Post
        </Button>
      </div>
    </div>
  );
};

export default Post;
