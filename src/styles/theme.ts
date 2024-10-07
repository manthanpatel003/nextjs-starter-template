import { createTheme } from "@mui/material";

export const styledCompTheme = {
  colors: {
    primary: "#ed553b",
    black: "#000",
    white: "#fff",
  },
  fontSizes: {
    small: "14px",
    medium: "16px",
    large: "24px",
    size18: "18px",
    size20: "20px",
    size25: "25px",
    size38: "38px",
    size60: "60px",
    size86: "86px",
  },
  fonts: {
    body: "Helvetica, Arial, sans-serif",
  },
};

export const muiTheme = createTheme({
  typography: {
    fontSize: parseInt(styledCompTheme.fontSizes.medium),
    fontFamily: styledCompTheme.fonts.body,
    h1: {
      fontSize: styledCompTheme.fontSizes.size86,
    },
    h2: {
      fontSize: styledCompTheme.fontSizes.size60,
    },
    h3: {
      fontSize: styledCompTheme.fontSizes.size38,
    },
    h4: {
      fontSize: styledCompTheme.fontSizes.size25,
    },
    h5: {
      fontSize: styledCompTheme.fontSizes.size20,
    },
    h6: {
      fontSize: styledCompTheme.fontSizes.size18,
    },
    body1: {
      fontSize: styledCompTheme.fontSizes.medium,
    },
    body2: {
      fontSize: styledCompTheme.fontSizes.small,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      main: styledCompTheme.colors.primary,
    },
    text: {
      primary: styledCompTheme.colors.black,
      secondary: styledCompTheme.colors.white,
    },
  },
});
