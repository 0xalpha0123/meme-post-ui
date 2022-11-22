import React from "react";
import Link from "next/link";

import UserAvatar from "../UserAvatar";
import { AvatarGroup, Divider, Typography } from "../../base";

import { MenuBarList } from "../../../constants/app/menubarList";

const users = [
  {
    style: "circle",
    type: "image",
    avatar: "https://i.postimg.cc/xTktVbTj/Ellipse-532.png",
  },
  {
    style: "circle",
    type: "image",
    avatar: "https://i.postimg.cc/YCKfcns8/Ellipse-532-1.png",
  },
  {
    style: "circle",
    type: "image",
    avatar: "https://i.postimg.cc/76dX5xKr/Ellipse-532.png",
  },
  {
    style: "circle",
    type: "image",
    avatar: "https://i.ibb.co/DgdyKCr/Ellipse-3.png",
  },
];

const MenuBar = () => {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl border bg-white dark:bg-bg_dark border-bg_white_secondary dark:border-bg_dark_secondary">
      <UserAvatar
        status={true}
        username="Steven Jobs"
        subtitle="2mins ago"
        avatar="https://i.ibb.co/DgdyKCr/Ellipse-3.png"
      />
      <Divider className="w-full h-[1px] mx-auto my-4 bg-bg_white_secondary dark:bg-bg_dark_secondary" />
      {MenuBarList.map((item, i) => (
        <Link key={i} href={item.url}>
          <div className="flex whitespace-nowrap w-full pl-4 py-4 font-semibold text-sm rounded-xl cursor-pointer hover:bg-secondary hover:text-white dark:hover:text-white">
            <item.icon className="w-6 h-6" />
            <div className="ml-4">{item.name}</div>
          </div>
        </Link>
      ))}
      <Typography
        text="Recent followers"
        textColor="text-primary_white-300 dark:text-primary_dark-300"
        className="w-full mt-8"
      />
      <AvatarGroup
        users={users.slice(0, 3)}
        size={36}
        space="-space-x-3"
        className="w-full m-2"
        overflow="+1"
      />
    </div>
  );
};

export default MenuBar;
