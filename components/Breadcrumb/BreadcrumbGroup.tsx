import React, { Children, ReactElement } from "react";

interface BreadcrumbGroupProps {
  children: ReactElement;
  className?: string;
}

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
