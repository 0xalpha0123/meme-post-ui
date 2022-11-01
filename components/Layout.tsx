import React from "react";
import Head from "next/head";

import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";

import Sidebar from "./Sidebar";
import FundManageCard from "./FundManageCard";
import TopCreatorsCard from "./TopCreatorsCard";
import RecentActivitiesCard from "./RecentActivitiesCard";

import type { ReactElement } from "react";

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
  footer?: boolean;
  breadcrumb?: boolean;
}

const Layout = (props: LayoutProps) => {
  const { title, keywords, description } = props.metaInfo;
  const header = props.layoutConfig.header;
  const footer = props.layoutConfig.footer;
  const breadcrumb = props.layoutConfig.breadcrumb;

  return (
    <div className="flex animate duration-300 bg-primary_white-50 dark:bg-primary_dark-50 text-primary_white-400 dark:text-primary_dark-400">
      <Head>
        <title>{`${title} | Meme DAO`}</title>
        {!!description && <meta name="description" content={description} />}
        {!!keywords && <meta name="keywords" content={keywords} />}
      </Head>
      <ScrollToTop />
      <Sidebar />
      <div className="flex-grow">
        {header && <Header />}
        <main className="w-full flex gap-3 p-3">
          <div className="grow">
            {breadcrumb && <Breadcrumb />}
            {props.children}
          </div>
          <div className="min-w-[350px] gap-3 flex flex-col">
            <FundManageCard />
            <TopCreatorsCard />
            <RecentActivitiesCard />
          </div>
        </main>
        {footer && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
