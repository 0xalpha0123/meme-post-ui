import React from "react";
import type { NextPage } from "next";

import { Layout, Web3Connect } from "../components";

const Test: NextPage = () => {
  const metaInfo = {
    title: "Test",
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="p-3 flex flex-col gap-3">
        <Web3Connect />
      </div>
    </Layout>
  );
};

export default Test;
