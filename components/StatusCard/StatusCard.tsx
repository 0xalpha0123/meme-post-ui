import { ChartData, ScatterDataPoint } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import Typography from "../Typography";

interface StatusProps {
  title: string;
  currentValue: string;
  isUp?: boolean;
  graphData?: ChartData<"line", (number | ScatterDataPoint | null)[], unknown>;
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.4,
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

const StatusCard = (props: StatusProps) => {
  return (
    <div className="flex flex-col py-6 px-3 gap-6 rounded-lg animate duration-100 bg-primary_white-100 dark:bg-primary_dark-200">
      <div className="flex items-center gap-1">
        <span className="w-2 h-2 bg-secondary rounded-full"></span>
        <Typography
          text={props.title}
          textColor="text-primary_white-400 dark:text-primary_dark-400"
          size="textBold"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 items-end">
        <Typography
          text={props.currentValue}
          textColor="text-primary_white-800 dark:text-primary_dark-800"
          size="h5"
        />
        {!!props.graphData && (
          <div>
            <Line
              data={props.graphData}
              width={100}
              height={30}
              options={{
                ...options,
                elements: {
                  ...options.elements,
                  line: {
                    ...options.elements.line,
                    borderColor: props.isUp
                      ? "rgba(47, 97, 68, 1)"
                      : "rgba(160, 42, 42, 1)",
                    backgroundColor: props.isUp
                      ? "rgba(47, 97, 68, 0.3)"
                      : "rgba(160, 42, 42, 0.3)",
                  },
                },
              }}
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusCard;
