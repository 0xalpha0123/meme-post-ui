import React from "react";

import Typography from "../Typography";
import BondItem from "./BondItem";

const bondArray = [
  {
    id: "klima-inverse",
    title: "KLIMA (inverse)",
    description: "Provide KLIMA, receive USDC",
    discount: 10,
    isSoldOut: false,
    token1: "/images/tokens/btc.png",
    token2: "/images/tokens/usdc.png",
  },
  {
    id: "klima-bct-lp",
    title: "KLIMA/BCT LP",
    description: "KLIMA/BCT Sushiswap Liquidity",
    discount: 10,
    isSoldOut: false,
    token1: "/images/tokens/usdc.png",
    token2: "/images/tokens/eth.png",
  },
  {
    id: "klima-inverse-1",
    title: "KLIMA (inverse)",
    description: "Provide KLIMA, receive USDC",
    discount: 10,
    isSoldOut: true,
    token1: "/images/tokens/btc.png",
    token2: "/images/tokens/usdc.png",
  },
  {
    id: "klima-bct-lp-1",
    title: "KLIMA/BCT LP",
    description: "KLIMA/BCT Sushiswap Liquidity",
    discount: 10,
    isSoldOut: true,
    token1: "/images/tokens/usdc.png",
    token2: "/images/tokens/eth.png",
  },
];

const BondCard = () => {
  return (
    <div className="flex flex-col gap-8 rounded-lg py-6 px-12 transition duration-100 border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark">
      <Typography
        text="Bond Carbon"
        textColor="text-primary_white-800 dark:text-primary_dark-800"
        size="h6"
      />
      <Typography
        text="The best way to buy KLIMA. Commit carbon to our treasury, and receive KLIMA at a discount. All bonds (except inverse bonds) have a mandatory 5 day vesting period."
        textColor="text-primary_white-600 dark:text-primary_dark-600"
        size="description"
        className="-mt-4"
      />
      <div className="w-4/5 mx-auto flex flex-col gap-8">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-secondary rounded-full"></span>
          <Typography
            text="Your Meme Balance"
            textColor="text-primary_white-600 dark:text-primary_dark-600"
            size="h7"
          />
        </div>
        <Typography
          text="$4,407.00"
          textColor="text-primary_white-800 dark:text-primary_dark-800"
          size="h4"
          className="-mt-4"
        />
        <div className="flex justify-between mt-6 p-3">
          <Typography
            text="Choose a bond"
            className="uppercase"
            textColor="text-primary_white-600 dark:text-primary_dark-600"
          />
          <Typography
            text="Discount"
            className="uppercase"
            textColor="text-primary_white-600 dark:text-primary_dark-600"
          />
        </div>
        {bondArray.map((bond) => (
          <BondItem key={bond.id} {...bond} />
        ))}
      </div>
    </div>
  );
};

export default BondCard;
