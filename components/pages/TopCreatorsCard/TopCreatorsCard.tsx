import React from "react";

import UserAvatar from "../UserAvatar";
import { Button, Typography } from "../../base";

const creatorsList = [
  {
    avatar: "https://i.postimg.cc/65YcZLjh/Img.png",
    username: "Gecko",
    userid: "gecko",
    followed: false,
  },
  {
    avatar: "https://i.postimg.cc/c44Mdtxt/Img.png",
    username: "Jerome",
    userid: "jeromelion",
    followed: true,
  },
  {
    avatar: "https://i.postimg.cc/gkTRdMt1/Img.png",
    username: "Savannah",
    userid: "savaneo",
    followed: true,
  },
  {
    avatar: "https://i.postimg.cc/hGbfJMMD/Img.png",
    username: "Bessie",
    userid: "bessieolive",
    followed: false,
  },
  {
    avatar: "https://i.postimg.cc/0y1kpDzb/Img.png",
    username: "Ronald",
    userid: "ronald54",
    followed: true,
  },
];

const TopCreatorsCard = () => {
  return (
    <div className="transition duration-100 flex flex-col items-center p-6 rounded border bg-white dark:bg-bg_dark border-primary_white-200 dark:border-primary_dark-200 gap-6">
      <div className="w-full flex justify-between mb-4">
        <Typography
          text="Top Creators"
          className="my-auto"
          textColor="text-primary_white-600 dark:text-primary_dark-600"
          size="textBold"
        />
        <Typography
          text="View All"
          className="my-auto cursor-pointer"
          textColor="text-secondary"
        />
      </div>
      {creatorsList.map((item, i) => (
        <div className="flex justify-between items-center w-full" key={i}>
          <UserAvatar
            size="12"
            name={item.username}
            subtitle={`@${item.userid}`}
            src={item.avatar}
          />
          <Button
            variant={item.followed ? "transparent" : "outline"}
            color="green"
          >
            {item.followed ? "Follow" : "Following"}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TopCreatorsCard;
