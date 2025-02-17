import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BreadcrumbGroup from "./BreadcrumbGroup";
import BreadcrumbItem from "./BreadcrumbItem";
import { ArrowRightIcon, Home2Icon } from "../Icons";

interface Breadcrumb {
  href: string;
  label: string;
  isCurrent: boolean;
}

function Breadcrumb() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <>
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
    </>
  );
}

export default Breadcrumb;
