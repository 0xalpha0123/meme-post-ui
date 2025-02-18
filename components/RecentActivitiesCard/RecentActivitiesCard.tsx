import React from "react";
import Typography from "../Typography";
import UserAvatar from "../UserAvatar";

const recentActivitiesList = [
  {
    avatar: "https://i.postimg.cc/65YcZLjh/Img.png",
    username: "Tykes",
    activity: "Purchased meme from @ronald54",
    followed: false,
    times: "20m ago",
  },
  {
    avatar: "https://i.postimg.cc/c44Mdtxt/Img.png",
    username: "Gorilla",
    activity: "Purchased meme from @bessieolive",
    times: "25m ago",
  },
  {
    avatar: "https://i.postimg.cc/gkTRdMt1/Img.png",
    username: "Black Cat",
    activity: "Purchased meme from @bessieolive",
    times: "30m ago",
  },
  {
    avatar: "https://i.postimg.cc/hGbfJMMD/Img.png",
    username: "Sappy",
    activity: "Purchased meme from @savaneo",
    times: "30m ago",
  },
  {
    avatar: "https://i.postimg.cc/0y1kpDzb/Img.png",
    username: "Ronald",
    activity: "Purchased meme from @ronald54",
    times: "35m ago",
  },
];

const RecentActivitiesCard = () => {
  return (
    <div className="flex flex-col items-center p-3 rounded-xl border bg-white dark:bg-bg_dark border-primary_white-200 dark:border-primary_dark-200 gap-4">
      <div className="w-full flex justify-between mb-4">
        <Typography
          text="Recent Activities"
          className="my-auto"
          textColor="text-primary_white-400 dark:text-primary_dark-400"
          size="textBold"
        />
        <Typography
          text="View All"
          className="my-auto cursor-pointer"
          textColor="text-secondary"
        />
      </div>
      {recentActivitiesList.map((item, i) => (
        <div className="flex justify-between items-center w-full" key={i}>
          <UserAvatar
            size={48}
            username={item.username}
            subtitle={`@${item.activity}`}
            avatar={item.avatar}
            subtitleSize="miniDescription"
          />
          <Typography
            text={item.times}
            textColor="text-primary_white-400 dark:text-primary_dark-400 hover:text-primary_white-800 hover:dark:text-primary_dark-800"
            size="miniDescription"
          />
        </div>
      ))}
    </div>
  );
};

export default RecentActivitiesCard;
