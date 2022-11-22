import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Typography } from "../../base";

const collectionList = [
  {
    image: "https://i.postimg.cc/65YcZLjh/Img.png",
    text: "WhiteUI.Store",
    url: "/",
  },
  {
    image: "https://i.postimg.cc/c44Mdtxt/Img.png",
    text: "Dribbble Community",
    url: "/",
  },
  {
    image: "https://i.postimg.cc/gkTRdMt1/Img.png",
    text: "Behance Inspiration",
    url: "/",
  },
  {
    image: "https://i.postimg.cc/hGbfJMMD/Img.png",
    text: "Sketch App Tuts",
    url: "/",
  },
  {
    image: "https://i.postimg.cc/0y1kpDzb/Img.png",
    text: "Figma Resources",
    url: "/",
  },
  {
    image: "https://i.postimg.cc/JzQs0Pp1/Img.png",
    text: "Adobe Xd Tuts",
    url: "/",
  },
  {
    image: "https://i.postimg.cc/gJ1JQ52K/Img.png",
    text: "Themeforest Market",
    url: "/",
  },
];

const CollectionList = () => {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl border bg-white dark:bg-bg_dark border-bg_white_secondary dark:border-bg_dark_secondary">
      <Typography
        text="Your Collections"
        className="w-full mb-4"
        textColor="text-primary_white-300 dark:text-primary_dark-300"
        size="description"
      />
      {collectionList.map((item, i) => (
        <Link key={i} href={item.url}>
          <div className="flex gap-3 my-2 items-center w-full cursor-pointer">
            <Image src={item.image} width="24" height="24" />
            <Typography
              text={item.text}
              size="description"
              textColor="text-primary_white-1000 dark:text-primary_dark-1000 hover:text-primary_white-800 dark:hover:text-primary_dark-800"
            />
          </div>
        </Link>
      ))}
      <Link href="/">
        <div className="flex gap-3 mt-4 items-center w-full cursor-pointer">
          <Typography
            text="Show more"
            size="description"
            textColor="text-primary_white-1000 dark:text-primary_dark-1000 hover:text-primary_white-800 dark:hover:text-primary_dark-800"
          />
        </div>
      </Link>
    </div>
  );
};

export default CollectionList;
