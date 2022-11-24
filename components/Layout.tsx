import React from "react";
import type { ReactElement } from "react";
import Head from "next/head";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import { ScrollToTop } from "./base";
import {
  Header,
  Breadcrumb,
  Footer,
  Sidebar,
  FundManageCard,
  TopCreatorsCard,
  RecentActivitiesCard,
  JoinCommunity,
} from "./pages";

import { useEagerConnect, useInactiveListener } from "../hooks";

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
  // const hideSwapWidget = props.layoutConfig?.hideSwapWidget || false;

  const { connector } = useWeb3React<Web3Provider>();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <div className="flex flex-col transition-all duration-100 bg-primary_white-50 dark:bg-primary_dark-50 text-primary_white-600 dark:text-primary_dark-600">
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
            <div className="min-w-[375px] gap-3 flex flex-col">
              {!hideFundManage && <FundManageCard />}
              {!hideTopCreator && <TopCreatorsCard />}
              {!hideRecentActivity && <RecentActivitiesCard />}
              {/* {!hideSwapWidget && <RecentActivitiesCard />} */}
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
