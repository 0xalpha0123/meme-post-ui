import React, { ReactElement } from "react";

interface SocialLinkItemProps {
  icon: ReactElement;
  link: string;
}

const SocialLinkItem = (props: SocialLinkItemProps) => {
  return (
    <a
      target="_blank"
      href={`https://${props.link}`}
      rel="noreferrer"
      className="flex gap-1 items-center cursor-pointer"
    >
      {props.icon}
      <span className="text-xs">{props.link}</span>
    </a>
  );
};

export default SocialLinkItem;
