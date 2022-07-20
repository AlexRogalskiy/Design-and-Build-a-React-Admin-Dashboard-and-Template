import { createTheme } from "@mui/material/styles";
import typography from "./typography";

export const THEMES = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

const baseTheme = createTheme({
  typography,
});

const themeOptions = [
  {
    name: THEMES.LIGHT,
    palette: {
      type: "light",
      background: {
        default: "#E8EAF6",
        dark: "#C5CAE9",
        paper: "#fff",
      },
      primary: {
        main: "#3949ab",
        dark: "#3949ab",
      },
      secondary: {
        main: "#5850EC",
        dark: "#5850EC",
      },
      text: {
        primary: "#263238",
        secondary: "#546e7a",
      },
    },
  },
  {
    name: THEMES.DARK,
    palette: {
      type: "dark",
      background: {
        default: "#616161",
        dark: "#424242",
        paper: "#757575",
      },
      primary: {
        main: "#7986CB",
        dark: "#7986CB",
      },
      secondary: {
        main: "#B388FF",
        dark: "#B388FF",
      },
      text: {
        primary: "#e6e5e8",
        secondary: "#BDBDBD",
      },
    },
  },
];

export const createExtendedTheme = (config = {}) => {
  let selectedOption = themeOptions.find(
    (theme) => theme.name === config.theme
  );

  if (!selectedOption) {
    console.warn(
      new Error(`The provided theme name ${config.theme} is not valid`)
    );
    selectedOption = themeOptions[0];
  }

  let theme = createTheme(baseTheme, selectedOption);

  return theme;
};
