import React from "react";
import { DividerProps } from "../../Interfaces/Divider";

const Divider = (props: DividerProps) => {
  const className = props.className || "";

  return <div className={className}></div>;
};

export default Divider;
