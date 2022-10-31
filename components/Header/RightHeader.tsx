import React, { useEffect, useRef, useState } from "react";
// import { useTheme } from "next-themes";
import Link from "next/link";
import Avatar from "../Avatar";
import Divider from "../Divider";
import {
  ArrowDownIcon,
  LogOutIcon,
  MessagesIcon,
  // MoonIcon,
  NotificationBing,
  // SunIcon,
} from "../Icons";

import { ProfileList } from "./profileList";
import Typography from "../Typography";

const RightHeader = () => {
  // const { systemTheme, theme, setTheme } = useTheme();
  const drop = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  // const handleThemeChange = () => {
  //   if (theme === "dark") {
  //     setTheme("light");
  //   } else {
  //     setTheme("dark");
  //   }
  // };

  const handleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClick = (e: any) => {
    if (!drop.current) return;
    if (!e.target.closest(`#${drop.current.id}`) && dropdownOpen) {
      setDropdownOpen(false);
    }
  };

  // const toggleThemeButton = () => {
  //   return (
  //     <button className="relative" onClick={handleThemeChange}>
  //       <SunIcon
  //         className={`w-6 h-6 ${theme === "light" ? "hidden" : "block"}`}
  //       />
  //       <MoonIcon
  //         className={`w-6 h-6 ${theme !== "light" ? "hidden" : "block"}`}
  //       />
  //     </button>
  //   );
  // };

  return (
    <div className="flex my-auto gap-8">
      <div className="relative" ref={drop} id="profile">
        <div className="flex cursor-pointer" onClick={handleDropDown}>
          <Avatar
            type="image"
            avatar="https://i.ibb.co/fxZz28p/48px.png"
            style="circle"
            size={40}
          />
          <div className="flex flex-col ml-4 my-auto">
            <Typography
              text="Hey!"
              textColor="text-primary_white-400 dark:text-primary_dark-400"
              size="miniDescription"
            />
            <Typography
              text="Steve"
              textColor="text-primary_white-400 dark:text-primary_dark-400"
              size="textBold"
            />
          </div>
          <ArrowDownIcon className="ml-4 my-auto" />
        </div>
        <div
          className={`${
            dropdownOpen ? `opacity-100 visible` : "invisible opacity-0"
          } top-14 right-4 absolute h-0 w-0 border-x-8 border-x-transparent border-b-8 transition-all border-b-white dark:border-b-bg_dark`}
        ></div>
        <div
          className={`${
            dropdownOpen ? `opacity-100 visible` : "invisible opacity-0"
          } opacity-100 top-14 -right-3 absolute px-6 py-3 z-40 mt-2 rounded-xl shadow-card transition-all bg-white dark:bg-bg_dark border-x border-b border-bg_white_secondary dark:border-bg_dark_secondary`}
        >
          {ProfileList.map((item, i) => (
            <Link key={i} href={item.url}>
              <div className="whitespace-nowrap py-4 font-normal items-center text-sm text-body-color pl-6 pr-10 rounded-xl flex cursor-pointer hover:bg-primary_white-50 dark:hover:bg-primary_dark-50 hover:text-primary_white-1000 dark:hover:text-primary_dark-1000">
                <item.icon />
                <div className="ml-4">{item.name}</div>
              </div>
            </Link>
          ))}
          <Divider className="w-4/5 h-[1px] mx-auto my-1 bg-bg_white_secondary dark:bg-bg_dark_secondary" />
          <Link href="/">
            <div className="whitespace-nowrap py-4 font-normal items-center text-sm text-body-color pl-6 pr-10 rounded-xl flex cursor-pointer hover:bg-primary_white-50 dark:hover:bg-primary_dark-50 hover:text-primary_white-1000 dark:hover:text-primary_dark-1000">
              <LogOutIcon />
              <div className="ml-4">Log out</div>
            </div>
          </Link>
        </div>
      </div>
      {/* {toggleThemeButton()} */}
      <button className="relative">
        <MessagesIcon size="w-6 h-6" />
        <span className="top-2 left-4 absolute w-2.5 h-2.5 bg-custom-fuchsia border-2 border-primary_white-200 dark:border-primary_dark-200 rounded-full"></span>
      </button>
      <button className="relative">
        <NotificationBing size="w-6 h-6" />
        <span className="top-2 left-4 absolute w-2.5 h-2.5 bg-custom-fuchsia border-2 border-primary_white-200 dark:border-primary_dark-200 rounded-full"></span>
      </button>
    </div>
  );
};

export default RightHeader;
