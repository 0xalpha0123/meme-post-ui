import React from "react";
import type { NextPage } from "next";

import { Layout, BondCard } from "../components";

const Bonds: NextPage = () => {
  const metaInfo = {
    title: "Bonds",
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="p-3 flex flex-col gap-3">
        <BondCard />
      </div>
    </Layout>
  );
};

export default Bonds;
