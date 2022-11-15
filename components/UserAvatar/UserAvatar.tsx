import React from "react";
import Avatar from "../Avatar";
import Typography from "../Typography";

interface UserAvatarProps {
  size?: 64 | 48 | 40 | 36 | 32 | 28 | 24 | 20 | 16;
  username: string;
  subtitle?: string;
  avatar?: string;
  className?: string;
  status?: true | false;
  usernameSize?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "text"
    | "textBold"
    | "subtitle"
    | "subtitleBold"
    | "button"
    | "miniButton"
    | "description"
    | "miniDescription";
  subtitleSize?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "text"
    | "textBold"
    | "subtitle"
    | "subtitleBold"
    | "button"
    | "miniButton"
    | "description"
    | "miniDescription";
}

const UserAvatar = (props: UserAvatarProps) => {
  const size = props.size || 40;
  const username = props.username;
  const imageUrl = props.avatar || "";
  const className = props.className || "";
  const status = props.status;
  const subtitle = props.subtitle || "";
  const usernameSize = props.usernameSize || "textBold";
  const subtitleSize = props.subtitleSize || "miniButton";

  return (
    <div className="flex cursor-pointer animate duration-300">
      <Avatar
        username={username}
        type={!!imageUrl ? "image" : "initials"}
        style="circle"
        size={size}
        avatar={imageUrl}
        className={className}
        status={status}
      />
      <div className="flex flex-col gap-1 ml-2 my-auto">
        <Typography
          size={usernameSize}
          text={username}
          textColor="text-primary_white-1000 dark:text-primary_dark-1000"
        />
        <Typography
          size={subtitleSize}
          text={subtitle}
          textColor="text-primary_white-300 dark:text-primary_dark-300"
        />
      </div>
    </div>
  );
};

export default UserAvatar;
