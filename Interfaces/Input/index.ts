import { ChangeEventHandler } from "react";

export interface InputProps {
  label?: string;
  direction?: "col" | "row";
  placeHolder?: string;
  onChange?: ChangeEventHandler;
  className?: string;
}
