import React from "react";
import Slider from "react-rangeslider";
import cx from "clsx";

import "react-rangeslider/lib/index.css";

interface InputProps {
  label?: string;
  secondLabel?: string;
  direction?: "col" | "row";
  onChange?: (value: number) => void;
  className?: string;
  value?: any;
  min?: number;
  max?: number;
}

const SliderInput = (props: InputProps) => {
  const direction = props.direction || "col";
  const label = props.label || "";
  const secondLabel = props.secondLabel || "";
  const callBack = props.onChange || function () {};
  const className = props.className || "";
  return (
    <div
      className={cx(
        "flex w-full",
        direction === "col" && "flex-col",
        className
      )}
    >
      <div className="flex justify-between text-sm mb-2 font-medium text-primary_white-700 dark:text-primary_dark-700">
        <label className="block ml-1">{label}</label>
        <label className="block ml-1">{secondLabel}</label>
      </div>
      <div className="custom-slider slider">
        <Slider
          min={props.min || 0}
          max={props.max || 100}
          value={props.value}
          handleLabel={props.value.toString()}
          onChange={callBack}
        />
      </div>
    </div>
  );
};

export default SliderInput;
