import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Divider from "../Divider";
import TrialCard from "../TrialCard";
import { LoginIcon } from "../Icons";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { sidebarItems } from "../../constants/sidebarItems";

const Logo = dynamic(() => import("./Logo"), {
  ssr: false,
});

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();
  const controlLogo = useAnimation();
  const controlDivider = useAnimation();
  const controlFreeTrial = useAnimation();
  const breadcrumbs = useBreadcrumbs();

  const showMore = () => {
    controls.start({
      minWidth: "275px",
      transition: { duration: 0.001 },
    });
    controlText.start({
      opacity: 1,
      display: "block",
      transition: { delay: 0.3 },
    });
    controlTitleText.start({
      opacity: 1,
      display: "block",
      transition: { duration: 0.001 },
    });
    controlLogo.start({
      width: "150px",
      transition: { duration: 0.001 },
    });
    controlDivider.start({
      opacity: 0,
      display: "none",
      transition: { duration: 0.001 },
    });
    controlFreeTrial.start({
      opacity: 1,
      display: "block",
      transition: { delay: 0.3 },
    });

    setActive(true);
  };

  const showLess = () => {
    controls.start({
      minWidth: "60px",
      transition: { duration: 0.001 },
    });
    controlText.start({
      opacity: 0,
      display: "none",
    });
    controlTitleText.start({
      opacity: 0,
      display: "none",
      transition: { duration: 0.001 },
    });
    controlLogo.start({
      width: "50px",
      transition: { duration: 0.3 },
    });
    controlDivider.start({
      opacity: 1,
      display: "block",
      transition: { duration: 0.001 },
    });
    controlFreeTrial.start({
      opacity: 0,
      display: "none",
      transition: { duration: 0.001 },
    });

    setActive(false);
  };

  useEffect(() => {
    showMore();
  }, []);

  return (
    <motion.div
      animate={controls}
      className="min-w-[275px] animate duration-300 relative flex flex-col py-10 min-h-screen group border-r bg-white dark:bg-bg_dark border-bg_white_secondary dark:border-bg_dark_secondary"
    >
      {active && (
        <div
          onClick={showLess}
          className="rounded-full p-1 absolute rotate-180 animate duration-300 text-2xl cursor-pointer -right-[14px] top-4 border-[1px] border-bg_white_secondary dark:border-bg_dark_secondary hover:text-primary_dark-200 dark:hover:text-primary_white-200  bg-primary_white-50 dark:bg-primary_dark-50"
        >
          <LoginIcon />
        </div>
      )}
      {!active && (
        <div
          onClick={showMore}
          className="animate duration-300 rounded-full p-1 absolute text-2xl cursor-pointer -right-[14px] top-4 border-[1px] border-bg_white_secondary dark:border-bg_dark_secondary hover:text-primary_dark-200 dark:hover:text-primary_white-200 bg-primary_white-50 dark:bg-primary_dark-50"
        >
          <LoginIcon />
        </div>
      )}

      <motion.div animate={controlLogo} className="w-4/6 mx-auto mb-6">
        <Logo />
      </motion.div>

      <div className="grow mb-10">
        {sidebarItems.map((group, index) => (
          <div key={index} className="my-2">
            <motion.p
              animate={controlTitleText}
              className="mt-4 ml-4 text-xs font-bold"
            >
              {group.name}
            </motion.p>
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
                    animate={controlText}
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
        <motion.div animate={controlFreeTrial} className="mt-8">
          <TrialCard />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
