import React from "react";
import type { NextPage } from "next";

import Layout from "../components/Layout";
import { HeroCarousel, TrendingMemes } from "../components";

const Home: NextPage = () => {
  const metaInfo = {
    title: "Home",
  };

  const layoutConfig = {
    header: true,
    footer: true,
    breadcrumb: true,
  };

  return (
    <Layout metaInfo={metaInfo} layoutConfig={layoutConfig}>
      <div className="p-3 flex flex-col gap-3">
        <div className="grow">
          <HeroCarousel />
        </div>
        <TrendingMemes />
      </div>
    </Layout>
  );
};

export default Home;
