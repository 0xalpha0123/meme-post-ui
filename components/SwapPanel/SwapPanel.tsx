import React from "react";
import { InfoCircleIcon, SettingIcon, SwapIcon } from "../../icons";
import Button from "../Button";
import IconButton from "../IconButton";
import Typography from "../Typography";

import SwapInput from "./SwapInput";

const tokenLists = [
  {
    symbol: "USDC",
    imgUrl: "/images/tokens/usdc.png",
    address: "",
  },
  {
    symbol: "BTC",
    imgUrl: "/images/tokens/btc.png",
    address: "",
  },
];

const SwapPanel = () => {
  return (
    <div className="flex flex-col gap-12 px-12 py-6 rounded-lg items-center bg-white dark:bg-bg_dark">
      <SwapInput isFrom={true} tokenLists={tokenLists} token={tokenLists[0]} />
      <IconButton
        component={<SwapIcon />}
        rounded={true}
        size="large"
        className="-my-12"
      />
      <SwapInput isFrom={false} tokenLists={tokenLists} token={tokenLists[1]} />
      <div className="w-full flex justify-between items-center">
        <Typography
          text={`1 ${tokenLists[0].symbol} = 0.000060 ${tokenLists[1].symbol}`}
          textColor="text-primary_white-800 dark:text-primary_dark-800"
          size="h7"
        />
        <div className="flex gap-6">
          <SettingIcon className="cursor-pointer" />
          <Typography
            text="1 %"
            textColor="text-primary_white-800 dark:text-primary_dark-800"
            size="textBold"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-3 items-center">
        <div className="flex gap-3">
          <InfoCircleIcon size="min-w-[24px] h-6" className="text-custom-red" />
          <Typography
            text="Please note that due to exchange rate fluctuations, there may be a slight difference between the amount you recieve and the estimated amount."
            size="text"
            textColor="text-primary_white-400 dark:text-primary_dark-400"
            className="tracking-wide"
          />
        </div>
        <Button
          component={
            <Typography text="Swap" textColor="text-white" size="h7" />
          }
        />
      </div>
    </div>
  );
};

export default SwapPanel;
