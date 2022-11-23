import React from "react";

import { Button, Typography } from "../../base";

interface BondItemProps {
  title: string;
  description: string;
  discount: number;
  isSoldOut: boolean;
  token1: string;
  token2: string;
}

const BondItem = (props: BondItemProps) => {
  return (
    <div className="p-3 flex gap-6 w-full items-center">
      <div className="flex relative aspect-square h-8">
        <img src={props.token1} className="absolute bottom-2 right-2" />
        <img src={props.token2} className="absolute top-2 left-2" />
      </div>
      <div className="flex flex-grow justify-between items-center">
        <div className="flex flex-col gap-2">
          <Typography
            text={props.title}
            textColor="text-primary_white-800 dark:text-primary_dark-800"
            size="h7"
          />
          <Typography
            text={props.description}
            textColor="text-primary_white-600 dark:text-primary_dark-600"
          />
        </div>
        <div>
          {props.isSoldOut ? (
            <Typography
              text="Sold Out"
              textColor="text-primary_white-600 dark:text-primary_dark-600"
              size="button"
            />
          ) : (
            <Button
              variant="outline"
              color="green"
              className="px-8 text-md font-bold"
            >
              {props.discount}&nbsp;&nbsp;&nbsp;%
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BondItem;
