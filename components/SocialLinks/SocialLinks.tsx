import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../Icons";
import SocialLinkItem from "./SocialLinkItem";

import { SocialLinksProps } from "../../Interfaces/SocialLinks";

const SocialLinks = (props: SocialLinksProps) => {
  return (
    <div className="w-full">
      <label className="block mb-2 text-sm font-medium text-primary_white-1000 dark:text-primary_dark-1000">
        Social Network
      </label>
      <div className="flex justify-between text-primary_white-300 dark:text-primary_dark-300">
        <SocialLinkItem
          icon={<FacebookIcon className="w-6 h-6" />}
          link={props.socials.facebook}
        />
        <SocialLinkItem
          icon={<InstagramIcon className="w-6 h-6" />}
          link={props.socials.instagram}
        />
        <SocialLinkItem
          icon={<TwitterIcon className="w-6 h-6" />}
          link={props.socials.twitter}
        />
        <SocialLinkItem
          icon={<LinkedInIcon className="w-6 h-6" />}
          link={props.socials.linked_in}
        />
      </div>
    </div>
  );
};

export default SocialLinks;
