import React from "react";

import { Avatar, Typography } from "../../base";

interface UserAvatarProps {
  size?: "28" | "24" | "20" | "16" | "14" | "12" | "8" | "6" | "4";
  name: string;
  subtitle?: string;
  src?: string;
  className?: string;
  status?: string;
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
  const size = props.size;
  const name = props.name;
  const imageUrl = props.src;
  const className = props.className || "";
  const status = props.status;
  const subtitle = props.subtitle || "";
  const usernameSize = props.usernameSize || "textBold";
  const subtitleSize = props.subtitleSize || "miniButton";

  return (
    <div className="flex cursor-pointer transition duration-100">
      <Avatar
        name={name}
        size={size}
        src={imageUrl}
        className={className}
        dot={status}
      />
      <div className="flex flex-col gap-1 ml-2 my-auto">
        <Typography
          size={usernameSize}
          text={name}
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
