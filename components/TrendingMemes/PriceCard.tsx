import React from "react";
import { EthPriceIcon } from "../../icons";

const PriceCard = ({ price }: { price: number }) => {
  return (
    <div className="flex items-center gap-2 px-2 py-1 bg-green-200 dark:bg-primary_dark-200 rounded-lg text-green-800 dark:text-primary_dark-800">
      <EthPriceIcon />
      {price} ETH
    </div>
  );
};

export default PriceCard;
