import { ReactElement } from "react";

export interface BreadcrumbGroupProps {
  children: ReactElement;
  className?: string;
}

export interface BreadcrumbItemProps {
  children: ReactElement | string;
  href: string;
  className?: string;
  isCurrent?: boolean;
}
