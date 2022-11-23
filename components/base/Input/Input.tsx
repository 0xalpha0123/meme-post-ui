import React, { ChangeEventHandler, ReactElement } from "react";
import cx from "clsx";

interface InputProps {
  label?: string;
  direction?: "col" | "row";
  placeHolder?: string;
  onChange?: ChangeEventHandler;
  className?: string;
  value?: any;
  endLabel?: string | ReactElement;
}

const Input = (props: InputProps) => {
  const direction = props.direction || "col";
  const label = props.label || "";
  const endLabel = props.endLabel || "";
  const placeHolder = props.placeHolder || "";
  const callBack = props.onChange || function () {};
  const className = props.className || "";
  return (
    <div
      className={cx(
        "transition-all duration-100 focus:transition-none flex w-full",
        className,
        direction === "col" && "flex-col"
      )}
    >
      <label className="block ml-1 mb-1 text-sm font-medium transition-all duration-100 text-primary_white-700 dark:text-primary_dark-700">
        {label}
      </label>
      <div className="relative flex">
        <input
          value={props.value}
          className={cx(
            "border transition-all duration-100 focus:transition-none text-sm rounded block w-full p-2.5 bg-primary_white-50 dark:bg-primary_dark-50 border-primary_white-200 dark:border-primary_dark-200 text-primary_white-700 dark:text-primary_dark-700 placeholder-primary_white-200 dark:placeholder-primary_dark-200 focus:border-primary_white-300 dark:focus:border-primary_dark-300 focus:outline-none dark:focus:outline-none",
            props.endLabel && "pr-20"
          )}
          placeholder={placeHolder}
          onChange={callBack}
        />
        <div className="flex absolute inset-y-0 right-0 items-center pr-3 text-sm cursor-pointer">
          {endLabel}
        </div>
      </div>
    </div>
  );
};

export default Input;
