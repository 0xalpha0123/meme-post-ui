import React from "react";

interface DividerProps {
  className?: string;
}

const Divider = (props: DividerProps) => {
  const className = props.className || "";

  return <div className={`${className} animate duration-300`}></div>;
};

export default Divider;
