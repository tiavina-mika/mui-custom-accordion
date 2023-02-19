import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { theme } from "./utils/themeUtils";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
