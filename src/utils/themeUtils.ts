import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
    "2xl": boolean;
    "3xl": boolean;
  }
}

export const palette = {
  primary: {
    light: teal[50],
    main: "#03C9D7",
    dark: teal[900],
    contrastText: "#fff"
  },
  secondary: {
    light: "#ff7961",
    main: "#222222",
    dark: "#ba000d",
    contrastText: "#000"
  },
  success: {
    main: "#00C292"
  },
  info: {
    main: "#0BB2FB"
  },
  error: {
    main: "#E46A76"
  }
};

export const fontFamily = [
  "Apercu",
  "Apercu-Light",
  "Apercu-Medium",
  "Apercu-Bold",
  "DM Sans",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
].join(",");

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
      "3xl": 1700
    }
  },
  palette,
  typography: {
    fontFamily
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
              backgroundColor: "#F8F8F8"
            }
          }
        }
      },
      defaultProps: {
        inputProps: {
          style: {
            fontSize: "12px"
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&.MuiTypography-root": {
            fontFamily
          }
        }
      }
    }
  }
});
