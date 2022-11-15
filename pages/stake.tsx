import React from "react";
import type { NextPage } from "next";

import { Layout, StakePanel } from "../components";

const token = {
  symbol: "USDC",
  imgUrl: "/images/tokens/usdc.png",
  address: "",
};

const Stake: NextPage = () => {
  const metaInfo = {
    title: "Swap",
  };

  const layoutConfig = {
    hideTopCreator: true,
    hideRecentActivity: true,
  };

  return (
    <Layout metaInfo={metaInfo} layoutConfig={layoutConfig}>
      <div className="p-3 flex flex-col gap-3">
        <StakePanel token={token} />
      </div>
    </Layout>
  );
};

export default Stake;
