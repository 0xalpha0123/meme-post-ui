import React from "react";
import cx from "clsx";

import { IconProps } from "./";

const PeopleIcon = (props: IconProps) => {
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
        d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9702 14.44C18.3402 14.67 19.8502 14.43 20.9102 13.72C22.3202 12.78 22.3202 11.24 20.9102 10.3C19.8402 9.59004 18.3102 9.35003 16.9402 9.59003"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.46997 11.9101 9.46997C13.3401 9.46997 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PeopleIcon;
