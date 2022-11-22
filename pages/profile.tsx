import React from "react";
import { ProfilePanel } from "../components";

import Layout from "../components/Layout";

const Profile = () => {
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
