import React from "react";
import type { NextPage } from "next";

import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel";
import TrendingMemes from "../components/TrendingMemes";

const Home: NextPage = () => {
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
        <HeroCarousel />
        <TrendingMemes />
      </div>
    </Layout>
  );
};

export default Home;
