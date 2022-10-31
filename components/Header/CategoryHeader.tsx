import React from "react";
import Button from "../Button";
import { Chart2Icon, FireIcon, TimerIcon, TrendUpIcon } from "../Icons";

const categories = [
  {
    id: "hot",
    title: "Hot",
    icon: FireIcon,
  },
  {
    id: "trending",
    title: "Trending",
    icon: TrendUpIcon,
  },
  {
    id: "fresh",
    title: "Fresh",
    icon: TimerIcon,
  },
  {
    id: "top",
    title: "Top",
    icon: Chart2Icon,
  },
];

const CategoryHeader = () => {
  return (
    <div className="flex my-auto gap-8">
      {categories.map((item) => (
        <div
          key={item.id}
          className="flex justify-center text-sm items-center hover:cursor-pointer font-semibold"
        >
          <item.icon className="mr-3" />
          {item.title}
        </div>
      ))}
      <Button component="Create New" className="py-2 px-4" />
    </div>
  );
};

export default CategoryHeader;
