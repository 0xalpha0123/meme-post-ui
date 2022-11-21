import React from "react";
import type { NextPage } from "next";

import { HeroCarousel, Layout, MemeList } from "../components";

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
        <MemeList />
      </div>
    </Layout>
  );
};

export default Home;
