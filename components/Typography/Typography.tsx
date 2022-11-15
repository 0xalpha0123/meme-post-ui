import React, { ReactElement } from "react";

interface TypographyProps {
  className?: string;
  textColor?: string;
  text: string | ReactElement;
  size?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "text"
    | "textBold"
    | "subtitle"
    | "subtitleBold"
    | "button"
    | "miniButton"
    | "description"
    | "miniDescription";
}

const Typography = (props: TypographyProps) => {
  const fontSizes = {
    h1: "font-bold text-40px leading-60px",
    h2: "font-extrabold text-4xl",
    h3: "font-bold text-3xl",
    h4: "font-semibold text-3xl",
    h5: "font-bold text-2xl",
    h6: "font-semibold text-xl leading-18px",
    h7: "font-bold text-lg",
    text: "font-normal text-sm leading-4",
    textBold: "font-semibold text-sm leading-4",
    subtitle: "font-medium text-base leading-5",
    subtitleBold: "font-semibold text-base leading-5",
    button: "font-bold text-base leading-5",
    miniButton: "font-semibold text-sm leading-4",
    description: "font-normal text-xs",
    miniDescription: "font-normal text-9px leading-11px",
  };
  const className = props.className || "";
  const text = props.text;
  const textColor = props.textColor || "text-primary_dark-900";
  const size = props.size || "text";
  return (
    <div
      className={`animate duration-300 ${className} ${textColor} ${fontSizes[size]}`}
    >
      {text}
    </div>
  );
};

export default Typography;
