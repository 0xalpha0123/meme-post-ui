import React, { FunctionComponent, Fragment } from "react";
import { NextComponentType, NextPageContext } from "next";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { ToastContainer } from "react-toastify";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { store } from "../store";

import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const MyApp = ({
  Component,
  pageProps,
}: AppProps & {
  Component: NextComponentType<NextPageContext> & {
    Guard: FunctionComponent;
    Layout: FunctionComponent;
    Provider: FunctionComponent;
  };
}) => {
  // Allows for conditionally setting a guard to be hoisted per page
  const Guard: any = Component.Guard || Fragment;
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Provider store={store}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Guard>
            <Component {...pageProps} />
            <ToastContainer theme="colored" />
          </Guard>
        </Web3ReactProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
