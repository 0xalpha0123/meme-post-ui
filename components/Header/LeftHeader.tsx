import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  SearchNormalIcon,
  Microphone2Icon,
  ExportIcon,
  ArrowDownIcon,
  VerifyIcon,
} from "../Icons";

import { BrowserList } from "./browserList";

const LeftHeader = () => {
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
    <div className="flex">
      <div className="relative flex">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SearchNormalIcon />
        </div>
        <input
          type="text"
          className="border animate duration-300 text-sm rounded-lg block w-full px-10 py-2.5 bg-primary_white-50 dark:bg-primary_dark-50 border-primary_white-200 dark:border-primary_dark-200 text-primary_white-700 dark:text-primary_dark-700 placeholder-primary_white-200 dark:placeholder-primary_dark-200 focus:border-primary_white-300 dark:focus:border-primary_dark-300 focus:outline-none dark:focus:outline-none"
          placeholder="Search for meme, artworks ..."
        />
        <div className="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer">
          <Microphone2Icon />
        </div>
      </div>
      <div className="relative flex my-auto mx-4" ref={drop} id="browser">
        <div
          onClick={handleDropDown}
          className="h-8 ml-4 flex justify-center text-sm items-center hover:cursor-pointer font-semibold"
        >
          <ExportIcon className="mr-3" />
          Browse
          <ArrowDownIcon className="ml-5" />
        </div>
        <div
          className={`${
            dropdownOpen ? `opacity-100 visible` : "invisible opacity-0"
          } top-14 left-14 absolute h-0 w-0 border-x-8 border-x-transparent border-b-8 border-b-secondary transition-all`}
        ></div>
        <div
          className={`${
            dropdownOpen ? `opacity-100 visible` : "invisible opacity-0"
          } opacity-100 top-14 absolute pl-12 pr-16 z-40 mt-2 rounded-xl bg-secondary py-5 shadow-card transition-all text-white`}
        >
          {BrowserList.map((item, i) => (
            <Link key={i} href={item.url}>
              <div className="whitespace-nowrap py-4 font-normal items-center text-sm text-body-color hover:text-primary_white-200 flex cursor-pointer">
                <VerifyIcon className="text-white mr-2" />
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftHeader;
