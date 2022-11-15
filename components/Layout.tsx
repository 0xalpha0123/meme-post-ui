import React from "react";
import Head from "next/head";

import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

import Sidebar from "./Sidebar";
import FundManageCard from "./FundManageCard";
import TopCreatorsCard from "./TopCreatorsCard";
import RecentActivitiesCard from "./RecentActivitiesCard";

import type { ReactElement } from "react";
import JoinCommunity from "./JoinCommunity";

interface LayoutProps {
  children: ReactElement;
  metaInfo: MetaInfo;
  layoutConfig?: LayoutConfig;
}

interface MetaInfo {
  title: string | undefined;
  description?: string | undefined;
  keywords?: string | undefined;
}

interface LayoutConfig {
  hideHeader?: boolean;
  hideBreadcrumb?: boolean;
  hideFooter?: boolean;
  hideFundManage?: boolean;
  hideTopCreator?: boolean;
  hideRecentActivity?: boolean;
  hideSwapWidget?: boolean;
}

const Layout = (props: LayoutProps) => {
  const { title, keywords, description } = props.metaInfo;
  const hideHeader = props.layoutConfig?.hideHeader || false;
  const hideBreadcrumb = props.layoutConfig?.hideBreadcrumb || false;
  const hideFooter = props.layoutConfig?.hideFooter || false;
  const hideFundManage = props.layoutConfig?.hideFundManage || false;
  const hideTopCreator = props.layoutConfig?.hideTopCreator || false;
  const hideRecentActivity = props.layoutConfig?.hideRecentActivity || false;
  const hideSwapWidget = props.layoutConfig?.hideSwapWidget || false;

  return (
    <div className="flex flex-col animate duration-300 bg-primary_white-50 dark:bg-primary_dark-50 text-primary_white-400 dark:text-primary_dark-400">
      <Head>
        <title>{`${title} | Meme DAO`}</title>
        {!!description && <meta name="description" content={description} />}
        {!!keywords && <meta name="keywords" content={keywords} />}
      </Head>
      <div className="w-full flex">
        <Sidebar />
        <div className="flex flex-grow flex-col">
          {!hideHeader && <Header />}
          <main className="w-full flex gap-6 p-6">
            <div className="grow">
              {!hideBreadcrumb && <Breadcrumb />}
              {props.children}
            </div>
            <div className="min-w-[375px] gap-6 flex flex-col">
              {!hideFundManage && <FundManageCard />}
              {!hideTopCreator && <TopCreatorsCard />}
              {!hideRecentActivity && <RecentActivitiesCard />}
              {!hideSwapWidget && <RecentActivitiesCard />}
              <JoinCommunity />
            </div>
          </main>
        </div>
      </div>
      {!hideFooter && <Footer />}
      <ScrollToTop />
    </div>
  );
};

export default Layout;
