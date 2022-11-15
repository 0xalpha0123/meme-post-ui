import dynamic from "next/dynamic";
import React, { useState } from "react";
import Masonry2 from "react-masonry-css";
import {
  ArrowDownIcon,
  BitcoinIcon,
  CategoryIcon,
  JoyStickIcon,
  KittyIcon,
  LolIcon,
  NftIcon,
  PopcornIcon,
  SettingIcon,
} from "../../icons";
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
    mediaType: "picture",
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
    mediaType: "gif",
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
    mediaType: "video",
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
    mediaType: "picture",
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
    mediaType: "picture",
    avatar: "/images/avatars/avatar_2.png",
    username: "Moonbirds",
    userId: "moonbirds",
    price: 0.2,
    title: "When you go all in with your last money and the market bounces",
    votesCount: "2.1K",
    commentsCount: "4.6K",
    keywords: ["Funny", "NFT "],
  },
  {
    id: 6,
    url: "/images/memes/meme_6.png",
    mediaType: "picture",
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
    id: 7,
    url: "/images/memes/meme_7.png",
    mediaType: "picture",
    avatar: "/images/avatars/avatar_3.png",
    username: "Savannah",
    userId: "savaneo",
    price: 0.2,
    title: "Cats are liquid",
    votesCount: "2.1K",
    commentsCount: "4.6K",
    keywords: ["Funny", "Animals "],
  },
  {
    id: 8,
    url: "/images/memes/meme_8.png",
    mediaType: "video",
    avatar: "/images/avatars/avatar_3.png",
    username: "WHIKO",
    userId: "whikoaz",
    price: 0.2,
    title: "It's Wednesday My Dudes ",
    votesCount: "2.1K",
    commentsCount: "4.6K",
    keywords: ["Funny", "Animals "],
  },
  {
    id: 9,
    url: "/images/memes/meme_9.png",
    mediaType: "video",
    avatar: "/images/avatars/avatar_3.png",
    username: "WHIKO",
    userId: "whikoaz",
    price: 0.2,
    title: "It's Wednesday My Dudes ",
    votesCount: "2.1K",
    commentsCount: "4.6K",
    keywords: ["Funny", "Animals "],
  },
];

const TrendingMemes = () => {
  const [isWaterfall, setIsWaterfall] = useState(false);
  return (
    <div className="mt-3 flex flex-col gap-6 rounded-lg">
      <div className="flex justify-between">
        <div className="flex flex-grow justify-around">
          {trendings.map((trending) => (
            <div key={trending.id} className="flex gap-2 items-center">
              <trending.icon size="w-5 h-5" />
              <Typography
                text={trending.title}
                textColor="text-primary_white-800 dark:text-primary_dark-800 cursor-pointer"
                size="miniButton"
                className="font-extrabold"
              />
            </div>
          ))}
        </div>
        <Typography
          text="More"
          textColor="text-primary_white-800 dark:text-primary_dark-800"
          size="miniButton"
          className="font-extrabold cursor-pointer"
        />
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-3 items-center cursor-pointer">
          <Typography
            text="Trending Memes"
            size="textBold"
            textColor="text-primary_white-400 dark:text-primary_dark-400"
          />
          <ArrowDownIcon />
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-3 cursor-pointer">
            <SettingIcon />
            <Typography
              text="Filters"
              size="textBold"
              textColor="text-primary_white-400 dark:text-primary_dark-400"
            />
          </div>
          <div onClick={() => setIsWaterfall(!isWaterfall)}>
            <CategoryIcon
              size="w-5 h-5"
              className={`cursor-pointer ${!isWaterfall && "text-secondary"}`}
            />
          </div>
        </div>
      </div>
      {!isWaterfall ? (
        <div className="grid grid-cols-3 gap-6 mt-6">
          {memes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} isWaterfall={isWaterfall} />
          ))}
        </div>
      ) : (
        <Masonry2 className="flex gap-6" columnClassName="" breakpointCols={3}>
          {memes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} isWaterfall={isWaterfall} />
          ))}
        </Masonry2>
      )}
    </div>
  );
};

export default TrendingMemes;
