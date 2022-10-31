import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  CategoryIcon,
  ChartIcon,
  DiscountCircleIcon,
  DocumentTextIcon,
  HomeIcon,
  LayerIcon,
  LoginIcon,
  MaskIcon,
  SunIcon,
} from "../Icons";
import Divider from "../Divider";
import TrialCard from "../TrialCard";
import { useTheme } from "next-themes";

const data = [
  {
    name: "Menu",
    items: [
      {
        title: "Home",
        icon: HomeIcon,
      },
      {
        title: "Dashboard",
        icon: CategoryIcon,
      },
      {
        title: "Analytics",
        icon: ChartIcon,
      },
      {
        title: "Stake",
        icon: LayerIcon,
      },
      {
        title: "Wrap",
        icon: MaskIcon,
      },
      {
        title: "Bond",
        icon: DiscountCircleIcon,
      },
    ],
  },
  {
    name: "Account",
    items: [
      {
        title: "Preference",
        icon: SunIcon,
      },
      {
        title: "Docs",
        icon: DocumentTextIcon,
      },
    ],
  },
];

const Sidebar = () => {
  const { theme } = useTheme();
  const [active, setActive] = useState(false);
  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();
  const controlLogo = useAnimation();
  const controlDivider = useAnimation();
  const controlFreeTrial = useAnimation();

  const showMore = () => {
    controls.start({
      minWidth: "250px",
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
      className="min-w-[250px] animate duration-300 relative flex flex-col py-10 min-h-screen group border-r bg-white dark:bg-bg_dark border-bg_white_secondary dark:border-bg_dark_secondary"
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
          className=" animate duration-300 rounded-full p-1 absolute text-2xl cursor-pointer -right-[14px] top-4 border-[1px] border-bg_white_secondary dark:border-bg_dark_secondary hover:text-primary_dark-200 dark:hover:text-primary_white-200 bg-primary_white-50 dark:bg-primary_dark-50"
        >
          <LoginIcon />
        </div>
      )}

      <motion.img
        animate={controlLogo}
        src={theme !== "dark" ? "/logo.png" : "/logo_dark.png"}
        className="w-4/6 mx-auto mb-6"
      ></motion.img>

      <div className="grow mb-10">
        {data.map((group, index) => (
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
              <div
                key={index2}
                className={`my-3 flex px-4 py-1 cursor-pointer hover:text-primary_dark-200 dark:hover:text-primary_white-200 ${
                  index2 === 3 && "border-l-4 border-secondary"
                }`}
              >
                <item.icon
                  className={`text-lg w-5 h-5 ${
                    index2 === 3 && "text-secondary"
                  }`}
                />
                <motion.p
                  animate={controlText}
                  className="ml-4 text-sm font-bold"
                >
                  {" "}
                  {item.title}
                </motion.p>
              </div>
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
