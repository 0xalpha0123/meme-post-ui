import React from "react";

import { IconProps } from "../../Interfaces/Icon";

const MoonIcon = (props: IconProps) => {
  const size = props.size || "w-4 h-4";
  const className = props.className || "";

  return (
    <svg
      className={`${size} ${className}`}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.14002C8.97009 5.84002 9.24009 4.61002 9.73009 3.49002C10.2701 2.25002 9.62009 1.66002 8.37009 2.19002C4.41009 3.86002 1.70009 7.85002 2.03009 12.42Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MoonIcon;
