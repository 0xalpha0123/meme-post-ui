import React from "react";

import { Avatar, Input, Typography } from "../../base";
import { ArrowDownIcon } from "../../../icons";

interface SwapInputProps {
  isFrom: boolean;
  tokenLists: Array<any>;
  token: any;
}

const SwapInput = (props: SwapInputProps) => {
  return (
    <div className="w-full grid grid-cols-2 px-6 pb-6 pt-12 gap-3 rounded-xl transition-all duration-100 border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark">
      <div className="flex flex-col justify-between gap-6">
        <Typography
          text={props.isFrom ? "Pay" : "Receive"}
          size="h7"
          textColor="text-primary_white-600 dark:text-primary_dark-600"
        />
        <div className="flex items-center gap-6">
          <Avatar style="circle" avatar={props.token.imgUrl} type="image" />
          <div className="flex gap-3 cursor-pointer items-center">
            <Typography
              text={props.token.symbol}
              textColor="text-primary_white-600 dark:text-primary_dark-600"
              size="h7"
            />
            <ArrowDownIcon />
          </div>
        </div>
        <div className="flex gap-2">
          <Typography
            text="Balance:"
            textColor="text-primary_white-600 dark:text-primary_dark-600"
          />
          <Typography
            text={`2,498 ${props.token.symbol}`}
            textColor="text-secondary"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-6">
        <div className="w-full flex justify-end gap-10">
          <div className="cursor-pointer">
            <Typography
              text="MIN"
              size="textBold"
              textColor="text-primary_white-600 dark:text-primary_dark-600"
            />
          </div>
          <div className="cursor-pointer">
            <Typography
              text="HALF"
              size="textBold"
              textColor="text-primary_white-600 dark:text-primary_dark-600"
            />
          </div>
          <div className="cursor-pointer">
            <Typography
              text="MAX"
              size="textBold"
              textColor="text-primary_white-600 dark:text-primary_dark-600"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Input label="AMOUNT" endLabel={props.token.symbol} />
        </div>
        <div className="flex gap-2 justify-end">
          <Typography
            text="$1000.00"
            textColor="text-primary_white-600 dark:text-primary_dark-600"
          />
        </div>
      </div>
    </div>
  );
};

export default SwapInput;
