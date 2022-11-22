import React from "react";

import { Button } from "../../base";

import { categoryItems } from "../../../constants/app/categoryItems";

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
      <Button
        component="Create New"
        customClass="text-sm px-2 border-2 border-secondary bg-transparent dark:bg-transparent hover:bg-transparent hover:dark:bg-transparent text-secondary"
      />
    </div>
  );
};

export default CategoryHeader;
