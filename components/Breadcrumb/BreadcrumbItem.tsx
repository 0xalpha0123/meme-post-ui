import React, { ReactElement } from "react";
import Link from "next/link";

interface BreadcrumbItemProps {
  children: ReactElement | string;
  href: string;
  className?: string;
  isCurrent?: boolean;
}

const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const className = props.className || "";
  const isCurrent = props.isCurrent || false;

  return (
    <li className={`${className}`}>
      {!isCurrent ? (
        <Link href={props.href} passHref>
          <span>{props.children}</span>
        </Link>
      ) : (
        <span className="text-secondary cursor-pointer">{props.children}</span>
      )}
    </li>
  );
};

export default BreadcrumbItem;
