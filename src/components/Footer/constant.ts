import { FooterSocialLinks, NavRoutes } from "@/utils/types";

export const socialIconsWithLinks: FooterSocialLinks[] = [
  {
    Icon: "/svg/facebook.svg",
    link: "https://www.facebook.com",
    alt: "Facebook",
  },
  {
    Icon: "/svg/twitter.svg",
    link: "https://twitter.com",
    alt: "Twitter",
  },
  {
    Icon: "/svg/youtube.svg",
    link: "https://www.youtube.com",
    alt: "Youtube",
  },
];

export const navRoutes: NavRoutes[] = [
  { title: "Home", route: "/", action: "navigation" },
  { title: "About Us", route: "/about", action: "navigation" },
  { title: "Books", route: "/book", action: "navigation" },
  { title: "Contact Us", route: "/contact", action: "navigation" },
];

export const importantLinks: NavRoutes[] = [
  { title: "Privacy Policy", route: "/privacy-policy", action: "navigation" },
  { title: "FAQs", route: "/faqs", action: "navigation" },
  { title: "Terms of Service", route: "/terms", action: "navigation" },
];
