import React from "react";
import cx from "clsx";

import { IconProps } from "./";

const DocumentLikeIcon = (props: IconProps) => {
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
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.48014 15.49C7.15014 14.46 7.54011 13.19 8.61011 12.84C9.18011 12.66 9.88012 12.81 10.2701 13.36C10.6401 12.79 11.3701 12.66 11.9301 12.84C13.0101 13.19 13.3901 14.46 13.0701 15.49C12.5601 17.12 10.7701 17.9699 10.2701 17.9699C9.78012 17.9599 8.01014 17.13 7.48014 15.49Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DocumentLikeIcon;
