import React from "react";
import cx from "clsx";

import PriceCard from "./PriceCard";
import UserAvatar from "../UserAvatar";
import { Typography } from "../../base";
import {
  ArrowCircleDownIcon,
  FrameIcon,
  MessageTextIcon,
  PlayIcon,
} from "../../../icons";

interface MemeProps {
  url: string;
  mediaType: string;
  avatar: string;
  username: string;
  userId: string;
  price: number;
  title: string;
  votesCount: string;
  commentsCount: string;
  keywords: string[];
}

interface MemeCardProps {
  meme: MemeProps;
  isWaterfall: boolean;
}

const MemeCard = (props: MemeCardProps) => {
  const meme = props.meme;
  const isWaterfall = props.isWaterfall;
  return (
    <>
      {meme && (
        <div
          className={cx(
            "transition duration-100 flex flex-col justify-between gap-6 p-6 border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark rounded",
            isWaterfall && "mt-6"
          )}
        >
          <>
            <div className="flex flex-col gap-6">
              <div className="w-full relative items-center">
                <img
                  src={meme.url}
                  className={cx(
                    "w-full rounded-xl border",
                    !isWaterfall && "aspect-square object-cover"
                  )}
                />
                {meme.mediaType === "gif" ? (
                  <div className="uppercase absolute w-full h-full flex justify-center items-center top-0 left-0">
                    <p className="rounded-full p-3 bg-[#000000aa] text-white cursor-pointer">
                      GIF
                    </p>
                  </div>
                ) : (
                  meme.mediaType !== "picture" && (
                    <div className="uppercase absolute w-full h-full flex justify-center items-center top-0 left-0">
                      <p className="rounded-full p-3 bg-[#000000aa] text-white cursor-pointer">
                        <PlayIcon size="w-6 h-6" />
                      </p>
                    </div>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <UserAvatar
                  size="12"
                  name={meme.username}
                  subtitle={`@${meme.userId}`}
                  src={meme.avatar}
                />
                <PriceCard price={meme.price} />
              </div>
              <Typography
                text={meme.title}
                textColor="text-primary_white-700 dark:text-primary_dark-700"
                size="h6"
                className={`${isWaterfall && "mb-6"}`}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                {meme.keywords.map((keyword, index) => (
                  <Typography
                    key={index}
                    text={keyword}
                    textColor="text-primary_white-300 dark:text-primary_dark-300"
                    className="bg-blue-200 dark:bg-primary_dark-100 rounded px-3 py-2"
                  />
                ))}
              </div>
              <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                  <FrameIcon
                    size="w-6 h-6"
                    className="text-secondary cursor-pointer"
                  />
                  <Typography
                    text={meme.votesCount}
                    size="subtitleBold"
                    textColor="text-primary_white-700 dark:text-primary_dark-700"
                  />
                  <ArrowCircleDownIcon
                    size="w-6 h-6"
                    className="text-red-600 cursor-pointer"
                  />
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                  <MessageTextIcon size="w-6 h-6" />
                  <Typography
                    text={meme.commentsCount}
                    size="subtitleBold"
                    textColor="text-primary_white-700 dark:text-primary_dark-700"
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default MemeCard;
