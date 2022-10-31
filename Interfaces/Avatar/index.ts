import { MouseEventHandler } from "react";

export interface AvatarProps {
  style?: string;
  size?: 64 | 48 | 40 | 36 | 32 | 28 | 24 | 20 | 16;
  type?: string;
  avatar?: string;
  username?: string;
  status?: true | false;
  className?: string;
  onClick?: MouseEventHandler;
}
