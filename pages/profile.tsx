import React from "react";
import type { NextPage } from "next";

import { Layout, ProfilePanel } from "../components";

const Profile: NextPage = () => {
  const metaInfo = {
    title: "Profile",
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="p-3 flex flex-col gap-3">
        <ProfilePanel />
      </div>
    </Layout>
  );
};

export default Profile;
