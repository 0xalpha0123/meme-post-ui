import React from "react";

import { Avatar, Typography } from "../../base";

const TopUsers = () => {
  return (
    <div className="grid grid-cols-4 gap-6 w-full p-5 rounded border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark">
      <div className="flex flex-col cursor-pointer">
        <div className="aspect-[0.8] p-1 rounded border border-primary_white-200 dark:border-primary_dark-200">
          <img
            src="https://i.postimg.cc/90g0YGmw/Rectangle-6321.png"
            className="object-cover h-full rounded"
          />
        </div>
        <div className="flex gap-3 items-end ml-6 -mt-6">
          <Avatar src="https://i.ibb.co/DgdyKCr/Ellipse-3.png" size="12" />
          <Typography
            text="Floyd Miles"
            className="pb-1"
            textColor="text-primary_white-800 dark:text-primary_dark-800"
          />
        </div>
      </div>
      <div className="flex flex-col cursor-pointer">
        <div className="aspect-[0.8] p-1 rounded border border-primary_white-200 dark:border-primary_dark-200">
          <img
            src="https://i.postimg.cc/90g0YGmw/Rectangle-6321.png"
            className="object-cover h-full rounded"
          />
        </div>
        <div className="flex gap-3 items-end ml-6 -mt-6">
          <Avatar
            src="https://i.postimg.cc/xTktVbTj/Ellipse-532.png"
            size="12"
          />
          <Typography
            text="Robert Fox"
            className="pb-1"
            textColor="text-primary_white-800 dark:text-primary_dark-800"
          />
        </div>
      </div>
      <div className="flex flex-col cursor-pointer">
        <div className="aspect-[0.8] p-1 rounded border border-primary_white-200 dark:border-primary_dark-200">
          <img
            src="https://i.postimg.cc/90g0YGmw/Rectangle-6321.png"
            className="object-cover h-full rounded"
          />
        </div>
        <div className="flex gap-3 items-end ml-6 -mt-6">
          <Avatar
            src="https://i.postimg.cc/76dX5xKr/Ellipse-532.png"
            size="12"
          />
          <Typography
            text="Dianne Russell"
            className="pb-1"
            textColor="text-primary_white-800 dark:text-primary_dark-800"
          />
        </div>
      </div>
      <div className="flex flex-col cursor-pointer">
        <div className="aspect-[0.8] p-1 rounded border border-primary_white-200 dark:border-primary_dark-200">
          <img
            src="https://i.postimg.cc/90g0YGmw/Rectangle-6321.png"
            className="object-cover h-full rounded"
          />
        </div>
        <div className="flex gap-3 items-end ml-6 -mt-6">
          <Avatar
            src="https://i.postimg.cc/YCKfcns8/Ellipse-532-1.png"
            size="12"
          />
          <Typography
            text="Albert Flores"
            className="pb-1"
            textColor="text-primary_white-800 dark:text-primary_dark-800"
          />
        </div>
      </div>
    </div>
  );
};

export default TopUsers;
