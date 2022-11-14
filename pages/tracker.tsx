import React from "react";
import type { NextPage } from "next";

import { Layout, TaxTracker } from "../components";

const Tracker: NextPage = () => {
  const metaInfo = {
    title: "Tax Tracker",
  };

  const layoutConfig = {
    header: true,
    footer: true,
    breadcrumb: true,
  };

  return (
    <Layout metaInfo={metaInfo} layoutConfig={layoutConfig}>
      <div className="p-3 flex flex-col gap-3">
        <TaxTracker />
        <div className="w-full">
          <img src="/images/advertises/advertise_1.png" className="w-full" />
        </div>
      </div>
    </Layout>
  );
};

export default Tracker;
