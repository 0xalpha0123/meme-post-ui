import React from "react";

import { InputProps } from "../../Interfaces/Input";

const Input = (props: InputProps) => {
  const direction = props.direction || "col";
  const label = props.label || "";
  const placeHolder = props.placeHolder || "";
  const callBack = props.onChange || function () {};
  const className = props.className || "";
  return (
    <div
      className={`${className} flex w-full mb-8 ${
        direction === "col" && "flex-col"
      }`}
    >
      <label className="block mb-2 text-sm font-medium text-primary_white-1000 dark:text-primary_dark-1000">
        {label}
      </label>
      <input
        type="text"
        className="border text-sm rounded-lg block w-full p-2.5 bg-white border-bg_white_secondary text-primary_white-1000 placeholder-primary_white-300 focus:border-primary_white-300 focus:outline-none dark:bg-bg_dark dark:border-bg_dark_secondary dark:text-primary_dark-1000 dark:placeholder-primary_dark-300 dark:focus:border-primary_dark-300 dark:focus:outline-none"
        placeholder={placeHolder}
        onChange={callBack}
      />
    </div>
  );
};

export default Input;
