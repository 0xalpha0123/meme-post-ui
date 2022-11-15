import React from "react";
import type { NextPage } from "next";

import { HeroCarousel, Layout, TrendingMemes } from "../components";

const Home: NextPage = () => {
  const metaInfo = {
    title: "Home",
  };

  return (
    <Layout metaInfo={metaInfo}>
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
