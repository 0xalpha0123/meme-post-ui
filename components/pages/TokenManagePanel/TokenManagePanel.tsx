import React, { useState } from "react";
import cx from "clsx";

import StakePanel from "../StakePanel";
import BondCard from "../Bonds";
import SwapPanel from "../SwapPanel";
import TaxTracker from "../TaxTracker";

import { tokenManageList } from "../../../constants/app/tokenManageList";

const TokenManagePanel = () => {
  const [activeTab, setActiveTab] = useState(tokenManageList[0]);

  return (
    <>
      <div className="flex w-full">
        {tokenManageList.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => setActiveTab(item)}
              className={cx(
                "flex items-center gap-2 px-8 pb-4 pt-2 rounded-t-lg cursor-pointer border text-primary_white-600 dark:text-primary_dark-600 border-primary_white-200 dark:border-primary_dark-200",
                activeTab.id === item.id
                  ? "text-white dark:text-white border-secondary dark:border-secondary bg-secondary"
                  : "bg-white dark:bg-bg_dark"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </div>
          );
        })}
      </div>
      <div className="-mt-4 px-12 py-10 rounded rounded-tl-none items-center transition duration-100 border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark">
        {activeTab.id === "stake" && <StakePanel />}
        {activeTab.id === "bond" && <BondCard />}
        {activeTab.id === "swap" && <SwapPanel />}
        {activeTab.id === "tracker" && <TaxTracker />}
      </div>
      {activeTab.id === "tracker" && (
        <div className="w-full mt-5">
          <img src="/images/advertises/advertise_1.png" className="w-full" />
        </div>
      )}
    </>
  );
};

export default TokenManagePanel;
