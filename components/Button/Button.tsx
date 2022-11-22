import React, { ReactElement, MouseEventHandler } from "react";

interface ButtonProps {
  component: ReactElement | string;
  size?: "default" | "large" | "small";
  type?: "default" | "dim" | "ghost";
  className?: string;
  disabled?: true | false;
  customClass?: string;
  rounded?: true | false;
  onClick?: MouseEventHandler;
}

const Button = (props: ButtonProps) => {
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
  const hoverClass =
    type === "default"
      ? "bg-secondary hover:bg-[#189E43]"
      : type === "dim"
      ? "bg-gray-700 hover:bg-white hover:text-[#16161E]"
      : "bg-white hover:bg-white hover:text-[#16161E]";
  const padding =
    size === "default"
      ? "px-5 py-2.5"
      : size === "small"
      ? "py-2 px-3"
      : "py-3 px-5";
  const textColor = type !== "ghost" ? "text-white" : "text-primary_white-900";
  const textSize =
    size === "large" ? "text-base" : size === "small" ? "text-xs" : "text-base";
  const roundedClass = rounded ? "rounded-full" : "";
  const totalClass = `${padding} ${textSize} ${
    customClass !== ""
      ? customClass
      : `${textColor} ${roundedClass} ${disabled ? disabledClass : hoverClass}`
  } ${className}`;

  return (
    <button
      type="button"
      className={`font-medium text-center rounded-lg transition-all duration-100 focus:transition-none focus:outline-none focus:ring-0 ${totalClass}`}
      onClick={callBack}
    >
      {props.component}
    </button>
  );
};

export default Button;
