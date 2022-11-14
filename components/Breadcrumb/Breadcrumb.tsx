import React from "react";
import BreadcrumbGroup from "./BreadcrumbGroup";
import BreadcrumbItem from "./BreadcrumbItem";
import { ArrowRightIcon, Home2Icon } from "../../icons";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";

interface Breadcrumb {
  href: string;
  label: string;
  isCurrent: boolean;
}

function Breadcrumb() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <BreadcrumbGroup className="text-xs cursor-pointer m-0">
      <>
        <BreadcrumbItem href="/">
          <div className="flex gap-1">
            <Home2Icon className="w-3.5 h-3.5" />
            Home
          </div>
        </BreadcrumbItem>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb) => (
            <div key={breadcrumb.href} className="flex items-center">
              <ArrowRightIcon className="w-3 h-3 mx-2" />
              <BreadcrumbItem
                href={breadcrumb.href}
                isCurrent={breadcrumb.isCurrent}
              >
                {breadcrumb.label}
              </BreadcrumbItem>
            </div>
          ))}
      </>
    </BreadcrumbGroup>
  );
}

export default Breadcrumb;
