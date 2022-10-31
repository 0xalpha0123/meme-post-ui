import React from "react";

import { IconProps } from "../../Interfaces/Icon";

const CloseIcon = (props: IconProps) => {
  const size = props.size || "w-4 h-4";
  const className = props.className || "";

  return (
    <svg
      className={`${size} ${className}`}
      stroke="currentColor"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.16998 6.83L6.83 1.17004"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.83 6.83L1.16998 1.17004"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
