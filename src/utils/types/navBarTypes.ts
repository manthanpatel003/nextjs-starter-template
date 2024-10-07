type NavAction = "navigation" | "menu";

export type NavRoutes = {
  title: string;
  route?: string;
  action: NavAction;
};

export type NavStyledLink = {
  pathname: string | null | undefined;
  route: string | null | undefined;
};
