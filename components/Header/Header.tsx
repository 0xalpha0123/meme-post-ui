import React from "react";
import CategoryHeader from "./CategoryHeader";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

const Header = () => {
  return (
    <div className="animate duration-300 h-14 flex w-full items-center bg-white dark:bg-bg_dark">
      <div className="m-auto w-full px-6 flex justify-between">
        <LeftHeader />
        <CategoryHeader />
        <RightHeader />
      </div>
    </div>
  );
};

export default Header;
