import React from "react";
import Button from "../Button";
import { CloseIcon } from "../Icons";
import Typography from "../Typography";

const TrialCard = () => {
  return (
    <div className="w-[82%] m-auto h-[280px] flex flex-col justify-between items-center px-2 py-3 rounded-xl bg-free-trial">
      <div className="flex justify-end w-full">
        <div className="rounded-full p-2 bg-primary_white-0 cursor-pointer">
          <CloseIcon className="w-3 h-3" />
        </div>
      </div>
      <div className="text-center">
        <Typography
          text="IS EVERYTHING FINE?"
          size="description"
          textColor="text-primary_white-0 font-extrabold dark:text-primary_dark-1000 px-3"
          className="text-lg"
        />
        <Button className="mt-4" component="Try Free Trial" size="small" />
      </div>
    </div>
  );
};

export default TrialCard;
