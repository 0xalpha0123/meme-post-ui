import React from "react";

import CategoryHeader from "./CategoryHeader";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

const Header = () => {
  return (
    <div className="transition duration-100 h-14 flex w-full items-center border-b border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark">
      <div className="m-auto w-full px-6 flex justify-between">
        <LeftHeader />
        <CategoryHeader />
        <RightHeader />
      </div>
    </div>
  );
};

export default Header;
