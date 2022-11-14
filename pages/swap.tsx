import React from "react";
import type { NextPage } from "next";

import { Layout, SwapPanel } from "../components";

const Swap: NextPage = () => {
  const metaInfo = {
    title: "Swap",
  };

  const layoutConfig = {
    header: true,
    footer: true,
    breadcrumb: true,
  };

  return (
    <Layout metaInfo={metaInfo} layoutConfig={layoutConfig}>
      <div className="p-3 flex flex-col gap-3">
        <SwapPanel />
      </div>
    </Layout>
  );
};

export default Swap;
