import React, { useRef, useState } from "react";
import Link from "next/link";
import cx from "clsx";

import {
  SearchNormalIcon,
  Microphone2Icon,
  ExportIcon,
  ArrowDownIcon,
} from "../../../icons";

import useOnClickOutside from "../../../hooks/useOnClickOutside";

import { categoryItems } from "../../../constants/app/categoryItems";

const LeftHeader = () => {
  const drop = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useOnClickOutside(drop, () => {
    setDropdownOpen(false);
  });

  const handleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex">
      <div className="relative flex max-w-[300px]">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SearchNormalIcon />
        </div>
        <input
          type="text"
          className="border transition duration-100 text-sm rounded block w-full px-10 py-2.5 bg-primary_white-50 dark:bg-primary_dark-50 border-primary_white-200 dark:border-primary_dark-200 text-primary_white-700 dark:text-primary_dark-700 placeholder-primary_white-200 dark:placeholder-primary_dark-200 focus:border-primary_white-300 dark:focus:border-primary_dark-300 focus:outline-none dark:focus:outline-none"
          placeholder="Search for meme, artworks ..."
        />
        <div className="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer">
          <Microphone2Icon />
        </div>
      </div>
      <div className="relative flex my-auto mx-4" ref={drop} id="browser">
        <div
          onClick={handleDropDown}
          className="flex h-8 ml-4 justify-center text-sm items-center hover:cursor-pointer font-semibold hover:text-primary_white-800 dark:hover:text-primary_dark-800"
        >
          <ExportIcon className="mr-3" />
          Browse
          <ArrowDownIcon className="ml-5" />
        </div>
        <div
          className={cx(
            "top-[58px] left-14 absolute h-3 w-3 transition-all rotate-45 z-[999] border-t border-l border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark",
            dropdownOpen ? "opacity-100 visible" : "invisible opacity-0"
          )}
        ></div>
        <div
          className={cx(
            "opacity-100 top-14 absolute z-40 mt-2 rounded px-6 py-5 shadow-card transition-all border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark",
            dropdownOpen ? "opacity-100 visible" : "invisible opacity-0"
          )}
        >
          {categoryItems.map((item, i) => (
            <Link key={i} href={item.url}>
              <div className="whitespace-nowrap py-4 pl-6 pr-10 rounded font-normal items-center text-sm text-body-color flex gap-4 cursor-pointer hover:text-primary_white-800 dark:hover:text-primary_dark-800 hover:bg-primary_white-50 dark:hover:bg-primary_dark-50">
                <item.icon className="w-5 h-5" />
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftHeader;
