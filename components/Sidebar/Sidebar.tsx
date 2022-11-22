import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

import Divider from "../Divider";
import TrialCard from "../TrialCard";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { LoginIcon } from "../../icons";

import useToggleSidebar from "../../hooks/useToggleSidebar";

import { sidebarItems } from "../../constants/app/sidebarItems";

const Logo = dynamic(() => import("./Logo"), {
  ssr: false,
});

const Sidebar = () => {
  const breadcrumbs = useBreadcrumbs();
  const {
    active,
    handleTogglebar,
    controls,
    controlLogo,
    controlDivider,
    controlTitleText,
  } = useToggleSidebar();

  return (
    <motion.div
      animate={controls}
      className={`${
        active ? "min-w-[275px]" : "min-w-[60px]"
      } transition-all duration-100 relative flex flex-col py-10 min-h-screen group border-r border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark`}
    >
      {active && (
        <div
          onClick={handleTogglebar}
          className="transition-all duration-100 rounded-full p-1 absolute rotate-180 text-2xl cursor-pointer -right-[14px] top-4 border border-primary_white-200 dark:border-primary_dark-200 hover:text-primary_dark-200 dark:hover:text-primary_white-200 bg-primary_white-50 dark:bg-primary_dark-50"
        >
          <LoginIcon />
        </div>
      )}
      {!active && (
        <div
          onClick={handleTogglebar}
          className="transition-all duration-100 rounded-full p-1 absolute text-2xl cursor-pointer -right-[14px] top-4 border border-primary_white-200 dark:border-primary_dark-200 hover:text-primary_dark-200 dark:hover:text-primary_white-200 bg-primary_white-50 dark:bg-primary_dark-50"
        >
          <LoginIcon />
        </div>
      )}
      <motion.div animate={controlLogo} className="mb-6 mx-auto">
        <Logo />
      </motion.div>

      <div className="grow mb-10">
        {sidebarItems.map((group, index) => (
          <div key={index} className="my-2">
            {active && (
              <p className="mt-4 ml-4 text-xs font-bold">{group.name}</p>
            )}
            <motion.div animate={controlDivider}>
              <Divider className="w-4/5 m-auto my-2 h-[2px] bg-bg_white_secondary dark:bg-bg_dark_secondary" />
            </motion.div>

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
                  <motion.p
                    animate={controlTitleText}
                    className="ml-4 text-sm font-bold"
                  >
                    {" "}
                    {item.title}
                    {!item.isValiable && " (Soon)"}
                  </motion.p>
                </div>
              </Link>
            ))}
          </div>
        ))}
        <motion.div animate={controlTitleText} className="mt-8">
          <TrialCard />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
