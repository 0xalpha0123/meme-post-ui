import React from "react";

import { Layout, Spinner, Web3Connect } from "../components";

import NetworkGuard from "../guards/network";
import { ChainId } from "../constants/network";

const Test = () => {
  const metaInfo = {
    title: "Test",
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="p-3 flex flex-col gap-3">
        <Web3Connect />
        <Spinner />
      </div>
    </Layout>
  );
};

// eslint-disable-next-line new-cap
Test.Guard = NetworkGuard([ChainId.POLYGON, ChainId.MAINNET]);

export default Test;
