import React from "react";
import { Line } from "react-chartjs-2";
import Button from "../Button";
import Typography from "../Typography";

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
        20488.5, 20626.3, 20809.8, 20594.4, 20292.9, 20769.5, 20082.7, 19331.5,
        19571.2, 19204.8, 19162.6, 19042.9, 19123.9, 19328.2, 19548.2, 19261.9,
        19068.7, 19181.8, 19379.8, 19154.8, 19059.1, 19134.6, 19441.0, 19415.0,
        19531.3, 19956.7, 20157.5, 20340.2, 19628.3, 19052.2, 19311.9,
      ],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 4,
      borderColor: "rgba(47, 97, 68, 1)",
      backgroundColor: "rgba(47, 97, 68, 0.3)",
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
};

const FundManageCard = () => {
  const price = 4407;
  return (
    <div className="flex flex-col bg-white dark:bg-bg_dark p-3 rounded-lg">
      <Typography
        text="Main Balance"
        textColor="text-primary_white-400 dark:text-primary_dark-400"
        size="text"
      />
      <Typography
        text={`${new Intl.NumberFormat("us-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}`}
        textColor="text-primary_white-800 dark:text-primary_dark-800"
        size="h6"
      />
      <Line
        data={data}
        width={100}
        height={20}
        options={options}
        className="my-6"
      />
      <div className="flex justify-around">
        <Button
          component={
            <Typography
              text="Add Funds"
              textColor="text-primary_white-800 dark:text-primary_dark-800 hover:text-primary_white-900 hover:dark:text-primary_dark-900"
              size="textBold"
            />
          }
          className="bg-transparent dark:bg-transparent border-2 border-secondary"
        />
        <Button
          component={
            <Typography
              text="Withdraw"
              textColor="text-primary_white-800 dark:text-primary_dark-800 hover:text-primary_white-900 hover:dark:text-primary_dark-900"
              size="textBold"
            />
          }
          className="bg-transparent dark:bg-transparent border-2 border-secondary"
        />
      </div>
    </div>
  );
};

export default FundManageCard;
