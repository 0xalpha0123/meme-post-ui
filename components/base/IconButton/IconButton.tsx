import React, { ReactElement, MouseEventHandler } from "react";
import cx from "clsx";

interface IconButtonProps {
  component: ReactElement | string;
  size?: "default" | "large" | "small";
  type?: "default" | "dim" | "ghost";
  className?: string;
  disabled?: true | false;
  customClass?: string;
  rounded?: true | false;
  onClick?: MouseEventHandler;
}

const IconButton = (props: IconButtonProps) => {
  const size = props.size || "default";
  const type = props.type || "default";
  const className = props.className || "";
  const disabled = props.disabled || false;
  const customClass = props.customClass || "";
  const rounded = props.rounded || false;
  const callBack = props.onClick || function () {};
  const disabledClass = disabled
    ? `${
        type === "default"
          ? "bg-secondary text-[#B8B1E4]"
          : type === "dim"
          ? "bg-[#9e9e9e40] text-[#99999980]"
          : "bg-white text-[#4D4D4D]"
      } cursor-not-allowed`
    : "";
  const focusClass =
    type === "default"
      ? "focus:outline-none focus:ring-0"
      : "focus:outline-none focus:ring-0";
  const hoverClass =
    type === "default"
      ? "bg-secondary hover:bg-secondary hover:bg-opacity-80"
      : type === "dim"
      ? "bg-gray-700 hover:bg-white hover:text-[#16161E]"
      : "bg-white hover:bg-white hover:text-[#16161E]";
  const padding =
    size === "default" ? "p-2.5" : size === "small" ? "p-2" : "p-3";
  const textColor = type !== "ghost" ? "text-white" : "text-primary_white-900";
  const textSize = size !== "large" ? "text-sm" : "text-base";
  const roundedClass = rounded ? "rounded-full" : "rounded";
  const totalClass = `${roundedClass} ${textColor} ${focusClass} ${className} ${padding} ${textSize} ${
    customClass !== ""
      ? customClass
      : `${disabled ? disabledClass : hoverClass}`
  }`;
  return (
    <button
      type="button"
      className={cx(
        "font-medium text-center transition-all duration-100 focus:transition-none",
        totalClass
      )}
      onClick={callBack}
    >
      {props.component}
    </button>
  );
};

export default IconButton;
