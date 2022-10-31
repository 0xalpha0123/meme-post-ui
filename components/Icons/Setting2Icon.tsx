import React from "react";

import { IconProps } from ".";

const Setting2Icon = (props: IconProps) => {
  const size = props.size || "w-4 h-4";
  const className = props.className || "";

  return (
    <svg
      className={`${size} ${className}`}
      stroke="currentColor"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 13.75C12.5188 13.75 13.75 12.5188 13.75 11C13.75 9.48122 12.5188 8.25 11 8.25C9.48122 8.25 8.25 9.48122 8.25 11C8.25 12.5188 9.48122 13.75 11 13.75Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.83325 11.8066V10.1933C1.83325 9.23998 2.61242 8.45165 3.57492 8.45165C5.23408 8.45165 5.91242 7.27832 5.07825 5.83915C4.60158 5.01415 4.88575 3.94165 5.71992 3.46498L7.30575 2.55748C8.02992 2.12665 8.96492 2.38332 9.39575 3.10748L9.49658 3.28165C10.3216 4.72082 11.6783 4.72082 12.5124 3.28165L12.6133 3.10748C13.0441 2.38332 13.9791 2.12665 14.7033 2.55748L16.2891 3.46498C17.1233 3.94165 17.4074 5.01415 16.9307 5.83915C16.0966 7.27832 16.7749 8.45165 18.4341 8.45165C19.3874 8.45165 20.1758 9.23082 20.1758 10.1933V11.8066C20.1758 12.76 19.3966 13.5483 18.4341 13.5483C16.7749 13.5483 16.0966 14.7216 16.9307 16.1608C17.4074 16.995 17.1233 18.0583 16.2891 18.535L14.7033 19.4425C13.9791 19.8733 13.0441 19.6167 12.6133 18.8925L12.5124 18.7183C11.6874 17.2792 10.3308 17.2792 9.49658 18.7183L9.39575 18.8925C8.96492 19.6167 8.02992 19.8733 7.30575 19.4425L5.71992 18.535C4.88575 18.0583 4.60158 16.9858 5.07825 16.1608C5.91242 14.7216 5.23408 13.5483 3.57492 13.5483C2.61242 13.5483 1.83325 12.76 1.83325 11.8066Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Setting2Icon;
