import { ReactElement } from "react";

export interface SocialLinksProps {
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
    linked_in: string;
  };
}

export interface SocialLinkItemProps {
  icon: ReactElement;
  link: string;
}
