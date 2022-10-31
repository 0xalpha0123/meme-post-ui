export interface UserAvatarProps {
  size?: 64 | 48 | 40 | 36 | 32 | 28 | 24 | 20 | 16;
  username: string;
  subtitle?: string;
  avatar?: string;
  className?: string;
  status?: true | false;
  usernameSize?:
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
  subtitleSize?:
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
