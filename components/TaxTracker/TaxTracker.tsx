import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Slider from "../Slider";
import StatusCard from "../StatusCard";
import Typography from "../Typography";

const statuses = [
  {
    title: "Current Index",
    currentValue: "12",
    isUp: false,
    graphData: {
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
      ],
      datasets: [
        {
          data: [
            20488.5, 20626.3, 20809.8, 20594.4, 20292.9, 20769.5, 20082.7,
            19331.5, 19571.2, 19204.8, 19162.6, 19042.9, 19123.9, 19328.2,
          ],
        },
      ],
    },
  },
  {
    title: "Epoch Number",
    currentValue: "8",
    isUp: true,
    graphData: {
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
      ],
      datasets: [
        {
          data: [
            19331.5, 19571.2, 19204.8, 19162.6, 19042.9, 19123.9, 19328.2,
            20488.5, 20626.3, 20809.8, 20594.4, 20292.9, 20769.5, 20082.7,
          ],
        },
      ],
    },
  },
  {
    title: "Your Meme Balance",
    currentValue: "$4,407.00",
    isUp: true,
    graphData: {
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
      ],
      datasets: [
        {
          data: [
            20488.5, 20626.3, 20809.8, 20594.4, 20292.9, 20769.5, 20082.7,
            19331.5, 19571.2, 19204.8, 19162.6, 19042.9, 19123.9, 19328.2,
          ],
        },
      ],
    },
  },
];

const TaxTracker = () => {
  const [currentEpoch, setCurrentEpoch] = useState(0);

  const handleEpochChange = (value: number) => {
    setCurrentEpoch(value);
  };

  return (
    <div className="flex flex-col w-full rounded-lg py-6 px-12 gap-12 bg-white dark:bg-bg_dark">
      <Typography
        text="Estimate Your Tax"
        textColor="text-primary_white-400 dark:text-primary_dark-400"
        size="description"
      />
      <Typography
        text="Tax Tracker"
        textColor="text-primary_white-800 dark:text-primary_dark-800"
        className="-mt-8"
        size="h6"
      />
      <div className="w-full grid grid-cols-3 gap-6">
        {statuses.map((status, index) => (
          <StatusCard key={index} {...status} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Input
          label="MEME AMOUNT"
          placeHolder="Input your Meme amount"
          endLabel="MAX"
        />
        <Input
          label="FUTURE INDEX"
          placeHolder="Input future index"
          endLabel="CURRENT"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Slider
          label="69 Days"
          secondLabel="1440 Epoch"
          min={0}
          max={100}
          value={currentEpoch}
          onChange={handleEpochChange}
        />
        <Button component={<Typography text="Calculate Tax" size="h7" />} />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex justify-between items-center">
          <Typography
            text="Exit Tax:"
            textColor="text-primary_white-400 dark:text-primary_dark-400"
            size="subtitleBold"
          />
          <Typography
            text="102.2 Meme"
            textColor="text-primary_white-800 dark:text-primary_dark-800"
            size="h6"
          />
        </div>
        <div className="flex justify-between items-center">
          <Typography
            text="Distribution Amount:"
            textColor="text-primary_white-400 dark:text-primary_dark-400"
            size="subtitleBold"
          />
          <Typography
            text="15.23 Meme"
            textColor="text-primary_white-800 dark:text-primary_dark-800"
            size="h6"
          />
        </div>
      </div>
    </div>
  );
};

export default TaxTracker;
