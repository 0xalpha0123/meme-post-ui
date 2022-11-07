import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Divider from "../Divider";
import TrialCard from "../TrialCard";
import { LoginIcon } from "../Icons";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { sidebarItems } from "../../constants/sidebarItems";
import useToggleSidebar from "../../hooks/useToggleSidebar";

const Logo = dynamic(() => import("./Logo"), {
  ssr: false,
});

const Sidebar = () => {
  const breadcrumbs = useBreadcrumbs();
  const { active, handleTogglebar } = useToggleSidebar();

  return (
    <div
      className={`min-w-${
        active ? "[275px]" : "[60px]"
      } relative flex flex-col py-10 min-h-screen group border-r bg-white dark:bg-bg_dark border-bg_white_secondary dark:border-bg_dark_secondary`}
    >
      {active && (
        <div
          onClick={handleTogglebar}
          className="rounded-full p-1 absolute rotate-180 text-2xl cursor-pointer -right-[14px] top-4 border-[1px] border-bg_white_secondary dark:border-bg_dark_secondary hover:text-primary_dark-200 dark:hover:text-primary_white-200  bg-primary_white-50 dark:bg-primary_dark-50"
        >
          <LoginIcon />
        </div>
      )}
      {!active && (
        <div
          onClick={handleTogglebar}
          className="rounded-full p-1 absolute text-2xl cursor-pointer -right-[14px] top-4 border-[1px] border-bg_white_secondary dark:border-bg_dark_secondary hover:text-primary_dark-200 dark:hover:text-primary_white-200 bg-primary_white-50 dark:bg-primary_dark-50"
        >
          <LoginIcon />
        </div>
      )}

      {active && <Logo className="mx-auto mb-6" />}

      <div className="grow mb-10">
        {sidebarItems.map((group, index) => (
          <div key={index} className="my-2">
            {active && (
              <p className="mt-4 ml-4 text-xs font-bold">{group.name}</p>
            )}
            {!active && (
              <div>
                <Divider className="w-4/5 m-auto my-2 h-[2px] bg-bg_white_secondary dark:bg-bg_dark_secondary" />
              </div>
            )}

            {group.items.map((item, index2) => (
              <Link href={item.url} key={index2}>
                <div
                  className={`my-3 flex px-4 py-1 cursor-pointer hover:text-primary_dark-200 dark:hover:text-primary_white-200 ${
                    ((breadcrumbs.length === 0 &&
                      item.breadcrumbText === "Home") ||
                      (breadcrumbs.length !== 0 &&
                        breadcrumbs[0].label === item.breadcrumbText)) &&
                    "border-l-4 border-secondary"
                  }`}
                >
                  <item.icon
                    className={`text-lg w-5 h-5 ${
                      ((breadcrumbs.length === 0 &&
                        item.breadcrumbText === "Home") ||
                        (breadcrumbs.length !== 0 &&
                          breadcrumbs[0].label === item.breadcrumbText)) &&
                      "text-secondary"
                    }`}
                  />
                  {active && (
                    <p className="ml-4 text-sm font-bold">
                      {" "}
                      {item.title}
                      {!item.isValiable && " (Soon)"}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ))}
        {active && (
          <div className="mt-8">
            <TrialCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
