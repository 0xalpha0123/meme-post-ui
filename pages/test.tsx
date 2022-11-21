import React from "react";
import type { NextPage } from "next";

import { Layout } from "../components";
import Dialog from "../components/Dialog";

const Test: NextPage = () => {
  const metaInfo = {
    title: "Test",
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="p-3 flex flex-col gap-3">
        <Dialog />
      </div>
    </Layout>
  );
};

export default Test;
