import React from "react";

import { SocialLinkItemProps } from "../../Interfaces/SocialLinks";

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
