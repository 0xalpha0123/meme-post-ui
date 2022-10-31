import React, { MouseEventHandler } from "react";

import { getInitName } from "../../helpers/stringUtils";

interface AvatarProps {
  style?: string;
  size?: 64 | 48 | 40 | 36 | 32 | 28 | 24 | 20 | 16;
  type?: string;
  avatar?: string;
  username?: string;
  status?: true | false;
  className?: string;
  onClick?: MouseEventHandler;
}

const Avatar = (props: AvatarProps) => {
  const size = props.size || 48;
  const style = props.style || "square";
  const type = props.type || "initials";
  const username = props.username || "Guest";
  const callback = props.onClick || function () {};
  const textSize = {
    16: "xs",
    20: "sm",
    24: "sm",
    28: "base",
    32: "base",
    36: "base",
    40: "lg",
    48: "xl",
    64: "2xl",
  };
  const avatarSizes = {
    16: "w-4 h-4",
    20: "w-5 h-5",
    24: "w-6 h-6",
    28: "w-7 h-7",
    32: "w-8 h-8",
    36: "w-9 h-9",
    40: "w-10 h-10",
    48: "w-12 h-12",
    64: "w-16 h-16",
  };
  const statusSizes = {
    16: "top-4 w-1 h-1",
    20: "top-4 w-1.5 h-1.5",
    24: "top-5 w-2 h-2",
    28: "top-6 w-2 h-2",
    32: "top-7 w-2.5 h-2.5",
    36: "top-8 w-2.5 h-2.5",
    40: "top-9 w-3 h-3",
    48: "top-10 w-3 h-3",
    64: "top-14 w-3.5 h-3.5",
  };
  const avatarClass = `${avatarSizes[size]} ${
    style === "circle" ? "rounded-full" : "rounded-md"
  } ${!!props.className && props.className}`;
  const statusClass = `${
    style === "square" ? "-right-1" : size === 64 ? "right-2" : "right-1"
  } ${
    props.status
      ? "bg-custom-green border-green-500"
      : "bg-red-400 border-red-500"
  } ${statusSizes[size]}`;
  const fontSize = `text-${textSize[size]}`;

  return (
    <button onClick={callback} className="relative">
      {type === "image" && !!props.avatar && (
        <img className={avatarClass} src={props.avatar} alt="" />
      )}
      {type === "initials" && (
        <div
          className={`flex items-center justify-center text-gray-200 bg-gradient-to-tr from-[#C14BFF] to-[#5C8FFF] ${avatarClass} ${fontSize}`}
        >
          {getInitName(username)}
        </div>
      )}
      {props.status !== undefined && (
        <span
          className={`absolute transform -translate-y-1/2 border-2 rounded-full ${statusClass}`}
        ></span>
      )}
    </button>
  );
};

export default Avatar;
