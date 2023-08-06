import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#bbd819",
    },
    secondary: {
      main: "#51514d",
      ligth: "#a0a09b",
    },
    tercary: {
      main: "#bbd819",
    },
    act: {
      main: "yellow",
    },
    notifi: {
      main: "red",
    },
    select: {
      main: "#bbd819",
    },
    logo: {
      main: "#404040",
    },
    background: {
      default: "#eff3f8",
    },
    letra: {
      main: "#404040",
    },
    color: {
      primary: "#bbd819",
      secondary: "#404040",
      inputs: "#fafafa",
    },
  },
  typography: {
    fontFamily: "poppins",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bbd819",
    },
    secondary: {
      main: "#bbd819",
      ligth: "#a0a09b",
    },
    tercary: {
      main: "#bbd819",
    },
    info: {
      main: "#bbd819",
    },
    select: {
      main: "#bbd819",
    },
    act: {
      main: "yellow",
    },
    notifi: {
      main: "red",
    },
    background: {
      default: "#404040",
    },
    letra: {
      main: "#fafafa",
    },
    color: {
      primary: "#404040",
      secondary: "#bbd819",
      inputs: "#404040",
    },
  },
  typography: {
    fontFamily: "poppins",
  },
});
