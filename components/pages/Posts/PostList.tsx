import React from "react";

import PostAction from "./PostAction";
import PostComment from "./PostComment";
import UserAvatar from "../UserAvatar";
import { AvatarGroup, Divider, Typography } from "../../base";

import { DotsHorizondalIcon } from "../../../icons";

import { Post } from "./Post";

export interface PostListProps {
  posts: Post[];
}

const PostList = (props: PostListProps) => {
  const posts = props.posts;

  <div className="flex flex-col gap-12 items-center transition duration-100"></div>;
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post, i) => (
        <div
          key={i}
          className="flex flex-col gap-4 w-full rounded px-12 py-10 border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark"
        >
          <div className="w-full flex justify-between">
            <UserAvatar
              name={post.username || "Guest"}
              subtitle="2mins ago"
              src={post.avatar}
              size="12"
              usernameSize="subtitle"
              subtitleSize="description"
              // status={post.status}
            />
            <DotsHorizondalIcon className="cursor-pointer text-primary_white-400 dark:text-primary_dark-400" />
          </div>
          <Typography
            text={post.text}
            textColor="text-primary_white-600 dark:text-primary_dark-600"
            size="text"
          />
          {post.image && <img src={post.image} className="rounded-xl py-3" />}
          <div className="flex justify-between">
            <AvatarGroup
              users={post.commenters.slice(0, 3).map((comment) => ({
                ...comment,
                style: "circle",
                type: "image",
                avatar: comment.avatar,
              }))}
              space="-space-x-3"
              overflow="+3"
            />
            <div className="flex gap-3 items-center">
              <Typography
                text={`${post.commenters.length} Comments`}
                textColor="text-primary_white-400 dark:text-primary_dark-400"
              />
              <Typography
                text={`${post.share_number} Share`}
                textColor="text-primary_white-400 dark:text-primary_dark-400"
              />
            </div>
          </div>
          <Divider className="w-full h-[1px] mx-auto bg-bg_white_secondary dark:bg-bg_dark_secondary" />
          <PostAction />
          <Divider className="w-full h-[1px] mx-auto bg-bg_white_secondary dark:bg-bg_dark_secondary" />
          <PostComment avatar="https://i.postimg.cc/tJW40Lpy/Ellipse-536.png" />
        </div>
      ))}
    </div>
  );
};

export default PostList;
