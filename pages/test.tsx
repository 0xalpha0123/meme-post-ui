import React from "react";

import { Layout, Tooltip } from "../components";

const Test = () => {
  const metaInfo = {
    title: "Test",
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="p-3 flex flex-col gap-3">
        <div className="flex gap-6 p-6 rounded transition duration-100 border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark">
          <div className="container mx-auto py-12">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <Tooltip tooltipText="Tooltip Text">
                    <button>Tooltip on top</button>
                  </Tooltip>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <Tooltip tooltipText="Tooltip Text" position="right">
                    <button>Tooltip on right</button>
                  </Tooltip>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <Tooltip tooltipText="Tooltip Text" position="bottom">
                    <button>Tooltip on bottom</button>
                  </Tooltip>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14 sm:text-left">
                  <Tooltip tooltipText="Tooltip Text" position="left">
                    <button>Tooltip on left</button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// eslint-disable-next-line new-cap
// Test.Guard = NetworkGuard([ChainId.POLYGON, ChainId.MAINNET]);

export default Test;
