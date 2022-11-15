import React from "react";
import type { NextPage } from "next";

import { Layout, SwapPanel } from "../components";

const Swap: NextPage = () => {
  const metaInfo = {
    title: "Swap",
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="p-3 flex flex-col gap-3">
        <SwapPanel />
      </div>
    </Layout>
  );
};

export default Swap;
