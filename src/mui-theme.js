// src/theme.ts
"use client";
import { Saira } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const saira = Saira({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#3FA3FA",
      contrastText: "#fff",
    },
    secondary: { main: "#5808FB" },
    white: { main: "#fff" },
  },
  typography: {
    fontFamily: saira.style.fontFamily,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthMd: {
          maxWidth: "1015px",
          "@media (min-width:900px)": {
            maxWidth: "1015px",
          },
        },
      },
    },
  },
});

export default MuiTheme;
