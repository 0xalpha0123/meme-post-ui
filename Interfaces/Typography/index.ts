import { ReactElement } from "react";

export interface TypographyProps {
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
