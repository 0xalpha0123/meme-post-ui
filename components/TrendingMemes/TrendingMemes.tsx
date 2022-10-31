import dynamic from "next/dynamic";
import React from "react";
import {
  BitcoinIcon,
  JoyStickIcon,
  KittyIcon,
  LolIcon,
  NftIcon,
  PopcornIcon,
} from "../Icons";
import Typography from "../Typography";
const MemeCard = dynamic(() => import("./MemeCard"), { ssr: false });

const trendings = [
  {
    id: "funny",
    title: "Funny",
    icon: LolIcon,
  },
  {
    id: "cryptocurrency",
    title: "Cryptocurrency",
    icon: BitcoinIcon,
  },
  {
    id: "nft",
    title: "NFT",
    icon: NftIcon,
  },
  {
    id: "animals",
    title: "Animals",
    icon: KittyIcon,
  },
  {
    id: "gaming",
    title: "Gaming",
    icon: JoyStickIcon,
  },
  {
    id: "movie-tv",
    title: "Movie & TV",
    icon: PopcornIcon,
  },
];

const memes = [
  {
    id: 1,
    url: "/images/memes/meme_1.png",
    isVideo: false,
    avatar: "/images/avatars/avatar_1.png",
    username: "Jerome",
    userId: "jeromelion",
    price: 0.2,
    title: "It doesn't antimatter man...",
    votesCount: "2.1K",
    commentsCount: "4.6K",
    keywords: ["Funny", "Science"],
  },
  {
    id: 2,
    url: "/images/memes/meme_2.png",
    isVideo: false,
    avatar: "/images/avatars/avatar_2.png",
    username: "Savannah",
    userId: "savaneo",
    price: 0.2,
    title: "When you go all in with your last money and the market bounces",
    votesCount: "2.1K",
    commentsCount: "4.6K",
    keywords: ["Funny", "NFT "],
  },
  {
    id: 3,
    url: "/images/memes/meme_3.png",
    isVideo: false,
    avatar: "/images/avatars/avatar_3.png",
    username: "Ronald",
    userId: "ronald54",
    price: 0.2,
    title: "Devils in fur",
    votesCount: "2.1K",
    commentsCount: "4.6K",
    keywords: ["Funny", "Animals "],
  },
  {
    id: 4,
    url: "/images/memes/meme_4.png",
    isVideo: false,
    avatar: "/images/avatars/avatar_1.png",
    username: "Jerome",
    userId: "jeromelion",
    price: 0.2,
    title: "It doesn't antimatter man...",
    votesCount: "2.1K",
    commentsCount: "4.6K",
    keywords: ["Funny", "Science"],
  },
  {
    id: 5,
    url: "/images/memes/meme_5.png",
    isVideo: false,
    avatar: "/images/avatars/avatar_2.png",
    username: "Savannah",
    userId: "savaneo",
    price: 0.2,
    title: "When you go all in with your last money and the market bounces",
    votesCount: "2.1K",
    commentsCount: "4.6K",
    keywords: ["Funny", "NFT "],
  },
  {
    id: 6,
    url: "/images/memes/meme_6.png",
    isVideo: false,
    avatar: "/images/avatars/avatar_3.png",
    username: "Ronald",
    userId: "ronald54",
    price: 0.2,
    title: "Devils in fur",
    votesCount: "2.1K",
    commentsCount: "4.6K",
    keywords: ["Funny", "Animals "],
  },
];

const TrendingMemes = () => {
  return (
    <div className="p-3 mt-3 flex flex-col gap-6 rounded-lg">
      <div className="flex justify-between">
        <Typography
          text="Trending Memes"
          size="h5"
          textColor="text-primary_white-400 dark:text-primary_dark-400"
        />
        <Typography
          text="View All"
          className="my-auto cursor-pointer"
          textColor="text-secondary"
          size="description"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex justify-around grow">
          {trendings.map((trending) => (
            <div key={trending.id} className="flex gap-1">
              <trending.icon />
              <Typography
                text={trending.title}
                textColor="text-primary_white-800 dark:text-primary_dark-800 cursor-pointer"
                size="description"
                className="font-extrabold"
              />
            </div>
          ))}
        </div>
        <Typography
          text="More"
          textColor="text-primary_white-800 dark:text-primary_dark-800"
          size="description"
          className="font-extrabold cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-3 gap-6">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
};

export default TrendingMemes;
