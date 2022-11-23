import { useRouter } from "next/router";
import { useMemo } from "react";

import { breadcrumbItems } from "../constants/app/breadcrumbItems";

const useBreadcrumbs = () => {
  const router = useRouter();

  return useMemo(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      let label = "";
      breadcrumbItems.find((x) => {
        if (x.id === path) {
          label = x.breadcrumbText;
          return;
        }
      });
      return {
        href,
        label,
        isCurrent: index === pathArray.length - 1,
      };
    });

    return breadcrumbs;
  }, [router.asPath]);
};

export default useBreadcrumbs;
