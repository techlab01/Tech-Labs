import { footerLinkType, navListsType, socialsType } from "../types";
import { facebook, instagram, linkdin, twitter } from "../utils";

export const navLists: navListsType[] = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/aboutUs" },
  { name: "Services", link: "/services" },
  { name: "PM shri", link: "/pmShri" },
  { name: "ATL", link: "/atl" },
];

export const footerLinks: footerLinkType[] = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/aboutUs" },
  { name: "Service", link: "/services" },
  { name: "Contact Us", link: "/contactUs" },
];

export const socials: socialsType[] = [
  { icon: twitter, link: "" },
  { icon: instagram, link: "" },
  { icon: facebook, link: "" },
  { icon: linkdin, link: "" },
];
