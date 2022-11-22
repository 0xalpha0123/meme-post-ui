import React from "react";
import cx from "clsx";

import { IconProps } from "./";

const FacebookIcon = (props: IconProps) => {
  const size = props.size || "w-4 h-4";
  const className = props.className || "";

  return (
    <svg
      className={cx(size, className)}
      fill="currentColor"
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.8"
        d="M25.5319 12.766C25.5319 5.71476 19.8172 0 12.766 0C5.71476 0 0 5.71476 0 12.766C0 19.8172 5.71476 25.5319 12.766 25.5319C12.8408 25.5319 12.9156 25.5319 12.9904 25.5269V15.5934H10.2477V12.3969H12.9904V10.0432C12.9904 7.31549 14.6559 5.82946 17.0894 5.82946C18.2563 5.82946 19.2586 5.91423 19.5479 5.95412V8.80652H17.8723C16.5509 8.80652 16.2916 9.43484 16.2916 10.3574V12.392H19.4581L19.0442 15.5884H16.2916V25.0382C21.6273 23.5073 25.5319 18.5954 25.5319 12.766V12.766Z"
      />
    </svg>
  );
};

export default FacebookIcon;
