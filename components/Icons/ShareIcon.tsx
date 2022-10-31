import React from "react";

import { IconProps } from ".";

const ShareIcon = (props: IconProps) => {
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
        d="M16.96 6.16998C18.96 7.55998 20.34 9.76998 20.62 12.32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.18994 20.94C9.34994 21.53 10.6699 21.86 12.0599 21.86C13.3999 21.86 14.6599 21.56 15.7899 21.01"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.06 7.70001C13.5954 7.70001 14.84 6.45537 14.84 4.92001C14.84 3.38466 13.5954 2.14001 12.06 2.14001C10.5247 2.14001 9.28003 3.38466 9.28003 4.92001C9.28003 6.45537 10.5247 7.70001 12.06 7.70001Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.83005 19.92C6.3654 19.92 7.61005 18.6753 7.61005 17.14C7.61005 15.6046 6.3654 14.36 4.83005 14.36C3.2947 14.36 2.05005 15.6046 2.05005 17.14C2.05005 18.6753 3.2947 19.92 4.83005 19.92Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1699 19.92C20.7052 19.92 21.9499 18.6753 21.9499 17.14C21.9499 15.6046 20.7052 14.36 19.1699 14.36C17.6345 14.36 16.3899 15.6046 16.3899 17.14C16.3899 18.6753 17.6345 19.92 19.1699 19.92Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShareIcon;
