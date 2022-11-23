import { useWeb3React } from "@web3-react/core";
import React from "react";
import { Line } from "react-chartjs-2";

import Web3Connect from "../Web3Connect";
import { Avatar, Button, Typography } from "../../base";
import { DocumentDownloadIcon } from "../../../icons";

const token = {
  symbol: "USDC",
  imgUrl: "/images/tokens/usdc.png",
  address: "",
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      backgroundColor: "#fff",
      callbacks: {
        title: function () {
          return "";
        },
        label: function (context: any) {
          let label = context.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          }
          return label;
        },
        labelTextColor: function () {
          return "#000";
        },
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 3,
      borderColor: "rgba(47, 97, 68, 1)",
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverBorderWidth: 3,
      borderColor: "#fff",
      backgroundColor: "rgba(47, 97, 68, 0.3)",
    },
  },
  scales: {
    xAxis: {
      ticks: {
        maxRotation: 0,
        maxTicksLimit: 6,
        backdropPadding: 10,
      },
    },
    yAxis: {
      display: false,
    },
  },
  layout: {
    padding: {
      top: 15,
    },
  },
};

const StakePanel = () => {
  const { active } = useWeb3React();

  const data = {
    labels: [
      "Oct 01",
      "Oct 02",
      "Oct 03",
      "Oct 04",
      "Oct 05",
      "Oct 06",
      "Oct 07",
      "Oct 08",
      "Oct 09",
      "Oct 10",
      "Oct 11",
      "Oct 12",
      "Oct 13",
      "Oct 14",
      "Oct 15",
      "Oct 16",
      "Oct 17",
      "Oct 18",
      "Oct 19",
      "Oct 20",
      "Oct 21",
      "Oct 22",
      "Oct 23",
      "Oct 24",
      "Oct 25",
      "Oct 26",
      "Oct 27",
      "Oct 28",
      "Oct 29",
      "Oct 30",
      "Oct 31",
    ],
    datasets: [
      {
        data: [
          20488.5, 20626.3, 20809.8, 20594.4, 20292.9, 20769.5, 20082.7,
          19331.5, 19571.2, 19204.8, 19162.6, 19042.9, 19123.9, 19328.2,
          19548.2, 19261.9, 19068.7, 19181.8, 19379.8, 19154.8, 19059.1,
          19134.6, 19441.0, 19415.0, 19531.3, 19956.7, 20157.5, 20340.2,
          19628.3, 19052.2, 19311.9,
        ],
        borderColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea);
        },
      },
    ],
  };
  function getGradient(ctx: any, chartArea: any) {
    let width: any;
    let height: any;
    let gradient: any;
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(0, "#00DF9C");
      gradient.addColorStop(1, "#3F5DFB");
    }

    return gradient;
  }
  return (
    <div className="flex flex-col justify-between gap-12 transition duration-100">
      <Typography
        text="Stake Your MEME"
        textColor="text-primary_white-800 dark:text-primary_dark-800"
        size="h6"
      />
      <Typography
        text="The best way to earn MEME. Commit carbon to our treasury, and receive KLIMA at a discount. All bonds (except inverse bonds) have a mandatory 5 day vesting period."
        textColor="text-primary_white-600 dark:text-primary_dark-600"
        size="description"
        className="-mt-8"
      />
      <div className="w-full flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar src={token.imgUrl} size="12" />
          <div className="flex flex-col gap-1 cursor-pointer">
            <Typography
              text={token.symbol}
              textColor="text-primary_white-600 dark:text-primary_dark-600"
              size="h6"
            />
            <div className="flex gap-2">
              <Typography
                text="$1.00 USD"
                textColor="text-primary_white-600 dark:text-primary_dark-600"
                size="text"
              />
              <Typography text="0.11%" textColor="text-secondary" size="text" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 cursor-pointer">
          <DocumentDownloadIcon size="w-5 h-5" />
          <Typography
            text="Download Docs"
            textColor="text-primary_white-600 dark:text-primary_dark-600"
            size="text"
          />
        </div>
      </div>
      <div className="w-full flex gap-3 -mt-6">
        <Button variant="outline" color="green" size="sm">
          1 D
        </Button>
        <Button variant="transparent" size="sm">
          1 W
        </Button>
        <Button variant="transparent" size="sm">
          1 M
        </Button>
        <Button variant="transparent" size="sm">
          1 Y
        </Button>
        <Button variant="transparent" size="sm">
          ALL
        </Button>
      </div>
      <Line
        data={data}
        width={100}
        height={30}
        options={options}
        className="my-6"
      />
      <div className="w-full grid grid-cols-2 gap-6 -mt-6">
        <div className="flex flex-col gap-3">
          <Typography
            text="Assets Under Management"
            textColor="text-primary_white-600 dark:text-primary_dark-600"
            size="subtitle"
          />
          <Typography
            text="$1,638.41"
            textColor="text-primary_white-800 dark:text-primary_dark-800"
            size="h5"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Typography
            text="Depositors"
            textColor="text-primary_white-600 dark:text-primary_dark-600"
            size="subtitle"
          />
          <Typography
            text="8"
            textColor="text-primary_white-800 dark:text-primary_dark-800"
            size="h5"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-3 justify-between">
          <Typography
            text="Returns"
            textColor="text-primary_white-800 dark:text-primary_dark-800"
            size="h7"
          />
          <div className="w-full flex gap-3 justify-between">
            <div className="flex flex-col items-center gap-1">
              <Typography
                text="1D"
                textColor="text-primary_white-800 dark:text-primary_dark-800"
                size="subtitle"
              />
              <Typography text="58.11%" textColor="text-secondary" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <Typography
                text="1W"
                textColor="text-primary_white-800 dark:text-primary_dark-800"
                size="subtitle"
              />
              <Typography text="49.98%" textColor="text-secondary" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <Typography
                text="1M"
                textColor="text-primary_white-800 dark:text-primary_dark-800"
                size="subtitle"
              />
              <Typography text="58.86%" textColor="text-secondary" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <Typography
                text="1Y"
                textColor="text-primary_white-800 dark:text-primary_dark-800"
                size="subtitle"
              />
              <Typography text="-2.61%" textColor="text-custom-red" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <Typography
                text="ALL"
                textColor="text-primary_white-800 dark:text-primary_dark-800"
                size="subtitle"
              />
              <Typography text="-2.61%" textColor="text-custom-red" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <Typography
            text="My Assets"
            textColor="text-primary_white-800 dark:text-primary_dark-800"
            size="h7"
          />
          {active ? (
            <Button variant="outline" color="green">
              Stake
            </Button>
          ) : (
            <Web3Connect />
          )}
        </div>
      </div>
    </div>
  );
};

export default StakePanel;
