import React from "react";
import type { ReactElement } from "react";
import Head from "next/head";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

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
import { ScrollToTop } from "./base";

import { useEagerConnect, useInactiveListener } from "../hooks";

const defaultLayout = {
  header: true,
  breadcrumb: true,
  footer: true,
  fundManage: true,
  topCreator: true,
  recentActivity: true,
  swapWidget: false,
};

const Layout = ({
  children,
  metaInfo: { title = "", description, keywords },
  layoutConfig = defaultLayout,
}: {
  children: ReactElement;
  metaInfo: {
    title: string | undefined;
    description?: string | undefined;
    keywords?: string | undefined;
  };
  layoutConfig?: {
    header?: boolean;
    breadcrumb?: boolean;
    footer?: boolean;
    fundManage?: boolean;
    topCreator?: boolean;
    recentActivity?: boolean;
    swapWidget?: boolean;
  };
}) => {
  const { connector, active } = useWeb3React<Web3Provider>();

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
          {defaultLayout.header && <Header />}
          <main className="w-full flex gap-6 p-6">
            <div className="grow">
              {defaultLayout.breadcrumb && <Breadcrumb />}
              {children}
            </div>
            <div className="min-w-[375px] gap-3 flex flex-col">
              {defaultLayout.fundManage && active && <FundManageCard />}
              {defaultLayout.topCreator && <TopCreatorsCard />}
              {defaultLayout.recentActivity && <RecentActivitiesCard />}
              {defaultLayout.swapWidget && <RecentActivitiesCard />}
              <JoinCommunity />
            </div>
          </main>
        </div>
      </div>
      {defaultLayout.footer && <Footer />}
      <ScrollToTop />
    </div>
  );
};

export default Layout;
