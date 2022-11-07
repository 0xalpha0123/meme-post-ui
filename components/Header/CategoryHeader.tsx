import React from "react";
import Button from "../Button";

import { categoryItems } from "../../constants/categoryItems";

const CategoryHeader = () => {
  return (
    <div className="flex my-auto gap-8">
      {categoryItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-center text-sm items-center font-semibold hover:cursor-pointer hover:text-primary_white-800 dark:hover:text-primary_dark-800"
        >
          <item.icon className="mr-3 w-5 h-5" />
          {item.title}
        </div>
      ))}
      <Button component="Create New" className="py-2 px-4" />
    </div>
  );
};

export default CategoryHeader;
