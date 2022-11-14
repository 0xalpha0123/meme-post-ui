import React from "react";
import { ArrowCircleDownIcon, FrameIcon, MessageTextIcon } from "../../icons";
import Typography from "../Typography";
import UserAvatar from "../UserAvatar";
import PriceCard from "./PriceCard";

interface MemeProps {
  url: string;
  isVideo: boolean;
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
}

const MemeCard = (props: MemeCardProps) => {
  const meme = props.meme;
  return (
    <>
      {meme && (
        <div className="cursor-pointer flex flex-col justify-between gap-6 p-4 bg-white dark:bg-bg_dark rounded-lg">
          <div className="flex flex-col gap-6">
            <img src={meme.url} />
            <div className="flex justify-between items-center">
              <UserAvatar
                size={48}
                username={meme.username}
                subtitle={`@${meme.userId}`}
                avatar={meme.avatar}
              />
              <PriceCard price={meme.price} />
            </div>
            <Typography
              text={meme.title}
              textColor="text-primary_white-700 dark:text-primary_dark-700"
              size="h6"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              {meme.keywords.map((keyword, index) => (
                <Typography
                  key={index}
                  text={keyword}
                  textColor="text-primary_white-300 dark:text-primary_dark-300"
                  className="bg-blue-200 dark:bg-primary_dark-100 rounded-lg px-3 py-2"
                />
              ))}
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <FrameIcon size="w-6 h-6" className="text-secondary" />
                <Typography
                  text={meme.votesCount}
                  size="subtitleBold"
                  textColor="text-primary_white-700 dark:text-primary_dark-700"
                />
                <ArrowCircleDownIcon size="w-6 h-6" className="text-red-600" />
              </div>
              <div className="flex gap-1 items-center">
                <MessageTextIcon size="w-6 h-6" />
                <Typography
                  text={meme.commentsCount}
                  size="subtitleBold"
                  textColor="text-primary_white-700 dark:text-primary_dark-700"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MemeCard;
