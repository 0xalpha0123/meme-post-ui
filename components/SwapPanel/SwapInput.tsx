import React from "react";
import { ArrowDownIcon } from "../../icons";
import Avatar from "../Avatar";
import Input from "../Input";
import Typography from "../Typography";

interface SwapInputProps {
  isFrom: boolean;
  tokenLists: Array<any>;
  token: any;
}

const SwapInput = (props: SwapInputProps) => {
  return (
    <div className="w-full grid grid-cols-2 py-6 justify-between">
      <div className="flex flex-col justify-between gap-6">
        <Typography
          text={props.isFrom ? "Pay" : "Receive"}
          size="h7"
          textColor="text-primary_white-400 dark:text-primary_dark-400"
        />
        <div className="flex items-center gap-3">
          <Avatar style="circle" avatar={props.token.imgUrl} type="image" />
          <div className="flex gap-3 cursor-pointer">
            <Typography
              text={props.token.symbol}
              textColor="text-primary_white-400 dark:text-primary_dark-400"
              size="subtitleBold"
            />
            <ArrowDownIcon />
          </div>
        </div>
        <div className="flex gap-2">
          <Typography
            text="Balance:"
            textColor="text-primary_white-400 dark:text-primary_dark-400"
          />
          <Typography
            text={`2,498 ${props.token.symbol}`}
            textColor="text-secondary"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-6">
        <div className="w-full flex justify-between gap-10">
          <div className="cursor-pointer">
            <Typography
              text="MIN"
              size="textBold"
              textColor="text-primary_white-400 dark:text-primary_dark-400"
            />
          </div>
          <div className="cursor-pointer">
            <Typography
              text="HALF"
              size="textBold"
              textColor="text-primary_white-400 dark:text-primary_dark-400"
            />
          </div>
          <div className="cursor-pointer">
            <Typography
              text="MAX"
              size="textBold"
              textColor="text-primary_white-400 dark:text-primary_dark-400"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Input label="AMOUNT" endLabel={props.token.symbol} />
        </div>
        <div className="flex gap-2 justify-end">
          <Typography
            text="$1000.00"
            textColor="text-primary_white-400 dark:text-primary_dark-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SwapInput;
