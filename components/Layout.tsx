import React from "react";
import Head from "next/head";

import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";

import Sidebar from "./Sidebar";
import FundManageCard from "./FundManageCard";
import TopCreatorsCard from "./TopCreatorsCard";
import RecentActivitiesCard from "./RecentActivitiesCard";

import type { ReactElement } from "react";
import JoinCommunity from "./JoinCommunity";

interface LayoutProps {
  children: ReactElement;
  metaInfo: MetaInfo;
  layoutConfig: LayoutConfig;
}

interface MetaInfo {
  title: string | undefined;
  description?: string | undefined;
  keywords?: string | undefined;
}

interface LayoutConfig {
  header?: boolean;
  breadcrumb?: boolean;
}

const Layout = (props: LayoutProps) => {
  const { title, keywords, description } = props.metaInfo;
  const header = props.layoutConfig.header;
  const breadcrumb = props.layoutConfig.breadcrumb;

  return (
    <div className="flex animate duration-300 bg-primary_white-50 dark:bg-primary_dark-50 text-primary_white-400 dark:text-primary_dark-400">
      <Head>
        <title>{`${title} | Meme DAO`}</title>
        {!!description && <meta name="description" content={description} />}
        {!!keywords && <meta name="keywords" content={keywords} />}
      </Head>
      <Sidebar />
      <div className="flex flex-grow flex-col">
        {header && <Header />}
        <main className="w-full flex gap-6 p-6">
          <div className="grow">
            {breadcrumb && <Breadcrumb />}
            {props.children}
          </div>
          <div className="min-w-[375px] gap-6 flex flex-col">
            <FundManageCard />
            <TopCreatorsCard />
            <RecentActivitiesCard />
            <JoinCommunity />
          </div>
        </main>
        {/* {footer && <Footer />} */}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Layout;
