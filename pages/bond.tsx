import React from "react";
import type { NextPage } from "next";

import Layout from "../components/Layout";
import BondCard from "../components/Bonds";

const Bonds: NextPage = () => {
  const metaInfo = {
    title: "Bonds",
  };

  const layoutConfig = {
    header: true,
    footer: true,
    breadcrumb: true,
  };

  return (
    <Layout metaInfo={metaInfo} layoutConfig={layoutConfig}>
      <div className="p-3 flex flex-col gap-3">
        <BondCard />
      </div>
    </Layout>
  );
};

export default Bonds;
