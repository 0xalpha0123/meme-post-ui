import React from "react";

import { IconProps } from "../../Interfaces/Icon";

const ExportIcon = (props: IconProps) => {
  const size = props.size || "w-4 h-4";
  const className = props.className || "";

  return (
    <svg
      className={`${size} ${className}`}
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 11L21.2 2.79999"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6.8V2H17.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ExportIcon;
