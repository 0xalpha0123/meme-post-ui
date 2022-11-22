import React from "react";

import Button from "../Button";
import Typography from "../Typography";
import { CloseIcon } from "../../icons";

const TrialCard = () => {
  return (
    <div className="bg-free-trial aspect-[0.7138] w-4/5 m-auto flex flex-col justify-between items-center px-2 py-3 rounded-xl bg-cover">
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
