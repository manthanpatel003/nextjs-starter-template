import { NavRoutes } from "@/utils/types";

export const navRoutes: NavRoutes[] = [
  { title: "Home", route: "/", action: "navigation" },
  {
    title: "JSBN Search A Book",
    route: "/search-a-book",
    action: "navigation",
  },
  { title: "Register JSBN", action: "menu" },
  {
    title: "JSBN Publisher Login",
    route: "/publisher-login",
    action: "navigation",
  },
  { title: "Form", route: "/form", action: "navigation" },
  { title: "FAQ", route: "/faq", action: "navigation" },
];
