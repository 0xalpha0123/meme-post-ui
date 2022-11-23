import React from "react";

interface DisabledItemProps {
  children: JSX.Element | string;
}

const DisabledItem: React.FC<DisabledItemProps> = ({ children }) => {
  return (
    <div
      className={`px-2 py-2 cursor-not-allowed truncate text-primary_white-200 dark:text-primary_dark-200 select-none`}
    >
      {children}
    </div>
  );
};

export default DisabledItem;
