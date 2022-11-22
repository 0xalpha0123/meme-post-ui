import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import Avatar from "../Avatar";
import Divider from "../Divider";
import Typography from "../Typography";
import Web3Connect from "../Web3Connect";
import {
  ArrowDownIcon,
  LogOutIcon,
  MessagesIcon,
  NotificationBing,
} from "../../icons";

import { ProfileList } from "../../constants/app/profileList";

const ToggleThemeIcon = dynamic(() => import("./ToggleThemeIcon"), {
  ssr: false,
});

const RightHeader = () => {
  const { deactivate, active } = useWeb3React<Web3Provider>();
  const drop = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const handleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClick = (e: any) => {
    if (!drop.current) return;
    if (!e.target.closest(`#${drop.current.id}`) && dropdownOpen) {
      setDropdownOpen(false);
    }
  };

  return (
    <div className="flex my-auto gap-6">
      <div className="relative" ref={drop} id="profile">
        {active ? (
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
                textColor="text-primary_white-600 dark:text-primary_dark-600"
                size="miniDescription"
              />
              <Typography
                text="Steve"
                textColor="text-primary_white-600 dark:text-primary_dark-600"
                size="textBold"
              />
            </div>
            <ArrowDownIcon className="ml-4 my-auto" />
          </div>
        ) : (
          <Web3Connect className="text-sm px-2" />
        )}
        <div
          className={`${
            dropdownOpen ? `opacity-100 visible` : "invisible opacity-0"
          } top-[57px] right-4 absolute h-3 w-3 transition-all rotate-45 z-[999] border-t border-l border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark`}
        ></div>
        <div
          className={`${
            dropdownOpen ? `opacity-100 visible` : "invisible opacity-0"
          } opacity-100 top-14 -right-3 absolute px-6 py-3 z-40 mt-2 rounded-xl shadow-card transition-all bg-white dark:bg-bg_dark border border-primary_white-200 dark:border-primary_dark-200`}
        >
          {ProfileList.map((item, i) => (
            <Link key={i} href={item.url}>
              <div className="whitespace-nowrap py-4 pl-6 pr-10 font-normal items-center text-sm text-body-color rounded-lg flex cursor-pointer hover:bg-primary_white-50 dark:hover:bg-primary_dark-50 hover:text-primary_white-800 dark:hover:text-primary_dark-800">
                <item.icon />
                <div className="ml-4">{item.name}</div>
              </div>
            </Link>
          ))}
          <Divider className="w-4/5 h-[1px] mx-auto my-1 bg-bg_white_secondary dark:bg-bg_dark_secondary" />

          <div
            className="whitespace-nowrap py-4 pl-6 pr-10 font-normal items-center text-sm text-body-color rounded-lg flex cursor-pointer hover:bg-primary_white-50 dark:hover:bg-primary_dark-50 hover:text-primary_white-800 dark:hover:text-primary_dark-800"
            onClick={() => {
              deactivate();
              setDropdownOpen(false);
            }}
          >
            <LogOutIcon />
            <div className="ml-4">Log out</div>
          </div>
        </div>
      </div>
      <ToggleThemeIcon />
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
