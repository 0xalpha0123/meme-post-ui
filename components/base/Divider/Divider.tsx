import React from "react";
import cx from "clsx";

interface DividerProps {
  className?: string;
}

const Divider = (props: DividerProps) => {
  const className = props.className || "";

  return <div className={cx("transition duration-100", className)}></div>;
};

export default Divider;
