import React from "react";

interface DividerProps {
  className?: string;
}

const Divider = (props: DividerProps) => {
  const className = props.className || "";

  return <div className={`${className} transition duration-100`}></div>;
};

export default Divider;
