import React from "react";
import cx from "clsx";

import { IconProps } from "./";

const FavoriteChartIcon = (props: IconProps) => {
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
        d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33008 14.49L9.71008 11.4C10.0501 10.96 10.6801 10.88 11.1201 11.22L12.9501 12.66C13.3901 13 14.0201 12.92 14.3601 12.49L16.6701 9.50999"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.48 15.82L19.76 16.39C19.9 16.67 20.25 16.93 20.56 16.99L20.94 17.05C22.08 17.24 22.35 18.08 21.53 18.91L21.18 19.26C20.95 19.5 20.82 19.96 20.89 20.28L20.94 20.49C21.25 21.87 20.52 22.4 19.32 21.68L19.06 21.53C18.75 21.35 18.25 21.35 17.94 21.53L17.68 21.68C16.47 22.41 15.74 21.87 16.06 20.49L16.1099 20.28C16.1799 19.96 16.05 19.5 15.82 19.26L15.47 18.91C14.65 18.08 14.92 17.24 16.06 17.05L16.44 16.99C16.74 16.94 17.1 16.67 17.24 16.39L17.52 15.82C18.06 14.73 18.94 14.73 19.48 15.82Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FavoriteChartIcon;
