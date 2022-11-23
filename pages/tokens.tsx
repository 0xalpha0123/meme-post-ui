import React from "react";
import type { NextPage } from "next";

import { Layout, TokenManagePanel } from "../components";

const Tokens: NextPage = () => {
  const metaInfo = {
    title: "Your Tokens",
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="p-3 flex flex-col gap-3">
        <TokenManagePanel />
      </div>
    </Layout>
  );
};

export default Tokens;
