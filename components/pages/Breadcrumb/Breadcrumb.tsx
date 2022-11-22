import React from "react";

import BreadcrumbGroup from "./BreadcrumbGroup";
import BreadcrumbItem from "./BreadcrumbItem";
import { Typography } from "../../base";
import { ArrowRightIcon, Home2Icon } from "../../../icons";

import useBreadcrumbs from "../../../hooks/useBreadcrumbs";

interface Breadcrumb {
  href: string;
  label: string;
  isCurrent: boolean;
}

function Breadcrumb() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="p-3 flex flex-col gap-3">
      {breadcrumbs.filter((item) => item.isCurrent).length > 0 && (
        <Typography
          text={breadcrumbs.filter((item) => item.isCurrent)[0].label}
          size="h6"
          textColor="text-primary_white-800 dark:text-primary_dark-800"
        />
      )}
      <BreadcrumbGroup className="text-xs">
        <>
          <BreadcrumbItem href="/">
            <div className="flex gap-1 cursor-pointer">
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
    </div>
  );
}

export default Breadcrumb;
