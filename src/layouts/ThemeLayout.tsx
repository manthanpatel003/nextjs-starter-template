"use client";

import { muiTheme, styledCompTheme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const ThemeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyledThemeProvider theme={styledCompTheme}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </StyledThemeProvider>
  );
};
