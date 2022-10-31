import React from "react";

interface DividerProps {
  className?: string;
}

const Divider = (props: DividerProps) => {
  const className = props.className || "";

  return <div className={className}></div>;
};

export default Divider;
