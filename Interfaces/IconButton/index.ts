import { MouseEventHandler, ReactElement } from "react";

export interface IconButtonProps {
  component: ReactElement | string;
  size?: "default" | "large" | "small";
  type?: "default" | "dim" | "ghost";
  className?: string;
  disabled?: true | false;
  customClass?: string;
  rounded?: true | false;
  onClick?: MouseEventHandler;
}
