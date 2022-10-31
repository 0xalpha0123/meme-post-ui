import React, { Children } from "react";

import { BreadcrumbGroupProps } from "../../Interfaces/Breadcrumb";

const BreadcrumbGroup = (props: BreadcrumbGroupProps) => {
  const childrenArray = Children.toArray(props.children);
  const className = props.className || "";

  return (
    <nav className={`${className} mx-8 my-4`} aria-label="breadcrumb">
      <ol className="flex items-center">{childrenArray}</ol>
    </nav>
  );
};

export default BreadcrumbGroup;
