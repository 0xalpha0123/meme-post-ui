import React from "react";
import cx from "clsx";

import { IconProps } from "./";

const VideoIcon = (props: IconProps) => {
  const size = props.size || "w-4 h-4";
  const className = props.className || "";

  return (
    <svg
      className={cx(size, className)}
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.53 20.42H6.21C3.05 20.42 2 18.32 2 16.21V7.79002C2 4.63002 3.05 3.58002 6.21 3.58002H12.53C15.69 3.58002 16.74 4.63002 16.74 7.79002V16.21C16.74 19.37 15.68 20.42 12.53 20.42Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.52 17.1L16.74 15.15V8.84001L19.52 6.89001C20.88 5.94001 22 6.52001 22 8.19001V15.81C22 17.48 20.88 18.06 19.52 17.1Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default VideoIcon;
